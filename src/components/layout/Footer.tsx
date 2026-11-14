import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import { projects } from '../../data/projects'
import { Reveal } from '../ui/Reveal'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-bone">
      <div className="shell py-20 lg:py-28">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-brass">{site.tagline}</p>
              <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-stone/75">
                {site.description}
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="link-underline mt-8 inline-block font-display text-2xl sm:text-3xl"
              >
                {site.contact.email}
              </a>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
              <div>
                <h2 className="eyebrow text-warm">Pages</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <Link to="/" className="link-underline text-stone/80 hover:text-bone">Home</Link>
                  </li>
                  <li><Link to="/image-library" className="link-underline text-stone/80 hover:text-bone">Image sources &amp; credits</Link></li>
                  {site.nav.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="link-underline text-stone/80 hover:text-bone">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="eyebrow text-warm">Selected work</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {projects.slice(0, 5).map((p) => (
                    <li key={p.slug}>
                      <Link to={`/projects/${p.slug}`} className="link-underline text-stone/80 hover:text-bone">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h2 className="eyebrow text-warm">Studios</h2>
                <ul className="mt-5 space-y-5 text-sm text-stone/80">
                  {site.contact.studios.map((studio) => (
                    <li key={studio.city}>
                      <span className="block text-bone">{studio.city}</span>
                      {studio.lines.map((line) => (
                        <span key={line} className="block leading-relaxed">{line}</span>
                      ))}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {site.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="eyebrow text-stone/70 transition-colors hover:text-bone"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </Reveal>
      </div>

      <div aria-hidden="true" className="shell overflow-hidden pb-6">
        <span className="block select-none font-display text-[clamp(4rem,19vw,17rem)] leading-[0.82] tracking-[-0.03em] text-bone/[0.07]">
          {site.wordmark}
        </span>
      </div>

      <div className="shell border-t border-bone/10 py-7">
        <div className="flex flex-col gap-4 text-xs leading-relaxed text-warm sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-xl">{site.demoNotice}</p>
          <p className="shrink-0">© {year} {site.name}. Frontend concept · v008.</p>
        </div>
      </div>
    </footer>
  )
}
