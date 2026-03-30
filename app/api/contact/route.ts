import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactRequest {
  fullName: string
  email: string
  phoneNumber: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()

    // Validate input
    if (!body.fullName || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get email configuration from environment variables
    const hasEmailConfig = process.env.SMTP_USER && process.env.SMTP_PASSWORD

    if (!hasEmailConfig) {
      // Log the message since email is not configured
      console.log('Contact form submission:', {
        name: body.fullName,
        email: body.email,
        phone: body.phoneNumber,
        subject: body.subject,
        message: body.message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        { message: 'Message received. We will contact you soon.' },
        { status: 200 }
      )
    }

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Liên hệ từ FinStudent: ${body.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Thông tin liên hệ mới</h2>
          <p><strong>Tên:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Số điện thoại:</strong> ${body.phoneNumber}</p>
          <p><strong>Tiêu đề:</strong> ${body.subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Tin nhắn:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${body.message}
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">Tin nhắn này được gửi từ biểu mẫu liên hệ FinStudent</p>
        </div>
      `,
      replyTo: body.email,
    })

    // Automated response to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email,
      subject: 'Chúng tôi đã nhận được tin nhắn của bạn - FinStudent',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Cảm ơn bạn đã liên hệ!</h2>
          <p>Xin chào ${body.fullName},</p>
          <p>Chúng tôi đã nhận được tin nhắn của bạn với tiêu đề: <strong>${body.subject}</strong></p>
          <p>Đội ngũ của FinStudent sẽ xem xét thông tin của bạn và liên hệ lại trong thời gian sớm nhất có thể.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">Đây là email tự động. Vui lòng không trả lời email này.</p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
