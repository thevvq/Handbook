'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { MessageCirclePlus, Send, Sparkles, Trash2, X } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type PersistedChatState = {
  v: 1
  messages: ChatMessage[]
}

const starterMessage: ChatMessage = {
  role: 'assistant',
  content: 'Xin chào! Tôi là trợ lý tài chính cá nhân. Hãy hỏi tôi bất cứ điều gì về việc quản lý tiền bạc khi còn là sinh viên nhé!',
}

const STORAGE_KEY = 'finance_chat_history_v1'

export function FinanceChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage])
  const endRef = useRef<HTMLDivElement | null>(null)

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as PersistedChatState
      if (parsed?.v !== 1) return
      if (!Array.isArray(parsed.messages) || parsed.messages.length === 0) return
      setMessages(parsed.messages)
    } catch {
      // ignore corrupted storage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try {
      const payload: PersistedChatState = { v: 1, messages }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch {
      // ignore quota
    }
  }, [messages])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, isOpen])

  async function handleSend(e: FormEvent) {
    e.preventDefault()
    if (!canSend) return

    const userMessage: ChatMessage = { role: 'user', content: input.trim() }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const json = (await response.json()) as {
        success: boolean
        answer?: string
        message?: string
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: json.answer ?? json.message ?? 'Xin lỗi, tôi không thể trả lời câu hỏi này ngay bây giờ.',
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Kết nối thất bại. Vui lòng thử lại sau vài giây.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function resetChat() {
    setMessages([starterMessage])
    setInput('')
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:bg-emerald-600"
        aria-label="Open finance chat"
      >
        <MessageCirclePlus className="h-5 w-5" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(90vw,400px)] rounded-2xl border border-emerald-200 bg-white shadow-2xl">
      <div className="flex items-center justify-between rounded-t-2xl bg-emerald-500 px-3 py-2.5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">Trợ lý tài chính AI</p>
            <p className="text-xs text-emerald-50">Đồng hành cùng sinh viên quản lý tiền</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={resetChat} className="rounded p-1.5 hover:bg-white/10" aria-label="Reset chat">
            <Trash2 className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setIsOpen(false)} className="rounded p-1.5 hover:bg-white/10" aria-label="Close chat">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="h-[360px] overflow-y-auto bg-gray-50 p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={`${msg.role}-${index}`} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-base leading-relaxed ${msg.role === 'assistant'
                    ? 'bg-emerald-100/60 text-slate-900'
                    : 'bg-emerald-500 text-white'
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading ? <p className="text-sm text-muted-foreground">Đang suy nghĩ...</p> : null}
          <div ref={endRef} />
        </div>
      </div>

      <form onSubmit={handleSend} className="border-t border-emerald-100 bg-white p-4">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi về chi tiêu, tiết kiệm..."
            className="h-11 flex-1 rounded-xl border border-emerald-200 px-3 text-sm outline-none ring-emerald-300 transition focus:ring-2"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400 text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  )
}
