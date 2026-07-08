import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionNumber } from '@/components/ui/SectionNumber'
import { Texture } from '@/components/ui/Texture'

export function About() {
  return (
    <section id="about" className="relative border-b-4 border-ink bg-cream">
      <Texture variant="grain" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <RevealOnScroll variant="clip">
          <SectionNumber number="01" label="About the studio" />
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Taped-on founder photo */}
          <RevealOnScroll variant="left">
            <figure className="relative mx-auto max-w-sm">
              <div className="tape relative rotate-[-2deg] border-4 border-ink bg-paper p-3">
                <Image
                  src="/founder.jpg"
                  alt="Aditya Singh, founder of CraftedSnippets Co."
                  width={760}
                  height={1013}
                  className="h-auto w-full"
                />
                <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-brown">
                  <span>Aditya Singh — Founder</span>
                  <span aria-hidden="true">Ref. CS-001</span>
                </figcaption>
              </div>
            </figure>
          </RevealOnScroll>

          <div className="flex flex-col justify-center gap-10">
            <RevealOnScroll variant="right">
              <blockquote className="border-l-4 border-rust pl-6">
                <p className="font-display text-2xl uppercase leading-tight text-ink text-pretty sm:text-3xl">
                  &ldquo;A website shouldn&apos;t just sit there. It should bring customers
                  through the door.&rdquo;
                </p>
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll variant="up" delay={100}>
              <div className="offset-card border-4 border-ink bg-paper p-8">
                <Texture variant="noise" />
                <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-rust">
                  Mission Statement
                </p>
                <p className="relative mt-4 font-body text-base leading-relaxed text-ink/85">
                  CraftedSnippets Co. helps local businesses build premium websites that are
                  beautiful, fast, and designed to bring in more customers. Cafés, restaurants,
                  salons, clinics, bakeries, local stores, small brands, creative businesses —
                  if your customers are nearby, your website should work as hard as you do.
                </p>
                <div className="relative mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t-2 border-ink/30 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brown/70">
                  <span>Filed: Design Dept.</span>
                  <span>Status: In service</span>
                  <span aria-hidden="true">§ 2.1</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
