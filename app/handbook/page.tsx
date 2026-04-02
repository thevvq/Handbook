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
        {/* Documentation Header */}
        <div className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-white via-emerald-50/20 to-emerald-50/40">
          <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgb(34 197 94) 1px, transparent 1px), radial-gradient(circle at 80% 50%, rgb(34 197 94) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-emerald-100/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-emerald-200/20 blur-3xl" />
          
          <div className="relative mx-auto max-w-[1100px] px-4 pt-12 pb-10 text-center sm:pt-16 sm:pb-12">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center justify-center rounded-2xl border border-emerald-200/50 bg-gradient-to-br from-emerald-50 to-green-50/50 p-3 shadow-sm">
                <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Hướng dẫn chi tiết
              </span>
            </div>
            
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Cẩm nang Quản lý <span className="text-emerald-600">Tài chính</span>
            </h1>
            
            <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">
              Hiểu tiền – quản tiền – và xây dựng tương lai tài chính của bạn
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-12 rounded-full bg-gradient-to-r from-transparent to-emerald-300" />
              <div className="h-2 w-2 rotate-45 rounded-sm bg-emerald-400" />
              <div className="h-px w-12 rounded-full bg-gradient-to-l from-transparent to-emerald-300" />
            </div>
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
