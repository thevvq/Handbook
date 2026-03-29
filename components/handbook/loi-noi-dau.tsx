import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'

export function LoiNoiDau() {
  return (
    <SectionBlock id="loi-noi-dau" title="Lời nói đầu" level={1}>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>
          Trong bối cảnh nền kinh tế không ngừng biến động, kĩ năng quản lí tài chính cá nhân 
          đã trở thành một trong những năng lực thiết yếu đối với mỗi cá nhân, đặc biệt là 
          sinh viên, nhóm đối tượng đang trong giai đoạn chuyển tiếp từ phụ thuộc tài chính 
          vào gia đình sang tự chủ về tài chính. Tuy nhiên, thực tế cho thấy phần lớn sinh viên 
          hiện nay vẫn chưa được trang bị đầy đủ kiến thức và kỹ năng cần thiết để quản lí 
          hiệu quả nguồn tài chính của mình.
        </p>

        <p>
          Việc thiếu hụt các kiến thức về quản lí tài chính cá nhân không chỉ dẫn đến tình 
          trạng chi tiêu mất kiểm soát, thiếu hụt ngân sách mà còn tiềm ẩn nhiều rủi ro như 
          nợ nần, phụ thuộc tài chính hoặc bị lôi kéo vào các hình thức tín dụng không an toàn. 
          Điều này ảnh hưởng trực tiếp đến chất lượng cuộc sống, kết quả học tập và định hướng 
          tương lai của sinh viên.
        </p>

        <CalloutBox variant="message" title="Mục tiêu cẩm nang">
          <p>
            Cuốn cẩm nang <strong>&quot;Kĩ năng quản lí tài chính cá nhân cho sinh viên&quot;</strong> được 
            xây dựng nhằm cung cấp những kiến thức cơ bản, phương pháp thực hành cụ thể và các 
            công cụ hỗ trợ giúp sinh viên từng bước hình thành và phát triển năng lực quản lí 
            tài chính một cách khoa học, hiệu quả và bền vững.
          </p>
        </CalloutBox>

        <p>
          Cẩm nang không chỉ dừng lại ở việc cung cấp kiến thức, mà còn hướng tới việc thay đổi 
          nhận thức, hình thành thói quen tài chính tích cực và giúp sinh viên chủ động hơn 
          trong việc xây dựng tương lai tài chính của bản thân.
        </p>
      </div>
    </SectionBlock>
  )
}
