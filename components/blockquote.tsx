import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface BlockquoteProps {
  children: React.ReactNode
  author?: string
  className?: string
}

export function Blockquote({ children, author, className }: BlockquoteProps) {
  return (
    <blockquote
      className={cn(
        'relative border-l-2 border-primary/40 bg-muted/30 py-4 pl-5 pr-4',
        'rounded-r-lg',
        className
      )}
    >
      <Quote className="absolute -left-2.5 -top-1.5 h-5 w-5 rounded bg-background text-primary/40" />
      <div className="text-[15px] italic leading-relaxed text-muted-foreground">
        {children}
      </div>
      {author && (
        <footer className="mt-3 text-sm font-medium text-foreground">
          — {author}
        </footer>
      )}
    </blockquote>
  )
}
