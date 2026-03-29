import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SidebarTOC } from '@/components/sidebar-toc'
import { LoiNoiDau } from '@/components/handbook/loi-noi-dau'
import { LoiGioiThieu } from '@/components/handbook/loi-gioi-thieu'
import { Chuong1 } from '@/components/handbook/chuong-1'
import { BaiTapSection } from '@/components/handbook/bai-tap-section'
import { Chuong2 } from '@/components/handbook/chuong-2'
import { NhatKyChiTieu } from '@/components/handbook/nhat-ky-chi-tieu'
import { LoiNhanGui } from '@/components/handbook/loi-nhan-gui'

export const metadata = {
  title: 'Cẩm nang Quản lý Tài chính Sinh viên | FinStudent',
  description: 'Hướng dẫn chi tiết về kỹ năng quản lý tài chính cá nhân dành cho sinh viên Việt Nam',
}

export default function HandbookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="border-b border-border/50 bg-muted/30 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Hướng dẫn chi tiết
            </p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Cẩm nang Quản lý Tài chính
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Kỹ năng quản lý tài chính cá nhân cho sinh viên - Làm chủ chi tiêu, 
              tiết kiệm và bảo hiểm.
            </p>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="flex gap-12">
            {/* Sidebar */}
            <SidebarTOC />

            {/* Content */}
            <article className="min-w-0 flex-1 space-y-16 pb-12 lg:space-y-20">
              <LoiNoiDau />
              <LoiGioiThieu />
              <Chuong1 />
              <BaiTapSection />
              <Chuong2 />
              <NhatKyChiTieu />
              <LoiNhanGui />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
