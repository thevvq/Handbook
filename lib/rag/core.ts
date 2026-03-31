import { promises as fs } from 'node:fs'
import path from 'node:path'

export type RagChunk = {
  id: string
  sourceId: string
  sourceTitle: string
  content: string
  embedding: number[]
}

const DATA_DIR = path.join(process.cwd(), 'data')
const INDEX_PATH = path.join(DATA_DIR, 'rag-index.json')
const KB_PATH = path.join(DATA_DIR, 'finance-knowledge.json')

const EMBEDDING_DIMENSION = 256

type KnowledgeItem = {
  id: string
  title: string
  content: string
}

type RagIndexMeta = {
  provider: 'openai' | 'gemini' | 'local-hash'
  dimension?: number
  builtAt: string
  knowledgePath: string
}

type RagIndexFile =
  | RagChunk[]
  | {
    meta: RagIndexMeta
    chunks: RagChunk[]
  }

function normalizeText(text: string) {
  return text.toLowerCase().replace(/\s+/g, ' ').trim()
}

function chunkText(text: string, chunkSize = 350, overlap = 70): string[] {
  const clean = normalizeText(text)
  if (clean.length <= chunkSize) return [clean]

  const chunks: string[] = []
  let start = 0

  while (start < clean.length) {
    const end = Math.min(start + chunkSize, clean.length)
    chunks.push(clean.slice(start, end))
    if (end === clean.length) break
    start = Math.max(0, end - overlap)
  }

  return chunks
}

function tokenHashEmbedding(text: string): number[] {
  const vec = new Array<number>(EMBEDDING_DIMENSION).fill(0)
  const words = text.split(/[^a-zA-Z0-9]+/g).filter(Boolean)

  for (const word of words) {
    let hash = 2166136261
    for (let i = 0; i < word.length; i += 1) {
      hash ^= word.charCodeAt(i)
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)
    }

    const idx = Math.abs(hash) % EMBEDDING_DIMENSION
    vec[idx] += 1
  }

  const magnitude = Math.sqrt(vec.reduce((sum, value) => sum + value * value, 0))
  if (magnitude === 0) return vec
  return vec.map((value) => value / magnitude)
}

function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0
  for (let i = 0; i < Math.min(a.length, b.length); i += 1) {
    dot += a[i] * b[i]
  }
  return dot
}

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true })
}

async function loadKnowledgeItems() {
  const raw = await fs.readFile(KB_PATH, 'utf8')
  const parsed = JSON.parse(raw) as KnowledgeItem[]
  return parsed.filter((item) => item.id && item.title && item.content)
}

async function embedWithOpenAI(text: string, apiKey: string) {
  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_EMBEDDING_MODEL ?? 'text-embedding-3-small',
      input: text,
    }),
  })

  if (!response.ok) {
    throw new Error(`Embedding request failed: ${await response.text()}`)
  }

  const json = (await response.json()) as {
    data?: Array<{ embedding?: number[] }>
  }
  const embedding = json.data?.[0]?.embedding
  if (!embedding) throw new Error('Missing embedding data from OpenAI response.')
  return embedding
}

async function embedWithGemini(text: string, apiKey: string) {
  const model = process.env.GEMINI_EMBEDDING_MODEL ?? 'text-embedding-004'
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:embedContent?key=${apiKey}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: {
        parts: [{ text }],
      },
    }),
  })

  if (!response.ok) {
    throw new Error(`Gemini embedding request failed: ${await response.text()}`)
  }

  const json = (await response.json()) as {
    embedding?: { values?: number[] }
  }
  const embedding = json.embedding?.values
  if (!embedding) throw new Error('Missing embedding values from Gemini response.')
  return embedding
}

function chooseEmbeddingProvider() {
  if (process.env.OPENAI_API_KEY) return 'openai' as const
  if (process.env.GEMINI_API_KEY) return 'gemini' as const
  return 'local-hash' as const
}

async function embedText(text: string, provider: RagIndexMeta['provider']) {
  if (provider === 'openai') return embedWithOpenAI(text, process.env.OPENAI_API_KEY as string)
  if (provider === 'gemini') return embedWithGemini(text, process.env.GEMINI_API_KEY as string)
  return tokenHashEmbedding(text)
}

export async function buildRagIndex() {
  await ensureDataDir()
  const knowledgeItems = await loadKnowledgeItems()
  const provider = chooseEmbeddingProvider()

  const allChunks: RagChunk[] = []
  for (const doc of knowledgeItems) {
    const chunks = chunkText(doc.content)
    for (const [index, content] of chunks.entries()) {
      const embedding = await embedText(content, provider)
      allChunks.push({
        id: `${doc.id}-${index}`,
        sourceId: doc.id,
        sourceTitle: doc.title,
        content,
        embedding,
      })
    }
  }

  const meta: RagIndexMeta = {
    provider,
    dimension: allChunks[0]?.embedding?.length,
    builtAt: new Date().toISOString(),
    knowledgePath: KB_PATH,
  }

  const payload: RagIndexFile = { meta, chunks: allChunks }
  await fs.writeFile(INDEX_PATH, JSON.stringify(payload, null, 2), 'utf8')
  return {
    path: INDEX_PATH,
    chunkCount: allChunks.length,
    provider,
  }
}

export async function loadRagIndex(): Promise<{ meta: RagIndexMeta; chunks: RagChunk[] }> {
  try {
    const raw = await fs.readFile(INDEX_PATH, 'utf8')
    const parsed = JSON.parse(raw) as RagIndexFile
    if (Array.isArray(parsed)) {
      return {
        meta: {
          provider: 'local-hash',
          dimension: parsed[0]?.embedding?.length,
          builtAt: new Date(0).toISOString(),
          knowledgePath: KB_PATH,
        },
        chunks: parsed,
      }
    }
    return parsed
  } catch {
    const { chunkCount } = await buildRagIndex()
    const raw = await fs.readFile(INDEX_PATH, 'utf8')
    const parsed = JSON.parse(raw) as RagIndexFile
    const chunks = Array.isArray(parsed) ? parsed : parsed.chunks
    if (!chunks.length) {
      throw new Error(`Cannot load RAG index after build. chunkCount=${chunkCount}`)
    }
    if (Array.isArray(parsed)) {
      return {
        meta: {
          provider: 'local-hash',
          dimension: chunks[0]?.embedding?.length,
          builtAt: new Date(0).toISOString(),
          knowledgePath: KB_PATH,
        },
        chunks,
      }
    }
    return parsed
  }
}

export async function retrieveTopChunks(query: string, topK = 4) {
  const { meta, chunks } = await loadRagIndex()
  const queryEmbedding = await embedText(normalizeText(query), meta.provider)

  return chunks
    .map((chunk) => ({
      ...chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
}
