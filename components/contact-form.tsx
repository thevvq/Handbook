'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Mail, Phone, User, FileText, MessageSquare } from 'lucide-react'

interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.')
      reset()
    } catch (error) {
      toast.error('Có lỗi xảy ra. Vui lòng thử lại.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formFields = [
    {
      id: 'fullName',
      label: 'Họ và tên',
      placeholder: 'Full Name',
      icon: User,
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'Email',
      icon: Mail,
      type: 'email',
    },
    {
      id: 'phoneNumber',
      label: 'Số điện thoại',
      placeholder: 'Phone Number',
      icon: Phone,
      type: 'tel',
    },
    {
      id: 'subject',
      label: 'Tiêu đề',
      placeholder: 'Subject',
      icon: FileText,
      type: 'text',
    },
  ]

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-6 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Column - Input Fields */}
      <motion.div
        className="space-y-4 lg:col-span-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {formFields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Label htmlFor={field.id} className="text-sm font-medium text-foreground mb-2 block">
              {field.label}
            </Label>
            <div className="relative">
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="pl-10 border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 focus:border-primary focus:ring-primary/50"
                {...register(field.id as keyof ContactFormData, {
                  required: `${field.label} không được để trống`,
                  ...(field.id === 'email' && {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email không hợp lệ',
                    },
                  }),
                })}
              />
              <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary/50" />
            </div>
            {errors[field.id as keyof ContactFormData] && (
              <p className="text-xs text-red-500 mt-1">
                {errors[field.id as keyof ContactFormData]?.message}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Right Column - Message Field */}
      <motion.div
        className="space-y-4 lg:col-span-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Label htmlFor="message" className="text-sm font-medium text-foreground block">
          Tin nhắn
        </Label>
        <div className="relative">
          <Textarea
            id="message"
            placeholder="Your Message"
            className="pl-10 pt-10 border-primary/20 rounded-lg bg-background/50 backdrop-blur-sm min-h-[200px] resize-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:ring-primary/50"
            {...register('message', {
              required: 'Vui lòng nhập tin nhắn của bạn',
              minLength: {
                value: 10,
                message: 'Tin nhắn phải có ít nhất 10 ký tự',
              },
            })}
          />
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-primary/50" />
        </div>
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-end pt-4"
        >
          <Button
            type="submit"
            disabled={isLoading}
            className="h-10 gap-2 rounded-lg px-6 font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                />
                Đang gửi...
              </>
            ) : (
              'Gửi tin nhắn'
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  )
}
