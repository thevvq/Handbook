import { cn } from '@/lib/utils'
import { LucideIcon, Lightbulb, AlertTriangle, Info, MessageSquare } from 'lucide-react'

type CalloutVariant = 'default' | 'tip' | 'warning' | 'message'

interface CalloutBoxProps {
  children: React.ReactNode
  variant?: CalloutVariant
  title?: string
  icon?: LucideIcon
  className?: string
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
}: CalloutBoxProps) {
  const styles = variantStyles[variant]
  const Icon = CustomIcon || styles.icon

  return (
    <div
      className={cn(
        'rounded-xl border p-5',
        styles.bg,
        styles.border,
        className
      )}
    >
      <div className="flex gap-3.5">
        <div className={cn('mt-0.5 flex-shrink-0', styles.iconColor)}>
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div className="space-y-1.5 min-w-0">
          {title && (
            <p className="text-sm font-semibold text-foreground">{title}</p>
          )}
          <div className="text-sm leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
