import { useSeo } from '../lib/seo'
import { site } from '../config/site'
import { useDarkHero } from '../hooks/useHeaderTone'
import { Hero } from '../components/sections/Hero'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { PhilosophyBlock } from '../components/sections/PhilosophyBlock'
import { ExpertiseList } from '../components/sections/ExpertiseList'
import { JournalPreview } from '../components/sections/JournalPreview'
import { ContactCta } from '../components/sections/ContactCta'

export default function Home() {
  useSeo({ title: site.name })
  useDarkHero()

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <PhilosophyBlock />
      <ExpertiseList />
      <JournalPreview />
      <ContactCta />
    </>
  )
}
