'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon, Lightbulb, AlertTriangle, Info, MessageSquare } from 'lucide-react'

type CalloutVariant = 'default' | 'tip' | 'warning' | 'message'

interface CalloutBoxProps {
  children: React.ReactNode
  variant?: CalloutVariant
  title?: string
  icon?: LucideIcon
  className?: string
  delay?: number
}

const variantStyles: Record<CalloutVariant, { bg: string; border: string; icon: LucideIcon; iconColor: string }> = {
  default: {
    bg: 'bg-muted/50',
    border: 'border-border/60',
    icon: Info,
    iconColor: 'text-primary',
  },
  tip: {
    bg: 'bg-primary/5',
    border: 'border-primary/15',
    icon: Lightbulb,
    iconColor: 'text-primary',
  },
  warning: {
    bg: 'bg-amber-50/80',
    border: 'border-amber-200/60',
    icon: AlertTriangle,
    iconColor: 'text-amber-600',
  },
  message: {
    bg: 'bg-muted/50',
    border: 'border-border/60',
    icon: MessageSquare,
    iconColor: 'text-primary',
  },
}

export function CalloutBox({
  children,
  variant = 'default',
  title,
  icon: CustomIcon,
  className,
  delay = 0,
}: CalloutBoxProps) {
  const styles = variantStyles[variant]
  const Icon = CustomIcon || styles.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ translateY: -2 }}
      className={cn(
        'rounded-xl border p-5 transition-all duration-300',
        styles.bg,
        styles.border,
        className
      )}
    >
      <div className="flex gap-3.5">
        <motion.div
          className={cn('mt-0.5 flex-shrink-0', styles.iconColor)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="h-[18px] w-[18px]" />
        </motion.div>
        <div className="space-y-1.5 min-w-0">
          {title && (
            <p className="text-sm font-semibold text-foreground">{title}</p>
          )}
          <div className="text-sm leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
