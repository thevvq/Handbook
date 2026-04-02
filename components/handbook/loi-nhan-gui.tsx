import { SectionBlock } from '@/components/section-block'
import { CalloutBox } from '@/components/callout-box'
import { Heart } from 'lucide-react'

export function LoiNhanGui() {
  return (
    <SectionBlock id="loi-nhan-gui" title="Lời nhắn gửi bạn đọc" level={1}>
      <div className="space-y-6 text-muted-foreground leading-8">
        <CalloutBox variant="message">
          <div className="space-y-4 text-base">
            <p>
              Chúng mình biết các bạn đang ở độ tuổi đẹp nhất để thử, để trải nghiệm, để đôi 
              khi sai sót và học cách va vấp với cuộc đời nhiều. Thành thật mà nói, đôi khi 
              chúng mình cũng vậy, cũng có những buổi tối vui chơi vô lo vô nghĩ, cũng có 
              những lần mua thứ gì đó chỉ vì thích, chứ không hẳn vì cần. Tuổi trẻ là để 
              sống hết mình, không phải để ngồi tính và xem xét từng đồng một cách khô khan.
            </p>

            <p>
              Nhưng cũng chính vì vậy, chúng mình mới nỗ lực hoàn thiện sản phẩm cẩm nang này. 
              Không phải để bảo các bạn đừng đi chơi, đừng mua đồ yêu thích hay đừng tận hưởng 
              những năm tháng sinh viên. Mà vì chúng mình hiểu rằng khi không có một nền tảng 
              tài chính vững, những trải nghiệm đẹp đẽ ấy rất dễ trở thành gánh nặng ảnh hưởng 
              xấu đến các bạn như vay mượn cuối tháng, áp lực tiền bạc đè lên cả việc học, 
              cả các mối quan hệ.
            </p>

            <p>
              Vì sự thấu hiểu, chúng mình viết cuốn cẩm nang này không phải từ vị trí của 
              người &quot;đã hoàn hảo&quot;. Mà từ vị trí của những người cùng thế hệ với các bạn, cũng 
              từng loay hoay không hiểu sao tiền hết nhanh thế, cũng từng ước mình biết những 
              điều này sớm hơn một chút. Chính những va vấp nhỏ trong hành trình tự lập ấy đã 
              thôi thúc chúng mình ngồi lại, tìm hiểu và gửi đến các bạn những gì thiết thực 
              nhất có thể.
            </p>

            <p className="font-medium text-foreground">
              Chúng mình hy vọng rằng, dù bạn đang ở điểm xuất phát nào, từ chưa bao giờ nghĩ 
              đến chuyện quản lý tiền, hay đã có thói quen nhưng muốn làm tốt hơn - thì cuốn 
              cẩm nang này sẽ là người bạn đồng hành nhỏ, giúp bạn tự tin hơn một chút với 
              những quyết định tài chính của mình. Để tuổi trẻ của bạn không chỉ giàu trải 
              nghiệm, mà còn vững vàng về sau.
            </p>

            <div className="flex items-center gap-2 pt-4 text-foreground">
              <Heart className="h-5 w-5 text-destructive" />
              <span className="font-semibold">Trân trọng, Nhóm tác giả</span>
            </div>
          </div>
        </CalloutBox>
      </div>
    </SectionBlock>
  )
}
