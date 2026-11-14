import { useEffect } from 'react'
import { site } from '../config/site'
import { imageProps } from './image'

interface Seo {
  title: string
  description?: string
  image?: string
  type?: 'website' | 'article'
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo({ title, description = site.description, image = imageProps('og').src, type = 'website' }: Seo) {
  useEffect(() => {
    const full = title === site.name ? `${site.name} — ${site.tagline}` : `${title} — ${site.name}`
    document.title = full
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:image"]', 'property', 'og:image', image)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = window.location.origin + window.location.pathname
  }, [title, description, image, type])
}
