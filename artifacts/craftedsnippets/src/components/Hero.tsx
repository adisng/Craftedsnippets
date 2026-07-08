import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LogoMark } from './LogoMark';

const TARGETS = ['Cafes', 'Salons', 'Restaurants', 'Retail Shops'];

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-16 pb-20 overflow-hidden border-b-[4px] border-border bg-background">
      {/* Decorative rust block behind */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 md:w-1/2 h-[70vh] bg-primary noise-bg border-l-[4px] border-y-[4px] border-border transform translate-x-10 -rotate-2 z-0" />

      {/* Oversized watermark logo, brand reinforcement, gentle ambient spin */}
      <motion.div
        className="absolute -left-16 -bottom-24 w-[28rem] h-[28rem] opacity-[0.06] pointer-events-none z-0"
        initial={{ rotate: 12 }}
        animate={prefersReducedMotion ? { rotate: 12 } : { rotate: [12, 26, 12] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LogoMark className="w-full h-full" />
      </motion.div>

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-7"
        >
          <motion.div
            className="bg-accent px-4 py-1 border-[2px] border-border inline-block font-bold tracking-widest text-xs uppercase shadow-[2px_2px_0px_hsl(var(--border))] cursor-default"
            initial={{ rotate: -1 }}
            animate={prefersReducedMotion ? { rotate: -1 } : { rotate: [-1, 1.5, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            Web Design & Development Studio
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground drop-shadow-[4px_4px_0px_var(--color-accent)]">
            WEBSITES THAT LOOK LIKE THEY MEAN BUSINESS.
          </h1>
          
          <p className="text-lg md:text-xl max-w-lg font-medium text-secondary">
            We build clean, fast, mobile-first websites for local businesses that refuse to settle for sloppy templates.
          </p>

          <div className="flex flex-wrap gap-3">
            {TARGETS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                whileHover={prefersReducedMotion ? {} : { y: -3, backgroundColor: 'hsl(var(--accent))', rotate: i % 2 === 0 ? 2 : -2 }}
                className={`px-3 py-1.5 border-[2px] border-border bg-background font-bold uppercase text-xs tracking-wide cursor-default ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-brutal-primary mt-4"
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block relative h-full w-full"
          style={{ perspective: 1200 }}
        >
          {/* Stacked site-preview composition, tilts to follow the cursor */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-accent border-[4px] border-border shadow-[8px_8px_0px_hsl(var(--border))] rotate-3" />

            <div className="absolute inset-4 bg-background border-[4px] border-border -rotate-3 overflow-hidden flex flex-col">
              <div className="h-8 border-b-[4px] border-border bg-secondary flex items-center px-4 gap-2">
                {['bg-primary', 'bg-accent', 'bg-background'].map((c, i) => (
                  <motion.div
                    key={c}
                    className={`w-3 h-3 ${c} border-[2px] border-border rounded-full`}
                    animate={prefersReducedMotion ? {} : { opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                  />
                ))}
              </div>
              <div className="flex-1 p-5 flex flex-col gap-3">
                <div className="h-5 w-2/3 bg-secondary/20" />
                <div className="h-3 w-full bg-secondary/10" />
                <div className="h-3 w-5/6 bg-secondary/10" />
                <div className="mt-2 flex-1 grid grid-cols-2 gap-3">
                  <div className="bg-accent border-[2px] border-border" />
                  <div className="bg-primary/10 border-[2px] border-border" />
                </div>
              </div>
            </div>

            {/* Wax-seal style logo stamp, spins and pops on hover */}
            <motion.div
              className="absolute bottom-3 right-3 w-24 h-24 bg-accent border-[4px] border-border shadow-[4px_4px_0px_hsl(var(--border))] flex items-center justify-center cursor-pointer"
              initial={{ rotate: 12 }}
              whileHover={prefersReducedMotion ? { rotate: 12 } : { rotate: 25, scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 220, damping: 12 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <LogoMark className="w-14 h-14" />
            </motion.div>

            {/* Small "live" status chip for texture, gentle idle bob */}
            <motion.div
              className="absolute -top-5 -left-5 bg-foreground text-background px-3 py-1.5 border-[3px] border-border font-display uppercase text-xs tracking-widest shadow-[3px_3px_0px_hsl(var(--primary))] cursor-default"
              initial={{ rotate: -6, y: 0 }}
              animate={prefersReducedMotion ? { rotate: -6 } : { rotate: -6, y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Built To Convert
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-bold uppercase text-[10px] tracking-[0.2em]">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;
