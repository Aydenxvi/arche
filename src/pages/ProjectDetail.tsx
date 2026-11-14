import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react'
import { adjacentProjects, getProject } from '../data/projects'
import { photoSeries } from '../data/photoSeries'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { Lightbox } from '../components/ui/Lightbox'
import { SectionLabel } from '../components/ui/SectionLabel'
import { useDarkHero } from '../hooks/useHeaderTone'
import { fallbackOnError, imageProps } from '../lib/image'
import { useSeo } from '../lib/seo'

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const reduced = useReducedMotion()
  useDarkHero(Boolean(project))
  useSeo({
    title: project?.title ?? 'Project',
    description: project?.summary,
    image: project ? imageProps(project.hero).src : undefined,
    type: 'article',
  })

  if (!project) return <Navigate to="/projects" replace />

  const { prev, next } = adjacentProjects(project.slug)
  const hero = imageProps(project.hero)
  const provenance = photoSeries[project.slug]
  const [g1, g2, g3, g4, g5] = project.gallery

  return (
    <>
      <header className="relative isolate flex h-[92svh] min-h-[560px] flex-col justify-end overflow-hidden bg-ink text-bone">
        <motion.img
          src={hero.src}
          srcSet={hero.srcSet}
          onError={(event) => fallbackOnError(event.currentTarget, hero)}
          sizes="100vw"
          width={hero.width}
          height={hero.height}
          alt={hero.reference ? `Real architectural reference: ${hero.description ?? project.title}` : `${project.title}, ${project.location}`}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          initial={reduced ? false : { scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduced ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/80" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-gradient-to-t from-ink/92 via-ink/55 to-transparent"
        />

        {hero.sourceUrl ? <a href={hero.sourceUrl} target="_blank" rel="noopener noreferrer" className="absolute right-6 top-24 z-10 bg-ink/65 px-3 py-2 text-[10px] uppercase tracking-wider text-bone/85 transition-colors hover:text-bone">Real photo · source</a> : null}
        <div className="shell pb-12 lg:pb-16">
          <Link
            to="/projects"
            className="group/arrow inline-flex items-center gap-3 text-label uppercase tracking-[0.16em] text-stone/80 transition-colors hover:text-bone"
          >
            <ArrowLeft size={15} strokeWidth={1.4} aria-hidden="true" className="transition-transform duration-500 group-hover/arrow:-translate-x-1" />
            Archive
          </Link>
          <RevealText
            as="h1"
            immediate
            delay={0.25}
            text={project.title}
            className="mt-6 font-display text-display-xl"
          />
          <p className="mt-5 max-w-[34ch] text-pretty text-lede text-stone/85">{project.subtitle}</p>
        </div>
      </header>

      <div className="shell pt-5 text-xs leading-relaxed opacity-60">Design portfolio concept, not a built ARCHÉ commission. All depicted buildings are independent architectural references. Photo descriptions and sources are shown with each image. <Link to="/image-library" className="underline underline-offset-4">Image credits and sources</Link>.</div>
      {provenance ? <aside className="shell mt-6 border-y rule py-5 text-sm leading-relaxed" aria-label="Photography provenance">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="font-semibold">Photographic precedent: {provenance.building}</p>
          <span className="eyebrow opacity-55">{provenance.coherent ? 'One real location' : 'Mixed real locations'}</span>
        </div>
        <p className="mt-2 opacity-70">{provenance.note} Photo reproduction rights are not verified.</p>
        <a href={provenance.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-semibold underline underline-offset-4">About the reference building</a>
      </aside> : null}
      <section aria-label="Project facts" className="border-b rule">
        <dl className="shell grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:py-12">
          {[
            { label: 'Category', value: project.category },
            { label: 'Location', value: `${project.location}, ${project.country}` },
            { label: 'Concept year', value: String(project.year) },
            { label: 'Proposed area', value: project.area },
            { label: 'Status', value: 'Fictional study' },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <dt className="eyebrow opacity-50">{item.label}</dt>
              <dd className="mt-2 font-display text-xl">{item.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="shell py-section">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Concept</SectionLabel>
            <p className="mt-8 text-pretty text-lede">{project.summary}</p>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:pt-16">
            {project.concept.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <p className="text-pretty text-base leading-[1.75] opacity-75">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GalleryPlate index={0} onOpen={setLightbox} frame="h-[60vh] min-h-[340px] lg:h-[88vh]" sizes="100vw" project={project.title} plate={g1} parallax={40} />

      <section className="shell py-section">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-display-sm">{project.narrative[0].heading}</h2>
            <div className="mt-6 space-y-5">
              {project.narrative[0].body.map((p, i) => (
                <p key={i} className="text-pretty text-base leading-[1.75] opacity-75">{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <GalleryPlate index={1} onOpen={setLightbox} frame="aspect-[4/5]" sizes="(max-width: 1024px) 100vw, 55vw" project={project.title} plate={g2} parallax={22} />
          </div>

          <div className="lg:col-span-5 lg:col-start-2 lg:-mt-24">
            <GalleryPlate index={2} onOpen={setLightbox} frame="aspect-square" sizes="(max-width: 1024px) 100vw, 40vw" project={project.title} plate={g3} parallax={16} />
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-section text-bone">
        <div className="shell grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <SectionLabel index="02" className="text-bone/90">Materials</SectionLabel>
            <ul className="mt-8 space-y-3">
              {project.materials.map((material, i) => (
                <Reveal key={material} delay={i * 0.05}>
                  <li className="border-b border-bone/12 pb-3 font-display text-xl">{material}</li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-6">
            <SectionLabel index="03" className="text-bone/90">Specification</SectionLabel>
            <dl className="mt-8">
              {project.specs.map((spec, i) => (
                <Reveal key={spec.label} delay={i * 0.05}>
                  <div className="flex items-baseline justify-between gap-6 border-b border-bone/12 py-4">
                    <dt className="eyebrow text-stone/55">{spec.label}</dt>
                    <dd className="text-right text-sm text-stone/90">{spec.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <GalleryPlate index={3} onOpen={setLightbox} frame="aspect-[3/2] lg:aspect-[2/3]" sizes="(max-width: 1024px) 100vw, 18vw" project={project.title} plate={g4} dark />
          </div>
        </div>
      </section>

      {project.narrative[1] ? (
        <section className="shell py-section">
          <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <GalleryPlate index={4} onOpen={setLightbox} frame="aspect-[16/10]" sizes="(max-width: 1024px) 100vw, 58vw" project={project.title} plate={g5} parallax={24} />
            </div>
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-16">
              <h2 className="font-display text-display-sm">{project.narrative[1].heading}</h2>
              <div className="mt-6 space-y-5">
                {project.narrative[1].body.map((p, i) => (
                  <p key={i} className="text-pretty text-base leading-[1.75] opacity-75">{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <nav aria-label="Project navigation" className="border-t rule">
        <div className="shell grid gap-px py-0 sm:grid-cols-2">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="group flex items-center gap-6 py-12 sm:pr-10">
              <ArrowLeft size={18} strokeWidth={1.3} aria-hidden="true" className="shrink-0 transition-transform duration-500 group-hover:-translate-x-1" />
              <span>
                <span className="eyebrow block opacity-50">Previous</span>
                <span className="mt-2 block font-display text-2xl transition-opacity duration-500 group-hover:opacity-60">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center justify-end gap-6 border-t rule py-12 text-right sm:border-l sm:border-t-0 sm:pl-10"
            >
              <span>
                <span className="eyebrow block opacity-50">Next</span>
                <span className="mt-2 block font-display text-2xl transition-opacity duration-500 group-hover:opacity-60">
                  {next.title}
                </span>
              </span>
              <ArrowRight size={18} strokeWidth={1.3} aria-hidden="true" className="shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          ) : <span />}
        </div>
      </nav>

      <Lightbox
        plates={project.gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </>
  )
}

interface GalleryPlateProps {
  plate: { id: Parameters<typeof imageProps>[0]; alt: string; caption?: string }
  index: number
  onOpen: (index: number) => void
  frame: string
  sizes: string
  project: string
  parallax?: number
  dark?: boolean
}

function GalleryPlate({ plate, index, onOpen, frame, sizes, project, parallax = 0, dark }: GalleryPlateProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => onOpen(index)}
        className="block w-full text-left"
        aria-label={`Open image: ${plate.alt} — ${project}`}
      >
        <Figure
          id={plate.id}
          alt={plate.alt}
          caption={plate.caption}
          className="w-full"
          frame={frame}
          sizes={sizes}
          parallax={parallax}
          zoom
          captionClassName={dark ? 'text-stone/50' : undefined}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-ink/55 text-bone opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100"
        >
          <Expand size={16} strokeWidth={1.4} />
        </span>
      </button>
      {imageProps(plate.id).sourceUrl ? <a href={imageProps(plate.id).sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[10px] uppercase tracking-wider opacity-55 underline underline-offset-4 hover:opacity-100">Photographic reference · source</a> : null}
    </div>
  )
}
