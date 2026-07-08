'use client'

import type { ReactNode } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { cn } from '@/lib/utils'

type Variant = 'up' | 'left' | 'right' | 'scale' | 'clip'

export function RevealOnScroll({
  children,
  variant = 'up',
  delay = 0,
  className,
}: {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal', `reveal-${variant}`, visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
