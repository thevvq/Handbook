import Link from 'next/link'
import { LucideIcon, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

export function FeatureCard({ title, description, icon: Icon, href, className }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md',
        className
      )}
    >
      {/* Icon */}
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
        <Icon className="h-5 w-5 text-primary" />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
        <span>Tìm hiểu thêm</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
