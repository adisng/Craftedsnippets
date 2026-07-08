'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

export function LoadingScreen() {
  const reducedMotion = useReducedMotion()
  const [done, setDone] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const start = performance.now()
    const duration = 1800

    let rafId: number
    function tick(now: number) {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(pct)
      if (pct < 100) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const timeout = window.setTimeout(() => setDone(true), 2600)
    return () => {
      cancelAnimationFrame(rafId)
      window.clearTimeout(timeout)
    }
  }, [])

  if (!mounted || done || reducedMotion) return null

  return (
    <div
      aria-hidden="true"
      className="anim-wipe-up fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brown"
    >
      <div className="texture-dark-paper pointer-events-none absolute inset-0" />

      {/* Logo stamped into a brutal frame */}
      <div className="anim-stamp relative border-4 border-cream bg-cream p-6 shadow-[8px_8px_0_0_var(--rust)]">
        <Image
          src="/logo.png"
          alt=""
          width={112}
          height={112}
          priority
          className="anim-logo-pulse h-24 w-24 sm:h-28 sm:w-28"
        />
      </div>

      <p className="anim-fade-up mt-8 font-display text-xl uppercase tracking-widest text-cream">
        CraftedSnippets Co.
      </p>

      {/* Progress bar */}
      <div className="anim-fade-up mt-6 w-56 border-2 border-cream sm:w-72">
        <div
          className="h-3 bg-rust transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="anim-fade-up mt-3 font-mono text-xs uppercase tracking-[0.3em] text-cream/70 tabular-nums">
        Loading — {progress.toString().padStart(3, '0')}%
      </p>
    </div>
  )
}
