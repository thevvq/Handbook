'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface BlockquoteProps {
  children: React.ReactNode
  author?: string
  className?: string
  delay?: number
}

export function Blockquote({ children, author, className, delay = 0 }: BlockquoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.01, translateX: 5 }}
      className={cn(
        'relative border-l-2 border-primary/40 bg-muted/30 py-4 pl-5 pr-4',
        'rounded-r-lg transition-all duration-300',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.1, duration: 0.4 }}
      >
        <Quote className="absolute -left-2.5 -top-1.5 h-5 w-5 rounded bg-background text-primary/40" />
        <div className="text-[15px] italic leading-relaxed text-muted-foreground">
          {children}
        </div>
      </motion.div>
      {author && (
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.15, duration: 0.4 }}
          className="mt-3 text-sm font-medium text-foreground"
        >
          — {author}
        </motion.footer>
      )}
    </motion.blockquote>
  )
}
