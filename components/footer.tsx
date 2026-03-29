import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-semibold tracking-tight text-foreground">
                FinStudent
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Nền tảng hướng dẫn kỹ năng quản lý tài chính cá nhân dành cho sinh viên Việt Nam. 
              Xây dựng thói quen tài chính lành mạnh từ hôm nay.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Điều hướng</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/handbook" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cẩm nang
                </Link>
              </li>
              <li>
                <Link href="/handbook#chuong-1" className="text-muted-foreground transition-colors hover:text-foreground">
                  Quản lý chi tiêu
                </Link>
              </li>
              <li>
                <Link href="/handbook#chuong-2" className="text-muted-foreground transition-colors hover:text-foreground">
                  Yếu tố ảnh hưởng
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Nội dung</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Kỹ năng quản lý chi tiêu</li>
              <li>Kỹ năng tiết kiệm</li>
              <li>Quản lý bảo hiểm</li>
              <li>Bài tập thực hành</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FinStudent. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-sm text-muted-foreground">
            Được tạo bởi Nhóm tác giả
          </p>
        </div>
      </div>
    </footer>
  )
}
