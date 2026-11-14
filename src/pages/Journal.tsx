import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { articleCategories, articles, formatDate } from '../data/journal'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { useSeo } from '../lib/seo'
import { cx } from '../lib/utils'

export default function Journal() {
  const [filter, setFilter] = useState<string>('All')
  const reduced = useReducedMotion()
  useSeo({
    title: 'Journal',
    description: 'Writing from the ARCHÉ studio on light, material, space and practice.',
  })

  const visible = useMemo(
    () => (filter === 'All' ? articles : articles.filter((a) => a.category === filter)),
    [filter],
  )

  return (
    <>
      <header className="shell pb-16 pt-36 sm:pt-44 lg:pb-20 lg:pt-56">
        <p className="eyebrow text-bronze">Journal</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText
            as="h1"
            immediate
            text="Writing on light, material and the slow parts of practice."
            className="max-w-[18ch] font-display text-display-lg lg:col-span-9"
          />
        </div>
      </header>

      <div className="sticky top-0 z-30 border-y rule bg-[var(--page-bg)]/90 backdrop-blur-md">
        <div className="shell flex items-center gap-6 overflow-x-auto py-4 no-scrollbar">
          <span className="eyebrow shrink-0 opacity-45">Topics</span>
          <ul className="flex items-center gap-2 sm:gap-3">
            {articleCategories.map((category) => {
              const active = filter === category
              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setFilter(category)}
                    aria-pressed={active}
                    className={cx(
                      'whitespace-nowrap border px-4 py-2 text-label uppercase tracking-[0.14em] transition-all duration-500 ease-arch',
                      active ? 'border-current bg-charcoal text-ivory' : 'rule opacity-60 hover:opacity-100',
                    )}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <section className="shell py-16 lg:py-24">
        <ul className="grid gap-x-10 gap-y-20">
          <AnimatePresence mode="popLayout">
            {visible.map((article, i) => (
              <motion.li
                key={article.slug}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group border-t rule pt-8"
              >
                <Link
                  to={`/journal/${article.slug}`}
                  className={cx(
                    'grid items-start gap-6 lg:grid-cols-12 lg:gap-x-10',
                  )}
                >
                  <div className="order-2 lg:order-1 lg:col-span-5">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] opacity-55">
                      <span>{article.category}</span>
                      <span aria-hidden="true">—</span>
                      <span>{formatDate(article.date)}</span>
                      <span aria-hidden="true">—</span>
                      <span>{article.readingMinutes} min</span>
                    </div>
                    <h2 className="mt-4 max-w-[20ch] font-display text-display-sm transition-opacity duration-500 group-hover:opacity-60">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed opacity-70">
                      {article.standfirst}
                    </p>
                    <span className="eyebrow mt-6 inline-block opacity-50">{article.author}</span>
                  </div>

                  <div
                    className={cx(
                      'order-1 lg:order-2 lg:col-span-6',
                      i % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-7',
                    )}
                  >
                    <Figure
                      id={article.cover}
                      alt={article.title}
                      className="w-full"
                      frame={i % 3 === 1 ? 'aspect-[16/10]' : 'aspect-[3/2]'}
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      zoom
                      reveal={false}
                    />
                  </div>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {visible.length === 0 ? (
          <Reveal>
            <p className="py-20 text-center text-lede opacity-60">No articles in this topic yet.</p>
          </Reveal>
        ) : null}
      </section>
    </>
  )
}
