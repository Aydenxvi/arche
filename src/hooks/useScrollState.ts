import { useEffect, useState } from 'react'

export interface ScrollState {
  scrolled: boolean
  hidden: boolean
}

export function useScrollState(threshold = 24, hideAfter = 420): ScrollState {
  const [state, setState] = useState<ScrollState>({ scrolled: false, hidden: false })

  useEffect(() => {
    let last = window.scrollY
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY
        const goingDown = y > last && y > hideAfter
        setState((prev) => {
          const next = { scrolled: y > threshold, hidden: goingDown }
          return prev.scrolled === next.scrolled && prev.hidden === next.hidden ? prev : next
        })
        last = y
        frame = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [threshold, hideAfter])

  return state
}
