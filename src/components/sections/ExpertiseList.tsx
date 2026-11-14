import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../data/studio'
import { imageProps } from '../../lib/image'
import { Reveal } from '../ui/Reveal'
import { RevealText } from '../ui/RevealText'
import { SectionLabel } from '../ui/SectionLabel'
import { ArrowLink } from '../ui/ArrowLink'

export function ExpertiseList() {
  const [active, setActive] = useState<string | null>(null)
  const reduced = useReducedMotion()
  const current = services.find((s) => s.slug === active)

  return (
    <section className="bg-charcoal py-section text-bone">
      <div className="shell">
        <SectionLabel index="03" className="text-bone/90">
          Expertise
        </SectionLabel>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText
            as="h2"
            text="Five ways we work."
            className="font-display text-display-lg lg:col-span-6"
          />
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-stone/70">
              From a single room to a masterplan — the same team, the same attention, the same refusal to
              hand a project over at the drawing stage.
            </p>
            <ArrowLink to="/expertise" className="mt-6 text-bone">
              What we do
            </ArrowLink>
          </Reveal>
        </div>

        <div
          className="relative mt-16"
          onMouseLeave={() => setActive(null)}
        >
          <ul>
            {services.map((service) => (
              <li key={service.slug} className="border-t border-bone/15 last:border-b">
                <Link
                  to={`/expertise#${service.slug}`}
                  className="group flex items-baseline gap-5 py-7 transition-opacity duration-500 sm:gap-10 lg:py-9"
                  onMouseEnter={() => setActive(service.slug)}
                  onFocus={() => setActive(service.slug)}
                  onBlur={() => setActive(null)}
                >
                  <span className="eyebrow shrink-0 text-brass">{service.index}</span>
                  <span className="flex-1 font-display text-[clamp(1.75rem,4.2vw,3.1rem)] leading-tight transition-transform duration-700 ease-arch group-hover:translate-x-2">
                    {service.title}
                  </span>
                  <span className="hidden max-w-xs text-sm leading-relaxed text-stone/55 lg:block">
                    {service.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {current && !reduced ? (
              <motion.div
                key={current.slug}
                aria-hidden="true"
                className="pointer-events-none absolute right-[6%] top-1/2 hidden w-[20vw] max-w-[320px] -translate-y-1/2 xl:block"
                initial={{ opacity: 0, scale: 0.96, y: '-46%' }}
                animate={{ opacity: 1, scale: 1, y: '-50%' }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={imageProps(current.image).src}
                  srcSet={imageProps(current.image).srcSet}
                  sizes="320px"
                  alt=""
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
