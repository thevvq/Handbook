'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Bot, MessageCirclePlus, Send, Sparkles, Trash2, UserRound, X } from 'lucide-react'

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
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-[0_16px_34px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        aria-label="Open finance chat"
      >
        <MessageCirclePlus className="h-6 w-6" />
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-300" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(92vw,420px)] overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_24px_64px_rgba(15,23,42,0.24)] backdrop-blur-xl">
      <div className="relative flex items-center justify-between bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-3 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_15%,#fff_0,transparent_36%)]" />
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-base font-semibold leading-tight">Finance Buddy AI</p>
            <p className="text-xs text-emerald-50/95">Always online for student finance</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-1.5">
          <button
            type="button"
            onClick={resetChat}
            className="rounded-xl p-1.5 transition-colors hover:bg-white/15"
            aria-label="Reset chat"
          >
            <Trash2 className="h-4.5 w-4.5" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-xl p-1.5 transition-colors hover:bg-white/15"
            aria-label="Close chat"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      <div className="h-[400px] overflow-y-auto bg-gradient-to-b from-slate-50 to-white p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={`${msg.role}-${index}`} className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
              <div className={`flex max-w-[88%] items-end gap-2 ${msg.role === 'assistant' ? '' : 'flex-row-reverse'}`}>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    msg.role === 'assistant' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {msg.role === 'assistant' ? <Bot className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
                </div>
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'assistant'
                      ? 'rounded-bl-md border border-emerald-100/80 bg-white text-slate-800'
                      : 'rounded-br-md bg-gradient-to-br from-emerald-500 to-teal-500 text-white'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="flex items-center gap-1 rounded-full border border-emerald-100 bg-white px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:120ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:240ms]" />
              </div>
              Dang suy nghi...
            </div>
          ) : null}
          <div ref={endRef} />
        </div>
      </div>

      <form onSubmit={handleSend} className="border-t border-slate-100 bg-white/90 p-3">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm focus-within:border-emerald-300">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi về chi tiêu, tiết kiệm..."
            className="h-10 flex-1 rounded-xl px-3 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Send message"
          >
            <Send className="h-4.5 w-4.5" />
          </button>
        </div>
      </form>
    </div>
  )
}
