import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cx } from '../../lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, y = 26, once = true }: RevealProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={cx(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10%' }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
