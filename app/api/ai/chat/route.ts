import { NextResponse } from 'next/server'
import { retrieveTopChunks } from '@/lib/rag/core'

type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

function composeContext(chunks: Array<{ sourceTitle: string; content: string }>) {
  return chunks
    .map((chunk, idx) => `[${idx + 1}] ${chunk.sourceTitle}: ${chunk.content}`)
    .join('\n')
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] }
    const messages = body.messages ?? []
    const userMessage = [...messages].reverse().find((msg) => msg.role === 'user')?.content?.trim()

    if (!userMessage) {
      return NextResponse.json({ success: false, message: 'Missing user message.' }, { status: 400 })
    }

    const topChunks = await retrieveTopChunks(userMessage, 4)
    const context = composeContext(topChunks)

    const geminiKey = process.env.GEMINI_API_KEY

    if (!geminiKey) {
      return NextResponse.json(
        { success: false, message: 'Missing Gemini API key.' },
        { status: 500 }
      )
    }

    const systemPrompt =
      'Bạn là trợ lý tài chính cho sinh viên Việt Nam. Luôn trả lời bằng tiếng Việt, ngắn gọn, dễ hiểu, ưu tiên hướng dẫn thực hành. Chỉ sử dụng thông tin trong context.'

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-1.5-flash'}:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${systemPrompt}
    
    Context:
    ${context}
    
    Câu hỏi:
    ${userMessage}`,
                },
              ],
            },
          ],
        }),
      }
    )

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text()
      console.log('Gemini error:', errorText)
      return NextResponse.json(
        {
          success: false,
          message: 'Gemini request failed. Vui lòng thử lại sau vài giây.',
          error: errorText,
        },
        { status: 500 }
      )
    }

    const data = await geminiResponse.json()

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Xin lỗi, mình chưa tạo được câu trả lời.'

    return NextResponse.json({
      success: true,
      answer,
      sources: topChunks.map((item) => ({
        id: item.sourceId,
        title: item.sourceTitle,
        score: Number(item.score.toFixed(4)),
      })),
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error.', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
