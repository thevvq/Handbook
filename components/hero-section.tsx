'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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

            <h1 className="text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              Làm chủ{' '}
              <span className="text-gradient">tài chính</span>{' '}
              ngay từ hôm nay
            </h1>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
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
                <p className="text-2xl font-bold text-foreground">50/30/20</p>
                <p className="mt-1 text-sm text-muted-foreground">Quy tắc ngân sách</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">5 bước</p>
                <p className="mt-1 text-sm text-muted-foreground">Quản lý chi tiêu</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">7 ngày</p>
                <p className="mt-1 text-sm text-muted-foreground">Nhật ký thực hành</p>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <motion.div 
            className="relative lg:justify-self-end flex justify-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Decorative background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-2xl" />
              
              {/* Image */}
              <div className="relative">
                <Image
                  src="/home.png"
                  alt="Làm chủ tài chính"
                  width={700}
                  height={700}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
