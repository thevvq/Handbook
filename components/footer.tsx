'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeInView } from '@/components/animations'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          className="grid gap-10 lg:grid-cols-4 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link href="/" className="inline-flex items-center gap-2.5 transition-transform hover:scale-105">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </motion.div>
              <span className="text-base font-semibold tracking-tight text-foreground">
                FinStudent
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Nền tảng hướng dẫn kỹ năng quản lý tài chính cá nhân dành cho sinh viên Việt Nam. 
              Xây dựng thói quen tài chính lành mạnh từ hôm nay.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground">Điều hướng</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/handbook" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  Cẩm nang
                </Link>
              </li>
              <li>
                <Link href="/handbook#chuong-1" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  Quản lý chi tiêu
                </Link>
              </li>
              <li>
                <Link href="/handbook#chuong-2" className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block">
                  Yếu tố ảnh hưởng
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Topics */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground">Nội dung</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="transition-transform duration-300 hover:translate-x-1">Kỹ năng quản lý chi tiêu</li>
              <li className="transition-transform duration-300 hover:translate-x-1">Kỹ năng tiết kiệm</li>
              <li className="transition-transform duration-300 hover:translate-x-1">Quản lý bảo hiểm</li>
              <li className="transition-transform duration-300 hover:translate-x-1">Bài tập thực hành</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinStudent. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-sm text-muted-foreground">
            Được tạo bởi Nhóm tác giả
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
