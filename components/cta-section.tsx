import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
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
              className="mt-8 h-12 gap-2 rounded-xl bg-background px-6 text-base text-foreground shadow-sm hover:bg-background/90"
            >
              <Link href="/handbook">
                Đọc cẩm nang ngay
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
