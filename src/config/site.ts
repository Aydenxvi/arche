
export const site = {
  name: 'ARCHÉ',
  wordmark: 'ARCHÉ',
  tagline: 'Spaces shaped by thought.',
  description:
    'An independent frontend architecture portfolio concept showcasing layout, interactions and photographic precedents.',
  demoNotice:
    'Frontend demonstration by an independent developer. ARCHÉ, team, locations and projects are fictional. Photos depict real third-party architecture; their rights are unverified. Do not present these images as ARCHÉ commissions. See Image Sources.',
  founded: 2009,
  url: 'https://arche.example',

  contact: {
    email: 'studio@arche.example',
    phone: '+41 00 000 00 00',
    formMode: 'demo' as 'mailto' | 'demo',
    studios: [
      { city: 'Zürich', lines: ['Gerechtigkeitsgasse 18', '8001 Zürich, Switzerland'] },
      { city: 'Lisbon', lines: ['Rua das Flores 72', '1200-195 Lisboa, Portugal'] },
    ],
    hours: 'Monday – Friday, 09:00 – 18:00 CET',
  },

  nav: [
    { label: 'Projects', to: '/projects' },
    { label: 'Studio', to: '/studio' },
    { label: 'Expertise', to: '/expertise' },
    { label: 'Journal', to: '/journal' },
    { label: 'Contact', to: '/contact' },
  ],

  social: [] as { label: string; href: string }[],

  projectTypes: [
    'Private residence',
    'Interior architecture',
    'Cultural or civic',
    'Commercial / hospitality',
    'Masterplan or landscape',
    'Creative direction',
  ],
  budgetRanges: [
    'Under 500k',
    '500k – 1.5m',
    '1.5m – 5m',
    '5m+',
    'Not yet defined',
  ],

  images: {
    basePath: '/images',
    widths: [480, 960, 1600] as const,
    format: 'webp',
  },
} as const

export type Site = typeof site
