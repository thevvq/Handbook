'use client'

import { Wallet, PiggyBank, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { FeatureCard } from './feature-card'

export function FeaturesSection() {
  const features = [
    {
      title: 'Quản lý Chi tiêu',
      description:
        'Học cách ghi chép, phân loại và kiểm soát các khoản chi tiêu hàng ngày. Áp dụng quy tắc 50/30/20 để phân bổ ngân sách hiệu quả.',
      icon: Wallet,
      href: '/handbook#quan-ly-chi-tieu',
    },
    {
      title: 'Kĩ năng Tiết kiệm',
      description:
        'Xây dựng thói quen tiết kiệm từ sớm với nguyên tắc "trả cho bản thân trước". Tạo quỹ dự phòng và đạt được mục tiêu tài chính.',
      icon: PiggyBank,
      href: '/handbook#tiet-kiem',
    },
    {
      title: 'Quản lý Bảo hiểm',
      description:
        'Hiểu về các loại bảo hiểm cần thiết như BHYT và bảo hiểm tai nạn. Bảo vệ tài chính trước những rủi ro bất ngờ.',
      icon: Shield,
      href: '/handbook#bao-hiem',
    },
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' as const },
    },
  }

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="relative border-t border-border/50 bg-muted/30 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-6 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.52, 0.3] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/5 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"
          animate={{ y: [0, 18, 0], opacity: [0.28, 0.5, 0.28] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariants}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary !text-center">
            Nội dung chính
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ba kĩ năng tài chính thiết yếu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mỗi sinh viên cần nắm vững để làm chủ tài chính cá nhân và chuẩn bị cho tương lai.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={gridVariants}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
