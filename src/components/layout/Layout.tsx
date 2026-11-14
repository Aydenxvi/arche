import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { HeaderToneProvider } from './HeaderTone'

function PageShell() {
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        id="main"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
        transition={{
          duration: reduced ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  )
}

export function Layout() {
  return (
    <HeaderToneProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-charcoal focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <PageShell />
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </HeaderToneProvider>
  )
}
