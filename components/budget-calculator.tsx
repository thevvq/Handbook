'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calculator, PiggyBank, ShoppingBag, Home, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BudgetCalculator() {
  const [income, setIncome] = useState('')
  const [result, setResult] = useState<{ needs: number; wants: number; savings: number } | null>(null)

  const calculateBudget = () => {
    const incomeNum = parseFloat(income.replace(/[^0-9]/g, ''))
    if (isNaN(incomeNum) || incomeNum <= 0) {
      setResult(null)
      return
    }

    setResult({
      needs: incomeNum * 0.5,
      wants: incomeNum * 0.3,
      savings: incomeNum * 0.2,
    })
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN').format(value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value) {
      setIncome(new Intl.NumberFormat('vi-VN').format(parseInt(value)))
    } else {
      setIncome('')
    }
  }

  const budgetItems = result ? [
    {
      icon: Home,
      label: 'Nhu cầu thiết yếu',
      percentage: 50,
      amount: result.needs,
      description: 'Ăn uống, nhà ở, đi lại, học tập',
      colorBg: 'bg-primary',
      colorLight: 'bg-primary/10',
    },
    {
      icon: ShoppingBag,
      label: 'Nhu cầu cá nhân',
      percentage: 30,
      amount: result.wants,
      description: 'Giải trí, mua sắm, giao lưu',
      colorBg: 'bg-primary/70',
      colorLight: 'bg-primary/8',
    },
    {
      icon: PiggyBank,
      label: 'Tiết kiệm/Dự phòng',
      percentage: 20,
      amount: result.savings,
      description: 'Quỹ tiết kiệm, quỹ khẩn cấp',
      colorBg: 'bg-primary/50',
      colorLight: 'bg-primary/5',
    },
  ] : []

  return (
    <Card className="overflow-hidden border-border/60">
      <CardHeader className="space-y-1.5 bg-muted/30 pb-5">
        <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Calculator className="h-4 w-4 text-primary" />
          </div>
          Công cụ tính ngân sách 50/30/20
        </CardTitle>
        <CardDescription>
          Nhập thu nhập hàng tháng để xem cách phân bổ ngân sách hợp lý
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Thu nhập hàng tháng (VNĐ)
          </label>
          <div className="flex gap-2.5">
            <Input
              type="text"
              placeholder="Ví dụ: 4,000,000"
              value={income}
              onChange={handleInputChange}
              className="h-10 text-base"
            />
            <Button onClick={calculateBudget} className="h-10 gap-2 px-5">
              <Sparkles className="h-3.5 w-3.5" />
              Tính toán
            </Button>
          </div>
        </div>

        {result && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground">Kết quả</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <div className="space-y-2.5">
              {budgetItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={cn('flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg', item.colorLight)}>
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-sm font-semibold text-foreground">
                        {formatCurrency(item.amount)} đ
                      </p>
                      <p className="text-xs font-medium text-primary">{item.percentage}%</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn('h-full rounded-full transition-all', item.colorBg)}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-primary/15 bg-primary/5 p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Lưu ý:</strong> Quy tắc 50/30/20 là hướng dẫn linh hoạt. 
                Điều chỉnh theo hoàn cảnh của bạn - nếu chi phí nhà trọ cao, có thể giảm bớt chi tiêu cá nhân.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
