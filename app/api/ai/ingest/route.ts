import { NextResponse } from 'next/server'
import { buildRagIndex } from '@/lib/rag/core'

export async function POST() {
  try {
    const result = await buildRagIndex()
    return NextResponse.json({
      success: true,
      message: 'RAG index created successfully.',
      ...result,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to build RAG index.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
