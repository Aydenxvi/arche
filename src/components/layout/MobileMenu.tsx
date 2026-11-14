import { useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useLockBodyScroll(open)
  useFocusTrap(ref, open, onClose)

  const duration = reduced ? 0 : 0.7

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={ref}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[80] flex flex-col bg-charcoal text-bone lg:hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex min-h-0 flex-1 flex-col justify-between px-gutter pb-10 pt-28">
            <nav aria-label="Primary">
              <ul className="flex flex-col">
                {site.nav.map((item, i) => (
                  <li key={item.to} className="overflow-hidden border-b border-bone/10">
                    <motion.div
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: reduced ? 0 : 0.75,
                        delay: reduced ? 0 : 0.18 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="flex items-baseline gap-5 py-5 font-display text-[clamp(2.4rem,11vw,3.6rem)] leading-none"
                      >
                        <span className="font-sans text-micro tracking-[0.2em] text-brass">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-10 flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.55 }}
            >
              <a href={`mailto:${site.contact.email}`} className="link-underline w-fit text-lg">
                {site.contact.email}
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {site.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow text-stone/70 transition-colors hover:text-bone"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-warm">{site.demoNotice}</p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
