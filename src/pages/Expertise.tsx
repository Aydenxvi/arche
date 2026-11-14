import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { services } from '../data/studio'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { ArrowLink } from '../components/ui/ArrowLink'
import { useSeo } from '../lib/seo'
import { cx } from '../lib/utils'

export default function Expertise() {
  const location = useLocation()
  useSeo({
    title: 'Expertise',
    description: 'Residential and commercial architecture, interiors, spatial planning and creative direction.',
  })

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    if (el) window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 220)
  }, [location.hash])

  return (
    <>
      <header className="shell pb-16 pt-36 sm:pt-44 lg:pb-24 lg:pt-56">
        <p className="eyebrow text-bronze">Expertise</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText
            as="h1"
            immediate
            text="What we do, and how far we take it."
            className="max-w-[16ch] font-display text-display-lg lg:col-span-8"
          />
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="text-pretty text-base leading-relaxed opacity-70">
              One team carries a project from the first site visit to the final handover. We do not pass
              work to a delivery office.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="border-t rule">
        {services.map((service, i) => {
          const flip = i % 2 === 1
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={cx('scroll-mt-24 border-b rule py-section', i % 2 === 1 && 'bg-bone')}
            >
              <div className="shell grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
                <div className={cx('lg:col-span-5', flip ? 'lg:col-start-8 lg:row-start-1' : 'lg:col-start-1')}>
                  <span className="eyebrow text-bronze">{service.index}</span>
                  <h2 className="mt-5 font-display text-display-md">{service.title}</h2>
                  <p className="mt-6 text-pretty text-lede">{service.summary}</p>
                  <div className="mt-8 space-y-5">
                    {service.body.map((paragraph, k) => (
                      <p key={k} className="text-pretty text-base leading-[1.75] opacity-75">{paragraph}</p>
                    ))}
                  </div>
                  <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="border-t rule pt-3 text-sm opacity-70">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cx('lg:col-span-6', flip ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7')}>
                  <Figure
                    id={service.image}
                    alt={service.title}
                    className="w-full"
                    frame={i % 3 === 0 ? 'aspect-[4/3]' : i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[3/2]'}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    parallax={22}
                  />
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="shell py-section">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            text="Not sure which of these you need?"
            className="max-w-[16ch] font-display text-display-md"
          />
          <Reveal delay={0.1}>
            <ArrowLink to="/contact" variant="outline">Ask us</ArrowLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
