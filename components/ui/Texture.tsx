import { cn } from '@/lib/utils'

type Variant = 'halftone' | 'grain' | 'noise' | 'dark-paper'

const variantClass: Record<Variant, string> = {
  halftone: 'texture-halftone',
  grain: 'texture-grain',
  noise: 'texture-noise',
  'dark-paper': 'texture-dark-paper',
}

export function Texture({ variant, className }: { variant: Variant; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', variantClass[variant], className)}
    />
  )
}
