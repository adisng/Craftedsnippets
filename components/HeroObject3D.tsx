'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

const FACE_LABELS = ['DESIGN', 'BUILD', 'SHIP', 'GROW']

export default function HeroObject3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const container = containerRef.current
    const cube = cubeRef.current
    if (!container || !cube) return

    let targetX = -18
    let targetY = 24
    let currentX = targetX
    let currentY = targetY
    let raf = 0

    const handlePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect()
      const relX = (clientX - rect.left) / rect.width - 0.5
      const relY = (clientY - rect.top) / rect.height - 0.5
      targetY = 24 + relX * 50
      targetX = -18 - relY * 40
    }

    const onMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) handlePointer(touch.clientX, touch.clientY)
    }

    const tick = () => {
      // Inertia: ease current rotation toward target
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    container.addEventListener('touchmove', onTouchMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('touchmove', onTouchMove)
      cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  const size = 220
  const half = size / 2

  const faceBase =
    'absolute inset-0 flex flex-col items-center justify-center gap-3 border-4 border-brown'

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]"
      style={{ perspective: '900px' }}
    >
      {/* Registration marks */}
      <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-brown/50" />
      <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-brown/50" />
      <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-brown/50" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-brown/50" />

      <div
        ref={cubeRef}
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-18deg) rotateY(24deg)',
        }}
      >
        {FACE_LABELS.map((label, i) => (
          <div
            key={label}
            className={`${faceBase} ${i % 2 === 0 ? 'bg-cream text-ink' : 'bg-rust text-cream'}`}
            style={{ transform: `rotateY(${i * 90}deg) translateZ(${half}px)` }}
          >
            <Image src="/logo.png" alt="" width={72} height={72} className={i % 2 === 1 ? 'invert brightness-0' : ''} />
            <span className="font-display text-xl tracking-widest">{label}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60">
              Fig. 0{i + 1}
            </span>
          </div>
        ))}
        <div
          className={`${faceBase} texture-halftone bg-brown`}
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }}
        />
        <div
          className={`${faceBase} bg-brown`}
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
            CraftedSnippets Co.
          </span>
        </div>
      </div>
    </div>
  )
}
