import { manifesto, principles } from '../../data/studio'
import { Figure } from '../ui/Figure'
import { Reveal } from '../ui/Reveal'
import { RevealText } from '../ui/RevealText'
import { SectionLabel } from '../ui/SectionLabel'
import { ArrowLink } from '../ui/ArrowLink'

export function PhilosophyBlock() {
  return (
    <section className="bg-bone py-section">
      <div className="shell">
        <SectionLabel index="02">Studio</SectionLabel>

        <div className="mt-12 grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              text="A building should be the smallest possible answer to a real question."
              className="max-w-[18ch] font-display text-display-md"
            />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
            <p className="text-pretty text-lede">{manifesto[1]}</p>
            <ArrowLink to="/studio" className="mt-8">
              Inside the studio
            </ArrowLink>
          </Reveal>
        </div>
      </div>

      <Figure
        id="home-intro"
        alt="Raking light across a flight of stone steps"
        className="mt-16 w-full lg:mt-24"
          frame="h-[46vh] min-h-[300px] lg:h-[62vh]"
        sizes="100vw"
        parallax={34}
        caption="Studio light study — stair, 16:40"
        captionClassName="shell mt-4"
      />

      <div className="shell mt-16 lg:mt-24">
        <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {principles.slice(0, 3).map((principle, i) => (
            <Reveal key={principle.index} delay={i * 0.08}>
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
  )
}
