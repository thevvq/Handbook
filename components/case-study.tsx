'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { User, AlertTriangle, ChevronDown, ChevronUp, TrendingDown, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

const expenses = [
  { category: 'Chi phí nhà trọ', amount: 1500000, isFixed: true },
  { category: 'Chi phí sinh hoạt', amount: 1200000, isFixed: false },
  { category: 'Chi phí đi lại', amount: 600000, isFixed: false, note: 'Có thể giảm' },
  { category: 'Chi phí cá nhân', amount: 400000, isFixed: false },
  { category: 'Chi phí vật dụng', amount: 500000, isFixed: false, note: 'Mua sắm cảm tính' },
]

const suggestedBudget = [
  { category: 'Chi tiêu thiết yếu (50%)', amount: 2000000, items: 'Nhà trọ, ăn uống, đi lại' },
  { category: 'Nhu cầu cá nhân (30%)', amount: 1200000, items: 'Giải trí, giao lưu, mua sắm có kế hoạch' },
  { category: 'Tiết kiệm (20%)', amount: 800000, items: 'Quỹ dự phòng, tiết kiệm mục tiêu' },
]

export function CaseStudy() {
  const [showSolution, setShowSolution] = useState(false)

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0)
  const income = 4000000
  const overBudget = totalExpense - income

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN').format(value)
  }

  return (
    <Card className="overflow-hidden border-border/60">
      <CardHeader className="space-y-1.5 bg-muted/30 pb-5">
        <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <User className="h-4 w-4 text-primary" />
          </div>
          Phân tích tình huống: Bạn Minh
        </CardTitle>
        <CardDescription>
          Phân tích thực tế và đưa ra giải pháp tài chính
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {/* Context */}
        <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Minh</strong> là sinh viên năm 2 tại TP. Hồ Chí Minh. 
            Mỗi tháng Minh nhận <strong className="text-foreground">4.000.000đ</strong> từ gia đình. 
            Tháng này Minh chi tiêu như sau:
          </p>
        </div>

        {/* Current Expenses Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Khoản chi</TableHead>
                <TableHead className="text-right">Số tiền</TableHead>
                <TableHead className="text-right">Ghi chú</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.category}>
                  <TableCell className="font-medium">{expense.category}</TableCell>
                  <TableCell className="text-right">{formatCurrency(expense.amount)}đ</TableCell>
                  <TableCell className="text-right">
                    {expense.note && (
                      <span className="inline-flex items-center gap-1 text-amber-600">
                        <AlertTriangle className="h-3 w-3" />
                        {expense.note}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border-t-2">
                <TableCell className="font-bold text-foreground">Tổng cộng</TableCell>
                <TableCell className="text-right font-bold text-foreground">
                  {formatCurrency(totalExpense)}đ
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Over Budget Alert */}
        <div className="flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50 p-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <TrendingDown className="h-4 w-4 text-amber-600" />
          </div>
          <div>
            <p className="font-semibold text-foreground">
              Minh đã chi vượt ngân sách {formatCurrency(overBudget)}đ
            </p>
            <p className="text-sm text-muted-foreground">
              Tổng chi tiêu {formatCurrency(totalExpense)}đ &gt; Thu nhập {formatCurrency(income)}đ
            </p>
          </div>
        </div>

        {/* Discussion Questions */}
        <div className="space-y-3 rounded-xl border border-border/60 p-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground">Câu hỏi thảo luận:</h4>
          </div>
          <ol className="list-inside list-decimal space-y-2 pl-1 text-sm text-muted-foreground">
            <li>Minh đã chi vượt ngân sách bao nhiêu? Khoản nào có thể điều chỉnh được?</li>
            <li>Nếu áp dụng quy tắc 50/30/20, Minh nên phân bổ 4.000.000đ như thế nào?</li>
            <li>Bạn có nhận ra điểm nào trong cách chi tiêu của Minh giống với bản thân mình không?</li>
          </ol>
        </div>

        {/* Toggle Solution */}
        <Button
          variant="outline"
          onClick={() => setShowSolution(!showSolution)}
          className="w-full"
        >
          {showSolution ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Ẩn gợi ý trả lời
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Xem gợi ý trả lời
            </>
          )}
        </Button>

        {/* Solution */}
        {showSolution && (
          <div className="animate-in fade-in slide-in-from-top-2 space-y-4 rounded-xl border border-primary/20 bg-primary/5 p-4 duration-300">
            <h4 className="font-semibold text-foreground">Gợi ý trả lời:</h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <span className="font-semibold text-foreground">1.</span>
                <p>
                  Minh chi vượt <strong className="text-foreground">200.000đ</strong> so với ngân sách. 
                  Hai khoản có thể điều chỉnh là <strong className="text-foreground">đi lại</strong> 
                  (có thể đi xe buýt hoặc xe đạp thay xe ôm công nghệ) và 
                  <strong className="text-foreground"> mua vật dụng</strong> (mua sắm cảm tính vì &quot;sale&quot;, 
                  không nằm trong kế hoạch).
                </p>
              </div>

              <div className="flex gap-2">
                <span className="font-semibold text-foreground">2.</span>
                <div className="flex-1">
                  <p className="mb-2">Áp dụng quy tắc 50/30/20 với 4.000.000đ:</p>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nhóm</TableHead>
                          <TableHead className="text-right">Số tiền</TableHead>
                          <TableHead>Các khoản</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {suggestedBudget.map((item) => (
                          <TableRow key={item.category}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.amount)}đ</TableCell>
                            <TableCell className="text-xs">{item.items}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="mt-2 text-xs">
                    <strong>Lưu ý:</strong> Riêng tiền nhà và ăn uống đã chiếm 2.700.000đ – vượt mức thiết yếu 50%. 
                    Minh cần cân nhắc giảm chi phí ăn uống hoặc tìm phòng trọ phù hợp hơn.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="font-semibold text-foreground">3.</span>
                <p>
                  Câu hỏi này mang tính cá nhân – không có đáp án cố định. Điểm quan trọng là bạn 
                  nhận ra được thói quen chi tiêu của mình, đặc biệt là những khoản &quot;muốn&quot; dễ bị 
                  bỏ qua như trà sữa hay mua sắm theo cảm tính.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
