import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../config/site'
import { cx } from '../../lib/utils'
import { useScrollState } from '../../hooks/useScrollState'
import { useHeaderTone } from '../../hooks/useHeaderTone'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState(false)
  const { scrolled, hidden } = useScrollState()
  const { overDark } = useHeaderTone()
  const location = useLocation()
  const reduced = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const light = overDark && !scrolled
  const retract = hidden && !open

  return (
    <>
      <motion.header
        className={cx(
          'fixed inset-x-0 top-0 z-[85] transition-[background-color,border-color,padding] duration-700 ease-arch',
          scrolled
            ? 'border-b rule bg-[var(--page-bg)]/90 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--page-bg)]/75'
            : 'border-b border-transparent py-7',
          light ? 'text-bone' : 'text-[var(--page-fg)]',
        )}
        animate={{ y: retract ? '-110%' : '0%' }}
        transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="shell flex items-center justify-between gap-8">
          <Link
            to="/"
            className="font-display text-xl leading-none tracking-[0.14em] transition-opacity duration-300 hover:opacity-70 sm:text-2xl"
            aria-label={`${site.name} — home`}
          >
            {site.wordmark}
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cx(
                        'link-underline pb-1 text-label uppercase tracking-[0.16em] transition-opacity duration-300',
                        isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cx(
              'relative z-[90] -mr-1 flex h-11 w-11 items-center justify-center lg:hidden',
              open && 'text-bone',
            )}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden="true" className="relative block h-3 w-7">
              <span
                className={cx(
                  'absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-arch',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cx(
                  'absolute left-0 block h-px w-full bg-current transition-all duration-500 ease-arch',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
