import { cn } from '@/lib/utils'

interface SectionBlockProps {
  id: string
  title: string
  level?: 1 | 2 | 3
  children: React.ReactNode
  className?: string
}

export function SectionBlock({
  id,
  title,
  level = 1,
  children,
  className,
}: SectionBlockProps) {
  const HeadingTag = level === 1 ? 'h2' : level === 2 ? 'h3' : 'h4'
  
  const headingStyles = {
    1: 'text-2xl sm:text-3xl font-bold mb-6 text-foreground',
    2: 'text-xl sm:text-2xl font-semibold mb-5 text-foreground',
    3: 'text-lg sm:text-xl font-semibold mb-4 text-foreground',
  }

  return (
    <section id={id} data-toc-heading className={cn('scroll-mt-28', className)}>
      <HeadingTag className={headingStyles[level]}>{title}</HeadingTag>
      <div className="space-y-5">{children}</div>
    </section>
  )
}
