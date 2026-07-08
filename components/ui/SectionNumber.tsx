import { cn } from '@/lib/utils'

export function SectionNumber({
  number,
  label,
  className,
}: {
  number: string
  label: string
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span
        aria-hidden="true"
        className="inline-flex h-12 w-12 items-center justify-center border-2 border-ink font-mono text-lg font-medium text-ink rotate-[-3deg]"
      >
        {number}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-brown/40" />
    </div>
  )
}
