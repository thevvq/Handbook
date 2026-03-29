'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BookOpen, Save, RotateCcw, Check, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const days = [
  { day: 1, label: 'Ngày 1 (Thứ Hai)' },
  { day: 2, label: 'Ngày 2 (Thứ Ba)' },
  { day: 3, label: 'Ngày 3 (Thứ Tư)' },
  { day: 4, label: 'Ngày 4 (Thứ Năm)' },
  { day: 5, label: 'Ngày 5 (Thứ Sáu)' },
  { day: 6, label: 'Ngày 6 (Thứ Bảy)' },
  { day: 7, label: 'Ngày 7 (Chủ Nhật)' },
]

export function ExpenseDiary() {
  const [entries, setEntries] = useState<Record<number, string>>({})
  const [saved, setSaved] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('expense-diary')
    if (savedData) {
      try {
        setEntries(JSON.parse(savedData))
      } catch (e) {
        console.error('Failed to parse saved diary data')
      }
    }
    setIsLoaded(true)
  }, [])

  const handleChange = (day: number, value: string) => {
    setEntries((prev) => ({ ...prev, [day]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    localStorage.setItem('expense-diary', JSON.stringify(entries))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('Bạn có chắc muốn xóa tất cả dữ liệu nhật ký?')) {
      setEntries({})
      localStorage.removeItem('expense-diary')
    }
  }

  const filledDays = Object.keys(entries).filter(key => entries[parseInt(key)]?.trim()).length

  return (
    <Card className="overflow-hidden border-border/60">
      <CardHeader className="space-y-1.5 bg-muted/30 pb-5">
        <CardTitle className="flex items-center gap-2.5 text-lg font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
          Nhật ký chi tiêu 7 ngày
        </CardTitle>
        <CardDescription>
          Ghi lại các khoản chi tiêu để theo dõi và nhận diện thói quen của bản thân
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {/* Progress indicator */}
        <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-3">
          <span className="text-sm font-medium text-foreground">Tiến độ ghi chép</span>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {days.map(({ day }) => (
                <div
                  key={day}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    entries[day]?.trim() ? 'bg-primary' : 'bg-muted-foreground/20'
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-primary">{filledDays}/7</span>
          </div>
        </div>

        <div className="space-y-4">
          {days.map(({ day, label }) => (
            <div key={day} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">{label}</label>
                {entries[day]?.trim() && (
                  <span className="flex items-center gap-1 text-xs font-medium text-primary">
                    <Check className="h-3 w-3" />
                    Đã ghi
                  </span>
                )}
              </div>
              <Textarea
                placeholder={`Ví dụ:\n- Cà phê sáng: 25.000đ\n- Bữa trưa: 35.000đ\n- Grab: 20.000đ\n- Trà sữa (thích nên mua): 40.000đ`}
                value={isLoaded ? (entries[day] || '') : ''}
                onChange={(e) => handleChange(day, e.target.value)}
                className="min-h-[100px] resize-none transition-colors focus:border-primary/50"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button onClick={handleSave} className="gap-2" disabled={!isLoaded}>
            {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            {saved ? 'Đã lưu!' : 'Lưu nhật ký'}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleReset} 
            className="gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
            disabled={!isLoaded || Object.keys(entries).length === 0}
          >
            <Trash2 className="h-4 w-4" />
            Xóa tất cả
          </Button>
        </div>

        <div className="rounded-lg border border-primary/15 bg-primary/5 p-4">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Sau 7 ngày, hãy tự hỏi:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>- Khoản nào là cần thiết?</li>
            <li>- Khoản nào có thể giảm bớt?</li>
            <li>- Mình có đang chi tiêu đúng với kế hoạch không?</li>
            <li>- Khoản chi nào do cảm xúc (buồn/vui/stress)?</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
