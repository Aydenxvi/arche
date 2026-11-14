import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { ImageId } from '../../data/images'
import { fallbackOnError, imageProps } from '../../lib/image'
import { cx } from '../../lib/utils'

export interface FigureProps {
  id: ImageId
  alt: string
  caption?: string
  className?: string
  frame?: string
  imgClassName?: string
  sizes?: string
  priority?: boolean
  parallax?: number
  zoom?: boolean
  reveal?: boolean
  objectPosition?: string
  captionClassName?: string
}

export function Figure({
  id,
  alt,
  caption,
  className,
  frame = 'aspect-[3/2]',
  imgClassName,
  sizes = '100vw',
  priority = false,
  parallax = 0,
  zoom = false,
  reveal = true,
  objectPosition = 'center',
  captionClassName,
}: FigureProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const travel = reduced ? 0 : parallax
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel])
  const img = imageProps(id)

  return (
    <figure className={cx('relative w-full', className)}>
      <div
        ref={ref}
        className={cx('relative w-full overflow-hidden', frame)}
        style={{ backgroundColor: img.color }}
      >
        <motion.div
          className="absolute inset-0"
          style={travel ? { top: -travel, bottom: -travel, y } : undefined}
          initial={reveal && !reduced ? { opacity: 0, scale: 1.06 } : false}
          whileInView={reveal && !reduced ? { opacity: 1, scale: 1 } : undefined}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={img.src}
            srcSet={img.srcSet}
            onError={(event) => fallbackOnError(event.currentTarget, img)}
            sizes={sizes}
            width={img.width}
            height={img.height}
            alt={img.reference ? `Real architecture photo reference: ${img.description ?? alt}` : alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            className={cx(
              'h-full w-full object-cover',
              zoom && 'transition-transform duration-[1400ms] ease-arch group-hover:scale-[1.045]',
              imgClassName,
            )}
            style={{ objectPosition }}
          />
        </motion.div>
        {img.reference && <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 bg-ink/60 px-2 py-1 text-[10px] uppercase tracking-widest text-bone/85">Photo reference</span>}
      </div>
      {caption ? (
        <figcaption className={cx('eyebrow mt-3 text-warm', captionClassName)}>{img.reference ? img.description ?? caption : caption}</figcaption>
      ) : null}
    </figure>
  )
}
