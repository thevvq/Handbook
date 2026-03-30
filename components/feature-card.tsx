'use client'

import Link from 'next/link'
import { LucideIcon, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
  delay?: number
}

export function FeatureCard({ title, description, icon: Icon, href, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    >
      <Link
        href={href}
        className={cn(
          'group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-2 h-full',
          className
        )}
      >
        {/* Icon */}
        <motion.div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {/* Arrow */}
        <motion.div
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span>Tìm hiểu thêm</span>
          <motion.div whileHover={{ x: 2, y: -2 }}>
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
