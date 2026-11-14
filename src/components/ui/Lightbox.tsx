import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import type { Plate } from '../../types'
import { fallbackOnError, imageProps } from '../../lib/image'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

interface LightboxProps {
  plates: Plate[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function Lightbox({ plates, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useLockBodyScroll(open)
  useFocusTrap(ref, open, onClose)

  const go = useCallback(
    (delta: number) => {
      if (index === null) return
      onIndexChange((index + delta + plates.length) % plates.length)
    },
    [index, onIndexChange, plates.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, go])

  const plate = index === null ? null : plates[index]
  const img = plate ? imageProps(plate.id) : null

  return (
    <AnimatePresence>
      {open && plate && img ? (
        <motion.div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index + 1} of ${plates.length}`}
          className="fixed inset-0 z-[90] flex flex-col bg-ink/97 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between px-gutter py-6 text-bone">
            <span className="eyebrow text-warm">
              {String(index + 1).padStart(2, '0')} / {String(plates.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-2 text-label uppercase tracking-[0.16em] text-bone transition-opacity hover:opacity-70"
            >
              Close
              <X size={16} strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-gutter pb-4">
            <motion.img
              key={plate.id}
              src={img.src}
              srcSet={img.srcSet}
              onError={(event) => fallbackOnError(event.currentTarget, img)}
              sizes="(max-width: 900px) 92vw, 80vw"
              alt={img.reference ? `Real architecture photo reference: ${img.description ?? plate.alt}` : plate.alt}
              width={img.width}
              height={img.height}
              className="max-h-full w-auto max-w-full object-contain"
              initial={reduced ? false : { opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="flex items-end justify-between gap-6 px-gutter pb-8 text-bone">
            <p className="max-w-prose text-sm leading-relaxed text-stone/80">
              {img.description ?? plate.caption ?? plate.alt}
              {img.sourceUrl ? <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block underline underline-offset-4">Photo source (external building)</a> : null}
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="flex h-12 w-12 items-center justify-center border border-bone/25 transition-colors hover:border-bone/70"
              >
                <ArrowLeft size={17} strokeWidth={1.4} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="flex h-12 w-12 items-center justify-center border border-bone/25 transition-colors hover:border-bone/70"
              >
                <ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
