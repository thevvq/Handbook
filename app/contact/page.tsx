import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
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
            <div className="mt-12 grid gap-6 md:grid-cols-3 text-center">
              <div className="p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">25phamdi@gmail.com</p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Điện thoại</h3>
                <p className="text-sm text-muted-foreground">+84 (0) 582862520</p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-1">Địa chỉ</h3>
                <p className="text-sm text-muted-foreground">Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  )
}
