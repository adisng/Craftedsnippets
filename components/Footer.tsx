import Image from 'next/image'
import { Texture } from '@/components/ui/Texture'

export function Footer() {
  return (
    <footer className="relative bg-brown text-cream">
      <Texture variant="dark-paper" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="CraftedSnippets Co. logo"
                width={48}
                height={48}
                className="brightness-0 invert opacity-90"
              />
              <span className="font-display text-lg uppercase tracking-wide">
                CraftedSnippets Co.
              </span>
            </div>
            <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-cream/70">
              Premium websites for local businesses — beautiful, fast, and built to bring in
              more customers. Founded by Aditya Singh.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">Index</h2>
            <ul className="mt-5 flex flex-col gap-3 font-sans text-sm font-bold uppercase tracking-wide">
              <li><a href="#about" className="link-underline hover:text-paper">About</a></li>
              <li><a href="#process" className="link-underline hover:text-paper">Process</a></li>
              <li><a href="#included" className="link-underline hover:text-paper">Included</a></li>
              <li><a href="#faq" className="link-underline hover:text-paper">FAQ</a></li>
              <li><a href="#contact" className="link-underline hover:text-paper">Contact</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">Reach</h2>
            <ul className="mt-5 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.15em]">
              <li>
                <a href="mailto:hello@craftedsnippets.co" className="link-underline hover:text-paper">
                  hello@craftedsnippets.co
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-paper"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-paper"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t-2 border-cream/20 pt-8">
          <p className="font-display uppercase leading-none text-cream/15 [font-size:clamp(2rem,8vw,6rem)]" aria-hidden="true">
            Craftsites that convert
          </p>
          <p className="mt-6 flex flex-wrap items-baseline justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/50">
            <span>&copy; {new Date().getFullYear()} CraftedSnippets Co. — All rights reserved.</span>
            <span aria-hidden="true">Sheet 06 / End of document</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
