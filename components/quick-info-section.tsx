'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { easeOut } from 'framer-motion'

const quickInfoItems = [
  {
    icon: Mail,
    title: 'Email',
    description: '25phamdi@gmail.com',
    href: 'mailto:25phamdi@gmail.com',
  },
  {
    icon: Phone,
    title: 'Điện thoại',
    description: '+84 (0) 582862520',
    href: 'tel:+84582862520',
  },
  {
    icon: MapPin,
    title: 'Địa chỉ',
    description: 'Việt Nam',
  },
]

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
}

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
}

export function QuickInfoSection() {
  return (
    <motion.div
      className="mt-12 grid gap-6 md:grid-cols-3 text-center"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {quickInfoItems.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="group relative overflow-hidden"
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-50"
              transition={{ duration: 0.5 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
            />

            <div className="p-6 rounded-lg border border-border/30 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 bg-card/50">
              {/* Icon Container */}
              <motion.div
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 mb-3 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <Icon className="h-6 w-6 text-primary" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.a
                href={item.href}
                className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.description}
              </motion.a>

              {/* Bottom accent line */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 mt-3 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
