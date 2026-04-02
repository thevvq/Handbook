import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="absolute inset-0">
            <img
              src="/hero-bg.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/60 !text-center">
              Hành động ngay
            </p>

            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Bắt đầu hành trình làm chủ tài chính
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/70">
              Đừng đợi đến khi gặp khó khăn mới nghĩ đến việc quản lý tiền.
              Hãy bắt đầu từ những bước nhỏ nhất ngay hôm nay.
            </p>

            <Button
              asChild
              size="lg"
              className="btn-wow group mt-8 h-12 gap-2 rounded-xl bg-white px-6 text-base text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-emerald-50 hover:shadow-[0_18px_34px_rgba(148,163,184,0.3)] active:translate-y-0 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-background/60"
            >
              <Link href="/handbook">
                Đọc cẩm nang ngay
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
