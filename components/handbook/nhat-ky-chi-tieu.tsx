import { SectionBlock } from '@/components/section-block'
import { ExpenseDiary } from '@/components/expense-diary'

export function NhatKyChiTieu() {
  return (
    <SectionBlock id="nhat-ky-chi-tieu" title="V. Bài tập thực hành viết nhật ký chi tiêu trong 7 ngày" level={2}>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>
          Đây là bài tập quan trọng nhất giúp bạn nhận diện thói quen chi tiêu của mình. 
          Hãy ghi chép đầy đủ và trung thực trong 7 ngày liên tiếp để có cái nhìn tổng quan 
          về dòng tiền của bạn.
        </p>

        <ExpenseDiary />
      </div>
    </SectionBlock>
  )
}
