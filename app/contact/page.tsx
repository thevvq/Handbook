import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { QuickInfoSection } from '@/components/quick-info-section'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Liên hệ - GrowYourself',
  description: 'Liên hệ với đội ngũ GrowYourself để được tư vấn và hỗ trợ về quản lý tài chính cá nhân',
}

export default function ContactPage() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero/Contact Section */}
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
          </div>

          {/* Content */}
          <div className="w-full max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                Liên <span className="text-primary">Hệ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Có câu hỏi hoặc góp ý về chương trình? Hãy điền form liên hệ dưới đây. 
                Chúng tôi sẽ phản hồi lại bạn trong thời gian sớm nhất!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <ContactForm />
            </div>

            {/* Quick Info */}
            <QuickInfoSection />
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  )
}
