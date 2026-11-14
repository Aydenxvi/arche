import type { ImageId } from './data/images'

export type { ImageId }

export type ProjectCategory =
  | 'Residential'
  | 'Cultural'
  | 'Commercial'
  | 'Interior'
  | 'Workspace'

export interface Plate {
  id: ImageId
  alt: string
  caption?: string
}

export interface Spec {
  label: string
  value: string
}

export interface NarrativeBlock {
  heading: string
  body: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  category: ProjectCategory
  location: string
  country: string
  year: number
  area: string
  status: string
  summary: string
  concept: string[]
  materials: string[]
  specs: Spec[]
  hero: ImageId
  gallery: Plate[]
  narrative: NarrativeBlock[]
  featured: boolean
}

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; id: ImageId; alt: string; caption?: string }

export interface Article {
  slug: string
  title: string
  standfirst: string
  category: string
  date: string
  readingMinutes: number
  author: string
  cover: ImageId
  body: ArticleBlock[]
}

export interface Service {
  slug: string
  title: string
  index: string
  summary: string
  body: string[]
  capabilities: string[]
  image: ImageId
}

export interface TeamMember {
  name: string
  role: string
  note: string
}

export interface Principle {
  index: string
  title: string
  body: string
}

export interface ProcessStep {
  index: string
  title: string
  body: string
  duration: string
}
