'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight, Menu, X, List } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TOCItem {
  id: string
  title: string
  level: number
  children?: TOCItem[]
}

const tocItems: TOCItem[] = [
  { id: 'loi-noi-dau', title: 'Lời nói đầu', level: 1 },
  { id: 'loi-gioi-thieu', title: 'Lời giới thiệu', level: 1 },
  {
    id: 'chuong-1',
    title: 'Chương 1: Kỹ năng quản lý tài chính',
    level: 1,
    children: [
      { id: 'quan-ly-tai-chinh-la-gi', title: '1. Quản lý tài chính là gì?', level: 2 },
      { id: 'vi-sao-sinh-vien-can-hoc', title: '2. Vì sao sinh viên cần học?', level: 2 },
      { id: 'quan-ly-chi-tieu', title: '3. Kỹ năng quản lý chi tiêu', level: 2 },
      { id: 'tiet-kiem', title: '4. Kỹ năng tiết kiệm', level: 2 },
      { id: 'bao-hiem', title: '5. Quản lý bảo hiểm', level: 2 },
      { id: 'sai-lam-can-tranh', title: '6. Sai lầm cần tránh', level: 2 },
      { id: 'bai-tap', title: '7. Bài tập vận dụng', level: 2 },
    ],
  },
  {
    id: 'chuong-2',
    title: 'Chương 2: Các yếu tố ảnh hưởng',
    level: 1,
    children: [
      { id: 'nen-tang-kien-thuc', title: 'I. Nền tảng kiến thức tài chính', level: 2 },
      { id: 'hanh-vi-tai-chinh', title: 'II. Hành vi tài chính sinh viên', level: 2 },
      { id: 'nen-tang-gia-dinh', title: 'III. Nền tảng từ gia đình', level: 2 },
      { id: 'kha-nang-kiem-soat', title: 'IV. Khả năng kiểm soát', level: 2 },
      { id: 'nhat-ky-chi-tieu', title: 'V. Nhật ký chi tiêu 7 ngày', level: 2 },
    ],
  },
  { id: 'loi-nhan-gui', title: 'Lời nhắn gửi bạn đọc', level: 1 },
]

interface TOCItemComponentProps {
  item: TOCItem
  activeId: string
  depth?: number
  onNavigate?: () => void
}

function TOCItemComponent({ item, activeId, depth = 0, onNavigate }: TOCItemComponentProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const hasChildren = item.children && item.children.length > 0
  const isActive = activeId === item.id
  const hasActiveChild = item.children?.some(
    (child) => child.id === activeId || child.children?.some((c) => c.id === activeId)
  )

  return (
    <div>
      <div className={cn('group flex items-center gap-1', depth > 0 && 'ml-3')}>
        {hasChildren && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {isExpanded ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
        )}
        <a
          href={`#${item.id}`}
          onClick={onNavigate}
          className={cn(
            'flex-1 rounded-md px-2.5 py-1.5 text-[13px] leading-snug transition-colors',
            isActive
              ? 'bg-primary/10 font-medium text-primary'
              : hasActiveChild
                ? 'font-medium text-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            !hasChildren && 'ml-7'
          )}
        >
          {item.title}
        </a>
      </div>

      {hasChildren && isExpanded && (
        <div className="mt-0.5 space-y-0.5">
          {item.children!.map((child) => (
            <TOCItemComponent
              key={child.id}
              item={child}
              activeId={activeId}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function SidebarTOC() {
  const [activeId, setActiveId] = useState('')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0,
      }
    )

    const headings = document.querySelectorAll('[data-toc-heading]')
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  const sidebarContent = (
    <nav className="space-y-0.5">
      <div className="mb-4 flex items-center gap-2 px-2.5">
        <List className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Mục lục
        </span>
      </div>
      {tocItems.map((item) => (
        <TOCItemComponent 
          key={item.id} 
          item={item} 
          activeId={activeId} 
          onNavigate={() => setIsMobileOpen(false)}
        />
      ))}
    </nav>
  )

  return (
    <>
      {/* Mobile TOC Button */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile TOC Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute bottom-20 right-6 max-h-[65vh] w-80 overflow-y-auto rounded-2xl border border-border/60 bg-card p-4 shadow-xl">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="sticky top-24 hidden h-[calc(100vh-8rem)] w-72 flex-shrink-0 overflow-y-auto pr-4 lg:block">
        <div className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm">
          {sidebarContent}
        </div>
      </aside>
    </>
  )
}
