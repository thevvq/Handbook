'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FadeInView, SlideInView } from '@/components/animations'

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-16 sm:px-12 sm:py-20 lg:px-16"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            
            <div className="relative mx-auto max-w-2xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-foreground/60"
              >
                Hành động ngay
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold text-primary-foreground sm:text-4xl"
              >
                Bắt đầu hành trình làm chủ tài chính
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/70"
              >
                Đừng đợi đến khi gặp khó khăn mới nghĩ đến việc quản lý tiền. 
                Hãy bắt đầu từ những bước nhỏ nhất ngay hôm nay.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 gap-2 rounded-xl bg-background px-6 text-base text-foreground shadow-sm transition-all duration-300 hover:bg-background/90 hover:shadow-lg hover:-translate-y-1"
                >
                  <Link href="/handbook">
                    Đọc cẩm nang ngay
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
}
