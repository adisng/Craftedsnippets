import React from 'react';
import { LogoMark } from './LogoMark';

const Footer = () => {
  return (
    <footer className="bg-secondary text-accent border-t-[4px] border-border noise-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12">
          
          <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-3">
              <div className="bg-background border-[3px] border-border p-1 shadow-[2px_2px_0px_hsl(var(--background))]">
                <LogoMark className="w-8 h-8" />
              </div>
              <span className="font-display text-2xl uppercase tracking-widest text-background drop-shadow-[2px_2px_0px_#1A1208]">
                CraftedSnippets Co.
              </span>
            </div>
            <p className="max-w-xs font-medium text-sm leading-relaxed text-accent/80">
              A precision-built web design and development studio. We engineer structural, zero-bullshit websites for businesses that respect their customers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest text-primary border-b-[2px] border-border/30 pb-2">
              Sitemap
            </h4>
            <nav className="flex flex-col gap-3 font-bold uppercase text-sm">
              <a href="#" className="hover:text-primary transition-colors w-fit">Work</a>
              <a href="#process" className="hover:text-primary transition-colors w-fit">Process</a>
              <a href="#about" className="hover:text-primary transition-colors w-fit">About</a>
              <a href="#contact" className="hover:text-primary transition-colors w-fit">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest text-primary border-b-[2px] border-border/30 pb-2">
              Connect
            </h4>
            <nav className="flex flex-col gap-3 font-bold uppercase text-sm">
              <a href="#" className="hover:text-background transition-colors w-fit">Instagram</a>
              <a href="#" className="hover:text-background transition-colors w-fit">LinkedIn</a>
              <a href="#" className="hover:text-background transition-colors w-fit">WhatsApp</a>
            </nav>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t-[4px] border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 font-bold uppercase text-xs tracking-wider text-accent/60">
          <p>© {new Date().getFullYear()} CraftedSnippets Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
