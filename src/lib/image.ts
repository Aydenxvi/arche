import { IMAGES, type ImageId } from '../data/images'
import { PHOTO_REFERENCES, type ReferencePhoto } from '../data/referencePhotos'
const SUPPORTING_PHOTOS: Partial<Record<ImageId, keyof typeof PHOTO_REFERENCES>> = {
  'home-hero': 'casa-vela-01', 'home-intro': 'stillwater-residence-01',
  'studio-01': 'atelier-02-01', 'studio-02': 'atelier-02-05',
  'studio-03': 'monolith-house-05', 'studio-04': 'the-atrium-01',
  'expertise-residential': 'casa-vela-02',
  'expertise-commercial': 'the-atrium-01',
  'expertise-interiors': 'stone-and-light-01',
  'expertise-spatial': 'stillwater-residence-02',
  'expertise-direction': 'atelier-02-01',
  'contact-01': 'sora-house-06', 'notfound-01': 'monolith-house-01',
  'og': 'casa-vela-01',
  'journal-light-and-the-hours-inline': 'journal-light-and-the-hours',
  'journal-material-honesty-inline': 'journal-material-honesty',
  'journal-the-art-of-subtraction-inline': 'journal-the-art-of-subtraction',
  'journal-designing-with-space-inline': 'journal-designing-with-space',
  'journal-concrete-glass-nature-inline': 'journal-concrete-glass-nature',
  'journal-the-threshold-inline': 'journal-the-threshold',
}

export interface ImageProps {
  src: string
  srcSet?: string
  width: number
  height: number
  color: string
  ratio: number
  fallbackSrc: string
  fallbackSrcSet: string
  reference: boolean
  sourceUrl?: string
  description?: string
}

function getReference(id: ImageId): ReferencePhoto | undefined {
  const alias = SUPPORTING_PHOTOS[id]
  return PHOTO_REFERENCES[alias ?? id]
}

export function imageProps(id: ImageId): ImageProps {
  const meta = IMAGES[id]
  const photo = getReference(id)
  if (!photo) {
    throw new Error(`Missing external photo reference for image slot: ${id}`)
  }
  return {
    src: photo.image_url, srcSet: undefined,
    width: meta.w, height: meta.h, color: meta.color,
    ratio: meta.w / meta.h,
    fallbackSrc: '', fallbackSrcSet: '',
    reference: true, sourceUrl: photo.source_url, description: photo.description,
  }
}

const missingPhotoSvg = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#d8d1c5"/><text x="600" y="385" font-family="Arial,sans-serif" font-size="29" text-anchor="middle" fill="#5b564f">Photograph unavailable</text><text x="600" y="435" font-family="Arial,sans-serif" font-size="20" text-anchor="middle" fill="#5b564f">Open image sources to view the original</text></svg>')}`

export function fallbackOnError(image: HTMLImageElement, _photo: ImageProps) {
  if (image.dataset.fallbackTries === '1') return
  image.dataset.fallbackTries = '1'
  image.removeAttribute('srcset')
  image.src = missingPhotoSvg
}

export function imageRatio(id: ImageId) {
  const meta = IMAGES[id]
  return meta.w / meta.h
}
