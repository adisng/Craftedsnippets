import type { ReactNode } from 'react'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionNumber } from '@/components/ui/SectionNumber'
import { Texture } from '@/components/ui/Texture'
import { cn } from '@/lib/utils'

function IconRuler() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 16 16 2l6 6L8 22l-6-6Z" stroke="currentColor" strokeWidth="2" />
      <path d="m6 12 2 2m1-5 2 2m1-5 2 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function IconBolt() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m15 15 7 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m8.5 12 2.5 2.5L15.5 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function IconChart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18M6 21V12m6 9V6m6 15V9" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
function IconWrench() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type Card = {
  icon: ReactNode
  title: string
  copy: string
  tone: 'cream' | 'rust' | 'brown'
  span?: string
}

const CARDS: Card[] = [
  {
    icon: <IconRuler />,
    title: 'Custom Design',
    copy: 'No templates. Every layout is drawn for your brand, your menu, your storefront — like a bespoke sign above the door.',
    tone: 'rust',
    span: 'md:col-span-2',
  },
  {
    icon: <IconBolt />,
    title: 'Fast Loading',
    copy: 'Optimized images, lean code, edge delivery. Your site opens before your customer loses interest.',
    tone: 'cream',
  },
  {
    icon: <IconPhone />,
    title: 'Mobile-First',
    copy: 'Most local customers find you on their phone. We design for that screen first, not as an afterthought.',
    tone: 'brown',
  },
  {
    icon: <IconSearch />,
    title: 'Local SEO',
    copy: 'Structured data, local keywords, and Google Business alignment so nearby customers actually find you.',
    tone: 'cream',
    span: 'md:col-span-2',
  },
  {
    icon: <IconShield />,
    title: 'Accessible by Default',
    copy: 'Keyboard navigation, screen-reader support, AA contrast. Every customer welcome.',
    tone: 'brown',
  },
  {
    icon: <IconChart />,
    title: 'Built to Convert',
    copy: 'Clear calls to action, booking and contact flows placed where customers expect them.',
    tone: 'rust',
  },
  {
    icon: <IconWrench />,
    title: 'Ongoing Care',
    copy: 'Updates, tweaks, and seasonal changes handled — your website stays as fresh as your business.',
    tone: 'cream',
  },
]

const toneClasses: Record<Card['tone'], string> = {
  cream: 'bg-cream text-ink',
  rust: 'bg-rust text-cream',
  brown: 'bg-brown text-cream',
}

export function Included() {
  return (
    <section id="included" className="relative border-b-4 border-ink bg-paper">
      <Texture variant="grain" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <RevealOnScroll variant="clip">
          <SectionNumber number="03" label="What's included" />
        </RevealOnScroll>

        <RevealOnScroll variant="up">
          <h2 className="mt-10 max-w-3xl font-display uppercase leading-tight text-ink text-balance [font-size:clamp(1.8rem,4vw,3.2rem)]">
            Everything a serious website <span className="text-rust">needs to earn.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <RevealOnScroll
              key={card.title}
              variant={i % 3 === 0 ? 'up' : i % 3 === 1 ? 'left' : 'right'}
              delay={(i % 3) * 80}
              className={card.span}
            >
              <article
                className={cn(
                  'offset-card relative flex h-full flex-col gap-4 border-4 border-ink p-7',
                  toneClasses[card.tone],
                )}
              >
                <Texture variant="noise" />
                <span className="relative inline-flex h-14 w-14 items-center justify-center border-2 border-current">
                  {card.icon}
                </span>
                <h3 className="relative font-sans text-xl font-bold uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="relative font-body text-sm leading-relaxed opacity-85">{card.copy}</p>
                <span
                  aria-hidden="true"
                  className="relative mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.3em] opacity-50"
                >
                  Item {String(i + 1).padStart(2, '0')} — Included
                </span>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
