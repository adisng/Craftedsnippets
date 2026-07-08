'use client'

import { useState, type FormEvent } from 'react'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { SectionNumber } from '@/components/ui/SectionNumber'
import { Texture } from '@/components/ui/Texture'

type Status = 'idle' | 'submitting' | 'success'

const inputClasses =
  'w-full border-2 border-ink bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink/40 focus-visible:outline-rust'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const nextErrors: Record<string, string> = {}
    if (!name) nextErrors.name = 'Name is required.'
    if (!email) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (!message) nextErrors.message = 'Tell us a little about your project.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // Client-side simulated submit — no backend by design.
    // TODO: wire to /app/api/contact/route.ts when a real endpoint is wanted.
    setStatus('submitting')
    window.setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <section id="contact" className="relative border-b-4 border-ink bg-cream">
      <Texture variant="grain" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <RevealOnScroll variant="clip">
          <SectionNumber number="05" label="Start a project" />
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <RevealOnScroll variant="left">
              <h2 className="font-display uppercase leading-tight text-ink text-balance [font-size:clamp(1.8rem,4vw,3.2rem)]">
                Your customers are searching. <span className="text-rust">Be found.</span>
              </h2>
              <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80">
                Fill in the project sheet and you&apos;ll hear back within one business day.
                Prefer to talk directly? Use any channel below.
              </p>
              <ul className="mt-10 flex flex-col gap-4 font-mono text-sm uppercase tracking-[0.15em]">
                <li>
                  <a href="mailto:hello@craftedsnippets.co" className="link-underline text-ink hover:text-rust">
                    hello@craftedsnippets.co
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/910000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink hover:text-rust"
                  >
                    WhatsApp — Chat directly
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-ink hover:text-rust"
                  >
                    Instagram — @craftedsnippets
                  </a>
                </li>
              </ul>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="right">
            <div className="offset-card relative border-4 border-ink bg-paper p-8 sm:p-10">
              <Texture variant="noise" />
              {status === 'success' ? (
                <div className="relative flex flex-col items-start gap-4 py-8" role="status">
                  <span className="inline-flex h-16 w-16 items-center justify-center border-4 border-rust text-rust">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m4 13 5 5L20 7" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </span>
                  <h3 className="font-display text-2xl uppercase text-ink">Sheet received.</h3>
                  <p className="font-body text-base leading-relaxed text-ink/80">
                    Thanks for the details — expect a reply within one business day. Meanwhile,
                    gather any photos, menus, or brand material you&apos;d like on the site.
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brown/60">
                    Ref. no. assigned on reply — Filed to: New Projects
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brown/60">
                    Form CS-05 — Project Intake Sheet
                  </p>
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-brown">
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Aditya Singh"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 font-mono text-xs text-rust">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-brown">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="you@yourbusiness.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 font-mono text-xs text-rust">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="business" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-brown">
                      Business type
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      className={inputClasses}
                      placeholder="Café, salon, clinic, bakery…"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.25em] text-brown">
                      Project details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputClasses}
                      placeholder="What do you need the website to do for your business?"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 font-mono text-xs text-rust">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="press-btn inline-flex items-center justify-center gap-3 border-2 border-ink bg-rust px-7 py-4 font-sans text-base font-bold uppercase tracking-wide text-cream disabled:cursor-wait disabled:opacity-80"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="animate-spin"
                        >
                          <path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="3" />
                        </svg>
                        Filing sheet…
                      </>
                    ) : (
                      'Submit Project Sheet'
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
