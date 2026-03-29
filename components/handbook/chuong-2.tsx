import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'
import { Blockquote } from '@/components/blockquote'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  CheckCircle2, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Brain, 
  Users,
  AlertTriangle,
  Smartphone,
  Heart,
  Target
} from 'lucide-react'

export function Chuong2() {
  const knowledgeRoles = [
    {
      icon: TrendingUp,
      title: 'Nâng cao hiệu quả quyết định',
      description: 'Sự am hiểu về tài chính giúp sinh viên đưa ra các quyết định quản lí ngân quỹ cá nhân một cách thuận tiện và hiệu quả hơn.',
    },
    {
      icon: Shield,
      title: 'Kiểm soát công cụ tài chính',
      description: 'Phân biệt được thẻ ghi nợ và thẻ tín dụng, tránh trở thành nạn nhân của các hình thức tiếp thị không lành mạnh.',
    },
    {
      icon: AlertTriangle,
      title: 'Hạn chế rủi ro',
      description: 'Kiến thức về lập kế hoạch tài chính giúp sinh viên chủ động ứng phó với các tình huống cấp bách hoặc biến cố bất ngờ.',
    },
    {
      icon: Target,
      title: 'Định hướng dài hạn',
      description: 'Xu hướng tốt hơn trong việc lập kế hoạch tích lũy, tiết kiệm và đầu tư cho tương lai.',
    },
    {
      icon: Heart,
      title: 'Củng cố tâm lý',
      description: 'Giảm thiểu áp lực tài chính, mang lại sự an tâm và nâng cao chất lượng cuộc sống.',
    },
  ]

  const risks = [
    {
      title: 'Bẫy tài chính',
      description: 'Dễ sa chân vào tín dụng đen hoặc các chiêu trò, đường dây lừa đảo "việc nhẹ lương cao" do áp lực thiếu hụt tiền bạc.',
    },
    {
      title: 'Mất cân bằng cuộc sống',
      description: 'Phải làm thêm quá sức để trang trải sinh hoạt phí, gây ảnh hưởng trực tiếp đến kết quả học tập.',
    },
    {
      title: 'Khả năng chịu rủi ro kém',
      description: 'Khi gặp biến cố bất chợt cần một khoản tiền lớn, dễ rơi vào trạng thái khủng hoảng vì không có quỹ dự phòng.',
    },
  ]

  const behaviorTypes = [
    {
      title: 'Chiến thần Săn Sale',
      description: 'Luôn đợi các đợt mua sắm giá hời, cân nhắc so sánh giá cả nhưng cuối tháng không biết tiền đã đi đâu.',
    },
    {
      title: 'Chuyên gia trì hoãn',
      description: 'Luôn nghĩ "đợi dư rồi mới tiết kiệm", nhưng tháng nào cũng hết sạch trước khi kịp dư.',
    },
    {
      title: 'Người tự chủ',
      description: 'Đã có thu nhập riêng, biết cân nhắc khi tiêu và bắt đầu trân trọng từng khoản tiền mình làm ra.',
    },
  ]

  const actionSteps = [
    {
      step: 1,
      title: 'Kiểm soát hành vi chi tiêu hằng ngày',
      items: [
        'Lập kế hoạch và ngân sách: Chia thu nhập vào các mục như ăn uống, học tập, di chuyển, giải trí',
        'So sánh giá trước khi mua: Tự đặt câu hỏi "Món đồ này có thật sự cần thiết?"',
        'Thanh toán đúng hạn: Ưu tiên hóa đơn thiết yếu như tiền nhà, điện nước, học phí',
        'Ghi chép và xem lại hóa đơn để nhận diện những khoản chưa hợp lí',
      ],
    },
    {
      step: 2,
      title: 'Xây dựng thói quen tiết kiệm và dự phòng',
      items: [
        'Nguyên tắc "Tiết kiệm trước, chi tiêu sau": Trích ngay 10-20% thu nhập vào tài khoản riêng',
        'Thiết lập quỹ dự phòng khẩn cấp: Ít nhất bằng 2 tháng sinh hoạt phí',
        'Đóng bảo hiểm y tế đầy đủ để bảo vệ trước rủi ro sức khỏe',
      ],
    },
    {
      step: 3,
      title: 'Ứng dụng công nghệ và công cụ hỗ trợ',
      items: [
        'App quản lí thu chi: Sử dụng các ứng dụng như Momo, Spendee để ghi chép tức thì',
        'Nhật ký tài chính: Dành 5 phút cuối tuần xem lại lịch sử giao dịch',
        'Tham khảo tài liệu hướng dẫn để điều chỉnh thói quen chi tiêu',
      ],
    },
    {
      step: 4,
      title: 'Nâng cao năng lực tự chủ',
      items: [
        'Học cách từ chối những cuộc vui vượt ngân sách hoặc mua sắm theo cảm xúc',
        'Thảo luận cởi mở với cha mẹ để nhận được lời khuyên thực tế',
        'Tham gia các workshop, câu lạc bộ về tài chính để cập nhật kiến thức',
      ],
    },
  ]

  const swotItems = [
    {
      title: 'Strengths (Điểm mạnh)',
      subtitle: 'Điều bạn đang làm tốt',
      description: 'Xác định những lợi thế cá nhân như có thói quen tiết kiệm, biết quản lí chi tiêu hoặc có nguồn thu nhập ổn định.',
      color: 'bg-primary/5 border-primary/20',
    },
    {
      title: 'Weaknesses (Điểm yếu)',
      subtitle: 'Điểm cần kiểm soát',
      description: 'Chi tiêu theo cảm xúc, thiếu kỷ luật hoặc dễ bị tác động bởi môi trường cần được đưa vào kế hoạch như "rủi ro nội tại".',
      color: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Opportunities (Cơ hội)',
      subtitle: 'Nguồn lực hỗ trợ',
      description: 'Công cụ quản lí tài chính, cơ hội tăng thu nhập hoặc môi trường học tập tích cực có thể được tích hợp vào kế hoạch.',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Threats (Thách thức)',
      subtitle: 'Rào cản cần dự phòng',
      description: 'Áp lực từ bạn bè, thói quen tiêu dùng theo xu hướng hay những khoản chi bất ngờ có thể làm mất kiểm soát.',
      color: 'bg-red-50 border-red-200',
    },
  ]

  return (
    <>
      <SectionBlock id="chuong-2" title="Chương 2: Các yếu tố ảnh hưởng xoay quanh sinh viên khi quản lý tài chính" level={1}>
        <p className="text-muted-foreground leading-8">
          Chương này khám phá các yếu tố quan trọng ảnh hưởng đến khả năng quản lý tài chính 
          của sinh viên, từ nền tảng kiến thức, hành vi cá nhân đến ảnh hưởng từ gia đình.
        </p>
      </SectionBlock>

      {/* Section I - Nền tảng kiến thức */}
      <SectionBlock id="nen-tang-kien-thuc" title="I. Nền tảng kiến thức về tài chính" level={2}>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground">
            1.1. Vai trò của kiến thức tài chính đến quyết định của sinh viên
          </h4>
          
          <p className="text-muted-foreground leading-8">
            Kiến thức tài chính đóng vai trò là nền tảng cốt lõi và là &quot;kim chỉ nam&quot; giúp 
            sinh viên đưa ra các quyết định tài chính và quản lí tiền bạc một cách hiệu quả, 
            chủ động và trách nhiệm.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {knowledgeRoles.map((role) => (
              <Card key={role.title} className="border-border">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <role.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h5 className="mb-2 font-semibold text-foreground">{role.title}</h5>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-foreground">
            1.2. Mức độ hiểu biết của sinh viên về các vấn đề tài chính cơ bản
          </h4>

          <p className="text-muted-foreground leading-8">
            Hiện nay, thế hệ sinh viên thời đại mới đang ngày càng quan tâm hơn đến &quot;sức khỏe 
            tài chính&quot; của bản thân. Tuy nhiên, giữa việc &quot;biết&quot; và &quot;làm&quot; vẫn còn một khoảng 
            cách khá lớn.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Điểm mạnh</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span><strong>Lập kế hoạch:</strong> Đây là mảng được nắm vững nhất</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span><strong>Sử dụng ngân hàng:</strong> Quan tâm đến tài khoản và tích lũy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Rủi ro thường gặp</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {risks.map((risk, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                      <div>
                        <strong className="text-foreground">{risk.title}:</strong>{' '}
                        <span className="text-muted-foreground">{risk.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              Hiểu biết là &quot;điều kiện cần&quot;, nhưng thực hành mới là &quot;điều kiện đủ&quot;. 
              Chúng ta sẽ bắt đầu tìm hiểu từ cẩm nang này để giúp bạn thu hẹp khoảng cách đó, 
              biến những con số lý thuyết thành những thói quen giúp bạn tự do và làm chủ 
              tài chính ngay từ khi còn ngồi trên ghế nhà trường. 
              <strong> Hãy bắt đầu từ những việc làm cụ thể nhất như ghi chép chi tiêu mỗi ngày!</strong>
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>

      {/* Section II - Hành vi tài chính */}
      <SectionBlock id="hanh-vi-tai-chinh" title="II. Các hành vi tài chính ở sinh viên" level={2}>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-foreground">
            2.1. Biểu hiện hành vi tài chính phổ biến
          </h4>

          <p className="text-muted-foreground leading-8">
            Hãy dành một chút thời gian để nhìn lại cách mình đang sử dụng tiền mỗi ngày. 
            Chính những hành động nhỏ hằng ngày sẽ dần định hình tình hình tài chính của bạn.
          </p>

          <h5 className="text-lg font-medium text-foreground">Bạn là người thuộc nhóm nào?</h5>
          
          <div className="grid gap-4 md:grid-cols-3">
            {behaviorTypes.map((type, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h6 className="mb-2 font-semibold text-foreground">{type.title}</h6>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-foreground">
            2.2. Ảnh hưởng của hành vi tài chính đến việc quản lý tài chính cá nhân
          </h4>

          <Blockquote author="Jim Rohn">
            &quot;Kỷ luật là cầu nối giữa mục tiêu và thành tựu&quot;
          </Blockquote>

          <p className="text-muted-foreground leading-8">
            Hành vi tài chính đóng vai trò là yếu tố then chốt chi phối trực tiếp và định hình 
            tình hình tài chính cũng như chất lượng cuộc sống của mỗi cá nhân. Nếu kiến thức 
            là &quot;kim chỉ nam&quot; thì hành vi chính là &quot;la bàn&quot; dẫn bạn đến đích.
          </p>

          <h4 className="text-xl font-semibold text-foreground">
            2.3. Hướng dẫn kiểm soát và ứng dụng hiệu quả hành vi tài chính
          </h4>

          <div className="space-y-6">
            {actionSteps.map((actionStep) => (
              <Card key={actionStep.step} className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {actionStep.step}
                    </span>
                    {actionStep.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {actionStep.items.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              Hãy xem cuốn cẩm nang này như một người bạn nhỏ luôn nhắc bạn quan tâm hơn đến 
              cách bạn chi tiêu. Bạn không cần phải thay đổi mọi thứ ngay lập tức, chỉ cần bắt 
              đầu từ những điều rất giản dị, như ghi lại một khoản chi mỗi ngày. Từng bước nhỏ 
              hôm nay sẽ giúp bạn trưởng thành hơn trong những năm tháng đại học. 
              <strong> Cùng cố gắng lên, bạn nhé!</strong>
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>

      {/* Section III - Gia đình */}
      <SectionBlock id="nen-tang-gia-dinh" title="III. Nền tảng hình thành thói quen tài chính từ gia đình" level={2}>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-8">
            Bạn có bao giờ tự hỏi tại sao mình lại có thói quen cân nhắc kỹ trước khi mua một 
            món đồ, hay tại sao mình lại cảm thấy bất an khi sắp hết tiền? Thực ra, những thói 
            quen đó phần lớn được hình thành từ nhỏ, thông qua cách bạn lớn lên trong gia đình.
          </p>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Users className="h-5 w-5 text-primary" />
                Cha mẹ là &quot;tấm gương&quot; trong việc hình thành nhận thức tài chính
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Gia đình đóng vai trò là nền tảng quan trọng nhất và là môi trường xã hội hóa 
                đầu tiên hình thành nhận thức tài chính cho sinh viên. Cha mẹ đóng vai trò 
                chủ đạo trong việc giúp con cái nhận thức được giá trị của đồng tiền.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span><strong>Kênh truyền tải giá trị tiềm ẩn:</strong> Những hình ảnh ba mẹ cân nhắc khi mua đồ âm thầm ảnh hưởng đến cách bạn nhìn nhận giá trị đồng tiền.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span><strong>Hiểu và biết trân trọng:</strong> Khi gia đình chia sẻ cởi mở về tài chính, bạn sẽ sớm hiểu rằng tiền không &quot;tự nhiên mà có&quot;.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <CalloutBox variant="tip" title="Lời khuyên">
            <p>
              Gia đình cho bạn điểm xuất phát, những kiến thức và kỷ luật cá nhân sẽ quyết định 
              đích đến tài chính của bạn. <strong>Hãy biến những bài học từ cha mẹ thành nền tảng 
              vững chắc để xây dựng lâu đài tài chính của riêng mình!</strong>
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>

      {/* Section IV - Khả năng kiểm soát */}
      <SectionBlock id="kha-nang-kiem-soat" title="IV. Khả năng kiểm soát tài chính cá nhân" level={2}>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-8">
            Khoảng cách giữa &quot;Biết&quot; và &quot;Làm&quot; sẽ cho bạn biết vì sao nhiều người rất giỏi 
            tính toán nhưng cuối tháng vẫn &quot;rỗng túi&quot;. Để thực sự làm chủ tài chính, bạn cần 
            rèn luyện sự kiểm soát và kỷ luật cá nhân.
          </p>

          <h4 className="text-xl font-semibold text-foreground">
            4.1. Lập kế hoạch (Áp dụng mô hình SWOT)
          </h4>

          <p className="text-muted-foreground leading-8">
            Để kiểm soát tài chính tốt, trước hết bạn cần một kế hoạch rõ ràng. Mô hình SWOT 
            có thể giúp bạn làm điều đó theo cách đơn giản và dễ áp dụng.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {swotItems.map((item) => (
              <Card key={item.title} className={`border ${item.color}`}>
                <CardContent className="pt-6">
                  <h5 className="font-semibold text-foreground">{item.title}</h5>
                  <p className="mb-2 text-sm italic text-muted-foreground">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h4 className="text-xl font-semibold text-foreground">
            4.2. Vai trò của kỷ luật cá nhân trong quản lý tài chính
          </h4>

          <Blockquote author="Jim Rohn">
            &quot;Kỷ luật là cầu nối giữa mục tiêu và thành tựu&quot;
          </Blockquote>

          <p className="text-muted-foreground leading-8">
            Kỷ luật không phải là sự gò bó, kỷ luật chính là tự do. Khi bạn có kỷ luật, bạn 
            không còn là nô lệ của cảm xúc mua sắm nhất thời. Kỷ luật là khả năng tự chủ để 
            ưu tiên mục tiêu dài hạn thay vì những lựa chọn nhất thời.
          </p>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              &quot;Kỷ luật là cầu nối giữa mục tiêu và thành tựu&quot;. Nếu không có kỷ luật để ghi 
              chép và kiểm soát, mọi kế hoạch tài chính của bạn chỉ là những lâu đài trên cát.
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>
    </>
  )
}
