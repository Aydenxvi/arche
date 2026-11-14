import type { ReactNode } from 'react'
import { cx } from '../../lib/utils'

interface FieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
  className?: string
  optional?: boolean
}

export const fieldClasses =
  'w-full border-0 border-b rule bg-transparent py-3 font-sans text-base text-current placeholder:text-current/35 focus:border-bronze focus:outline-none focus-visible:outline-none transition-colors duration-300'

export function Field({ id, label, error, children, className, optional }: FieldProps) {
  return (
    <div className={cx('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="eyebrow opacity-60">
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal opacity-60">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs tracking-wide text-bronze">
          {error}
        </p>
      ) : null}
    </div>
  )
}
