import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { site } from '../../config/site'
import { fallbackOnError, imageProps } from '../../lib/image'
import { projects } from '../../data/projects'
import { RevealText } from '../ui/RevealText'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '16%'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.25])

  const lead = projects[0]
  const img = imageProps('home-hero')

  return (
    <section
      ref={ref}
      className="relative isolate flex h-[100svh] min-h-[600px] w-full flex-col justify-end overflow-hidden bg-ink text-bone"
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.img
          src={img.src}
          srcSet={img.srcSet}
          onError={(event) => fallbackOnError(event.currentTarget, img)}
          sizes="100vw"
          width={img.width}
          height={img.height}
          alt={img.reference ? `Real architecture photo reference: ${img.description ?? "coastal house"}` : 'Light falling between concrete columns — ARCHÉ studio light study'}
          fetchPriority="high"
          decoding="sync"
          className="h-[116%] w-full object-cover"
          initial={reduced ? false : { scale: 1.14, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0 : 1.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-gradient-to-t from-ink/92 via-ink/55 to-transparent"
      />

      <motion.div style={{ opacity: fade }} className="shell pb-10 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <motion.p
              className="eyebrow text-brass [text-shadow:0_1px_18px_rgb(12_11_10/0.55)]"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Architecture &amp; Interiors — est. {site.founded}
            </motion.p>
            <RevealText
              as="h1"
              immediate
              delay={0.65}
              text={site.tagline}
              className="mt-5 max-w-[16ch] font-display text-display-xl"
            />
          </div>

          <motion.div
            className="flex items-end justify-between gap-6 lg:col-span-3 lg:flex-col lg:items-start"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <div className="text-sm leading-relaxed text-stone/90 [text-shadow:0_1px_16px_rgb(12_11_10/0.5)]">
              <span className="block font-display text-lg text-bone">{img.reference ? 'Architecture reference' : 'Light study'}</span>
              <span className="block">{img.reference ? 'Real building · independent photo reference' : `Colonnade, ${site.contact.studios[0].city} studio`}</span>
              <span className="block text-stone/65">
                Latest work — {lead.title}, {lead.year}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-bone/15 pt-5">
          <span className="eyebrow text-stone/70">Scroll</span>
          <motion.span
            aria-hidden="true"
            className="block h-10 w-px origin-top bg-bone/40"
            initial={reduced ? false : { scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          <span className="eyebrow text-stone/70 hidden sm:block">{site.contact.studios.map((s) => s.city).join(' / ')}</span>
        </div>
      </motion.div>
    </section>
  )
}
