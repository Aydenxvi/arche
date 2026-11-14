import { Link } from 'react-router-dom'
import { site } from '../config/site'
import { Figure } from '../components/ui/Figure'
import { RevealText } from '../components/ui/RevealText'
import { ArrowLink } from '../components/ui/ArrowLink'
import { useSeo } from '../lib/seo'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'This page does not exist.' })

  return (
    <section className="shell grid min-h-[86svh] items-center gap-12 pb-24 pt-40 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-5">
        <p className="eyebrow text-bronze">Error 404</p>
        <RevealText
          as="h1"
          immediate
          text="A room that was never built."
          className="mt-6 max-w-[12ch] font-display text-display-lg"
        />
        <p className="mt-8 max-w-prose text-pretty text-base leading-relaxed opacity-70">
          The page you asked for is not here. It may have been moved, or it may never have existed —
          this is a demonstration site, after all.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <ArrowLink to="/">Return home</ArrowLink>
          <ArrowLink to="/projects">Browse projects</ArrowLink>
        </div>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t rule pt-6">
          {site.nav.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="link-underline text-sm opacity-65 hover:opacity-100">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <Figure
          id="notfound-01"
          alt="An empty wall with a single dark opening"
          className="w-full"
          frame="aspect-[4/3]"
          sizes="(max-width: 1024px) 100vw, 48vw"
          priority
        />
      </div>
    </section>
  )
}
