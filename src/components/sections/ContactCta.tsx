import { site } from '../../config/site'
import { Reveal } from '../ui/Reveal'
import { RevealText } from '../ui/RevealText'
import { ArrowLink } from '../ui/ArrowLink'

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ivory py-section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-bronze">New enquiries</p>
        </Reveal>
        <RevealText
          as="h2"
          text="Tell us about the site."
          className="mt-8 max-w-[14ch] font-display text-display-xl"
        />
        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-10 border-t rule pt-10 lg:grid-cols-12">
            <p className="max-w-prose text-pretty text-lede lg:col-span-5">
              We take on a small number of commissions each year and begin every one with a long
              conversation. A sketch, a plot number or a paragraph is enough to start.
            </p>
            <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9">
              <a
                href={`mailto:${site.contact.email}`}
                className="link-underline font-display text-2xl sm:text-3xl"
              >
                {site.contact.email}
              </a>
              <ArrowLink to="/contact" variant="outline">
                Start an enquiry
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
