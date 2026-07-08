'use client'

import dynamic from 'next/dynamic'
import { Texture } from '@/components/ui/Texture'

const HeroObject3D = dynamic(() => import('@/components/HeroObject3D'), { ssr: false })

const FLOATING_LABELS = [
  { text: 'HTML', className: 'left-[4%] top-[16%]', delay: '0s' },
  { text: 'CSS', className: 'right-[6%] top-[12%]', delay: '0.8s' },
  { text: 'REACT', className: 'left-[8%] bottom-[22%]', delay: '1.6s' },
  { text: 'PERFORMANCE', className: 'right-[4%] bottom-[30%]', delay: '2.4s' },
  { text: 'ACCESSIBILITY', className: 'left-[38%] top-[6%]', delay: '3.2s' },
  { text: 'SEO', className: 'right-[30%] bottom-[10%]', delay: '4s' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-4 border-ink bg-paper">
      <Texture variant="halftone" />
      <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Floating tech labels */}
      {FLOATING_LABELS.map((label) => (
        <span
          key={label.text}
          aria-hidden="true"
          className={`anim-float absolute hidden border border-ink/60 bg-cream px-2 py-1 font-mono text-[10px] tracking-[0.25em] text-brown lg:block ${label.className}`}
          style={{ animationDelay: label.delay }}
        >
          {label.text}
        </span>
      ))}

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-6 lg:px-8">
        <div>
          <p className="mb-6 inline-block rotate-[-1.5deg] border-2 border-rust px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-rust">
            Craftsites that actually convert
          </p>
          <h1 className="font-display uppercase leading-[0.95] text-ink text-balance [font-size:clamp(2.6rem,7.5vw,6.5rem)]">
            Websites that look like they{' '}
            <span className="text-rust">mean business</span>
          </h1>
          <p className="mt-8 max-w-xl border-l-4 border-ink pl-5 font-body text-lg leading-relaxed text-ink/80">
            Crafting clean, modern and mobile-first websites that help local businesses grow
            online.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#contact"
              className="press-btn inline-flex items-center gap-2 border-2 border-ink bg-rust px-7 py-4 font-sans text-base font-bold uppercase tracking-wide text-cream"
            >
              Let&apos;s Build Yours
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </a>
            <a
              href="#process"
              className="press-btn inline-flex items-center border-2 border-ink bg-cream px-7 py-4 font-sans text-base font-bold uppercase tracking-wide text-ink"
            >
              View Process
            </a>
          </div>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-brown/60">
            Sheet 01 / Rev. A — Drawn by A. Singh — Scale: 1:1
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroObject3D />
        </div>
      </div>
    </section>
  )
}
