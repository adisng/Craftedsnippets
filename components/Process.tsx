import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionNumber } from '@/components/ui/SectionNumber'
import { Texture } from '@/components/ui/Texture'

const STEPS = [
  {
    num: '1',
    title: 'Discover',
    copy: 'We sit down (or hop on a call) and map out your business, your customers, and what a win looks like.',
  },
  {
    num: '2',
    title: 'Blueprint',
    copy: 'Structure before style. Wireframes and content plans drawn like construction documents.',
  },
  {
    num: '3',
    title: 'Design',
    copy: 'A visual identity that feels like your shopfront — tactile, memorable, unmistakably yours.',
  },
  {
    num: '4',
    title: 'Build',
    copy: 'Hand-coded, fast, mobile-first. Performance and accessibility checked at every commit.',
  },
  {
    num: '5',
    title: 'Launch',
    copy: 'Deployed, indexed, and measured. Then we watch the numbers and keep tightening the bolts.',
  },
]

function StepArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden items-center justify-center text-brown transition-transform duration-150 group-hover:translate-x-1 lg:flex"
    >
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
        <path d="M0 12h28m0 0-8-8m8 8-8 8" stroke="currentColor" strokeWidth="3" />
      </svg>
    </span>
  )
}

export function Process() {
  return (
    <section id="process" className="relative border-b-4 border-ink bg-paper">
      <div className="blueprint-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <RevealOnScroll variant="clip">
          <SectionNumber number="02" label="The process" />
        </RevealOnScroll>

        <RevealOnScroll variant="up">
          <h2 className="mt-10 max-w-3xl font-display uppercase leading-tight text-ink text-balance [font-size:clamp(1.8rem,4vw,3.2rem)]">
            Five steps. No mystery. <span className="text-rust">All craft.</span>
          </h2>
        </RevealOnScroll>

        <ol className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-0">
          {STEPS.map((step, i) => (
            <li key={step.num} className="group flex items-stretch lg:contents">
              <RevealOnScroll
                variant={i % 2 === 0 ? 'up' : 'scale'}
                delay={i * 80}
                className="flex-1"
              >
                <div className="relative flex h-full flex-col border-4 border-ink bg-cream p-6 transition-all duration-150 hover:-translate-y-1 hover:rotate-[-0.6deg] hover:bg-brown hover:text-cream lg:border-r-0 lg:group-last:border-r-4">
                  <Texture variant="noise" />
                  <span className="relative font-display text-4xl text-rust transition-colors duration-150 group-hover:text-cream">
                    {step.num}
                  </span>
                  <h3 className="relative mt-4 font-sans text-lg font-bold uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 font-body text-sm leading-relaxed opacity-80">
                    {step.copy}
                  </p>
                  <span className="relative mt-auto flex items-center gap-2 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
                    <span className="inline-block h-2 w-2 bg-rust" aria-hidden="true" />
                    Phase 0{step.num}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2"
                    >
                      <StepArrow />
                    </span>
                  )}
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        {/* Timeline indicator */}
        <div
          aria-hidden="true"
          className="mt-10 hidden items-center gap-0 lg:flex"
        >
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex flex-1 items-center">
              <span className="h-3 w-3 border-2 border-ink bg-rust" />
              {i < STEPS.length - 1 && <span className="h-0.5 flex-1 bg-brown/40" />}
            </div>
          ))}
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.25em] text-brown/60">
            Typical engagement
          </span>
        </div>
      </div>
    </section>
  )
}
