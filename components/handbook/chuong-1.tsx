import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'
import { Blockquote } from '@/components/blockquote'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, AlertTriangle, Lightbulb, Target, ClipboardList, RefreshCw, Calculator, BookOpen } from 'lucide-react'

export function Chuong1() {
  const benefits = [
    {
      title: 'Xây dựng tính tự lập và trách nhiệm',
      description: 'Việc bắt đầu tự quản lí tài chính giúp bạn học được cách sống có trách nhiệm hơn với các quyết định của mình, giảm bớt sự phụ thuộc vào gia đình.',
    },
    {
      title: 'Tránh xa cạm bẫy nợ nần',
      description: 'Kế hoạch chi tiêu rõ ràng giúp bạn tránh việc chi tiêu vượt mức, vay mượn và các hình thức tín dụng không lành mạnh.',
    },
    {
      title: 'Hiện thực hóa mong muốn',
      description: 'Mua laptop, tham gia du lịch hay đầu tư khóa học kỹ năng sẽ trở thành hiện thực khi có kế hoạch tài chính.',
    },
    {
      title: 'Xây dựng thói quen tài chính tích cực',
      description: 'Rèn luyện từ thời sinh viên giúp bạn có lợi thế lớn khi bước vào cuộc sống đi làm.',
    },
    {
      title: 'Ổn định tinh thần',
      description: 'Nắm rõ tình hình tài chính và có khoản dự phòng giúp giảm lo lắng, tập trung tốt hơn vào học tập.',
    },
  ]

  const steps = [
    {
      icon: ClipboardList,
      step: 1,
      title: 'Ghi chép và theo dõi mọi chi tiêu',
      description: 'Sử dụng sổ tay, Excel hoặc ứng dụng quản lí chi tiêu để ghi nhận mọi khoản chi, giúp nhận diện rõ dòng tiền của mình.',
    },
    {
      icon: Target,
      step: 2,
      title: 'Phân loại các khoản chi tiêu',
      description: 'Chia thành các nhóm: chi tiêu cố định, chi tiêu thiết yếu, chi tiêu học tập và chi tiêu cá nhân.',
    },
    {
      icon: Calculator,
      step: 3,
      title: 'Thiết lập ngân sách',
      description: 'Áp dụng quy tắc 50/30/20 hoặc điều chỉnh linh hoạt theo hoàn cảnh để phân bổ thu nhập hợp lí.',
    },
    {
      icon: Lightbulb,
      step: 4,
      title: 'Đặt ra mục tiêu tài chính cụ thể',
      description: 'Mục tiêu ngắn hạn và dài hạn giúp duy trì kỷ luật và hạn chế chi tiêu bộc phát.',
    },
    {
      icon: RefreshCw,
      step: 5,
      title: 'Xem lại và điều chỉnh',
      description: 'Đánh giá lại tình hình chi tiêu định kỳ để phát hiện sai lệch và điều chỉnh chiến lược.',
    },
  ]

  const savingMethods = [
    'Tiết kiệm theo mục tiêu: chia tiền theo từng mục đích cụ thể như học tập, du lịch, dự phòng',
    'Tiết kiệm định kỳ: gửi một khoản tiền cố định theo tuần hoặc tháng',
    'Tham gia các thử thách tiết kiệm để tạo động lực duy trì thói quen',
  ]

  const mistakes = [
    {
      icon: AlertTriangle,
      title: 'Bỏ qua các khoản chi tiêu nhỏ',
      description: 'Những khoản tiền như vài nghìn đồng cho trà đá, gửi xe hay ăn vặt tích lũy thành con số đáng kể.',
    },
    {
      icon: AlertTriangle,
      title: 'Lạm dụng thẻ tín dụng và "mua trước, trả sau"',
      description: 'Sự tiện lợi khiến sinh viên dễ chi tiêu vượt khả năng chi trả, nợ chồng chất.',
    },
    {
      icon: AlertTriangle,
      title: 'Ngân sách quá khắt khe',
      description: 'Cắt giảm tối đa chi tiêu dẫn đến áp lực, ngột ngạt và dễ từ bỏ kế hoạch.',
    },
    {
      icon: AlertTriangle,
      title: 'Dễ dàng từ bỏ khi thất bại',
      description: 'Thay vì nản lòng, hãy xem đó là cơ hội rút kinh nghiệm và điều chỉnh.',
    },
  ]

  return (
    <>
      <SectionBlock id="chuong-1" title="Chương 1: Sinh viên cần học cách quản lý tài chính cá nhân như thế nào?" level={1}>
        <p className="text-muted-foreground leading-8">
          Chương này sẽ cung cấp cho bạn những kiến thức cơ bản và kỹ năng thực hành về 
          quản lý tài chính cá nhân, từ việc hiểu rõ khái niệm cho đến các bước thực hiện cụ thể.
        </p>
      </SectionBlock>

      {/* Section 1 */}
      <SectionBlock id="quan-ly-tai-chinh-la-gi" title="1. Quản lý tài chính cá nhân là gì?" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Trước hết, để quản lí tài chính cá nhân cho hiệu quả ta cần hiểu rõ quản lí chi tiêu 
            cá nhân là gì? Trên thực tế, đây không chỉ là việc ghi chép các khoản tiền ra vào 
            hay chi tiêu một cách tiết kiệm như mọi người vẫn thường nghĩ.
          </p>

          <CalloutBox variant="tip" title="Định nghĩa">
            <p>
              <strong>Quản lí chi tiêu cá nhân</strong> là một quá trình có ý thức bao gồm việc 
              theo dõi, phân tích và điều chỉnh thói quen tiêu xài của bản thân nhằm đạt được 
              các mục tiêu tài chính.
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>

      {/* Section 2 */}
      <SectionBlock id="vi-sao-sinh-vien-can-hoc" title="2. Vì sao sinh viên cần học cách quản lý tài chính cá nhân?" level={2}>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-8">
            Nhiều người vẫn thường cho rằng sinh viên vẫn chưa có nguồn thu nhập ổn định thì 
            không cần quản lí tài chính. Nhưng đây là một quan niệm hoàn toàn sai lầm. 
            Việc rèn luyện kĩ năng quản lí tài chính cá nhân ngay từ khi còn ngồi trên ghế 
            nhà trường sẽ mang lại những lợi ích vô giá:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Section 3 */}
      <SectionBlock id="quan-ly-chi-tieu" title="3. Hướng dẫn kỹ năng quản lý chi tiêu" level={2}>
        <div className="space-y-6">
          <Blockquote>
            &quot;Ôi mới đến giữa tháng mà đã cháy túi rồi&quot; - Chắc hẳn đây không còn là những 
            câu cảm thán xa lạ với các bạn sinh viên nữa.
          </Blockquote>

          <p className="text-muted-foreground leading-8">
            Việc lần đầu tự tay quản lí một khoản tiền hàng tháng sẽ luôn đi kèm với những 
            cám dỗ trong việc chi tiêu. Cẩm nang này sẽ giúp bạn kiểm soát chi tiêu, tránh 
            việc &quot;hết tiền giữa tháng&quot;, giảm stress và hình thành thói quen chi tiêu hợp lí.
          </p>

          <CalloutBox variant="default" title="Kỹ năng quản lý chi tiêu là gì?">
            <p>
              Là khả năng lập kế hoạch, theo dõi và kiểm soát các khoản chi ra hàng ngày cũng 
              như hàng tháng. Kỹ năng này bao gồm việc phân loại chi tiêu thành hai nhóm chính: 
              <strong> cần thiết</strong> (ăn uống, học tập, nhà ở, di chuyển) và <strong>mong muốn</strong> 
              (giải trí, mua sắm theo cảm tính).
            </p>
          </CalloutBox>

          <h4 className="text-xl font-semibold text-foreground">5 Bước quản lý chi tiêu hợp lý</h4>
          
          <div className="space-y-4">
            {steps.map((step) => (
              <Card key={step.step} className="border-border">
                <CardContent className="flex gap-4 pt-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1 font-semibold text-foreground">
                      Bước {step.step}: {step.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* Section 4 - Tiết kiệm */}
      <SectionBlock id="tiet-kiem" title="4. Hướng dẫn kỹ năng quản lý tiết kiệm" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Trong bối cảnh chi phí sinh hoạt ngày càng gia tăng, kĩ năng quản lí tiết kiệm 
            trở thành một năng lực thiết yếu đối với sinh viên. Đây không chỉ là khả năng 
            cắt giảm các chi tiêu mà còn là quá trình chủ động kiểm soát tài chính cá nhân 
            nhằm tạo ra nguồn tiền tích lũy cho hiện tại và tương lai.
          </p>

          <CalloutBox variant="tip" title="Hiểu đúng về tiết kiệm">
            <p>
              Tiết kiệm không đồng nghĩa với việc chi tiêu khắt khe hay từ bỏ hoàn toàn các 
              nhu cầu cá nhân, mà là sự cân đối hợp lí giữa <strong>&quot;cần&quot;</strong> và <strong>&quot;muốn&quot;</strong>. 
              Một người có kĩ năng tiết kiệm tốt là người biết ưu tiên các khoản chi thiết yếu, 
              đồng thời hạn chế những khoản chi không cần thiết.
            </p>
          </CalloutBox>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Lightbulb className="h-5 w-5 text-primary" />
                Nguyên tắc &quot;Trả cho bản thân trước&quot;
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Ngay khi nhận được tiền trợ cấp hoặc thu nhập từ công việc bán thời gian, 
                sinh viên nên trích ra một phần nhất định, thường từ <strong>10% đến 20%</strong>, 
                để dành riêng cho tiết kiệm. Việc này giúp hình thành thói quen tích lũy 
                đều đặn và tránh tình trạng &quot;tiêu hết rồi mới nghĩ đến tiết kiệm&quot;.
              </p>
            </CardContent>
          </Card>

          <h4 className="text-xl font-semibold text-foreground">Các phương pháp tiết kiệm phổ biến</h4>
          <ul className="space-y-3">
            {savingMethods.map((method, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      {/* Section 5 - Bảo hiểm */}
      <SectionBlock id="bao-hiem" title="5. Hướng dẫn kỹ năng quản lý bảo hiểm" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Kĩ năng quản lí bảo hiểm cũng là một trong những kĩ năng giữ vai trò quan trọng 
            trong việc đảm bảo an toàn tài chính cho sinh viên. Trong khi tiết kiệm giúp tích 
            lũy nguồn lực, thì bảo hiểm lại đóng vai trò như một &quot;lá chắn&quot; trước những rủi ro 
            bất ngờ như ốm đau, tai nạn hay các sự cố ngoài ý muốn.
          </p>

          <CalloutBox variant="default" title="Bản chất của bảo hiểm">
            <p>
              Bảo hiểm không phải là một khoản chi &quot;lãng phí&quot; mà là một hình thức chuyển giao 
              rủi ro tài chính. Thay vì phải chi trả một khoản tiền lớn khi xảy ra sự cố, 
              người tham gia bảo hiểm chỉ cần đóng một khoản phí nhỏ định kỳ để được hỗ trợ 
              khi cần thiết.
            </p>
          </CalloutBox>

          <h4 className="text-xl font-semibold text-foreground">Các nguyên tắc quản lý bảo hiểm</h4>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h5 className="mb-2 font-semibold text-foreground">Nguyên tắc ưu tiên</h5>
                <p className="text-sm text-muted-foreground">
                  Chỉ nên tham gia những loại bảo hiểm thực sự cần thiết, tránh chạy theo 
                  xu hướng hoặc mua theo số đông.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h5 className="mb-2 font-semibold text-foreground">Hiểu rõ quyền lợi</h5>
                <p className="text-sm text-muted-foreground">
                  Tìm hiểu kỹ về phạm vi chi trả, các trường hợp loại trừ, thời gian hiệu lực 
                  và quy trình yêu cầu bồi thường.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h5 className="mb-2 font-semibold text-foreground">Cân đối chi phí</h5>
                <p className="text-sm text-muted-foreground">
                  Phí bảo hiểm không nên chiếm tỉ lệ quá lớn trong tổng thu nhập hàng tháng.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h5 className="mb-2 font-semibold text-foreground">Theo dõi thời hạn</h5>
                <p className="text-sm text-muted-foreground">
                  Đóng phí đúng hạn để duy trì hiệu lực bảo hiểm, tránh mất quyền lợi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionBlock>

      {/* Section 6 - Sai lầm */}
      <SectionBlock id="sai-lam-can-tranh" title="6. Những sai lầm cần tránh trong quản lý tài chính cá nhân" level={2}>
        <div className="space-y-6">
          <p className="text-muted-foreground leading-8">
            Trên hành trình làm chủ tài chính, không ít sinh viên đã vô tình rơi vào những 
            &quot;cái bẫy&quot; quen thuộc khiến việc quản lý tiền bạc trở nên khó khăn hơn. 
            Việc nhận diện và tránh xa những cạm bẫy này là điều cần thiết.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {mistakes.map((mistake, index) => (
              <Card key={index} className="border-amber-200 bg-amber-50">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <mistake.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <h4 className="mb-1 font-semibold text-foreground">{mistake.title}</h4>
                      <p className="text-sm text-muted-foreground">{mistake.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <CalloutBox variant="message" title="Lời khuyên">
            <p>
              Hành trình làm chủ tài chính cá nhân không chỉ đòi hỏi kiến thức mà còn cần 
              sự tỉnh táo để nhận diện và tránh xa những &quot;cái bẫy&quot; phổ biến. Sự kiên trì 
              và tinh thần học hỏi chính là yếu tố quyết định giúp mỗi người từng bước 
              hoàn thiện kỹ năng quản lý tài chính của mình.
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>
    </>
  )
}
