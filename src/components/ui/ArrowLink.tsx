import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cx } from '../../lib/utils'

interface ArrowLinkProps {
  to?: string
  href?: string
  children: ReactNode
  className?: string
  variant?: 'text' | 'outline' | 'solid'
  external?: boolean
}

const base =
  'group/arrow inline-flex items-center gap-3 font-sans text-label uppercase tracking-[0.16em] transition-colors duration-500 ease-arch'

const variants = {
  text: 'pb-1 border-b border-current/35 hover:border-current',
  outline: 'rounded-none border px-7 py-4 rule hover:border-current hover:bg-current/5',
  solid: 'rounded-none bg-charcoal px-7 py-4 text-ivory hover:bg-ink',
}

export function ArrowLink({ to, href, children, className, variant = 'text', external }: ArrowLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight
  const content = (
    <>
      <span>{children}</span>
      <Icon
        aria-hidden="true"
        size={15}
        strokeWidth={1.4}
        className="transition-transform duration-500 ease-arch group-hover/arrow:translate-x-1"
      />
    </>
  )
  const classes = cx(base, variants[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <Link to={to ?? '/'} className={classes}>
      {content}
    </Link>
  )
}
