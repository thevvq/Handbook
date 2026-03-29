import Link from 'next/link'
import { ArrowRight, TrendingUp, PiggyBank, Shield, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-24 pt-16 lg:pb-32 lg:pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,oklch(0.92_0.005_265)_50%,transparent_51%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49%,oklch(0.92_0.005_265)_50%,transparent_51%,transparent_100%)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Dành cho sinh viên Việt Nam
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Làm chủ{' '}
              <span className="text-gradient">tài chính</span>{' '}
              ngay từ hôm nay
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {"Cẩm nang hướng dẫn kỹ năng quản lý tài chính cá nhân giúp sinh viên từng bước hình thành tư duy tài chính đúng đắn và chủ động trong cuộc sống."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 gap-2 rounded-xl px-6 text-base shadow-sm">
                <Link href="/handbook">
                  Bắt đầu ngay
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-xl px-6 text-base">
                <Link href="/handbook#bai-tap">
                  Xem bài tập thực hành
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-foreground">50/30/20</p>
                <p className="mt-1 text-sm text-muted-foreground">Quy tắc ngân sách</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">5 bước</p>
                <p className="mt-1 text-sm text-muted-foreground">Quản lý chi tiêu</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">7 ngày</p>
                <p className="mt-1 text-sm text-muted-foreground">Nhật ký thực hành</p>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-md">
              {/* Decorative background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-2xl" />
              
              {/* Main card */}
              <div className="relative space-y-4">
                {/* Visual elements */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <PiggyBank className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Tiết kiệm</p>
                    <p className="text-2xl font-bold text-foreground">20%</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Bảo hiểm</p>
                    <p className="text-2xl font-bold text-foreground">BHYT</p>
                  </div>
                </div>

                {/* Progress bar visualization */}
                <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">Phân bổ ngân sách</p>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-medium text-muted-foreground">Thiết yếu</span>
                        <span className="font-semibold text-foreground">50%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-1/2 rounded-full bg-primary transition-all" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-medium text-muted-foreground">Cá nhân</span>
                        <span className="font-semibold text-foreground">30%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[30%] rounded-full bg-primary/70 transition-all" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-medium text-muted-foreground">Tiết kiệm</span>
                        <span className="font-semibold text-foreground">20%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-1/5 rounded-full bg-primary/50 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
