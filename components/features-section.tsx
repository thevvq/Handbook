import { Wallet, PiggyBank, Shield } from 'lucide-react'
import { FeatureCard } from './feature-card'

export function FeaturesSection() {
  const features = [
    {
      title: 'Quản lý Chi tiêu',
      description:
        'Học cách ghi chép, phân loại và kiểm soát các khoản chi tiêu hàng ngày. Áp dụng quy tắc 50/30/20 để phân bổ ngân sách hiệu quả.',
      icon: Wallet,
      href: '/handbook#quan-ly-chi-tieu',
    },
    {
      title: 'Kỹ năng Tiết kiệm',
      description:
        'Xây dựng thói quen tiết kiệm từ sớm với nguyên tắc "trả cho bản thân trước". Tạo quỹ dự phòng và đạt được mục tiêu tài chính.',
      icon: PiggyBank,
      href: '/handbook#tiet-kiem',
    },
    {
      title: 'Quản lý Bảo hiểm',
      description:
        'Hiểu về các loại bảo hiểm cần thiết như BHYT và bảo hiểm tai nạn. Bảo vệ tài chính trước những rủi ro bất ngờ.',
      icon: Shield,
      href: '/handbook#bao-hiem',
    },
  ]

  return (
    <section className="border-t border-border/50 bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Nội dung chính
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ba kỹ năng tài chính thiết yếu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Mỗi sinh viên cần nắm vững để làm chủ tài chính cá nhân và chuẩn bị cho tương lai.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
