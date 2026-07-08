'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#process', id: 'process', label: 'Process' },
  { href: '#included', id: 'included', label: 'Included' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.png" alt="CraftedSnippets Co. logo" width={40} height={40} priority />
          <span className="font-display text-sm uppercase tracking-wide sm:text-base">
            CraftedSnippets<span className="text-rust">&nbsp;Co.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'link-underline font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-150',
                activeSection === item.id ? 'text-rust' : 'text-ink hover:text-rust',
              )}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {activeSection === item.id ? '● ' : ''}
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="press-btn inline-flex items-center border-2 border-ink bg-rust px-4 py-2 font-sans text-sm font-bold uppercase tracking-wide text-cream sm:px-5"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  )
}
