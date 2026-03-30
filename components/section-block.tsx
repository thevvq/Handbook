'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionBlockProps {
  id: string
  title: string
  level?: 1 | 2 | 3
  children: React.ReactNode
  className?: string
  delay?: number
}

export function SectionBlock({
  id,
  title,
  level = 1,
  children,
  className,
  delay = 0,
}: SectionBlockProps) {
  const HeadingTag = level === 1 ? 'h2' : level === 2 ? 'h3' : 'h4'
  
  const headingStyles = {
    1: 'text-2xl sm:text-3xl font-bold mb-6 text-foreground',
    2: 'text-xl sm:text-2xl font-semibold mb-5 text-foreground',
    3: 'text-lg sm:text-xl font-semibold mb-4 text-foreground',
  }

  return (
    <motion.section
      id={id}
      data-toc-heading
      className={cn('scroll-mt-28', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: delay + 0.1, duration: 0.5 }}
      >
        <HeadingTag className={headingStyles[level]}>{title}</HeadingTag>
      </motion.div>
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
