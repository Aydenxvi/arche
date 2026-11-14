import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PHOTO_REFERENCES } from '../data/referencePhotos'
import { useSeo } from '../lib/seo'

const catalog = Object.entries(PHOTO_REFERENCES)
const groups = Array.from(new Set(catalog.map(([, photo]) => photo.section)))

export default function ImageLibrary() {
  useSeo({ title: 'Image sources', description: 'Real architectural photo references, publication rights not verified.' })
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? catalog : catalog.filter(([, img]) => img.section === filter)
  return <>
    <header className="shell pb-14 pt-36 sm:pt-44">
      <p className="eyebrow text-bronze">Architecture photography / Sources</p>
      <h1 className="mt-5 font-display text-display-xl">Image sources</h1>
      <p className="mt-5 max-w-3xl text-base leading-relaxed opacity-70">
        These are photographs of existing buildings used as visual references for a fictional ARCHÉ portfolio.
        They are not photographs of ARCHÉ projects. Original source links appear below. The photos are
        displayed from external hosts; copyright remains with the authors, and reuse rights have not been
        confirmed. Request permission or substitute licensed photographs before commercial publication.
      </p>
      <Link className="mt-7 inline-flex border border-stone/40 px-5 py-3 text-xs font-semibold uppercase tracking-wider" to="/projects">View projects</Link>
    </header>
    <section className="shell pb-24">
      <div className="flex flex-wrap gap-2 border-y rule py-5" aria-label="Filter image sources">
        {['All', ...groups].map(group => <button type="button" key={group} aria-pressed={filter === group} onClick={() => setFilter(group)} className={`border px-3 py-2 text-xs transition-colors ${filter === group ? 'border-charcoal bg-charcoal text-bone' : 'border-stone/25 hover:border-charcoal'}`}>{group}</button>)}
      </div>
      <p className="py-7 text-xs uppercase tracking-widest opacity-55">{shown.length} / {catalog.length} photographic references</p>
      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map(([id, data]) => <article className="min-w-0" key={id}>
          <div className="aspect-[3/2] overflow-hidden bg-stone/20"><img className="h-full w-full object-cover" loading="lazy" alt={data.description} src={data.image_url} onError={event => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement?.classList.add('bg-stone/30') }}/></div>
          <div className="mt-3 flex items-baseline justify-between gap-2"><h2 className="truncate font-mono text-xs">{id}</h2><span className="text-xs opacity-60">{data.ratio}</span></div>
          <p className="mt-2 text-sm leading-relaxed opacity-75">{data.description}</p>
          <p className="mt-2 text-xs leading-relaxed opacity-55">{data.match}</p>
          <p className="mt-1 text-xs leading-relaxed opacity-55">Rights: not verified for republication</p>
          <a href={data.source_url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wider underline underline-offset-4">Original source</a>
        </article>)}
      </div>
    </section>
  </>
}
