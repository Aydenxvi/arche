import { Link } from 'react-router-dom'
import { articles, formatDate } from '../../data/journal'
import { Figure } from '../ui/Figure'
import { Reveal } from '../ui/Reveal'
import { RevealText } from '../ui/RevealText'
import { SectionLabel } from '../ui/SectionLabel'
import { ArrowLink } from '../ui/ArrowLink'

export function JournalPreview() {
  const [lead, ...rest] = articles.slice(0, 3)

  return (
    <section className="shell py-section">
      <SectionLabel index="04">Journal</SectionLabel>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <RevealText as="h2" text="Notes from the studio." className="font-display text-display-lg" />
        <Reveal delay={0.1}>
          <ArrowLink to="/journal">All writing</ArrowLink>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-x-10">
        <article className="group lg:col-span-7">
          <Link to={`/journal/${lead.slug}`} className="block">
            <Figure
              id={lead.cover}
              alt={lead.title}
              className="w-full"
          frame="aspect-[3/2]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              parallax={18}
              zoom
            />
            <div className="mt-6">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] opacity-55">
                <span>{lead.category}</span>
                <span aria-hidden="true">—</span>
                <span>{formatDate(lead.date)}</span>
              </div>
              <h3 className="mt-4 max-w-[20ch] font-display text-display-sm transition-opacity duration-500 group-hover:opacity-60">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-prose text-pretty text-sm leading-relaxed opacity-70">
                {lead.standfirst}
              </p>
            </div>
          </Link>
        </article>

        <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9 lg:pt-10">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08}>
              <article className="group border-t rule pt-6">
                <Link to={`/journal/${article.slug}`} className="block">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] opacity-55">
                    <span>{article.category}</span>
                    <span aria-hidden="true">—</span>
                    <span>{article.readingMinutes} min</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-snug transition-opacity duration-500 group-hover:opacity-60">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed opacity-65">
                    {article.standfirst.slice(0, 118)}…
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
