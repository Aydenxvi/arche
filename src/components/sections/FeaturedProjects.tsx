import { Link } from 'react-router-dom'
import { featuredProjects } from '../../data/projects'
import { Figure } from '../ui/Figure'
import { Reveal } from '../ui/Reveal'
import { RevealText } from '../ui/RevealText'
import { SectionLabel } from '../ui/SectionLabel'
import { ArrowLink } from '../ui/ArrowLink'
import { cx } from '../../lib/utils'

const compositions = [
  'lg:col-span-8 lg:col-start-1',
  'lg:col-span-5 lg:col-start-8',
  'lg:col-span-7 lg:col-start-3',
  'lg:col-span-6 lg:col-start-7',
  'lg:col-span-9 lg:col-start-1',
]

const frames = ['aspect-[16/10]', 'aspect-[4/5]', 'aspect-[3/2]', 'aspect-[5/6]', 'aspect-[21/9]']

export function FeaturedProjects() {
  return (
    <section className="shell py-section">
      <SectionLabel index="01">Selected works</SectionLabel>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
        <RevealText
          as="h2"
          text="Buildings that keep their quiet."
          className="font-display text-display-lg lg:col-span-7"
        />
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <p className="text-pretty text-base leading-relaxed opacity-70">
            A collection of design studies with real architectural photography used for visual reference.
            The buildings photographed are not ARCHÉ commissions.
          </p>
          <ArrowLink to="/projects" className="mt-6">
            All projects
          </ArrowLink>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-y-24 lg:grid-cols-12 lg:gap-y-36">
        {featuredProjects.map((project, i) => (
          <article key={project.slug} className={cx('group', compositions[i % compositions.length])}>
            <Link to={`/projects/${project.slug}`} className="block">
              <Figure
                id={project.hero}
                alt={`${project.title}, ${project.location}`}
                className="w-full"
                frame={frames[i % frames.length]}
                sizes="(max-width: 1024px) 100vw, 60vw"
                parallax={i % 2 === 0 ? 26 : 16}
                zoom
              />
              <div className="mt-6 flex items-start justify-between gap-6 border-t rule pt-5">
                <div>
                  <h3 className="font-display text-display-sm transition-opacity duration-500 group-hover:opacity-60">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm opacity-60">
                    {project.location}, {project.country}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="eyebrow block opacity-55">{project.category}</span>
                  <span className="mt-2 block font-display text-xl opacity-80">{project.year}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
