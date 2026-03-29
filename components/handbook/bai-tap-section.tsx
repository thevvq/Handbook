import { SectionBlock } from '@/components/section-block'
import { BudgetCalculator } from '@/components/budget-calculator'
import { CaseStudy } from '@/components/case-study'
import { FinancialPlanTable } from '@/components/financial-plan-table'

export function BaiTapSection() {
  return (
    <SectionBlock id="bai-tap" title="7. Các bài tập vận dụng để rèn luyện kỹ năng quản lý tài chính cá nhân" level={2}>
      <div className="space-y-8">
        <p className="text-muted-foreground leading-8">
          Dưới đây là các bài tập thực hành giúp bạn áp dụng kiến thức đã học vào thực tế. 
          Hãy hoàn thành từng bài tập để củng cố kỹ năng quản lý tài chính của mình.
        </p>

        {/* Budget Calculator */}
        <BudgetCalculator />

        {/* Case Study */}
        <CaseStudy />

        {/* Financial Plan Table */}
        <FinancialPlanTable />
      </div>
    </SectionBlock>
  )
}
