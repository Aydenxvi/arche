import { manifesto, principles, processSteps, stats, team } from '../data/studio'
import { site } from '../config/site'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ArrowLink } from '../components/ui/ArrowLink'
import { useSeo } from '../lib/seo'

export default function Studio() {
  useSeo({
    title: 'Studio',
    description: 'A studio of twelve working slowly on a limited number of projects at a time.',
  })

  return (
    <>
      <header className="shell pb-16 pt-36 sm:pt-44 lg:pb-24 lg:pt-56">
        <p className="eyebrow text-bronze">Studio</p>
        <RevealText
          as="h1"
          immediate
          text={manifesto[0]}
          className="mt-8 max-w-[20ch] font-display text-display-lg"
        />
      </header>

      <Figure
        id="studio-04"
        alt="The studio courtyard in late afternoon"
        className="w-full"
          frame="h-[52vh] min-h-[320px] lg:h-[76vh]"
        sizes="100vw"
        parallax={36}
        priority
      />

      <section className="shell py-section">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Manifesto</SectionLabel>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {manifesto.slice(1).map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty text-lede">{paragraph}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <ArrowLink to="/expertise" className="mt-4">What we do</ArrowLink>
            </Reveal>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t rule pt-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <dt className="eyebrow opacity-50">{stat.label}</dt>
              <dd className="mt-3 font-display text-display-sm tabular-nums">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-bone py-section">
        <div className="shell">
          <SectionLabel index="02">Principles</SectionLabel>
          <RevealText
            as="h2"
            text="Six things we hold to."
            className="mt-10 font-display text-display-md"
          />
          <ol className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.index} delay={(i % 3) * 0.07}>
                <li className="border-t rule pt-5">
                  <span className="eyebrow text-bronze">{principle.index}</span>
                  <h3 className="mt-4 font-display text-2xl">{principle.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed opacity-70">{principle.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-section">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <SectionLabel index="03">Process</SectionLabel>
            <p className="mt-8 text-pretty text-base leading-relaxed opacity-70">
              Six stages, roughly eighteen months on a house. The first two are the ones that decide
              whether the rest goes well.
            </p>
            <Figure
              id="studio-02"
              alt="Model studies on the studio table"
              className="mt-10 hidden w-full lg:block"
          frame="aspect-[4/5]"
              sizes="30vw"
              parallax={18}
            />
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.05}>
                <li className="grid grid-cols-[auto_1fr] gap-x-6 border-t rule py-8 sm:gap-x-10">
                  <span className="eyebrow pt-2 text-bronze">{step.index}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl sm:text-3xl">{step.title}</h3>
                      <span className="eyebrow opacity-45">{step.duration}</span>
                    </div>
                    <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed opacity-70">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell pb-section">
        <div className="grid gap-8 sm:grid-cols-12">
          <Figure
            id="studio-01"
            alt="Light across the studio floor in the morning"
            className="w-full sm:col-span-7"
          frame="aspect-[3/2]"
            sizes="(max-width: 640px) 100vw, 58vw"
            parallax={20}
            caption="Studio, Zürich"
          />
          <Figure
            id="studio-03"
            alt="A material sample from the studio library"
            className="w-full sm:col-span-4 sm:col-start-9 sm:mt-24"
          frame="aspect-square"
            sizes="(max-width: 640px) 100vw, 33vw"
            parallax={14}
            caption="Sample library"
          />
        </div>
      </section>

      <section className="bg-charcoal py-section text-bone">
        <div className="shell">
          <SectionLabel index="04" className="text-bone/90">People</SectionLabel>
          <RevealText as="h2" text="Twelve of us, in two cities." className="mt-10 font-display text-display-md" />
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.07}>
                <li className="border-t border-bone/15 pt-5">
                  <h3 className="font-display text-2xl">{member.name}</h3>
                  <p className="eyebrow mt-2 text-brass">{member.role}</p>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-stone/70">{member.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-bone/15 pt-10">
              <p className="max-w-prose text-pretty text-base leading-relaxed text-stone/70">
                We are usually open to one new commission per quarter, and we are always happy to look at
                a site.
              </p>
              <ArrowLink to="/contact" variant="outline" className="text-bone">
                Start a conversation
              </ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16">
        <p className="max-w-prose text-xs leading-relaxed opacity-50">{site.demoNotice}</p>
      </section>
    </>
  )
}
