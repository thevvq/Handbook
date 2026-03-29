'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ClipboardList, Save, RotateCcw, Check, Trash2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PlanData {
  income: string
  essential: string
  essentialItems: string
  personal: string
  personalItems: string
  savings: string
  savingsItems: string
  risks: string
  commitment: string
}

const defaultData: PlanData = {
  income: '',
  essential: '',
  essentialItems: '',
  personal: '',
  personalItems: '',
  savings: '',
  savingsItems: '',
  risks: '',
  commitment: '',
}

export function FinancialPlanTable() {
  const [data, setData] = useState<PlanData>(defaultData)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem('financial-plan')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (field: keyof PlanData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem('financial-plan', JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('Bạn có chắc muốn xóa tất cả dữ liệu kế hoạch?')) {
      setData(defaultData)
      localStorage.removeItem('financial-plan')
    }
  }

  // Calculate total and check if over budget
  const totalAllocated = 
    (parseFloat(data.essential.replace(/,/g, '')) || 0) +
    (parseFloat(data.personal.replace(/,/g, '')) || 0) +
    (parseFloat(data.savings.replace(/,/g, '')) || 0)
  const incomeNum = parseFloat(data.income.replace(/,/g, '')) || 0
  const isOverBudget = totalAllocated > incomeNum && incomeNum > 0
  const remaining = incomeNum - totalAllocated

  const formatInput = (value: string) => {
    const num = value.replace(/[^0-9]/g, '')
    if (num) {
      return new Intl.NumberFormat('vi-VN').format(parseInt(num))
    }
    return ''
  }

  const calculatePercentage = (value: string) => {
    const income = parseFloat(data.income.replace(/,/g, '')) || 0
    const amount = parseFloat(value.replace(/,/g, '')) || 0
    if (income === 0) return 0
    return Math.round((amount / income) * 100)
  }

  return (
    <Card className="overflow-hidden border-border/60">
      <CardHeader className="space-y-1.5 bg-muted/30 pb-5">
        <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <ClipboardList className="h-4 w-4 text-primary" />
          </div>
          Xây dựng kế hoạch tài chính cá nhân
        </CardTitle>
        <CardDescription>
          Lập kế hoạch chi tiêu cho tháng tới theo quy tắc 50/30/20
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        <p className="text-sm text-muted-foreground">
          Dựa trên thu nhập thực tế của bản thân, hãy lập một kế hoạch tài chính cho tháng tới 
          theo các bước sau. Bạn có thể điều chỉnh tỉ lệ phù hợp với thực tế của mình.
        </p>

        {/* Step 1: Income */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">
            Bước 1: Xác định tổng thu nhập tháng
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Ví dụ: 5,000,000"
              value={data.income}
              onChange={(e) => handleChange('income', formatInput(e.target.value))}
              className="max-w-xs"
            />
            <span className="text-sm text-muted-foreground">VNĐ</span>
          </div>
        </div>

        {/* Step 2: Budget Allocation */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">
            Bước 2: Phân bổ theo quy tắc 50/30/20 (hoặc điều chỉnh phù hợp)
          </label>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Nhóm</TableHead>
                  <TableHead className="w-1/6">Tỉ lệ</TableHead>
                  <TableHead className="w-1/4">Số tiền dự kiến</TableHead>
                  <TableHead>Các khoản cụ thể</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Chi tiêu thiết yếu</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                      {data.essential ? calculatePercentage(data.essential) : 50}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="2,500,000"
                      value={data.essential}
                      onChange={(e) => handleChange('essential', formatInput(e.target.value))}
                      className="max-w-[150px]"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Ăn uống, đi lại, trọ"
                      value={data.essentialItems}
                      onChange={(e) => handleChange('essentialItems', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nhu cầu cá nhân</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                      {data.personal ? calculatePercentage(data.personal) : 30}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="1,500,000"
                      value={data.personal}
                      onChange={(e) => handleChange('personal', formatInput(e.target.value))}
                      className="max-w-[150px]"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Giải trí, mua sắm"
                      value={data.personalItems}
                      onChange={(e) => handleChange('personalItems', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tiết kiệm/Dự phòng</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-sm font-medium text-primary">
                      {data.savings ? calculatePercentage(data.savings) : 20}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="1,000,000"
                      value={data.savings}
                      onChange={(e) => handleChange('savings', formatInput(e.target.value))}
                      className="max-w-[150px]"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Quỹ tiết kiệm, dự phòng"
                      value={data.savingsItems}
                      onChange={(e) => handleChange('savingsItems', e.target.value)}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          {/* Budget Summary */}
          {incomeNum > 0 && (
            <div className={cn(
              'mt-3 flex items-center justify-between rounded-lg border p-3',
              isOverBudget 
                ? 'border-amber-200/60 bg-amber-50' 
                : remaining === 0 
                  ? 'border-primary/20 bg-primary/5' 
                  : 'border-border/60 bg-muted/30'
            )}>
              <div className="flex items-center gap-2">
                {isOverBudget && <AlertCircle className="h-4 w-4 text-amber-600" />}
                <span className="text-sm font-medium text-foreground">
                  {isOverBudget ? 'Vượt ngân sách:' : remaining === 0 ? 'Cân đối:' : 'Còn lại:'}
                </span>
              </div>
              <span className={cn(
                'font-semibold',
                isOverBudget ? 'text-amber-600' : remaining === 0 ? 'text-primary' : 'text-foreground'
              )}>
                {isOverBudget ? '+' : ''}{new Intl.NumberFormat('vi-VN').format(Math.abs(remaining))}đ
              </span>
            </div>
          )}
        </div>

        {/* Step 3: Risk Assessment */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">
            Bước 3: Dự báo rủi ro
          </label>
          <p className="text-xs text-muted-foreground">
            Tháng tới có khoản phát sinh nào bạn cần chuẩn bị trước không? 
            (thi cử, sinh nhật bạn bè, chi phí y tế,...) Bạn sẽ lấy từ nguồn nào để chi trả?
          </p>
          <Textarea
            placeholder="Ví dụ: Tháng tới có kỳ thi nên cần mua thêm tài liệu (khoảng 200.000đ), sẽ lấy từ khoản chi tiêu cá nhân..."
            value={data.risks}
            onChange={(e) => handleChange('risks', e.target.value)}
            className="min-h-[80px]"
          />
        </div>

        {/* Step 4: Commitment */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">
            Bước 4: Cam kết cá nhân
          </label>
          <p className="text-xs text-muted-foreground">
            Viết một điều bạn sẽ thực hiện khác đi so với tháng trước để kế hoạch này khả thi hơn.
          </p>
          <Textarea
            placeholder="Ví dụ: Tháng này mình sẽ chuyển 200.000đ vào tài khoản tiết kiệm ngay trong ngày đầu tiên nhận tiền..."
            value={data.commitment}
            onChange={(e) => handleChange('commitment', e.target.value)}
            className="min-h-[80px]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button onClick={handleSave} className="gap-2">
            {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            {saved ? 'Đã lưu!' : 'Lưu kế hoạch'}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleReset} 
            className="gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            Xóa tất cả
          </Button>
        </div>

        <div className="rounded-lg border border-primary/15 bg-primary/5 p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Gợi ý:</strong> Một cam kết thực tế và khả thi sẽ 
            hiệu quả hơn một cam kết quá lớn. Ví dụ: &quot;Tháng này mình sẽ chuyển 200.000đ vào tài 
            khoản tiết kiệm ngay trong ngày đầu tiên nhận tiền&quot; - cụ thể, đo lường được và dễ 
            thực hiện hơn là &quot;Tháng này mình sẽ tiết kiệm nhiều hơn&quot;.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
