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
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/70 hover:shadow-[0_22px_40px_rgba(16,185,129,0.2)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-100/0 via-emerald-100/0 to-cyan-100/0 transition-all duration-500 group-hover:from-emerald-100/50 group-hover:via-emerald-50/30 group-hover:to-cyan-100/45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/80 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-lg">
        <Icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
      </div>

      {/* Content */}
      <h3 className="relative mb-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-emerald-700">{title}</h3>
      <p className="relative flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      {/* Arrow */}
      <div className="relative mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
        <span>Tìm hiểu thêm</span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
