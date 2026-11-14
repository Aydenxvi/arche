import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'casa-vela',
    title: 'Casa Vela',
    subtitle: 'A house held open to the sea wind',
    category: 'Residential',
    location: 'Cap de Creus',
    country: 'Spain',
    year: 2024,
    area: '410 m²',
    status: 'Concept study',
    featured: true,
    summary:
      'A single long roof plane, lifted at the seaward edge, gathers four rooms and two courtyards beneath it. The house reads as one gesture from the coast road and dissolves into terraces as you move through it.',
    concept: [
      'The site is a shallow terrace of weathered schist, forty metres above the water, exposed to the tramontane. Rather than resist the wind we shaped a roof that leans into it: a thin concrete plane, 31 metres long, thickening where it cantilevers and tapering to 180 millimetres at the eaves.',
      'Everything else is subordinate. Walls are free to stop and start. Glass slides fully into pockets so that in summer the living level becomes a covered terrace, and in winter the same space closes to a warm, low-ceilinged room around the hearth.',
    ],
    materials: ['Board-formed concrete', 'Local schist', 'Oiled chestnut', 'Patinated bronze', 'Lime plaster'],
    specs: [
      { label: 'Programme', value: 'Private residence, guest annexe' },
      { label: 'Site area', value: '2,140 m²' },
      { label: 'Built area', value: '410 m²' },
      { label: 'Structure', value: 'In-situ concrete, timber roof deck' },
      { label: 'Completion', value: 'Spring 2024' },
    ],
    hero: 'casa-vela-01',
    gallery: [
      { id: 'casa-vela-02', alt: 'The long roof plane seen from the coast path', caption: 'Seaward elevation' },
      { id: 'casa-vela-03', alt: 'The water court seen from the entrance passage', caption: 'Water court' },
      { id: 'casa-vela-05', alt: 'The guest annexe volume against the hillside' },
      { id: 'casa-vela-04', alt: 'Close study of board-formed concrete and schist', caption: 'Wall sample, east elevation' },
      { id: 'casa-vela-06', alt: 'Threshold between the hall and the seaward terrace', caption: 'Seaward threshold' },
    ],
    narrative: [
      {
        heading: 'Approach',
        body: [
          'You arrive at the back of the house, where the roof is at its lowest and the wall is blind. The entrance is a slot, not a door — a vertical cut in the schist wall that admits one person at a time.',
          'The compression lasts eleven metres. Then the ceiling lifts, the wall stops, and the sea is simply there, framed edge to edge with no mullion in the view.',
        ],
      },
      {
        heading: 'Living with weather',
        body: [
          'Three courtyards puncture the plan. Each has a different temperament: one planted with wild olive for shade, one paved and dry for the morning, one holding a shallow sheet of water that cools the prevailing wind before it enters the house.',
          'Cross ventilation is not a diagram here but a daily instrument. Shutters, pivoting panels and the water court are tuned together, and the house is routinely comfortable without mechanical cooling.',
        ],
      },
    ],
  },
  {
    slug: 'monolith-house',
    title: 'Monolith House',
    subtitle: 'Four stacked volumes, one material',
    category: 'Residential',
    location: 'Ticino',
    country: 'Switzerland',
    year: 2023,
    area: '295 m²',
    status: 'Concept study',
    featured: true,
    summary:
      'A vertical house on a steep alpine plot. Four shifted volumes find their own view, and a single concrete mix — poured in 1.2 metre lifts and left entirely unfinished — carries the whole building inside and out.',
    concept: [
      'Steepness was the brief. With a 38 per cent slope there is no generous ground floor to be had, so the house stacks: service and entry at the road, living in the middle where the valley opens, sleeping above, and a studio capping the composition.',
      'Each volume rotates a few degrees from the one below. The shifts are small — between four and nine degrees — but they produce the terraces, the shading overhangs and the sequence of oblique views that make the house feel much larger than its footprint.',
    ],
    materials: ['Pigmented in-situ concrete', 'Smoked oak', 'Blackened steel', 'Wool felt', 'Travertine'],
    specs: [
      { label: 'Programme', value: 'Residence with studio' },
      { label: 'Levels', value: 'Four, over 14 m of fall' },
      { label: 'Built area', value: '295 m²' },
      { label: 'Structure', value: 'Load-bearing concrete' },
      { label: 'Completion', value: 'Autumn 2023' },
    ],
    hero: 'monolith-house-01',
    gallery: [
      { id: 'monolith-house-02', alt: 'A deep window reveal cut into the concrete mass', caption: 'Living level aperture' },
      { id: 'monolith-house-05', alt: 'Light falling through the upper landing' },
      { id: 'monolith-house-04', alt: 'The main stair in raking afternoon light', caption: 'Principal stair' },
      { id: 'monolith-house-03', alt: 'Detail of pigmented concrete surface', caption: 'Pour lines, south wall' },
      { id: 'monolith-house-06', alt: 'The studio volume seen from the valley path' },
    ],
    narrative: [
      {
        heading: 'One mix, many readings',
        body: [
          'A single concrete recipe runs through the project, pigmented with a small fraction of iron oxide drawn from the local soil. Nothing is painted, clad or plastered.',
          'Because the material never changes, the building is read entirely through light. The same wall is grey at nine in the morning, warm ochre at six in the evening, and almost violet in snow.',
        ],
      },
      {
        heading: 'The stair as room',
        body: [
          'Rather than a circulation core, the stair is treated as the principal room: 1.9 metres wide, top-lit along its full run, with deep sills that function as seats and shelves.',
          'It is where the household actually gathers, which is the kind of outcome a plan rarely predicts and a section often does.',
        ],
      },
    ],
  },
  {
    slug: 'stillwater-residence',
    title: 'Stillwater Residence',
    subtitle: 'Stone pavilions facing the Mediterranean',
    category: 'Residential',
    location: 'Mallorca',
    country: 'Spain',
    year: 2024,
    area: '340 m²',
    status: 'Concept study',
    featured: true,
    summary:
      'A fictional coastal home conceived as a sequence of stone pavilions and shaded courtyards. Light, sea air and deep masonry thresholds organise the experience of each room.',
    concept: [
      'The design study begins with climate and silence. Rooms open through shaded porches rather than exposed glass walls, creating a gradual passage from shelter to sea.',
      'Separate volumes give each room its own daylight and orientation. Stone walls retain the warmth of the day, while openings frame distinct fragments of the horizon.',
    ],
    materials: ['Local sandstone', 'Terracotta', 'Pine timber', 'Lime render', 'Glazed ceramics'],
    specs: [
      { label: 'Programme', value: 'Family residence' },
      { label: 'Concept', value: 'Courtyard pavilion sequence' },
      { label: 'Built area', value: '340 m²' },
      { label: 'Structure', value: 'Masonry, timber roof' },
      { label: 'Study date', value: '2024 (fictional)' },
    ],
    hero: 'stillwater-residence-01',
    gallery: [
      { id: 'stillwater-residence-02', alt: 'The colonnade along the west wing', caption: 'West colonnade' },
      { id: 'stillwater-residence-05', alt: 'A single opening onto the planted edge', caption: 'North light' },
      { id: 'stillwater-residence-04', alt: 'Roofline of the sleeping wing against evening sky' },
      { id: 'stillwater-residence-03', alt: 'Limestone surface worn by water', caption: 'Causeway stone' },
      { id: 'stillwater-residence-06', alt: 'Light crossing the long gallery at dusk' },
    ],
    narrative: [
      {
        heading: 'Architecture as shelter',
        body: [
          'The walls are imagined as more than dividers. Their thickness shelters everyday life from heat and noise and makes each opening feel deliberately placed.',
          'A terrace is not an outdoor addition but another room, defined by shade and a view of the horizon.',
        ],
      },
      {
        heading: 'Thresholds',
        body: [
          'Each room meets the exterior through a deep loggia, where the light softens and daily activities spill toward the sea.',
        ],
      },
    ],
  },
  {
    slug: 'terra-pavilion',
    title: 'Terra Pavilion',
    subtitle: 'A rammed-earth room for a vineyard',
    category: 'Cultural',
    location: 'Alentejo',
    country: 'Portugal',
    year: 2022,
    area: '180 m²',
    status: 'Concept study',
    featured: true,
    summary:
      'A tasting and gathering pavilion built from the soil of the site itself. Twenty-four rammed-earth fins carry a timber canopy and hold the interior at 21°C through forty-degree afternoons.',
    concept: [
      'Soil excavated for the adjacent cellar was stabilised and returned to the site as wall. The fins vary in thickness from 400 to 650 millimetres, calibrated to the sun they receive rather than to the load they carry.',
      'Between them the building is simply open. There are no windows, because there are no walls in the conventional sense — only a rhythm of mass and gap that slows the light and the heat.',
    ],
    materials: ['Rammed earth', 'Chestnut', 'Corten steel', 'Cork', 'Terrazzo of local aggregate'],
    specs: [
      { label: 'Programme', value: 'Tasting room, events' },
      { label: 'Fins', value: '24 bays, 400–650 mm' },
      { label: 'Built area', value: '180 m²' },
      { label: 'Structure', value: 'Rammed earth, timber canopy' },
      { label: 'Completion', value: 'Spring 2022' },
    ],
    hero: 'terra-pavilion-01',
    gallery: [
      { id: 'terra-pavilion-06', alt: 'Photograph of the Herdade da Cardeira winery exterior beside water', caption: 'Reference · winery and reflecting pool' },
      { id: 'terra-pavilion-05', alt: 'Photograph of a vineyard wine estate with an earth-toned facade and pergola', caption: 'Reference · shaded facade' },
      { id: 'terra-pavilion-03', alt: 'Photograph of the passage between rammed-earth winery structures', caption: 'Reference · material and threshold' },
      { id: 'terra-pavilion-02', alt: 'Photograph of an earth-toned wall opening toward the vineyard', caption: 'Reference · canopy and landscape' },
      { id: 'terra-pavilion-04', alt: 'Photograph of rammed-earth winery buildings beside the pool', caption: 'Reference · building volumes' },
    ],
    narrative: [
      {
        heading: 'Building from the hole in the ground',
        body: [
          'Roughly 310 cubic metres of soil came out of the cellar excavation. 280 went back into the pavilion walls, which left very little to cart away and very little to bring in.',
          'The strata are visible in every wall: forty-millimetre lifts, slightly different in colour depending on the week they were rammed.',
        ],
      },
      {
        heading: 'Comfort without machinery',
        body: [
          'Thermal mass, night purge ventilation and deep shade do the work that a cooling plant would otherwise do. Measured interior temperature held between 20 and 23°C across the first two summers.',
        ],
      },
    ],
  },
  {
    slug: 'atelier-02',
    title: 'Atelier 02',
    subtitle: 'A workshop lit from the north',
    category: 'Workspace',
    location: 'Copenhagen',
    country: 'Denmark',
    year: 2023,
    area: '620 m²',
    status: 'Concept study',
    featured: false,
    summary:
      'The conversion of a 1930s machine hall into shared studios for twenty-six makers. The existing frame was kept, stripped and left legible; everything new is timber, demountable and obviously of this decade.',
    concept: [
      'Our first move was subtraction: four later infill structures came out, returning the hall to its original clear span and restoring the sawtooth north light the building was designed around.',
      'The new programme sits inside as furniture rather than architecture — freestanding timber volumes that never touch the existing roof, so the hall can be read whole from any position.',
    ],
    materials: ['Existing steel frame', 'Cross-laminated timber', 'Polycarbonate', 'Cork', 'Galvanised steel'],
    specs: [
      { label: 'Programme', value: '26 studios, workshop, café' },
      { label: 'Existing', value: '1934 machine hall' },
      { label: 'Built area', value: '620 m²' },
      { label: 'Strategy', value: 'Reversible insertion' },
      { label: 'Completion', value: 'Winter 2023' },
    ],
    hero: 'atelier-02-01',
    gallery: [
      { id: 'atelier-02-02', alt: 'The sawtooth roof glazing from below', caption: 'North light, restored' },
      { id: 'atelier-02-03', alt: 'Light raking across the main hall floor' },
      { id: 'atelier-02-05', alt: 'A timber studio volume standing clear of the roof' },
      { id: 'atelier-02-04', alt: 'Cork and plywood detail at a studio door', caption: 'Studio threshold' },
      { id: 'atelier-02-06', alt: 'The hall seen from the mezzanine at closing time' },
    ],
    narrative: [
      {
        heading: 'Reversible by design',
        body: [
          'Every new element is bolted, not welded or cast. If the next tenant needs the hall empty, the insertions can be unbolted and reused elsewhere — which is also how the project met its embodied carbon target.',
        ],
      },
      {
        heading: 'Light as the real brief',
        body: [
          'Makers asked for one thing above all: even, indirect daylight. Restoring the sawtooth glazing gave an average 480 lux across the working plane at midday without a single downlight.',
        ],
      },
    ],
  },
  {
    slug: 'the-atrium',
    title: 'The Atrium',
    subtitle: 'A civic room inside an office block',
    category: 'Commercial',
    location: 'Rotterdam',
    country: 'Netherlands',
    year: 2025,
    area: '1,850 m²',
    status: 'Concept study',
    featured: true,
    summary:
      'The ground plane of a 1980s commercial tower, reworked as a public room. We removed two floor plates, introduced a nine-bay colonnade and gave the city a covered square where there had been a lobby.',
    concept: [
      'The building met the street with a revolving door and a security desk. Our brief was to make it porous without compromising the tenants above.',
      'Removing 640 square metres of slab created a 14-metre void, and the colonnade that stabilises it also gives the space a civic grammar — people read a colonnade as public almost without thinking.',
    ],
    materials: ['Precast concrete', 'Travertine', 'Anodised aluminium', 'Oak', 'Glass block'],
    specs: [
      { label: 'Programme', value: 'Public hall, café, workspace lobby' },
      { label: 'Void', value: '14 m clear height' },
      { label: 'Area', value: '1,850 m²' },
      { label: 'Structure', value: 'Transfer structure, 9-bay colonnade' },
      { label: 'Completion', value: 'Early 2025' },
    ],
    hero: 'the-atrium-01',
    gallery: [
      { id: 'the-atrium-02', alt: 'The reworked facade grid from the square', caption: 'Street elevation' },
      { id: 'the-atrium-03', alt: 'Daylight entering the new void' },
      { id: 'the-atrium-04', alt: 'The stair connecting hall and mezzanine', caption: 'Public stair' },
      { id: 'the-atrium-05', alt: 'Travertine and aluminium junction detail' },
      { id: 'the-atrium-06', alt: 'Louvres filtering the afternoon sun', caption: 'West screen' },
    ],
    narrative: [
      {
        heading: 'Giving a floor away',
        body: [
          'Removing lettable area from a commercial building takes an argument, not a drawing. The case was made on dwell time and ground-floor value: an active hall lets the owner charge differently for everything above it.',
        ],
      },
      {
        heading: 'Nine bays',
        body: [
          'The colonnade is deliberately oversized — 900 millimetre columns where 600 would carry the load. The surplus is spatial, not structural: at that dimension a column becomes something to stand behind.',
        ],
      },
    ],
  },
  {
    slug: 'sora-house',
    title: 'Sora House',
    subtitle: 'A roof that reads the horizon',
    category: 'Residential',
    location: 'Kanagawa',
    country: 'Japan',
    year: 2022,
    area: '155 m²',
    status: 'Concept study',
    featured: false,
    summary:
      'A compact house on a tight suburban plot, organised around a single clerestory that runs the full length of the building and turns a narrow site into a space measured by sky rather than by boundary.',
    concept: [
      'With neighbours at 1.4 metres on two sides, the view had to be upward. A continuous 600 millimetre clerestory separates wall from roof, so the ceiling appears to float free of the enclosure.',
      'Below that line the plan is deliberately ordinary: four rooms, a kitchen, a bath, a small court for the bicycle and the plum tree.',
    ],
    materials: ['Shou sugi ban cedar', 'Plaster', 'Steel', 'Washi-glazed glass', 'Hinoki'],
    specs: [
      { label: 'Programme', value: 'House for two' },
      { label: 'Plot', value: '94 m² footprint' },
      { label: 'Built area', value: '155 m²' },
      { label: 'Structure', value: 'Timber frame, steel ties' },
      { label: 'Completion', value: 'Autumn 2022' },
    ],
    hero: 'sora-house-01',
    gallery: [
      { id: 'sora-house-02', alt: 'The roof plane seen against evening cloud', caption: 'Roofline' },
      { id: 'sora-house-03', alt: 'Clerestory light washing the plaster wall', caption: 'Clerestory, 16:10' },
      { id: 'sora-house-05', alt: 'The small court with its plum tree' },
      { id: 'sora-house-04', alt: 'Charred cedar cladding detail' },
      { id: 'sora-house-06', alt: 'The volume from the approach lane at dusk' },
    ],
    narrative: [
      {
        heading: 'Measuring with sky',
        body: [
          'A room with a visible horizon feels larger than its plan. Here the horizon is artificial — a strip of bright sky — but the effect is identical, and it costs almost nothing.',
        ],
      },
      {
        heading: 'Living small, carefully',
        body: [
          'Storage is built into every thickness: 180 millimetres in the partitions, 420 under the floor of the raised room. Nothing stands in the open that does not deserve to.',
        ],
      },
    ],
  },
  {
    slug: 'stone-and-light',
    title: 'Stone & Light',
    subtitle: 'Interior architecture for a gallery house',
    category: 'Interior',
    location: 'Milan',
    country: 'Italy',
    year: 2025,
    area: '240 m²',
    status: 'Concept study',
    featured: false,
    summary:
      'A full interior for a nineteenth-century apartment that now holds a private collection. The historic envelope was conserved; everything new is a set of stone and bronze instruments for hanging, lighting and sitting.',
    concept: [
      'The apartment had been renovated four times. We removed almost all of it, back to plaster and terrazzo, and then added very little.',
      'The additions are heavy and few: a 4.2 metre stone bench, a bronze picture rail at 2.6 metres, and a single new wall that organises the enfilade without closing it.',
    ],
    materials: ['Pietra serena', 'Patinated bronze', 'Venetian plaster', 'Walnut', 'Linen'],
    specs: [
      { label: 'Programme', value: 'Residence and private gallery' },
      { label: 'Building', value: '1887 palazzo, third floor' },
      { label: 'Area', value: '240 m²' },
      { label: 'Approach', value: 'Conservation, minimal insertion' },
      { label: 'Completion', value: 'Spring 2025' },
    ],
    hero: 'stone-and-light-01',
    gallery: [
      { id: 'stone-and-light-02', alt: 'Afternoon light across the main gallery room', caption: 'Enfilade, 15:20' },
      { id: 'stone-and-light-05', alt: 'A doorway cut through the new organising wall' },
      { id: 'stone-and-light-04', alt: 'The new stair to the mezzanine study' },
      { id: 'stone-and-light-03', alt: 'Pietra serena surface detail', caption: 'Bench, honed finish' },
      { id: 'stone-and-light-06', alt: 'The long room seen from the entrance hall' },
    ],
    narrative: [
      {
        heading: 'Conserve, then subtract',
        body: [
          'Four layers of later intervention came out — suspended ceilings, a false enfilade, two bathrooms and a quantity of lacquered joinery. What remained was better than anything we could have added.',
        ],
      },
      {
        heading: 'Hanging as architecture',
        body: [
          'The collection changes twice a year, so the bronze rail runs continuously through every room at a single height. Pictures move; the architecture does not.',
        ],
      },
    ],
  },
]

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function adjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: undefined, next: undefined }
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}
