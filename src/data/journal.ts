import type { Article } from '../types'

export const articles: Article[] = [
  {
    slug: 'light-and-the-hours',
    title: 'Light and the Hours',
    standfirst:
      'Daylight is the only material in architecture that arrives for free, changes constantly, and cannot be specified on a schedule. Notes on designing for it.',
    category: 'Light',
    date: '2026-09-18',
    readingMinutes: 6,
    author: 'Ines Valk',
    cover: 'journal-light-and-the-hours-cover',
    body: [
      { type: 'p', text: 'We draw buildings in plan, but people experience them in time. A room is not one room; it is the sixteen or so distinct rooms that a single day of weather makes of it. The south-facing study that is unusable at two in the afternoon in July is the best room in the house at four in October.' },
      { type: 'p', text: 'This is obvious and yet it rarely survives contact with a project programme. Light is usually described in a brief as a quantity — daylight factor, glazing ratio, a lux figure for a working plane. Those numbers matter. They are also almost useless for describing whether a space is good to be in.' },
      { type: 'h2', text: 'Three questions before the window' },
      { type: 'p', text: 'Before deciding where an opening goes, we try to answer three things. What hour is this room for? What surface will the light land on first? And what should the person in the room be looking at when they look up?' },
      { type: 'list', items: ['A breakfast room wants low eastern light landing on a wall, not on a table.', 'A studio wants north light on a vertical surface and no sun patch at all.', 'A stair wants light at the top, because people climb toward brightness without being told to.'] },
      { type: 'image', id: 'journal-light-and-the-hours-inline', alt: 'Light falling through a deep opening onto a plaster wall', caption: 'A deep reveal turns a window into an instrument: the aperture is small, the lit surface is large.' },
      { type: 'h2', text: 'Reflected light does the real work' },
      { type: 'p', text: 'Direct sun is dramatic for about forty minutes a day. The light you actually live in is bounced — off a floor, a courtyard wall, the underside of a soffit. That means the colour and texture of the first surface light touches matters more than the size of the glass.' },
      { type: 'quote', text: 'Make the aperture small and the lit surface large. The room will feel generous and the glare will stay outside.', attribution: 'Studio note, pinned above the model table' },
      { type: 'p', text: 'A lime-plastered wall at the back of a deep reveal will fill a room more evenly than a picture window twice its area, and it will do so without the heat gain, the blinds, and the eventual decision to keep the blinds permanently closed.' },
      { type: 'h2', text: 'Designing for the bad hours' },
      { type: 'p', text: 'Every orientation has hours it handles badly. The discipline is to design for those hours rather than the photogenic ones: the west elevation in August, the north room in February, the courtyard at noon. If a space works at its worst hour it will take care of itself for the rest of the day.' },
    ],
  },
  {
    slug: 'material-honesty',
    title: 'Material Honesty, Revisited',
    standfirst:
      'The idea that materials should be "true to themselves" is old, moralistic and frequently misused. It is also, handled carefully, the most practical design tool we have.',
    category: 'Material',
    date: '2026-08-02',
    readingMinutes: 7,
    author: 'Tomás Reiner',
    cover: 'journal-material-honesty-cover',
    body: [
      { type: 'p', text: 'Material honesty gets invoked as a kind of virtue, usually by people with a concrete budget. Stripped of the moralising, what remains is a straightforward proposition: a building ages better when its surfaces are what they appear to be.' },
      { type: 'h2', text: 'Honesty is a maintenance strategy' },
      { type: 'p', text: 'A solid material wears. A thin applied finish fails. The difference is not ethical, it is temporal. Stone that is 40 millimetres thick develops a patina for a century; stone that is 8 millimetres on a backing board chips at the corner in year three and can never be repaired, only replaced.' },
      { type: 'image', id: 'journal-material-honesty-inline', alt: 'Stacked concrete volumes seen against an overcast sky', caption: 'A single material, read through light rather than variety.' },
      { type: 'p', text: 'So when we argue for the heavier option, the argument is rarely aesthetic. It is about what the building will look like after the first decade of ordinary use — shoulders brushing a corridor wall, rain hitting a sill, somebody dragging a table.' },
      { type: 'h2', text: 'Where the idea goes wrong' },
      { type: 'p', text: 'Taken literally, material honesty produces buildings that are cold, loud and difficult to inhabit. Exposed concrete everywhere is not honesty; it is a single-material rhetoric that ignores acoustics and touch.' },
      { type: 'list', items: ['Hard surfaces where people speak need soft counterparts, or the room becomes unusable.', 'Anything within hand reach should reward touch: timber, textile, worked metal.', 'Honesty applies to the structure and envelope. Comfort applies to the first 900 millimetres.'] },
      { type: 'quote', text: 'Be honest about the building. Be generous about the parts of it that people actually touch.' },
      { type: 'h2', text: 'A working rule' },
      { type: 'p', text: 'We now test every specification against a simple question: in twenty years, will this surface look worn or will it look broken? Worn is acceptable, often beautiful. Broken is a cost the client has not been told about yet.' },
    ],
  },
  {
    slug: 'the-art-of-subtraction',
    title: 'The Art of Subtraction',
    standfirst:
      'Minimalism is not an aesthetic of empty rooms. It is a discipline of removal, and like all disciplines it needs a rule for when to stop.',
    category: 'Practice',
    date: '2026-06-24',
    readingMinutes: 5,
    author: 'Ines Valk',
    cover: 'journal-the-art-of-subtraction-cover',
    body: [
      { type: 'p', text: 'The minimal interiors that circulate online are usually maximal projects in disguise: enormous effort, concealed services, bespoke everything, and a budget spent entirely on things you cannot see. That is a legitimate way to build. It is not the same as subtraction.' },
      { type: 'h2', text: 'Subtract until something breaks' },
      { type: 'p', text: 'Our method is unglamorous. We take a design and remove one element at a time — a reveal, a change of material, a step, a light fitting — and ask whether the space got worse. If it did not, the element was decoration. If it did, we put it back and stop.' },
      { type: 'image', id: 'journal-the-art-of-subtraction-inline', alt: 'A single dark opening in a large plain wall', caption: 'One incision, carefully placed, is more demanding than twenty.' },
      { type: 'p', text: 'What survives this process is never the minimum. It is the necessary, which is a different and much warmer thing.' },
      { type: 'h2', text: 'The cost of removing' },
      { type: 'p', text: 'Each thing removed transfers responsibility to the things that remain. Delete the skirting and the plaster has to meet the floor perfectly, forever, including after the building settles. Subtraction is not cheaper. It buys calm, and it pays for it in tolerance.' },
      { type: 'quote', text: 'Every deletion is a promise made by the next trade on site.' },
    ],
  },
  {
    slug: 'designing-with-space',
    title: 'Designing With Space, Not In It',
    standfirst:
      'Plans describe rooms. Sections describe experience. A short argument for designing the void first and the enclosure second.',
    category: 'Practice',
    date: '2026-05-09',
    readingMinutes: 6,
    author: 'Noor Abadi',
    cover: 'journal-designing-with-space-cover',
    body: [
      { type: 'p', text: 'Ask most people to describe a building they love and they will describe a sequence: how you arrive, what compresses, where it opens, what you see at the end. Almost nobody describes a floor plan. Yet the plan is where nearly all design time is spent.' },
      { type: 'h2', text: 'The void has a shape' },
      { type: 'p', text: 'We begin projects with a model of the empty volume — the air, not the walls. It sounds like an affectation. In practice it exposes immediately where a project is spatially flat: four rooms of identical height and proportion, connected by a corridor, is a diagram that no amount of material selection will rescue.' },
      { type: 'image', id: 'journal-designing-with-space-inline', alt: 'A colonnade receding into shadow', caption: 'Rhythm, compression and release — a sequence, not a plan.' },
      { type: 'h2', text: 'Compression and release' },
      { type: 'p', text: 'The simplest spatial instrument is a change of ceiling height. Two metres one, then four metres, is a more powerful experience than any expensive finish. It is also almost free at the design stage and almost impossible to add later.' },
      { type: 'list', items: ['Compress at thresholds; release at destinations.', 'Give the longest view to the place people linger longest.', 'Never let a corridor be the same width for its whole length.'] },
      { type: 'quote', text: 'If the section is boring, the building will be boring in a more expensive way.' },
    ],
  },
  {
    slug: 'concrete-glass-nature',
    title: 'Concrete, Glass and the Problem of Nature',
    standfirst:
      'Buildings that photograph beautifully against landscape often sit badly in it. On the difference between a view and a relationship.',
    category: 'Landscape',
    date: '2026-03-21',
    readingMinutes: 7,
    author: 'Tomás Reiner',
    cover: 'journal-concrete-glass-nature-cover',
    body: [
      { type: 'p', text: 'The glass house on the hillside is one of the most reproduced images in architecture, and one of the least examined. A fully glazed wall facing a landscape does not connect you to it. It frames it, flattens it, and converts it into a picture you happen to live behind.' },
      { type: 'h2', text: 'A view is consumed; a relationship is maintained' },
      { type: 'p', text: 'The buildings that genuinely sit in landscape tend to be the ones that make you go outside. A courtyard, a loggia, a step down to a terrace, a door that is open for eight months of the year: these produce daily contact. A picture window produces a glance.' },
      { type: 'image', id: 'journal-concrete-glass-nature-inline', alt: 'A low wall meeting a still water surface at dusk', caption: 'Edge conditions matter more than glazing area.' },
      { type: 'h2', text: 'The thermal argument, briefly' },
      { type: 'p', text: 'Large glazed areas remain the hardest part of any envelope to make perform. Every square metre is a compromise paid for later in blinds, plant and energy. We now treat the glazing budget as fixed early, and spend it where it buys the most experience per square metre — usually low and wide rather than tall and panoramic.' },
      { type: 'quote', text: 'Spend glass where someone will stand, not where a camera will.' },
      { type: 'p', text: 'None of this is an argument against openness. It is an argument for deciding, deliberately, which part of the landscape the building is actually in a relationship with — and then building that part properly.' },
    ],
  },
  {
    slug: 'the-threshold',
    title: 'The Threshold Is the Building',
    standfirst:
      'Doorways get the least design attention and carry the most meaning. A study of arrival, in four parts.',
    category: 'Detail',
    date: '2026-01-15',
    readingMinutes: 5,
    author: 'Noor Abadi',
    cover: 'journal-the-threshold-cover',
    body: [
      { type: 'p', text: 'There is a moment, roughly two seconds long, in which a person decides how they feel about a building. It happens at the threshold, and it is produced almost entirely by dimension, light and sound rather than by anything on the drawings that took longest to produce.' },
      { type: 'h2', text: 'Depth' },
      { type: 'p', text: 'A door in a thin wall is an event that lasts no time. A door in a 600 millimetre wall is a small room. Give a threshold depth and people slow down, which is usually what the building wants them to do.' },
      { type: 'image', id: 'journal-the-threshold-inline', alt: 'Light and shadow across a material surface', caption: 'The hand knows the threshold before the eye does.' },
      { type: 'h2', text: 'Darkness before light' },
      { type: 'p', text: 'The most reliable spatial trick in architecture is also the oldest: darken the approach so that the arrival reads as bright. Half a stop is enough. It costs nothing and works every single time.' },
      { type: 'h2', text: 'What the hand touches' },
      { type: 'p', text: 'The handle is the only part of a building most visitors ever hold. We specify it early and we specify it heavy — bronze, usually, because it warms to the hand within a second and records every year of use.' },
      { type: 'quote', text: 'Arrival is the one experience every single person has. Design it first, not last.' },
    ],
  },
]

export const articleCategories = [
  'All',
  ...Array.from(new Set(articles.map((a) => a.category))),
] as const

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function relatedArticles(slug: string, count = 2) {
  const current = getArticle(slug)
  if (!current) return articles.slice(0, count)
  const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category)
  const rest = articles.filter((a) => a.slug !== slug && a.category !== current.category)
  return [...sameCategory, ...rest].slice(0, count)
}

export function adjacentArticles(slug: string) {
  const i = articles.findIndex((a) => a.slug === slug)
  if (i === -1) return { prev: undefined, next: undefined }
  return {
    prev: articles[(i - 1 + articles.length) % articles.length],
    next: articles[(i + 1) % articles.length],
  }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
