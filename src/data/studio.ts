import type { Principle, ProcessStep, Service, TeamMember } from '../types'

export const services: Service[] = [
  {
    slug: 'residential',
    index: '01',
    title: 'Residential Architecture',
    summary: 'Houses designed around how a particular household actually lives, in a particular climate.',
    body: [
      'We take on a small number of private houses each year, from compact urban infill to remote rural sites. Every project begins with a long conversation about routine — when the household wakes, where it eats, what it owns, how it hosts — because those facts shape a plan far more reliably than style does.',
      'We stay involved through construction. On a house, the difference between a good design and a good building is almost entirely made on site, in decisions that take ten minutes and last fifty years.',
    ],
    capabilities: ['Feasibility and site studies', 'Full architectural design', 'Planning and permitting', 'Tender and contractor selection', 'Construction supervision'],
    image: 'expertise-residential',
  },
  {
    slug: 'commercial',
    index: '02',
    title: 'Commercial Architecture',
    summary: 'Workplaces, hospitality and civic-facing buildings where spatial quality has to earn its keep.',
    body: [
      'Commercial work rewards clarity: a building that is easy to understand is easy to run, easy to let and easy to change. We design for the second tenant as much as the first.',
      'Our commercial projects usually involve existing structures. Retaining a frame is almost always the lowest-carbon and most characterful option available, and it tends to produce plans that no greenfield brief would have discovered.',
    ],
    capabilities: ['Adaptive reuse strategy', 'Workplace and hospitality design', 'Facade and envelope studies', 'Phasing for occupied buildings', 'Landlord and tenant coordination'],
    image: 'expertise-commercial',
  },
  {
    slug: 'interiors',
    index: '03',
    title: 'Interior Design',
    summary: 'Interior architecture treated as building, not decoration — surfaces, light and joinery as one system.',
    body: [
      'We do not separate interiors from architecture. The same team designs the wall and what meets it, which is why our joinery tends to read as part of the structure rather than furniture placed against it.',
      'Scope ranges from a complete apartment to a single significant room. We work with existing fabric wherever it is good, and we are comfortable removing a great deal in order to add very little.',
    ],
    capabilities: ['Spatial planning and reconfiguration', 'Bespoke joinery design', 'Material and finish direction', 'Lighting design', 'Furniture selection and curation'],
    image: 'expertise-interiors',
  },
  {
    slug: 'spatial',
    index: '04',
    title: 'Spatial Planning',
    summary: 'Masterplanning, landscape strategy and the organisation of movement across a site.',
    body: [
      'Before there is a building there is a question of where to stand. Our spatial work covers site strategy, landscape structure, routes and thresholds, and the long-range phasing that lets a place grow without losing coherence.',
      'We produce these studies as short, legible documents — a few plans, a section, a handful of principles — because a masterplan nobody reads is a masterplan nobody follows.',
    ],
    capabilities: ['Site and context analysis', 'Masterplan frameworks', 'Landscape structure', 'Movement and access strategy', 'Phasing and delivery sequencing'],
    image: 'expertise-spatial',
  },
  {
    slug: 'direction',
    index: '05',
    title: 'Creative Direction',
    summary: 'Art direction for the identity, imagery and material language that a place communicates with.',
    body: [
      'For hospitality and cultural clients we often continue past the building: naming, signage, photography direction, material sample libraries and the guidelines that keep a place coherent as it changes hands.',
      'This work is most valuable when it starts early. An identity developed alongside a plan will be truer to the building than one applied to a finished photograph.',
    ],
    capabilities: ['Material and colour language', 'Signage and wayfinding', 'Photography art direction', 'Brand environment guidelines', 'Exhibition and installation design'],
    image: 'expertise-direction',
  },
]

export const principles: Principle[] = [
  { index: '01', title: 'Begin with the ground', body: 'Topography, orientation and existing fabric decide more than taste does. We survey slowly and design only once the site has had its say.' },
  { index: '02', title: 'Build few things well', body: 'A small number of carefully resolved elements will outlast a large number of clever ones. We would rather specify five materials than twenty.' },
  { index: '03', title: 'Design the section', body: 'Height, compression and release produce the experience of a building. Plans distribute; sections move people.' },
  { index: '04', title: 'Let material age', body: 'Surfaces should be allowed to record use. We specify for twenty years of wear rather than for the first photograph.' },
  { index: '05', title: 'Detail for the hand', body: 'Everything within reach — handles, sills, edges, switches — is designed at full size and held in the hand before it is approved.' },
  { index: '06', title: 'Stay to the end', body: 'We remain on site through completion. The last ten per cent of a project is where most of its quality is won or lost.' },
]

export const processSteps: ProcessStep[] = [
  { index: '01', title: 'Listening', duration: '2–4 weeks', body: 'Conversations, site visits and a written brief we draft and you correct. No drawings are produced until this document is agreed.' },
  { index: '02', title: 'Site and study', duration: '4–8 weeks', body: 'Survey, constraint mapping, sun and wind studies, and three alternative spatial strategies tested in physical model at 1:200.' },
  { index: '03', title: 'Design', duration: '3–6 months', body: 'One strategy developed in depth: plan, section, material palette, and the key details that will set the character of the building.' },
  { index: '04', title: 'Permitting', duration: 'Varies', body: 'Planning submissions, consultant coordination and the structural, services and environmental work that supports consent.' },
  { index: '05', title: 'Making', duration: '9–24 months', body: 'Tender, contractor selection, full construction information and weekly presence on site through to handover.' },
  { index: '06', title: 'After', duration: 'Year one', body: 'A seasonal review at six and twelve months. Buildings behave differently once inhabited, and we would rather know.' },
]

export const team: TeamMember[] = [
  { name: 'Ines Valk', role: 'Founding Partner', note: 'Leads design across residential and cultural work. Trained as a stonemason before studying architecture.' },
  { name: 'Tomás Reiner', role: 'Partner, Technical', note: 'Responsible for construction delivery and the studio’s material research programme.' },
  { name: 'Noor Abadi', role: 'Associate, Interiors', note: 'Leads interior architecture and the joinery workshop relationships.' },
  { name: 'Hale Demir', role: 'Associate, Urban', note: 'Masterplanning, landscape structure and public realm projects.' },
  { name: 'Jonas Wylde', role: 'Senior Architect', note: 'Facade development, envelope performance and prototype testing.' },
  { name: 'Mei Ortiz', role: 'Architect', note: 'Model-making, daylight studies and the studio archive.' },
]

export const manifesto = [
  'ARCHÉ was founded on the belief that a building should be the smallest possible answer to a real question.',
  'We work slowly, in a studio of twelve, on a limited number of projects at a time. We make physical models for everything, we visit every site in at least two seasons before designing, and we stay on site until the last door is hung.',
  'What we are after is not a style. It is a kind of quiet: rooms whose proportions you do not notice because they are correct, materials that improve rather than degrade, and light that makes a Tuesday afternoon feel like something.',
]

export const stats = [
  { value: '2009', label: 'Founded' },
  { value: '12', label: 'People' },
  { value: '41', label: 'Projects completed' },
  { value: '9', label: 'Countries' },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
