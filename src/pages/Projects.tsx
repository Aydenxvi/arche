import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projectCategories, projects } from '../data/projects'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { useSeo } from '../lib/seo'
import { cx } from '../lib/utils'

const spans = [
  'sm:col-span-6 lg:col-span-7',
  'sm:col-span-6 lg:col-span-5',
  'sm:col-span-6 lg:col-span-5 lg:col-start-2',
  'sm:col-span-6 lg:col-span-6',
  'sm:col-span-6 lg:col-span-6',
  'sm:col-span-6 lg:col-span-6',
  'sm:col-span-6 lg:col-span-7',
  'sm:col-span-6 lg:col-span-5',
]
const frames = [
  'aspect-[4/3]',
  'aspect-[4/5]',
  'aspect-[3/4]',
  'aspect-[16/11]',
  'aspect-[4/3]',
  'aspect-[5/4]',
  'aspect-[16/10]',
  'aspect-[4/5]',
]

export default function Projects() {
  const [filter, setFilter] = useState<string>('All')
  const reduced = useReducedMotion()
  useSeo({
    title: 'Projects',
    description: 'The ARCHÉ project archive — residential, cultural, commercial and interior work.',
  })

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <header className="shell pb-16 pt-36 sm:pt-44 lg:pb-24 lg:pt-56">
        <p className="eyebrow text-bronze">Archive</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText
            as="h1"
            immediate
            text="Projects"
            className="font-display text-display-xl lg:col-span-7"
          />
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15}>
            <p className="text-pretty text-base leading-relaxed opacity-70">
              Eight fictional architecture studies inspired by material, climate and place. Photographs
              show real reference buildings by other architects; sources are credited separately.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="sticky top-0 z-30 border-y rule bg-[var(--page-bg)]/90 backdrop-blur-md">
        <div className="shell flex items-center gap-6 overflow-x-auto py-4 no-scrollbar">
          <span className="eyebrow shrink-0 opacity-45">Filter</span>
          <ul className="flex items-center gap-2 sm:gap-3" role="list">
            {projectCategories.map((category) => {
              const active = filter === category
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={active}
                    className={cx(
                      'whitespace-nowrap border px-4 py-2 text-label uppercase tracking-[0.14em] transition-all duration-500 ease-arch',
                      active
                        ? 'border-current bg-charcoal text-ivory'
                        : 'rule opacity-60 hover:opacity-100',
                    )}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>
          <span className="ml-auto hidden shrink-0 text-xs tabular-nums opacity-45 sm:block">
            {String(visible.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <section className="shell py-16 lg:py-24">
        <motion.ul layout className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-12 lg:gap-y-28">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.li
                key={project.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : (i % 3) * 0.06 }}
                className={cx('group', spans[i % spans.length])}
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <Figure
                    id={project.hero}
                    alt={`${project.title}, ${project.location}`}
                    className="w-full"
                    frame={frames[i % frames.length]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    zoom
                    reveal={false}
                  />
                  <div className="mt-5 flex items-start justify-between gap-6 border-t rule pt-4">
                    <div>
                      <h2 className="font-display text-2xl transition-opacity duration-500 group-hover:opacity-60 sm:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-2 text-sm opacity-60">
                        {project.location}, {project.country}
                      </p>
                    </div>
                    <div className="shrink-0 text-right text-xs uppercase tracking-[0.14em] opacity-55">
                      <span className="block">{project.category}</span>
                      <span className="mt-2 block tabular-nums">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {visible.length === 0 ? (
          <p className="py-20 text-center text-lede opacity-60">Nothing in this category yet.</p>
        ) : null}
      </section>
    </>
  )
}
