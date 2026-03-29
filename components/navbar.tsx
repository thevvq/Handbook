'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/handbook', label: 'Cẩm nang' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            FinStudent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-primary/5 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="h-9 gap-2 rounded-lg px-4 shadow-sm">
            <Link href="/handbook">
              <BookOpen className="h-3.5 w-3.5" />
              Bắt đầu học
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary/5 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 gap-2">
              <Link href="/handbook" onClick={() => setMobileMenuOpen(false)}>
                <BookOpen className="h-4 w-4" />
                Bắt đầu học
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
