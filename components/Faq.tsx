'use client'

import { useState } from 'react'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionNumber } from '@/components/ui/SectionNumber'
import { Texture } from '@/components/ui/Texture'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    q: 'How long does a website take to build?',
    a: 'Most local business sites go from first call to launch in two to four weeks, depending on how quickly content (menus, photos, service lists) comes together. You get a clear timeline in the blueprint phase — no vague promises.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Every project is scoped individually because a bakery landing page and a clinic with online booking are very different builds. After the discovery call you receive one fixed quote — no hourly surprises, no hidden line items.',
  },
  {
    q: 'Will my website work on phones?',
    a: 'It is designed for phones first. Most of your customers will find you on a mobile screen, so every layout starts at 320px wide and scales up — not the other way around.',
  },
  {
    q: 'Can you update my existing website instead?',
    a: 'Sometimes. If the foundation is solid, a redesign on top of it can make sense. If it is slow, dated, or built on a fragile page builder, a rebuild is usually faster and cheaper than renovation. We will tell you honestly which one you need.',
  },
  {
    q: 'What happens after launch?',
    a: 'You are not left alone with a login and a goodbye email. Ongoing care covers updates, seasonal changes, small tweaks, and performance checks — so the site keeps earning long after launch day.',
  },
]

function FaqItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: (typeof FAQS)[number]
  index: number
  open: boolean
  onToggle: () => void
}) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <li className="border-4 border-t-0 border-ink bg-cream first:border-t-4">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-150 hover:bg-brown hover:text-cream sm:px-8"
        >
          <span className="flex items-baseline gap-4">
            <span aria-hidden="true" className="font-mono text-xs text-rust">
              Q.{String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-sans text-lg font-bold uppercase tracking-wide sm:text-xl">
              {faq.q}
            </span>
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={cn('shrink-0 transition-transform duration-150', open && 'rotate-45')}
          >
            <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="3" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        data-open={open}
        className="faq-panel"
      >
        <div>
          <p className="border-t-2 border-ink/30 px-6 pb-7 pt-5 font-body text-base leading-relaxed text-ink/80 sm:px-8">
            {faq.a}
          </p>
        </div>
      </div>
    </li>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-b-4 border-ink bg-paper">
      <Texture variant="halftone" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <RevealOnScroll variant="clip">
          <SectionNumber number="04" label="Questions, answered" />
        </RevealOnScroll>

        <RevealOnScroll variant="up">
          <h2 className="mt-10 font-display uppercase leading-tight text-ink text-balance [font-size:clamp(1.8rem,4vw,3.2rem)]">
            Read before <span className="text-rust">you build.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll variant="scale">
          <ul className="mt-14 list-none">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  )
}
