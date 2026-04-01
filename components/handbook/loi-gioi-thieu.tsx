import { SectionBlock } from '@/components/section-block'
import { Card, CardContent } from '@/components/ui/card'
import { Wallet, PiggyBank, Shield } from 'lucide-react'

export function LoiGioiThieu() {
  const skills = [
    {
      icon: Wallet,
      title: 'Quản lý chi tiêu',
      description: 'Học cách kiểm soát các khoản chi tiêu hàng ngày một cách hiệu quả',
    },
    {
      icon: PiggyBank,
      title: 'Thói quen tiết kiệm',
      description: 'Xây dựng thói quen tiết kiệm và tích lũy cho tương lai',
    },
    {
      icon: Shield,
      title: 'Quản lý bảo hiểm',
      description: 'Hiểu về vai trò và cách sử dụng bảo hiểm để bảo vệ tài chính',
    },
  ]

  return (
    <SectionBlock id="loi-gioi-thieu" title="Lời giới thiệu" level={1}>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>
          {"Trong bối cảnh xã hội hiện đại với nhiều biến động về kinh tế và chi phí sinh hoạt ngày càng gia tăng, việc trang bị kĩ năng quản lí tài chính cá nhân đã trở thành một yêu cầu thiết yếu đối với mỗi cá nhân, đặc biệt là sinh viên. Đây là giai đoạn chuyển tiếp quan trọng từ phụ thuộc sang tự chủ, nơi mà mỗi quyết định chi tiêu, tiết kiệm hay sử dụng tài chính đều có thể ảnh hưởng trực tiếp đến chất lượng cuộc sống và định hướng tương lai."}
        </p>

        <p>
          {"Tuy nhiên, trên thực tế, không ít sinh viên vẫn còn gặp khó khăn trong việc kiểm soát chi tiêu, thiếu thói quen tiết kiệm và chưa nhận thức đầy đủ về vai trò của các công cụ tài chính như bảo hiểm. Điều này dẫn đến tình trạng chi tiêu mất cân đối, thiếu hụt tài chính và dễ rơi vào áp lực khi đối mặt với những rủi ro bất ngờ. Chính vì vậy, việc xây dựng một cẩm nang hướng dẫn kĩ năng quản lí tài chính cá nhân dành riêng cho sinh viên là hết sức cần thiết và có ý nghĩa thực tiễn cao."}
        </p>

        <div className="grid gap-4 py-4 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.title} className="border-border">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p>
          {"Cuốn cẩm nang này được biên soạn nhằm cung cấp những kiến thức cơ bản, dễ hiểu và có tính ứng dụng cao về quản lí tài chính cá nhân. Nội dung tập trung vào các kĩ năng thiết yếu như quản lí chi tiêu, xây dựng thói quen tiết kiệm và đặc biệt là kĩ năng quản lí bảo hiểm – một yếu tố quan trọng nhưng thường bị xem nhẹ. Thông qua việc kết hợp giữa lí thuyết và các gợi ý thực hành cụ thể, cẩm nang hướng đến việc giúp sinh viên từng bước hình thành tư duy tài chính đúng đắn và chủ động hơn trong việc quản lí nguồn lực của bản thân."}
        </p>

        <p className="font-medium text-foreground">
          {"Hy vọng rằng, cuốn cẩm nang sẽ trở thành một người bạn đồng hành hữu ích, hỗ trợ sinh viên trong hành trình làm chủ tài chính cá nhân, từ đó góp phần xây dựng một cuộc sống ổn định, tự tin và có định hướng rõ ràng cho tương lai."}
        </p>
      </div>
    </SectionBlock>
  )
}
