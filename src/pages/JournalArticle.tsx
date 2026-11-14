import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { adjacentArticles, formatDate, getArticle, relatedArticles } from '../data/journal'
import type { ArticleBlock } from '../types'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { imageProps } from '../lib/image'
import { useSeo } from '../lib/seo'

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-14 font-display text-display-sm first:mt-0">{block.text}</h2>
    case 'quote':
      return (
        <blockquote className="my-14 border-l rule pl-7 lg:-ml-7">
          <p className="font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.3]">{block.text}</p>
          {block.attribution ? (
            <cite className="eyebrow mt-5 block not-italic opacity-50">{block.attribution}</cite>
          ) : null}
        </blockquote>
      )
    case 'list':
      return (
        <ul className="my-8 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 text-pretty text-base leading-[1.75] opacity-80">
              <span aria-hidden="true" className="mt-[0.8em] h-px w-5 shrink-0 bg-current opacity-40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <Figure
          id={block.id}
          alt={block.alt}
          caption={block.caption}
          className="my-14 w-full lg:-mx-[12%] lg:w-[124%] lg:max-w-none"
          frame="aspect-[16/10]"
          sizes="(max-width: 1024px) 100vw, 70vw"
          parallax={18}
        />
      )
    default:
      return <p className="mt-6 text-pretty text-[1.0625rem] leading-[1.8] opacity-85">{block.text}</p>
  }
}

export default function JournalArticle() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)
  useSeo({
    title: article?.title ?? 'Journal',
    description: article?.standfirst,
    image: article ? imageProps(article.cover).src : undefined,
    type: 'article',
  })

  if (!article) return <Navigate to="/journal" replace />

  const related = relatedArticles(article.slug)
  const { prev, next } = adjacentArticles(article.slug)

  return (
    <>
      <header className="shell pb-12 pt-36 sm:pt-44 lg:pt-52">
        <Link
          to="/journal"
          className="group/arrow inline-flex items-center gap-3 text-label uppercase tracking-[0.16em] opacity-60 transition-opacity hover:opacity-100"
        >
          <ArrowLeft size={15} strokeWidth={1.4} aria-hidden="true" className="transition-transform duration-500 group-hover/arrow:-translate-x-1" />
          Journal
        </Link>

        <p className="eyebrow mt-10 text-bronze">{article.category}</p>
        <RevealText
          as="h1"
          immediate
          delay={0.1}
          text={article.title}
          className="mt-5 max-w-[20ch] font-display text-display-lg"
        />
        <p className="mt-8 max-w-prose text-pretty text-lede opacity-80">{article.standfirst}</p>

        <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t rule pt-6">
          <div>
            <dt className="eyebrow opacity-45">Written by</dt>
            <dd className="mt-2 text-sm">{article.author}</dd>
          </div>
          <div>
            <dt className="eyebrow opacity-45">Published</dt>
            <dd className="mt-2 text-sm">{formatDate(article.date)}</dd>
          </div>
          <div>
            <dt className="eyebrow opacity-45">Reading time</dt>
            <dd className="mt-2 text-sm">{article.readingMinutes} minutes</dd>
          </div>
        </dl>
      </header>

      <Figure
        id={article.cover}
        alt={article.title}
        className="w-full"
          frame="h-[46vh] min-h-[280px] lg:h-[70vh]"
        sizes="100vw"
        parallax={32}
        priority
      />

      <article className="shell py-section">
        <div className="mx-auto max-w-prose">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      <nav aria-label="Article navigation" className="border-t rule">
        <div className="shell grid sm:grid-cols-2">
          {prev ? (
            <Link to={`/journal/${prev.slug}`} className="group flex items-center gap-6 py-10 sm:pr-10">
              <ArrowLeft size={18} strokeWidth={1.3} aria-hidden="true" className="shrink-0 transition-transform duration-500 group-hover:-translate-x-1" />
              <span>
                <span className="eyebrow block opacity-50">Previous</span>
                <span className="mt-2 block font-display text-xl transition-opacity duration-500 group-hover:opacity-60">{prev.title}</span>
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/journal/${next.slug}`} className="group flex items-center justify-end gap-6 border-t rule py-10 text-right sm:border-l sm:border-t-0 sm:pl-10">
              <span>
                <span className="eyebrow block opacity-50">Next</span>
                <span className="mt-2 block font-display text-xl transition-opacity duration-500 group-hover:opacity-60">{next.title}</span>
              </span>
              <ArrowRight size={18} strokeWidth={1.3} aria-hidden="true" className="shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          ) : <span />}
        </div>
      </nav>

      <section className="bg-bone py-section">
        <div className="shell">
          <h2 className="eyebrow opacity-50">Related reading</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.08}>
                <li className="group">
                  <Link to={`/journal/${item.slug}`} className="block">
                    <Figure
                      id={item.cover}
                      alt={item.title}
                      className="w-full"
          frame="aspect-[3/2]"
                      sizes="(max-width: 640px) 100vw, 45vw"
                      zoom
                    />
                    <h3 className="mt-5 font-display text-2xl transition-opacity duration-500 group-hover:opacity-60">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed opacity-65">
                      {item.standfirst.slice(0, 110)}…
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
