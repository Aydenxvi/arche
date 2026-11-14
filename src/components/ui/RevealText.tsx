import { createElement } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cx } from '../../lib/utils'

interface RevealTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
  className?: string
  delay?: number
  stagger?: number
  immediate?: boolean
}

export function RevealText({
  text,
  as = 'h2',
  className,
  delay = 0,
  stagger = 0.045,
  immediate = false,
}: RevealTextProps) {
  const reduced = useReducedMotion()
  const words = text.split(' ')

  if (reduced) return createElement(as, { className }, text)

  const animation = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }

  return createElement(
    motion[as] as typeof motion.h2,
    {
      className: cx(className),
      variants: animation,
      initial: 'hidden',
      ...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once: true, margin: '-12%' } }),
    },
    words.map((word, i) => (
      <span
        key={`${word}-${i}`}
        className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom"
      >
        <motion.span
          className="inline-block"
          variants={{
            hidden: { y: '110%' },
            visible: { y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      </span>
    )),
  )
}
