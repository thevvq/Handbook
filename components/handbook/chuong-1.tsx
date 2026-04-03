import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'
import { Blockquote } from '@/components/blockquote'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, AlertTriangle, Lightbulb, Target, ClipboardList, RefreshCw, Calculator, BookOpen } from 'lucide-react'

export function Chuong1() {
  const benefits = [
    {
      title: 'Xây dựng tính tự lập và trách nhiệm',
      description: 'Khi biết quản lí tài chính cá nhân, bạn sẽ xây dựng được tính tự lập và trách nhiệm. Việc bắt đầu tự quản lí tài chính, bạn sẽ học được cách sống có trách nhiệm hơn với các quyết định của mình. Kĩ năng này sẽ giúp bạn trưởng thành hơn, giảm bớt sự phụ thuộc vào gia đình và tạo dựng nền tảng cho sự tự chủ tài chính trong tương lai.',
    },
    {
      title: 'Tránh xa cạm bẫy nợ nần',
      description: 'Việc có kế hoạch chi tiêu rõ ràng sẽ giúp sinh viên tránh xa được cạm bẫy nợ nần. Cuộc sống sinh viên có vô vàn các khoản cần chi như học phí, sinh hoạt, giải trí. Nếu thiếu kế hoạch rõ ràng, việc chi tiêu vượt mức rất dễ xảy ra, dẫn đến vay mượn và thậm chí là rơi vào các hình thức tín dụng không lành mạnh. Điều này không chỉ ảnh hưởng tài chính mà còn gây áp lực tâm lý lâu dài.',
    },
    {
      title: 'Hiện thực hóa mong muốn',
      description: 'Khi biết quản lí tài chính cá nhân hiệu quả còn giúp bản thân hiện thực hóa được những mong muốn như mua một chiếc laptop, tham gia một chuyến du lịch hay đầu tư vào khóa học kĩ năng sẽ khó trở thành hiện thực nếu không có kế hoạch tài chính. Quản lý chi tiêu hiệu quả chính là công cụ giúp sinh viên từng bước biến những mục tiêu đó thành hiện thực.',
    },
    {
      title: 'Xây dựng thói quen tài chính tích cực',
      description: 'Việc xây dựng thói quen tài chính tích cực từ sớm sẽ ảnh hưởng lâu dài đến cách mỗi người sử dụng tiền bạc. Khi rèn luyện kĩ năng quản lý tài chính từ thời sinh viên, bạn sẽ có lợi thế lớn khi bước vào cuộc sống đi làm, biết cách chi tiêu hợp lý, tiết kiệm và đầu tư một cách thông minh.',
    },
    {
      title: 'Ổn định tinh thần',
      description: 'Quản lý tài chính không chỉ là kiểm soát tiền bạc mà còn là tạo ra sự ổn định tinh thần. Khi nắm rõ tình hình tài chính cá nhân và có khoản dự phòng cho những tình huống bất ngờ, sinh viên sẽ giảm bớt lo lắng, từ đó tập trung tốt hơn vào học tập và tận hưởng cuộc sống.',
    },
  ]

  const steps = [
    {
      icon: ClipboardList,
      step: 1,
      title: 'Ghi chép và theo dõi mọi chi tiêu',
      description: 'Bước quan trọng và mang tính nền tảng là ghi chép và theo dõi mọi khoản chi tiêu. Việc này giúp sinh viên nhận diện rõ dòng tiền của mình đang được sử dụng như thế nào, từ đó có cơ sở để kiểm soát tài chính. Nếu không theo dõi cụ thể, người học sẽ khó có thể đánh giá mức độ chi tiêu hợp lí hay lãng phí. Các công cụ hỗ trợ như sổ tay, bảng tính Excel hoặc ứng dụng quản lí chi tiêu trên điện thoại đều có thể được sử dụng để duy trì thói quen này một cách thuận tiện.',
    },
    {
      icon: Target,
      step: 2,
      title: 'Phân loại các khoản chi tiêu',
      description: 'Sau khi đã có dữ liệu trong một khoảng thời gian nhất định, sinh viên cần tiến hành phân loại các khoản chi tiêu. Việc phân chia thành các nhóm như chi tiêu cố định, chi tiêu thiết yếu, chi tiêu cho học tập và chi tiêu cá nhân sẽ giúp làm rõ cấu trúc tài chính cá nhân. Thông qua đó, sinh viên có thể dễ dàng nhận ra những khoản chi chưa hợp lí và điều chỉnh kịp thời nhằm tối ưu hóa nguồn lực tài chính của mình.',
    },
    {
      icon: Calculator,
      step: 3,
      title: 'Thiết lập ngân sách',
      description: 'Việc thiết lập ngân sách trở thành bước đi cần thiết nhằm định hướng cho hành vi chi tiêu trong tương lai. Một số nguyên tắc phổ biến như quy tắc 50/30/20 có thể được áp dụng để phân bổ thu nhập một cách hợp lí giữa nhu cầu thiết yếu, nhu cầu cá nhân và tiết kiệm. Tuy nhiên, sinh viên hoàn toàn có thể linh hoạt điều chỉnh tùy theo hoàn cảnh thực tế. Việc xây dựng ngân sách không chỉ giúp kiểm soát chi tiêu mà còn góp phần hình thành tư duy tài chính có kế hoạch.',
    },
    {
      icon: Lightbulb,
      step: 4,
      title: 'Đặt ra mục tiêu tài chính cụ thể',
      description: 'Việc đặt ra mục tiêu tài chính cụ thể đóng vai trò như một động lực quan trọng thúc đẩy quá trình thực hiện ngân sách. Những mục tiêu ngắn hạn như tiết kiệm để mua một món đồ cần thiết, hay mục tiêu dài hạn như tích lũy cho một chuyến du lịch hoặc kế hoạch học tập, đều giúp sinh viên có định hướng rõ ràng trong việc sử dụng tiền bạc. Khi có mục tiêu cụ thể, sinh viên sẽ dễ dàng duy trì kỷ luật tài chính và hạn chế các quyết định chi tiêu mang tính bộc phát.',
    },
    {
      icon: RefreshCw,
      step: 5,
      title: 'Xem lại và điều chỉnh',
      description: 'Để đảm bảo tính hiệu quả và phù hợp của kế hoạch tài chính, sinh viên cần thường xuyên xem xét và điều chỉnh ngân sách. Trong thực tế, các yếu tố như thu nhập, chi phí sinh hoạt hay nhu cầu cá nhân đều có thể thay đổi theo thời gian. Do đó, việc đánh giá lại tình hình chi tiêu định kỳ sẽ giúp phát hiện những sai lệch và kịp thời điều chỉnh chiến lược tài chính, từ đó nâng cao hiệu quả quản lí.',
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
      description: 'Một trong những sai lầm phổ biến của sinh viên là bỏ qua các khoản chi tiêu nhỏ. Nhiều người thường cho rằng những khoản tiền như vài nghìn đồng cho trà đá, gửi xe hay ăn vặt là không đáng kể nên không cần ghi chép. Tuy nhiên, chính những khoản chi tưởng chừng nhỏ nhặt này lại tích lũy theo thời gian và trở thành một con số đáng kể. Việc không kiểm soát được các khoản chi này khiến sinh viên khó có cái nhìn tổng thể về tình hình tài chính của mình. Do đó, ghi chép đầy đủ mọi khoản chi tiêu, dù nhỏ nhất, là một thói quen cần thiết để quản lý tài chính hiệu quả.',
    },
    {
      icon: AlertTriangle,
      title: 'Lạm dụng thẻ tín dụng và "mua trước, trả sau"',
      description: 'Việc lạm dụng thẻ tín dụng và các dịch vụ “mua trước, trả sau” cũng là một cạm bẫy nguy hiểm. Sự tiện lợi của các hình thức thanh toán này khiến việc chi tiêu trở nên dễ dàng hơn bao giờ hết, nhưng cũng chính vì vậy mà sinh viên dễ rơi vào tình trạng chi tiêu vượt quá khả năng chi trả. Khi không có kế hoạch tài chính rõ ràng, các khoản nợ có thể nhanh chóng chồng chất và gây áp lực lớn. Vì vậy, việc sử dụng thẻ tín dụng cần được cân nhắc kĩ lưỡng, chỉ nên áp dụng khi thực sự cần thiết và phải đảm bảo có kế hoạch trả nợ cụ thể.',
    },
    {
      icon: AlertTriangle,
      title: 'Ngân sách quá khắt khe',
      description: 'Ngoài ra, việc đặt ra ngân sách quá khắt khe và thiếu thực tế cũng là một sai lầm đáng lưu ý. Nhiều sinh viên, khi bắt đầu quản lý tài chính, thường cố gắng cắt giảm tối đa các khoản chi tiêu, đặc biệt là chi tiêu cho giải trí và giao lưu. Tuy nhiên, điều này dễ dẫn đến cảm giác áp lực, ngột ngạt và khiến họ nhanh chóng từ bỏ kế hoạch đã đề ra. Một ngân sách hiệu quả cần đảm bảo sự cân bằng giữa tiết kiệm và nhu cầu cá nhân, vừa có tính kỷ luật vừa đủ linh hoạt để duy trì lâu dài.',
    },
    {
      icon: AlertTriangle,
      title: 'Dễ dàng từ bỏ khi thất bại',
      description: 'Tâm lý dễ dàng từ bỏ khi kế hoạch tài chính thất bại cũng là một rào cản lớn. Không ai có thể quản lý tài chính hoàn hảo ngay từ đầu, và việc chi tiêu vượt ngân sách là điều hoàn toàn có thể xảy ra. Thay vì nản lòng, sinh viên cần xem đó là cơ hội để rút kinh nghiệm, phân tích nguyên nhân và điều chỉnh kế hoạch cho phù hợp hơn. Sự kiên trì và tinh thần học hỏi chính là yếu tố quyết định giúp mỗi người từng bước hoàn thiện kĩ năng quản lý tài chính của mình.',
    },
  ]

  return (
    <>
      <SectionBlock id="chuong-1" title="Chương 1: Sinh viên cần học cách quản lý tài chính cá nhân như thế nào?" level={1}>
        <span></span>
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
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
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
      <SectionBlock id="quan-ly-chi-tieu" title="3. Hướng dẫn kĩ năng quản lý chi tiêu" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <Blockquote>
            &quot;Ôi mới đến giữa tháng mà đã cháy túi rồi&quot; - Chắc hẳn đây không còn là những 
            câu cảm thán xa lạ với các bạn sinh viên nữa.
          </Blockquote>

          <p>
            Việc lần đầu, tự tay quản lí một khoản tiền hàng tháng, khoản tiền này dù đến từ gia đình chu cấp hay công việc làm thêm, sẽ luôn đi kèm với những cám dỗ trong việc chi tiêu. Cẩm nang này sẽ giúp bạn kiểm soát chi tiêu, tránh việc  &quot;hết tiền giữa tháng&quot;, giảm stress và hình thành thói quen chi tiêu hợp lí.
          </p>

          <CalloutBox variant="default" title="Kĩ năng quản lý chi tiêu là gì?">
            <p>
              Là khả năng lập kế hoạch, theo dõi và kiểm soát các khoản chi ra hàng ngày cũng 
              như hàng tháng. Kĩ năng này bao gồm việc phân loại chi tiêu thành hai nhóm chính: 
              <strong> cần thiết</strong> (ăn uống, học tập, nhà ở, di chuyển) và <strong>mong muốn</strong> 
              (giải trí, mua sắm theo cảm tính).
            </p>
          </CalloutBox>

          <p>Vai trò của kĩ năng quản lý chi tiêu trong đời sống sinh viên rất quan trọng. Kĩ năng này giúp tránh tình trạng “cháy túi” cuối tháng, giảm stress học tập và tạo sự tập trung cao hơn vào việc học cũng như phát triển bản thân. Nó xây dựng thói quen trách nhiệm tài chính, chuẩn bị tốt cho cuộc sống độc lập sau tốt nghiệp, đồng thời ngăn ngừa nợ nần từ thẻ tín dụng hay vay online – những vấn đề đang khiến nhiều bạn rơi vào vòng xoáy lãi suất cao.</p>

          <p>Bắt đầu quản lý chi tiêu có thể khiến bạn – đặc biệt là sinh viên mới – cảm thấy hơi choáng ngợp, nhất là khi phải tự lo từ tiền nhà trọ, ăn uống đến học tập ở thành phố lớn như TP. Hồ Chí Minh. Tuy nhiên, mọi thứ sẽ trở nên dễ dàng và hiệu quả hơn nếu bạn đi theo một lộ trình rõ ràng, từng bước một. Dưới đây là 5 bước quản lý chi tiêu hợp lý dành riêng cho sinh viên mới bắt đầu, giúp bạn kiểm soát tài chính mà vẫn tận hưởng cuộc sống sinh viên.</p>

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
          <p>Quản lí chi tiêu cá nhân là một quá trình liên tục, đòi hỏi sự kiên trì và ý thức tự giác cao. Việc thực hiện đầy đủ các bước từ theo dõi, phân loại, lập ngân sách, đặt mục tiêu đến điều chỉnh sẽ giúp sinh viên không chỉ kiểm soát tốt tài chính hiện tại mà còn xây dựng nền tảng vững chắc cho tương lai.</p>

        </div>
      </SectionBlock>

      {/* Section 4 - Tiết kiệm */}
      <SectionBlock id="tiet-kiem" title="4. Hướng dẫn kĩ năng quản lý tiết kiệm" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Trong bối cảnh chi phí sinh hoạt ngày càng gia tăng, kĩ năng quản lí tiết kiệm trở thành một năng lực thiết yếu đối với sinh viên. Đây không chỉ là khả năng cắt giảm các chi tiêu mà còn là quá trình chủ động kiểm soát tài chính cá nhân nhằm tạo ra nguồn tiền tích lũy cho hiện tại và tương lai. Việc hình thành thói quen tiết kiệm từ sớm giúp sinh viên nâng cao tính tự lập, giảm sự phụ thuộc vào gia đình và xây dựng nền tảng tài chính vững chắc cho cuộc sống sau này.
          </p>

          <CalloutBox variant="tip" title="Hiểu đúng về tiết kiệm">
            <p>
              Để quản lí tiết kiệm hiệu quả, sinh viên cần hiểu đúng bản chất của tiết kiệm. Tiết kiệm không đồng nghĩa với việc chi tiêu khắt khe hay từ bỏ hoàn toàn các nhu cầu cá nhân, mà là sự cân đối hợp lí giữa <strong>&quot;cần&quot;</strong> và <strong>&quot;muốn&quot;</strong>. 
              Một người có kĩ năng tiết kiệm tốt là người biết ưu tiên các khoản chi thiết yếu, đồng thời hạn chế những khoản chi không cần thiết. Nhờ đó, sinh viên vẫn có thể duy trì chất lượng cuộc sống mà không rơi vào tình trạng thiếu hụt tài chính.
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
                Một trong những nguyên tắc quan trọng của kĩ năng tiết kiệm là “trả cho bản thân trước”. Ngay khi nhận được tiền trợ cấp hoặc thu nhập từ công việc bán thời gian, sinh viên nên trích ra một phần nhất định, thường từ <strong>10% đến 20%</strong>, 
                để dành riêng cho tiết kiệm. Việc này giúp hình thành thói quen tích lũy 
                đều đặn và tránh tình trạng &quot;tiêu hết rồi mới nghĩ đến tiết kiệm&quot;. Bên cạnh đó, việc áp dụng các mô hình phân bổ tài chính như quy tắc 50-30-20 (hoặc điều chỉnh linh hoạt phù hợp với điều kiện cá nhân) cũng là một cách hiệu quả để kiểm soát chi tiêu và gia tăng khả năng tiết kiệm.
              </p>
            </CardContent>
          </Card>

          <p>Việc ghi chép và theo dõi chi tiêu hằng ngày đóng vai trò quan trọng trong quá trình quản lí tiết kiệm. Nhiều sinh viên thường bỏ qua những khoản chi nhỏ như tiền ăn vặt, gửi xe hay mua sắm linh tinh, tuy nhiên khi cộng dồn lại, những khoản chi này có thể chiếm một phần đáng kể trong ngân sách. Do đó, việc ghi chép đầy đủ giúp sinh viên nhận diện được các “lỗ hổng tài chính” và từ đó điều chỉnh hành vi chi tiêu một cách hợp lí hơn.</p>

          <h4 className="text-xl font-semibold text-foreground">Các phương pháp tiết kiệm phổ biến</h4>
          <ul className="space-y-3">
            {savingMethods.map((method, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{method}</span>
              </li>
            ))}
          </ul>

          <p>Những phương pháp này không chỉ giúp gia tăng số tiền tích lũy mà còn rèn luyện tính kỉ luật trong quản lí tài chính.</p>

          <p>Tuy nhiên, trong quá trình thực hiện, sinh viên cũng dễ mắc phải một số sai lầm phổ biến như chỉ tiết kiệm khi còn dư tiền, không đặt mục tiêu rõ ràng hoặc rút tiền tiết kiệm cho các nhu cầu không cần thiết. Những sai lầm này làm giảm hiệu quả của việc tiết kiệm và khiến sinh viên khó đạt được mục tiêu tài chính đã đề ra. Vì vậy, việc xây dựng kế hoạch tiết kiệm cụ thể và kiên trì thực hiện là yếu tố quyết định đến sự thành công của quá trình này.</p>

          <p>Kĩ năng quản lí tiết kiệm là một trong những nền tảng quan trọng giúp sinh viên làm chủ tài chính cá nhân. Thông qua việc hiểu đúng về tiết kiệm, áp dụng các nguyên tắc phù hợp và duy trì thói quen tích lũy đều đặn, sinh viên không chỉ cải thiện đời sống hiện tại mà còn chuẩn bị tốt hơn cho tương lai. Đây là kĩ năng cần được rèn luyện liên tục và có ý thức để trở thành một phần không thể thiếu trong hành trang trưởng thành của mỗi người.</p>

        </div>
      </SectionBlock>

      {/* Section 5 - Bảo hiểm */}
      <SectionBlock id="bao-hiem" title="5. Hướng dẫn kĩ năng quản lý bảo hiểm" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Kĩ năng quản lí bảo hiểm cũng là một trong những kĩ năng giữ vai trò quan trọng 
            trong việc đảm bảo an toàn tài chính cho sinh viên. Trong khi tiết kiệm giúp tích 
            lũy nguồn lực, thì bảo hiểm lại đóng vai trò như một &quot;lá chắn&quot; trước những rủi ro 
            bất ngờ như ốm đau, tai nạn hay các sự cố ngoài ý muốn. Đối với sinh viên – nhóm đối tượng thường có nguồn thu nhập hạn chế – việc hiểu và sử dụng bảo hiểm một cách hợp lí sẽ góp phần giảm thiểu gánh nặng tài chính cho bản thân và gia đình.
          </p>

          <CalloutBox variant="default" title="Bản chất của bảo hiểm">
            <p>
              Sinh viên cần nhận thức đúng về ý nghĩa của bảo hiểm. Bảo hiểm không phải là một khoản chi &quot;lãng phí&quot; mà là một hình thức chuyển giao 
              rủi ro tài chính. Thay vì phải chi trả một khoản tiền lớn khi xảy ra sự cố, 
              người tham gia bảo hiểm chỉ cần đóng một khoản phí nhỏ định kỳ để được hỗ trợ 
              khi cần thiết.
            </p>
          </CalloutBox>

          <p>Trong các loại bảo hiểm hiện nay, bảo hiểm y tế là loại hình thiết yếu mà sinh viên cần ưu tiên tham gia. Đây thường là loại bảo hiểm bắt buộc trong môi trường học đường, giúp chi trả một phần đáng kể chi phí khám chữa bệnh. Bên cạnh đó, sinh viên cũng có thể cân nhắc tham gia bảo hiểm tai nạn hoặc bảo hiểm sức khỏe tự nguyện tùy theo điều kiện tài chính và nhu cầu cá nhân. Việc lựa chọn loại bảo hiểm phù hợp cần dựa trên mức độ rủi ro, khả năng chi trả cũng như môi trường sinh hoạt và học tập của mỗi người.</p>

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
                  Tìm hiểu kĩ về phạm vi chi trả, các trường hợp loại trừ, thời gian hiệu lực 
                  và quy trình yêu cầu bồi thường.. Điều này giúp tránh những hiểu lầm không đáng có và đảm bảo quyền lợi khi xảy ra sự cố.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h5 className="mb-2 font-semibold text-foreground">Cân đối chi phí</h5>
                <p className="text-sm text-muted-foreground">
                  Phí bảo hiểm không nên chiếm tỉ lệ quá lớn trong tổng thu nhập hàng tháng, bởi điều này có thể gây áp lực tài chính và ảnh hưởng đến các nhu cầu thiết yếu khác. 
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

          <p>Tuy nhiên, trên thực tế, nhiều sinh viên vẫn chưa quan tâm đúng mức đến bảo hiểm hoặc có những hiểu lầm phổ biến như cho rằng mình còn trẻ nên ít gặp rủi ro, hoặc chỉ tìm hiểu sơ sài trước khi tham gia. Những nhận thức này có thể dẫn đến việc lựa chọn bảo hiểm không phù hợp hoặc bỏ lỡ những lợi ích quan trọng. Do đó, việc trang bị kiến thức cơ bản về bảo hiểm là điều cần thiết để sinh viên có thể đưa ra quyết định đúng đắn.</p>

          <p>Kĩ năng quản lí bảo hiểm là một phần không thể thiếu trong quản lí tài chính cá nhân của sinh viên. Nếu như tiết kiệm giúp tạo dựng nền tảng tài chính, thì bảo hiểm lại giúp bảo vệ nền tảng đó trước những biến cố bất ngờ. Việc kết hợp hài hòa giữa hai kĩ năng này sẽ giúp sinh viên không chỉ sống chủ động hơn trong hiện tại mà còn vững vàng hơn trước những thách thức trong tương lai.</p>

        </div>
      </SectionBlock>


      {/* Section 6 - Sai lầm */}
      <SectionBlock id="sai-lam-can-tranh" title="6. Những sai lầm cần tránh trong quản lý tài chính cá nhân" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Trên hành trình làm chủ tài chính, không ít sinh viên đã vô tình rơi vào những 
            &quot;cái bẫy&quot; quen thuộc khiến việc quản lý tiền bạc trở nên khó khăn hơn. 
            Việc nhận diện và tránh xa những cạm bẫy này là điều cần thiết để xây dựng thói quen tài chính lành mạnh và bền vững.
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
              sự tỉnh táo để nhận diện và tránh xa những &quot;cái bẫy&quot; phổ biến. Từ việc kiểm soát những khoản chi nhỏ, sử dụng hợp lý các công cụ tài chính, xây dựng quỹ dự phòng, đến việc thiết lập ngân sách phù hợp và duy trì sự kiên trì, tất cả đều góp phần hình thành một nền tảng tài chính vững chắc. Đối với sinh viên, đây không chỉ là kĩ năng cần thiết cho hiện tại mà còn là hành trang quan trọng cho tương lai tự lập và thành công.
            </p>
          </CalloutBox>
        </div>
      </SectionBlock>
    </>
  )
}
