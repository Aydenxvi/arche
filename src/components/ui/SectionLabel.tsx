import { cx } from '../../lib/utils'

interface SectionLabelProps {
  index?: string
  children: string
  className?: string
}

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <div className={cx('flex items-center gap-4', className)}>
      {index ? <span className="eyebrow text-bronze">{index}</span> : null}
      <span className="eyebrow opacity-60">{children}</span>
      <span className="h-px flex-1 bg-current opacity-15" aria-hidden="true" />
    </div>
  )
}
