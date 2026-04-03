import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'
import { Blockquote } from '@/components/blockquote'
import { PiggyBank } from "lucide-react"
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
      title: 'Nâng cao hiệu quả và tính đúng đắn trong việc ra quyết định',
      description: ' Sự am hiểu về tài chính giúp sinh viên đưa ra các quyết định quản lí ngân quỹ cá nhân một cách thuận tiện và hiệu quả hơn. Khi nắm vững các kiến thức về lãi suất ngân hàng và các quy tắc quản lí, sinh viên có khả năng đưa ra những lựa chọn đúng đắn để đạt được mục tiêu tài chính như mong muốn.',
    },
    {
      icon: Shield,
      title: 'Kiểm soát hành vi sử dụng công cụ tài chính',
      description: 'Kiến thức tài chính là yếu tố quan trọng chi phối các quyết định sử dụng thẻ tín dụng. Những sinh viên thiếu hiểu biết thường có nguy cơ cao trở thành nạn nhân của các hình thức tiếp thị tín dụng không lành mạnh, dẫn đến tình trạng nợ nần hoặc bị lừa đảo. Việc phân biệt được sự khác nhau giữa thẻ ghi nợ và thẻ tín dụng giúp sinh viên thiết lập ranh giới chi tiêu rõ ràng.',
    },
    {
      icon: AlertTriangle,
      title: 'Hạn chế rủi ro và ứng phó với biến cố',
      description: 'Hiểu biết về tài chính giúp sinh viên nhận diện và hạn chế các rủi ro trong quá trình học tập và sinh hoạt. Đặc biệt, kiến thức về các bước lập kế hoạch tài chính được đánh giá là yếu tố then chốt giúp sinh viên chủ động ứng phó kịp thời với các tình huống cấp bách hoặc biến cố bất ngờ trong cuộc sống.',
    },
    {
      icon: Target,
      title: 'Định hướng kế hoạch dài hạn và tích lũy',
      description: 'Người có kiến thức tài chính thường có xu hướng tốt hơn trong việc lập kế hoạch tích lũy, tiết kiệm và đầu tư cho tương lai. Sự hiểu biết về các sản phẩm tài chính như bảo hiểm sức khỏe, tài khoản tiết kiệm giúp sinh viên có cái nhìn tích cực và ưu tiên dành một khoản tiền dự phòng cho những mục tiêu lâu dài thay vì chỉ chi tiêu cho nhu cầu hiện tại.',
    },
    {
      icon: Heart,
      title: 'Củng cố tâm lý và chất lượng cuộc sống',
      description: 'Việc nắm vững kĩ năng ra quyết định liên quan đến tiền bạc giúp sinh viên giảm thiểu áp lực tài chính, mang lại sự an tâm và nâng cao chất lượng cuộc sống trong bối cảnh vật giá leo thang. Đối với sinh viên sư phạm, kiến thức này còn giúp họ có đủ năng lực để giáo dục tài chính cho thế hệ học sinh tương lai.',
    },
  ]

  const risks = [
    {
      title: 'Bẫy tài chính',
      description: 'Dễ sa chân vào tín dụng đen hoặc các chiêu trò, đường dây lừa đảo "việc nhẹ lương cao" do áp lực thiếu hụt tiền bạc.',
    },
    {
      title: 'Mất cân bằng cuộc sống',
      description: 'Phải làm thêm quá sức để trang trải sinh hoạt phí, gây ảnh hưởng trực tiếp đến kết quả học tập. Đặc biệt với cuộc sống hiện đại, sinh viên dễ dàng sử dụng tốt các phương thức thanh toán điện tử, các hình thức tiêu dùng trực tuyến nhưng chưa thực sự kiểm soát tốt chúng. Điều này gia tăng khả năng xảy ra các tình huống tiêu cực trong cuộc sống của sinh viên.',
    },
    {
      title: 'Khả năng chịu rủi ro kém',
      description: 'Khi gặp phải những biến cố bất chợt trong cuộc sống cần một khoản tiền lớn (hỏng xe, ốm đau), bạn dễ rơi vào trạng thái khủng hoảng vì không có quỹ dự phòng. Vì vậy, việc quản lí tài chính cá nhân sẽ giúp chúng ta có được ngân quỹ tiết kiệm, cùng sự khéo léo trong việc xoay sở nguồn tài chính để ứng phó kịp thời với tình huống cấp bách một cách hiệu quả nhất.',
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
        'Lập kế hoạch và ngân sách: Chia thu nhập (từ gia đình/làm thêm) vào các mục như ăn uống, học tập, di chuyển, giải trí. Tuyệt đối không tiêu lạm từ mục này sang mục khác.',
        'So sánh giá trước khi mua: Trước khi thanh toán, hãy so sánh giá cả và chất lượng và tự đặt câu hỏi: “Món đồ này có thật sự cần thiết mua ngay lúc này không?”',
        'Thanh toán đúng hạn: Ưu tiên hóa đơn thiết yếu như tiền nhà, điện nước, học phí,..v.v trước để tránh áp lực tâm lý hoặc thiếu hụt vào các khoản chi khi đã sử dụng hết tiền.',
        'Ghi chép và xem lại hóa đơn: Thực hiện việc ghi chú lại các khoản chi tiêu và thường xuyên xem lại để nhận diện những khoản chưa hợp lí nhằm điều chỉnh kịp thời.',
      ],
    },
    {
      step: 2,
      title: 'Xây dựng thói quen tiết kiệm và dự phòng',
      items: [
        'Nguyên tắc "Tiết kiệm trước, chi tiêu sau": Thay vì chỉ tiết kiệm phần tiền thừa cuối tháng, sinh viên nên trích lập một khoản cố định từ thu nhập hằng tháng ngay khi nhận được. Trích ngay 10-20% thu nhập vào một tài khoản riêng biệt ngay khi nhận tiền. Đây là khoản tiền dành cho “tương lai của bạn”.',
        'Thiết lập quỹ dự phòng khẩn cấp: Duy trì một khoản tiền riêng biệt để ứng phó với các biến cố bất ngờ hoặc tình huống cấp bách trong cuộc sống (ít nhất bằng 2 tháng sinh hoạt phí) và luôn đóng bảo hiểm y tế đầy đủ. Đây là cách bạn bảo vệ mình trước những biến cố, các rủi ro về sức khỏe và tài chính.'
      ],
    },
    {
      step: 3,
      title: 'Ứng dụng công nghệ và công cụ hỗ trợ',
      items: [
        'App quản lí thu chi: Sử dụng các ứng dụng (như Momo, Spendee...) để ghi chép hóa đơn ngay tức thì. Biểu đồ phân tích từ App sẽ cho bạn biết “lỗ hổng” tài chính của bạn nằm ở đâu.',
        'Nhật ký tài chính: Mỗi cuối tuần, hãy dành 5 phút xem lại lịch sử giao dịch. Việc này giúp bạn nhận diện những “khoản chi mù” và điều chỉnh kịp thời cho tuần tới.',
        'Tham khảo tài liệu hướng dẫn: Chủ động đọc và học từ các cẩm nang, tài liệu tài chính để hiểu đúng và điều chỉnh thói quen chi tiêu của mình, từ đó tránh những sai lầm không cần thiết và dần nâng cao khả năng tự học, tự quản lý.',
      ],
    },
    {
      step: 4,
      title: 'Nâng cao năng lực tự chủ',
      items: [
        'Học cách từ chối: Biết nói “Không” với những cuộc vui vượt quá ngân sách hoặc những nhu cầu mua sắm theo cảm xúc nhất thời. Rèn luyện khả năng tự kiểm soát bản thân để giúp cá nhân kiên định với mục tiêu tài chính, biết cách từ chối các nhu cầu mua sắm nhất thời theo cảm xúc.',
        'Học hỏi từ gia đình và cộng đồng: Chủ động thảo luận với cha mẹ để nhận được những lời khuyên thực tế về quản lí ngân sách và tham gia các buổi workshop, câu lạc bộ về tài chính để cập nhật kiến thức',
        'Mở rộng vòng kết nối: Thảo luận thẳng thắn với cha mẹ về ngân sách gia đình và tham gia các cộng đồng tài chính văn minh để cập nhật kiến thức mới.',
        'Thực hành viết nhật ký tài chính: Sử dụng các bài tập vận dụng và ghi chép nhật ký mỗi ngày để tự đánh giá mức độ tiến bộ trong việc kiểm soát hành vi tài chính của bản thân.'
      ],
    },
  ]

  const swotItems = [
    {
      title: 'Strengths (Điểm mạnh)',
      subtitle: 'Điều bạn đang làm tốt',
      description: 'Trước khi lập kế hoạch, cần xác định những lợi thế cá nhân như có thói quen tiết kiệm, biết quản lí chi tiêu hoặc có nguồn thu nhập ổn định. Những yếu tố này giúp bạn đặt ra mục tiêu và ngân sách phù hợp với năng lực thực tế.',
      color: 'bg-primary/5 border-primary/20',
    },
    {
      title: 'Weaknesses (Điểm yếu)',
      subtitle: 'Điểm cần kiểm soát',
      description: 'Các hạn chế như chi tiêu theo cảm xúc, thiếu kỷ luật hoặc dễ bị tác động bởi môi trường cần được đưa vào kế hoạch như những “rủi ro nội tại”. Từ đó, bạn có thể thiết kế các nguyên tắc kiểm soát cụ thể để hạn chế chúng.',
      color: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Opportunities (Cơ hội)',
      subtitle: 'Nguồn lực hỗ trợ',
      description: 'Những yếu tố bên ngoài như công cụ quản lí tài chính, cơ hội tăng thu nhập hoặc môi trường học tập tích cực có thể được tích hợp vào kế hoạch nhằm nâng cao hiệu quả thực hiện.',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Threats (Thách thức)',
      subtitle: 'Rào cản cần dự phòng',
      description: 'Áp lực từ bạn bè, thói quen tiêu dùng theo xu hướng hay những khoản chi bất ngờ đều có thể làm bạn mất kiểm soát. Khi lường trước được, bạn sẽ bình tĩnh hơn trong từng quyết định chi tiêu. ',
      color: 'bg-red-50 border-red-200',
    },
  ]

  return (
    <>
      <SectionBlock id="chuong-2" title="Chương 2: Các yếu tố ảnh hưởng xoay quanh sinh viên khi quản lý tài chính" level={1}>
        <span></span>
      </SectionBlock>

      {/* Section I - Nền tảng kiến thức */}
      <SectionBlock id="nen-tang-kien-thuc" title="I. Nền tảng kiến thức về tài chính" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <h4 className="text-xl font-semibold text-foreground">
            1.1. Vai trò của kiến thức tài chính đến quyết định của sinh viên
          </h4>
          
          <p>
            Kiến thức tài chính đóng vai trò là nền tảng cốt lõi và là &quot;kim chỉ nam&quot; giúp 
            sinh viên đưa ra các quyết định tài chính và quản lí tiền bạc một cách hiệu quả, 
            chủ động và trách nhiệm. Vai trò này được thể hiện cụ thể qua các khía cạnh sau:
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

          <p>
            Hiện nay, thế hệ sinh viên thời đại mới đang ngày càng quan tâm hơn đến &quot;sức khỏe 
            tài chính&quot; của bản thân. Tuy nhiên, giữa việc &quot;biết&quot; và &quot;làm&quot; vẫn còn một khoảng 
            cách khá lớn. Tuy sinh viên đã có nhận thức nhất định về các khái niệm tài chính cơ bản, nhưng lại chưa thực sự hiểu sâu và vận dụng hiệu quả vào thực tiễn. Điều này dẫn đến tình trạng  thiếu kiểm soát chi tiêu, chưa có kế hoạch tài chính rõ ràng và dễ bị tác động bởi các xu hướng tiêu dùng nhất thời. Mức độ am hiểu về tài chính của phần lớn sinh viên hiện nay vẫn chưa thật sự vững và còn khác nhau giữa mỗi người. Vì vậy, mỗi bạn sẽ có những điểm mạnh riêng trong cách quản lí tiền của mình:
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
                    <span><strong>Lập kế hoạch:</strong>Đây là mảng được nắm vững nhất. Cho thấy chúng ta ý thức rõ tầm quan trọng của việc lên kế hoạch để hạn chế rủi ro. Phần lớn chúng ta đều ý thức được rằng muốn an toàn thì phải có kế hoạch.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span><strong>Sử dụng dịch vụ ngân hàng:</strong> : Sinh viên hiện nay dành nhiều sự quan tâm đến việc sử dụng tài khoản ngân hàng cho các giao dịch hàng ngày và tích lũy cho tương lai.</span>
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

          <h4 className="text-xl font-semibold text-foreground">
            1.3. Ảnh hưởng của hiểu biết tài chính đến việc lựa chọn và sử dụng các nguồn tài chính
          </h4>

          <p>
            Trong thế giới tài chính đầy cạm bẫy, &quot;Tấm bản đồ&quot; thông minh mà chúng ta cần chính 
            là kiến thức tài chính. Trước các lựa chọn rủi ro, những kiến thức này đóng vai trò 
            &quot;la bàn định hướng&quot; và là nền tảng cốt lõi chi phối cách thức lựa chọn cũng như sử dụng 
            các nguồn tài chính của sinh viên.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Lựa chọn công cụ thanh toán & Tránh rủi ro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h5 className="mb-2 font-semibold text-foreground">Lựa chọn công cụ thanh toán phù hợp:</h5>
                  <p>
                    Bạn sẽ biết khi nào nên dùng Thẻ ghi nợ để kiểm soát chi tiêu trong tầm tay, 
                    và khi nào nên cẩn trọng với Thẻ tín dụng để không biến mình thành &quot;con nợ&quot; 
                    của lãi suất. Điều này giúp chúng ta có ranh giới chi tiêu rõ ràng, giảm việc 
                    chi tiêu vượt mức và tránh được những rủi ro nợ nần do sử dụng không kiểm soát.
                  </p>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold text-foreground">Tránh các rủi ro tài chính một cách thông minh:</h5>
                  <p>
                    Hiểu biết tài chính giúp bạn nhận ra và nói &quot;Không&quot; với những cạm bẫy như 
                    tín dụng đen, đa cấp hay các lời mời &quot;việc nhẹ lương cao&quot; đầy rẫy trên mạng 
                    xã hội. Bạn sẽ tỉnh táo hơn trước những lựa chọn tưởng chừng hấp dẫn nhưng 
                    tiềm ẩn nhiều nguy cơ.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Sử dụng và quản lí nguồn thu nhập</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Việc sử dụng và quản lí nguồn tài chính của bản thân cũng là 1 nghệ thuật cần được thực hiện. Quản lí tiền không phải là điều gì quá phức tạp, mà là cách bạn hiểu và sử dụng những gì mình đang có một cách hợp lý. Khi có kiến thức tài chính, bạn sẽ biết cách chủ động hơn trong việc chi tiêu và không còn rơi vào tình trạng “thiếu trước hụt sau vào cuối tháng”.
                </p>
                <p>
                  Khi hiểu giá trị của đồng tiền mình nhận được (từ gia đình, làm thêm hay học bổng), bạn sẽ tự nhiên trân trọng hơn và suy nghĩ kĩ hơn trước khi chi tiêu. Thay vì tiêu theo cảm xúc. Bạn cần phân bổ nguồn tiền vào từng hạng mục chi tiêu hợp lí, bạn đưa ra các quyết định quản lí ngân quỹ hiệu quả hơn. Đó chính là cách thức để bạn có thể quản lí dòng tiền hiệu quả. Bạn sẽ biết chia tiền cho những khoản cần thiết như học phí, ăn ở, sinh hoạt.
                </p>
              </CardContent>
            </Card>
          </div>

          <h5 className="text-lg font-medium text-foreground">
            Định hướng sử dụng tài chính cho mục tiêu dài hạn
          </h5>

          <p>
            Chúng ta cần có tầm nhìn xa để nắm trong tay những lợi ích tốt nhất cho cuộc sống của 
            bản thân. Đừng đợi đến khi đi làm mới nghĩ đến chuyện tích lũy. Hãy nắm bắt từ việc 
            tiết kiệm và bảo vệ. Hiểu biết tài chính giúp bạn nhìn thấy sức mạnh của Lãi suất kép 
            và sự an toàn của Bảo hiểm.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <PiggyBank className="h-5 w-5 text-blue-600" />
                  Xây dựng quỹ dự phòng từ tiết kiệm
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="mb-2">
                  Sẽ thật stress nếu bất ngờ xảy ra sự cố như hỏng xe, mất điện thoại hay đau ốm 
                  cần một khoản tiền lớn nhưng trong túi lại rỗng. Bạn sẽ hiểu rằng một khoản tiết 
                  kiệm nhỏ mỗi tháng chính là chiếc &quot;phao cứu sinh&quot; cho những sự cố bất ngờ ấy.
                </p>
                <p>
                  Để đạt được các mục tiêu lâu dài, hiểu biết về lãi suất và các quy tắc quản lí 
                  giúp chúng ta có xu hướng tiết kiệm và tích lũy tốt hơn.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Shield className="h-5 w-5 text-green-600" />
                  Chủ động bảo vệ bằng bảo hiểm
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Thay vì coi bảo hiểm y tế hay bảo hiểm sức khỏe là một khoản phí mất đi, bạn hãy 
                  nhìn nhận chúng như một công cụ bảo vệ tài chính thông minh. Đó là khoản chi chủ 
                  động để bảo vệ bản thân trước rủi ro tài chính khi gặp tai nạn hay bệnh tật, giúp 
                  bạn không rơi vào kiệt quệ.
                </p>
              </CardContent>
            </Card>
          </div>

          <h5 className="text-lg font-medium text-foreground">
            Cải thiện hành vi
          </h5>

          <p>
            Khi có kiến thức, thái độ của chúng ta với đồng tiền sẽ thay đổi hoàn toàn. Khi thái độ 
            thay đổi, nó sẽ góp phần vào việc nâng tầm chất lượng sống. Trạng thái của bạn sẽ tốt hơn, 
            không còn những cơn căng thẳng, những nỗi lo âu.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Brain className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h5 className="font-semibold text-foreground mb-1">Chuyển đổi từ nhận thức sang hành động</h5>
                <p className="text-muted-foreground">
                  Hình thành thái độ tài chính tích cực từ kiến thức tài chính của bạn. Từ đó bạn sẽ 
                  tạo lập những hành vi tài chính thông minh như so sánh giá cả trước khi mua sắm và 
                  thanh toán hóa đơn đúng hạn. Điều này thay thế sự &quot;căng thẳng&quot; bằng &quot;tự tin&quot;. Vì bạn không còn lo sợ khi đối mặt với hóa đơn cuối tháng, vì bạn đã có kế hoạch từ đầu. 
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Heart className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h5 className="font-semibold text-foreground mb-1">Giảm áp lực tài chính với hành vi tiêu dùng thông minh</h5>
                <p className="text-muted-foreground">
                  Sự am hiểu giúp bạn tự tin hơn trong việc kiểm soát mức sống, giảm bớt căng thẳng tài chính và nâng cao chất lượng cuộc sống trong thời kỳ vật giá leo thang. Bạn cần hình thành thói quen so sánh giá, săn khuyến mãi một cách lý trí và thanh toán các khoản phí đúng hạn để xây dựng “điểm tín dụng” tốt cho tương lai.
                </p>
              </div>
            </div>
          </div>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              Hiểu biết tài chính không chỉ là những con số hay lý thuyết khô khan, mà là hành trang 
              giúp bạn tự tin bước vào cuộc sống, biết trân trọng giá trị đồng tiền và dần vững vàng hơn trên con đường tự lập, tự chủ tài chính. <strong>&quot;Quản lý 
              tài chính không phải là điều lớn lao, mà bắt đầu từ những lựa chọn rất nhỏ mỗi ngày.&quot;</strong>
            </p>
          </CalloutBox>

          <p>
            Bạn có thể bắt đầu bằng việc xây dựng cho mình một thái độ tích cực với tiền bạc từ những 
            điều mình đã biết. Đừng chỉ dừng lại ở việc &quot;hiểu&quot;, mà hãy biến nó thành những thói quen 
            nhỏ mỗi ngày: so sánh giá trước khi mua, thanh toán đúng hạn, tận dụng khuyến mãi một cách 
            hợp lý, không mua theo cảm xúc và ưu tiên những thứ thực sự cần, có giá trị lâu dài hơn là 
            chạy theo xu hướng.
          </p>
        </div>
      </SectionBlock>

      {/* Section II - Hành vi tài chính */}
      <SectionBlock id="hanh-vi-tai-chinh" title="II. Các hành vi tài chính ở sinh viên" level={2}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <h4 className="text-xl font-semibold text-foreground">
            2.1. Biểu hiện hành vi tài chính phổ biến
          </h4>

          <p>
            Hãy dành một chút thời gian để nhìn lại cách mình đang sử dụng tiền mỗi ngày. Quản lý tài chính 
            không chỉ là xem xét, kiểm tra những con số trên màn hình điện thoại trong các app giao dịch 
            của bạn mỗi ngày và luôn tự hỏi &quot;Sao tháng này tiền của mình đâu hết rồi nhỉ?&quot;. 
            Chính những hành động nhỏ hằng ngày sẽ dần định hình tình hình tài chính của bạn. Hành động 
            và hành vi tài chính của chúng ta rất quan trọng trong việc định hình tình hình tài chính 
            của bản thân. Và hơn thế bạn có biết rằng Tổ chức Hợp tác và Phát triển Kinh tế OECD (2020) 
            nghiên cứu rằng nó có thể tác động đến hạnh phúc của cá nhân.
          </p>

          <p>
            Dù quản lý tài chính là một kĩ năng rất quan trọng, nhiều bạn trẻ vẫn đang trong quá trình 
            học cách sử dụng tiền một cách chủ động và có ý thức hơn. Sự tiện lợi của thanh toán số 
            giúp cuộc sống dễ dàng hơn, nhưng cũng khiến việc chi tiêu trở nên nhanh chóng, đôi khi 
            thiếu đi sự cân nhắc cần thiết.
          </p>

          <h5 className="text-lg font-medium text-foreground">1. Hành vi quản lý tiền hàng ngày</h5>

          <p>
            Nhìn lại thói quen của mình, bạn có thể thấy:
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Điểm tích cực</h6>
                <p className="text-muted-foreground">
                  Bạn biết lựa chọn thông minh khi mua sắm, cân nhắc giá cả và tận dụng các ưu đãi hợp lý. 
                  Nhiều bạn cũng có trách nhiệm trong việc thanh toán đúng hạn, từ đó xây dựng thói quen tài chính lành mạnh.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Điểm cần cải thiện</h6>
                <p className="text-muted-foreground">
                  Chúng ta dùng App để tiêu tiền rất nhanh, nhưng lại lười dùng App để ghi chép. Việc bỏ qua 
                  thói quen kiểm tra lại hóa đơn khiến dòng tiền của bạn rơi vào trạng thái &quot;bay màu&quot; 
                  không dấu vết. Việc hạn chế trong kiểm soát chi tiêu như vậy sẽ dẫn đến khó kiểm soát tần suất chi tiêu thực tế.
                </p>
              </div>
            </div>
            <CalloutBox variant="message" title="Lời nhắn">
              <p>
                Khoảng cách lớn nhất không phải là từ &quot;Không biết&quot; đến &quot;Biết&quot;, mà là từ 
                &quot;Biết&quot; đến &quot;Thực hành&quot;. Hiểu được tầm quan trọng của việc quản lý tiền đã là 
                một bước ngoặt rất tốt. Nhưng để cuộc sống thay đổi, bản thân cần tiến lên mỗi ngày, bắt đầu 
                từ những việc nhỏ như ghi lại chi tiêu hay để dành một phần tiền ngay khi nhận được.
              </p>
            </CalloutBox>
          </div>

          <h5 className="text-lg font-medium text-foreground">2. Hành vi tiết kiệm và dự phòng</h5>

          <p>
            Có một sự thật khá phổ biến, đó là sinh viên thường chọn &quot;Chi tiêu cho đam mê trước, tiết kiệm 
            phần thừa sau&quot;. Đây là cuộc chiến luôn diễn ra trong trí óc chúng ta giữa &quot;Tận hưởng&quot; và 
            &quot;Tiết kiệm&quot;. Hệ quả nó gây ra là việc tiết kiệm không được thực hiện đều đặn mỗi tháng, nền tảng 
            tài chính không vững chắc. Nếu tháng đó có nhiều cuộc vui chơi, tận hưởng thiếu kiểm soát, khoản tiết kiệm sẽ bằng 0.
          </p>

          <p>
            Bạn biết rằng cần có một khoản phòng thân cho lúc ốm đau hay hỏng xe, nhưng việc duy trì nó lại 
            mang tính tùy hứng, không tích lũy được mục tiêu dài hạn.
          </p>

          <h5 className="text-lg font-medium text-foreground">3. Hành vi tín dụng và các rủi ro tài chính</h5>

          <p>
            Sức mạnh của thẻ tín dụng và các gói &quot;Mua trước trả sau&quot; (BNPL) đang mời gọi sinh viên hơn 
            bao giờ hết. Sinh viên có xu hướng sử dụng thẻ tín dụng để thanh toán, tuy nhiên khả năng quản lí 
            còn hạn chế. Một số sinh viên có biểu hiện trả hết nợ thẻ tín dụng đúng hạn để tăng uy tín cá nhân, 
            từ đó khiến họ dễ sa vào những rủi ro.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Cạm bẫy tài chính</h6>
                <p className="text-muted-foreground">
                  Khi áp lực chi tiêu lớn mà kĩ năng kiểm soát yếu, điều này khiến nhiều bạn trở thành 
                  &quot;con mồi&quot; của tín dụng đen hoặc dễ sa chân vào các mô hình đa cấp biến tướng 
                  &quot;Việc nhẹ lương cao&quot;.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <Users className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Ảnh hưởng từ &quot;tâm lí đám đông&quot;</h6>
                <p className="text-muted-foreground">
                  Hành vi mua sắm theo cảm xúc, sẵn sàng chi mạnh tay cho những món đồ xu hướng chỉ để 
                  bằng bạn bằng bè vẫn là một bài toán khó giải. Rủi ro này không chỉ làm gia tăng các 
                  khoản chi tiêu không cần thiết mà còn khiến việc kiểm soát ngân sách trở nên khó khăn, 
                  mất cân đối tài chính. Về lâu dài, hình thành tâm lí so sánh xã hội, làm suy giảm khả 
                  năng ra quyết định tài chính dựa trên nhu cầu thực tế.
                </p>
              </div>
            </div>

          </div>

          <h5 className="text-lg font-medium text-foreground">4. Sự tác động của nguồn thu nhập đến hành vi</h5>

          <p>
            Khảo sát thực tế cho thấy có sự khác biệt khá rõ giữa những bạn chỉ nhận trợ cấp và những bạn 
            tự đi làm thêm hoặc kiếm thu nhập riêng. Khi tự tay tạo ra nguồn thu nhập cho bản thân, mọi 
            người thường sẽ bắt đầu trân trọng giá trị của sức lao động hơn. Vì vậy, trước khi chi tiêu, 
            hãy nên dừng lại một chút để tự hỏi: mình có thật sự cần món này không, hay chỉ là thích nhất 
            thời?
          </p>

          <p>
            Khi bạn tự kiếm và tự quản lý tiền của mình, bạn sẽ tự nhiên suy nghĩ kĩ hơn trước mỗi lần 
            chi tiêu. Lâu dần, điều đó giúp bạn biết cách cân đối tiền bạc hợp lý hơn vừa đủ dùng, vừa 
            hạn chế gặp lại tình trạng &quot;cháy ví&quot; cuối tháng, mà vẫn thấy thoải mái với những gì 
            mình đã chọn.
          </p>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              Khoảng cách lớn nhất không phải là từ &quot;Không biết&quot; đến &quot;Biết&quot;, mà là từ 
              &quot;Biết&quot; đến &quot;Thực hành&quot;. Hiểu được tầm quan trọng của việc quản lý tiền đã là 
              một bước ngoặt rất tốt. Nhưng để cuộc sống thay đổi, bản thân cần tiến lên mỗi ngày, bắt đầu 
              từ những việc nhỏ như ghi lại chi tiêu hay để dành một phần tiền ngay khi nhận được.
            </p>
            <p className="mt-2">
              Không cần làm thật hoàn hảo, chỉ cần kiên trì một chút mỗi ngày. Khi bản thân thật sự bắt tay 
              vào làm, những điều đã hiểu mới dần trở thành thói quen, và tài chính của bạn cũng vì thế mà 
              dần trở nên tốt hơn.
            </p>
          </CalloutBox>

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

          <p>
            Hành vi tài chính đóng vai trò là yếu tố then chốt chi phối trực tiếp và định hình 
            tình hình tài chính cũng như chất lượng cuộc sống của mỗi cá nhân. Nếu kiến thức là 
            &quot;kim chỉ nam&quot; thì hành vi chính là &quot;la bàn&quot; dẫn bạn đến đích. Bạn có thể biết mọi 
            quy tắc về tiền bạc, nhưng nếu không hành động, con số trong tài khoản vẫn sẽ đứng 
            yên, tệ hơn là vơi đi. Hãy cùng khám phá xem những thói quen hàng ngày có thể ảnh 
            hưởng đến &quot;túi tiền&quot; của bạn và đang &quot;nhào nặn&quot; tương lai tài chính của bạn như thế nào.
          </p>

          <h5 className="text-lg font-medium text-foreground">1. Trách nhiệm và hiệu quả quản lí</h5>

          <p>
            Quản lý tài chính là việc bạn tự học cách sống có trách nhiệm với đồng tiền của mình. 
            Nó là một bài kiểm tra về độ tự lập và chủ động của chúng ta. Việc hình thành và duy 
            trì các hành vi tài chính tích cực không chỉ nâng cao hiệu quả quản lí tài chính cá 
            nhân mà còn góp phần phát triển năng lực tự chủ, kỷ luật và khả năng ra quyết định. 
            Các hành vi này có sự tương tác chặt chẽ với nhau, tạo thành một hệ thống thói quen 
            bền vững từ đó phát huy những yếu tố cốt lõi cho sự thành công.
          </p>

          <p>
            Một vài &quot;tip&quot; các bạn có thể thực hiện:
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Lập ngân sách</h6>
                <p className="text-muted-foreground mb-2">
                  Lập kế hoạch, xây dựng ngân sách, kiểm soát chi tiêu và thực hiện tiết kiệm. 
                  Bắt đầu chia nhỏ tiền vào từng hạng mục như ăn uống, học tập, giải trí, bạn 
                  đang vận hành dòng tiền một cách thông minh. Giúp cá nhân chủ động chuẩn bị cho 
                  các mục tiêu hiện hữu và hạn chế rủi ro &quot;thiếu trước hụt sau&quot;.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Kiểm soát chi tiêu</h6>
                <p className="text-muted-foreground mb-2">
                  Thay vì chi tiêu tùy hứng, việc dừng lại để tự hỏi &quot;Mình thực sự cần hay 
                  chỉ đang muốn?&quot; chính là biểu hiện của một người làm chủ được cuộc sống. 
                  Hành vi này còn giúp bạn đạt được mục tiêu tài chính (ngắn hạn và dài hạn). 
                  Khi khoản chi đều được đặt trong mối liên hệ với mục tiêu cụ thể, chúng ta sẽ 
                  có xu hướng đưa ra những lựa chọn hợp lí và có trách nhiệm hơn.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Tiết kiệm và dự phòng</h6>
                <p className="text-muted-foreground mb-2">
                  Nghiên cứu cho thấy duy trì thói quen tiết kiệm thường xuyên là hành vi có sức 
                  ảnh hưởng mạnh mẽ nhất đến năng lực quản lí tài chính. Đừng coi thường những 
                  &quot;đồng tiền lẻ&quot; - từ hành động tích góp những khoản nhỏ sẽ tạo ra khoản lớn 
                  hơn. Giúp cá nhân có nguồn lực để đối phó với các biến cố hoặc đạt được mục tiêu dài hạn.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Kỷ luật là sức mạnh</h6>
                <p className="text-muted-foreground mb-2">
                  Mặc dù chúng ta có xu hướng muốn kiểm soát chi tiêu, nhưng thực tế việc thiếu 
                  thói quen ghi chép hóa đơn khiến họ khó kiểm soát tần suất chi tiêu thực tế. 
                  Việc trích ra một khoản cố định ngay khi nhận tiền từ gia đình hoặc lương làm 
                  thêm giúp bạn xây dựng một &quot;tấm khiên&quot; bảo vệ bản thân trước mọi rủi ro.
                </p>
              </div>
            </div>
          </div>

          <h5 className="text-lg font-medium text-foreground">2. Ảnh hưởng từ việc sử dụng công nghệ và công cụ hỗ trợ</h5>

          <p>
            Trong thời đại số, hành vi sử dụng các phương thức thanh toán điện tử giúp giao dịch 
            thuận tiện hơn nhưng cũng tiềm ẩn rủi ro chi tiêu thiếu kiểm soát. Lỗ hổng lớn nhất 
            của đa số sinh viên là chúng ta thường &quot;muốn&quot; kiểm soát nhưng lại &quot;ngại&quot; ghi lại. 
            Vậy thì có công cụ hỗ trợ quản lí tài chính sẽ là một quyền lợi hữu ích.  Việc sử dụng các ứng dụng quản lí tài chính (3,85/5,00) giúp cá nhân dễ dàng tìm tòi và áp dụng các tiện ích phục vụ cho quá trình quản lí tài chính một cách khoa học hơn.
          </p>

          <Card className="border-border">
            <CardContent className="pt-6 space-y-4">
              <div>
                <h6 className="font-semibold text-foreground mb-2">Ứng dụng quản lí tài chính trên điện thoại</h6>
                <p className="text-sm text-muted-foreground">
                  Khi không ghi chép, bạn sẽ rơi vào trạng thái &quot;mất trí nhớ tài chính&quot; 
                  vào cuối tháng và tự hỏi &quot;Tiền của mình đã đi đâu rồi?&quot;. Nếu bạn quá 
                  bận thì hãy thao tác trên chiếc điện thoại chúng ta cầm hằng ngày để giúp. 
                  Công nghệ có thể giúp bạn biến việc ghi chép khô khan thành một trải nghiệm 
                  khoa học và thú vị.
                </p>
              </div>
            </CardContent>
          </Card>

          <h5 className="text-lg font-medium text-foreground">3. Hệ quả của các hành vi tài chính tiêu cực</h5>

          <p>
           Những hành vi tài chính tiêu cực nhỏ có thể dẫn đến thảm họa lớn. Các hành vi như trì hoãn thanh toán, chi tiêu theo cảm xúc, không lập kế hoạch hoặc tìm đến các nguồn tài chính không lành mạnh (như tín dụng đen) sẽ dẫn đến những hệ quả tiêu cực nghiêm trọng như nợ nần chồng chất, căng thẳng tài chính và mất khả năng tự chủ cuộc sống.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Chi tiêu theo cảm xúc</h6>
                <p className="text-muted-foreground">
                  Một phút ngẫu hứng mua sắm khi buồn có thể dẫn đến cả tháng nợ nần. Khi quyết định 
                  chi tiêu không dựa trên kế hoạch rõ ràng, dòng tiền trở nên rời rạc, thiếu định 
                  hướng và khó theo dõi. Điều này ảnh hưởng đến các nhu cầu thiết khác, cơ hội tích lũy 
                  và đầu tư trong tương lai.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Trì hoãn thanh toán</h6>
                <p className="text-muted-foreground">
                  Biến bạn thành người thiếu uy tín và phải gánh thêm những khoản phí phạt không đáng có. 
                  Về sau dễ dẫn đến vòng xoáy tài chính tiêu cực: Chi tiêu vượt khả năng → Phát sinh nợ 
                  → Áp lực trả nợ → Tiếp tục vay mượn.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Bẫy tín dụng đen</h6>
                <p className="text-muted-foreground">
                  Kết quả cuối cùng của việc thiếu kế hoạch thường là sự bế tắc, dẫn đến việc tìm đến 
                  những nguồn tiền không lành mạnh, gây căng thẳng cực độ và mất quyền tự chủ cuộc sống.
                </p>
              </div>
            </div>
          </div>

          <CalloutBox variant="message" title="Lời nhắn">
            <p>
              <strong>Hành vi tài chính chính là &quot;gương phản chiếu&quot; tương lai của bạn.</strong> Muốn 
              thay đổi số dư tài khoản, hãy bắt đầu bằng việc thay đổi những hành động nhỏ nhất 
              ngay hôm nay! Hành vi tài chính không chỉ là kết quả của nhận thức mà còn dẫn dắt 
              cá nhân chuyển từ trạng thái phụ thuộc sang tự chủ tài chính bền vững.
            </p>
          </CalloutBox>

          <div className="rounded-lg border-2 border-primary bg-primary/5 p-6 space-y-4">
            <h5 className="font-bold text-foreground text-lg">
              🎯 BẠN SẼ CHỌN HÀNH ĐỘNG NÀO HÔM NAY?
            </h5>
            <p className="text-sm text-muted-foreground">
              Hãy tích vào và thực hiện nhé!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded">
                <input 
                  type="checkbox" 
                  id="action1" 
                  className="w-4 h-4 cursor-pointer" 
                />
                <label htmlFor="action1" className="text-sm text-muted-foreground cursor-pointer flex-1">
                  Cài đặt một ứng dụng quản lí chi tiêu
                </label>
              </div>
              <div className="flex items-center gap-3 p-2 rounded">
                <input 
                  type="checkbox" 
                  id="action2" 
                  className="w-4 h-4 cursor-pointer" 
                />
                <label htmlFor="action2" className="text-sm text-muted-foreground cursor-pointer flex-1">
                  Ghi lại mọi khoản đã chi
                </label>
              </div>
              <div className="flex items-center gap-3 p-2 rounded">
                <input 
                  type="checkbox" 
                  id="action3" 
                  className="w-4 h-4 cursor-pointer" 
                />
                <label htmlFor="action3" className="text-sm text-muted-foreground cursor-pointer flex-1">
                  Dành ra 10% số tiền đang có để vào &quot;Quỹ dự phòng&quot;
                </label>
              </div>
            </div>
          </div>

          <h4 className="text-xl font-semibold text-foreground">
            2.3. Hướng dẫn kiểm soát và ứng dụng hiệu quả hành vi tài chính
          </h4>

          <p>Tổng kết lại, biết thôi là chưa đủ, chúng ta luôn cần một “bộ công cụ” để rèn luyện kỷ luật mỗi ngày. Không chỉ dừng lại ở việc hiểu, điều quan trọng là bạn bắt đầu từ những thói quen nhỏ mỗi ngày để dần làm chủ tài chính của mình.  Hãy áp dụng các bước sau đây để học cách cải thiện hiệu quả tài chính của bạn.</p>

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
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Bạn có bao giờ tự hỏi tại sao mình lại có thói quen cân nhắc kĩ trước khi mua một món đồ, hay tại sao mình lại cảm thấy bất an khi sắp hết tiền? Thực ra, những thói quen đó phần lớn được hình thành từ nhỏ, thông qua cách bạn lớn lên trong gia đình. Gia đình là nơi đầu tiên bạn tiếp xúc với những vấn đề liên quan đến tiền bạc. Cách cha mẹ chi tiêu, tiết kiệm hay nói chuyện về tiền đã vô tình ảnh hưởng trực tiếp đến cách bạn suy nghĩ và hành động.
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
                Trước khi học về kinh tế học ở trường, bạn đã học về tiền bạc qua những quan sát đời thường. Gia đình đóng vai trò là nền tảng quan trọng nhất và là môi trường xã hội hóa đầu tiên hình thành nhận thức tài chính cho sinh viên. Cha mẹ đóng vai trò chủ đạo trong việc giúp con cái nhận thức được giá trị của đồng tiền. Đây là nền tảng giáo dục sớm có thể giúp chúng ta hình thành hành vi tài chính tích cực ngay từ lứa tuổi thiếu niên.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span><strong>Gia đình – “lớp học đầu tiên” về tài chính:</strong> Trước khi bạn biết đến những khái niệm kinh tế ở trường, bạn đã học về tiền qua những điều rất giản dị mỗi ngày. Gia đình chính là nơi đặt nền móng cho cách bạn suy nghĩ và hành động với tiền bạc.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span><strong>Kênh truyền tải giá trị tiềm ẩn:</strong> Bạn từng thấy ba mẹ cân nhắc khi mua đồ, lo toan khi đến kỳ đóng tiền, hay vui vẻ khi có những khoản tiết kiệm dư dả. Những hình ảnh ấy, dù rất bình thường, lại âm thầm ảnh hưởng từng ngày đến cách chúng ta nhìn nhận giá trị của đồng tiền.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span><strong>Hiểu và biết trân trọng:</strong> Khi gia đình chia sẻ cởi mở về tài chính, bạn sẽ sớm hiểu rằng tiền không &quot;tự nhiên mà có&quot;. Đó là kết quả của công sức và nỗ lực. Từ đó, bạn học được cách chi tiêu hợp lý hơn, biết tiết kiệm và có trách nhiệm với những gì mình đang có.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </SectionBlock>

      {/* - Mức độ ảnh hưởng của gia đình */}
      <SectionBlock id="muc-do-anh-huong-gia-dinh" title="Mức độ ảnh hưởng của gia đình đến sinh viên" level={3}>
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Không chỉ là nguồn cung cấp tài chính, gia đình còn là kênh giáo dục hiệu quả nhất 
            giúp nâng cao kĩ năng quản lí tiền bạc của bạn lên đến 40%. Nhiều nghiên cứu xác định 
            gia đình là nhân tố có ảnh hưởng lớn nhất đến hành vi chi tiêu và thói quen tiết kiệm 
            của sinh viên. Và chúng ta cũng cần nhìn nhận thẳng thắn rằng môi trường gia đình của 
            mỗi người là khác nhau.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Sự gắn liền về tài chính</h6>
                <p className="text-muted-foreground mb-2">
                  Đa số sinh viên hiện nay vẫn còn phụ thuộc vào nguồn trợ cấp từ gia đình, khiến tài 
                  chính cá nhân của họ luôn gắn liền với tình hình tài chính của gia đình. Điều này vừa 
                  là chỗ dựa, vừa có thể là rào cản nếu gia đình không có thói quen quản lý khoa học.
                </p>
                <p className="text-muted-foreground">
                  Ngoài ra, mức độ ảnh hưởng còn khác nhau theo giới tính; ví dụ, nam giới thường được 
                  tiếp cận với các vấn đề tài chính gia đình sớm hơn, trong khi nữ giới đôi khi bị hạn chế 
                  hơn trong quá trình xã hội hóa tài chính tại nhà.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Target className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Phân biệt Nhu cầu và Mong muốn</h6>
                <p className="text-muted-foreground">
                  Những lời nhắc nhở từ bé của cha mẹ chính là bài học đầu đời giúp bạn thiết lập ranh 
                  giới chi tiêu rõ ràng. Khi bạn gặp khủng hoảng tài chính (mất ví, chi tiêu quá tay), 
                  lời khuyên từ cha mẹ có thể chính là cách giúp bạn biết cách ưu tiên hạng mục nào cần 
                  cắt giảm và hạng mục nào là thiết yếu.
                </p>
              </div>
            </div>
          </div>

          <h5 className="text-lg font-medium text-foreground">
            Tác động đến kĩ năng quản lí tài chính cá nhân
          </h5>

          <p>
            Gia đình ảnh hưởng rõ rệt đến khả năng quản lí tài chính của sinh viên thông qua quá 
            trình quan sát, học hỏi và trao đổi trong cuộc sống hằng ngày. Dù môi trường gia đình 
            có cách quản lí tài chính khác nhau, sinh viên vẫn có thể chủ động tiếp thu và điều 
            chỉnh để phù hợp với bản thân.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <Brain className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Học hỏi có chọn lọc</h6>
                <p className="text-muted-foreground">
                  Tiếp nhận những thói quen tích cực như tiết kiệm, chi tiêu hợp lí từ gia đình, đồng 
                  thời kết hợp với các công cụ quản lí tài chính hiện đại và kiến thức mới để nâng cao 
                  hiệu quả quản lí.
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <Heart className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <h6 className="font-semibold text-foreground mb-1">Thảo luận cởi mở</h6>
                <p className="text-muted-foreground">
                  Đừng ngại nói chuyện với cha mẹ về ngân sách cá nhân. Sự thấu hiểu giữa hai thế hệ 
                  sẽ giúp bạn giảm bớt áp lực tài chính và nhận được những định hướng thực tế nhất.
                </p>
              </div>
            </div>
          </div>

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
        <div className="space-y-6 text-muted-foreground leading-8">
          <p>
            Khoảng cách giữa &quot;Biết&quot; và &quot;Làm&quot; sẽ cho bạn biết vì sao nhiều người rất giỏi 
            tính toán nhưng cuối tháng vẫn &quot;rỗng túi&quot;. Để thực sự làm chủ tài chính, bạn cần 
            rèn luyện sự kiểm soát và kỷ luật cá nhân. Đừng để kế hoạch tài chính bị phá vỡ bởi những tác động từ môi trường hay cảm xúc cá nhân. Trên thực tế, nhiều người có thể lập kế hoạch rất chi tiết, nhưng lại thiếu sự kiên định và kỷ luật trong quá trình thực hiện, dẫn đến việc không đạt được mục tiêu đã đề ra. 
          </p>

          <h4 className="text-xl font-semibold text-foreground">
            4.1. Lập kế hoạch (Áp dụng mô hình SWOT)
          </h4>

          <p>
            Để kiểm soát tài chính tốt, trước hết bạn cần một kế hoạch rõ ràng. Lập kế hoạch là yếu tố tác động mạnh mẽ nhất đến thành công tài chính, một kế hoạch hiệu quả không chỉ là những con số, mà còn là sự hiểu bản thân và hoàn cảnh của mình. Mô hình SWOT có thể giúp bạn làm điều đó theo cách đơn giản và dễ áp dụng hơn.
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
            4.2. Thói quen theo dõi và đánh giá tình hình tài chính cá nhân
          </h4>

          <p>
            Nhóm gợi ý cho bạn 2 lựa chọn thường được ưu tiên nhất để theo dõi và đánh giá tài chính:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Ứng dụng công nghệ trong theo dõi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Công nghệ giúp bạn theo dõi dòng tiền một cách tự động và tiện lợi:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                    <span><strong>Money Manager</strong> - Quản lí chi tiêu chi tiết với biểu đồ trực quan</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                    <span><strong>Goodbudget</strong> - Chia sẻ ngân sách với gia đình và bạn bè</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Những app này giúp bạn nhìn rõ dòng tiền, phát hiện những khoản chi tiêu vô tích sự 
                  và điều chỉnh hành vi một cách kịp thời.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Mô hình 3 bước đơn giản
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h6 className="font-semibold text-foreground text-sm mb-1">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">1</span>
                    {' '}Bước 1: Ghi nhận
                  </h6>
                  <p className="text-sm text-muted-foreground ml-6">
                    Ghi lại tất cả các khoản thu chi trong ngày
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground text-sm mb-1">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">2</span>
                    {' '}Bước 2: Phân loại
                  </h6>
                  <p className="text-sm text-muted-foreground ml-6">
                    Chia chi tiêu thành các nhóm thiết yếu cơ bản, linh hoạt theo thời khóa biểu cá nhân
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-foreground text-sm mb-1">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">3</span>
                    {' '}Bước 3: Đánh giá
                  </h6>
                  <p className="text-sm text-muted-foreground ml-6">
                    Cuối tuần/cuối tháng, xem lại và tự hỏi:
                  </p>
                  <ul className="text-sm text-muted-foreground ml-6 mt-1 space-y-1">
                    <li>• Khoản nào là cần thiết?</li>
                    <li>• Khoản nào có thể giảm bớt?</li>
                    <li>• Mình có đang chi tiêu đúng với kế hoạch không?</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <h4 className="text-xl font-semibold text-foreground">
            4.3. Vai trò của kỷ luật cá nhân trong quản lý tài chính
          </h4>

          <Blockquote author="Jim Rohn">
            &quot;Kỷ luật là cầu nối giữa mục tiêu và thành tựu&quot;
          </Blockquote>

          <p>
            Kỷ luật không phải là sự gò bó, kỷ luật chính là tự do. Khi bạn có kỷ luật, bạn không còn là nô lệ của cảm xúc mua sắm nhất thời. Kỷ luật không phải là sự gò bó, mà là khả năng tự chủ để ưu tiên mục tiêu dài hạn thay vì những lựa chọn nhất thời. Khi bạn biết nói “không” với những khoản chi không cần thiết và chịu trách nhiệm với từng quyết định của mình, bạn đang từng bước xây dựng thói quen tài chính bền vững. Sự trưởng thành không đến từ việc lập kế hoạch hoàn hảo, mà từ việc kiên trì thực hiện và làm chủ chính hành vi của bản thân. Hãy thôi đổ lỗi cho “hoàn cảnh”. Bắt đầu khi bạn dám tự chịu trách nhiệm 100% cho mỗi hành động của bản thân. Năng lực tự quản lí đòi hỏi chúng ta phải có niềm tin vào khả năng tổ chức của bản thân. Sự trưởng thành về tài chính được minh chứng khi chúng ta thực hiện kỷ luật tài chính một cách tự giác.
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
