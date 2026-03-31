'use client'

import { motion, HTMLMotionProps } from 'framer-motion'

// ============ Basic Animations ============
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const fadeOut = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeIn' }
}

export const scaleUp = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

export const scaleDown = {
  initial: { scale: 1.1, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
}

// ============ Slide Animations ============
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', amount: number = 100) => ({
  initial: {
    x: direction === 'left' ? -amount : direction === 'right' ? amount : 0,
    y: direction === 'up' ? amount : direction === 'down' ? -amount : 0,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1
  },
  transition: {
    duration: 0.7,
    ease: [0.34, 1.56, 0.64, 1]
  }
})

export const slideInLeft = slideIn('left')
export const slideInRight = slideIn('right')
export const slideInUp = slideIn('up')
export const slideInDown = slideIn('down')

// ============ Stagger Container ============
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
})

export const staggerContainerSlower = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
}

// ============ Bounce Animations ============
export const bounceIn = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 1
    }
  }
}

export const bounce = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
}

// ============ Rotate Animations ============
export const rotate = {
  initial: { rotate: 0, opacity: 0 },
  animate: {
    rotate: 360,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
}

export const rotateIn = {
  initial: { rotate: -10, opacity: 0 },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

// ============ Float Animations ============
export const float = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
}

// ============ Glow Animations ============
export const glow = {
  initial: { boxShadow: '0 0 0px rgba(59, 130, 246, 0)' },
  animate: {
    boxShadow: [
      '0 0 0px rgba(59, 130, 246, 0)',
      '0 0 20px rgba(59, 130, 246, 0.5)',
      '0 0 0px rgba(59, 130, 246, 0)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// ============ Shimmer Animations ============
export const shimmer = {
  initial: { backgroundPosition: '0% center' },
  animate: {
    backgroundPosition: ['0% center', '100% center', '0% center'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// ============ Skew Animations ============
export const skewIn = (direction: 'left' | 'right' = 'left') => ({
  initial: {
    skewY: direction === 'left' ? 10 : -10,
    opacity: 0
  },
  animate: {
    skewY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const
    }
  }
})

// ============ Component Wrappers ============
export const FadeInView = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
} & HTMLMotionProps<'div'>) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div variants={fadeIn} className={className}>
    {children}
  </motion.div>
)

export const SlideInView = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
} & HTMLMotionProps<'div'>) => {
  const animation = slideIn(direction as any)
  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...(animation.transition || {}), delay } as any}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const ScaleInView = ({
  children,
  className = '',
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
} & HTMLMotionProps<'div'>) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)

export const BounceInView = ({
  children,
  className = '',
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
} & HTMLMotionProps<'div'>) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{
      delay,
      type: 'spring',
      stiffness: 260,
      damping: 20,
      mass: 1
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
)
