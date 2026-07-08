import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';

const NAV_ITEMS = ['Work', 'Process', 'About'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background border-b-[4px] border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="group-hover:rotate-45 transition-transform duration-200">
            <LogoMark className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <span className="font-display text-base sm:text-xl uppercase tracking-widest mt-1">
            CraftedSnippets
          </span>
        </div>

        {/* Links & CTA (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8 font-bold uppercase tracking-wider text-sm mt-1">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:-translate-y-1 hover:text-primary transition-transform duration-150 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <button 
            onClick={() => scrollTo('contact')}
            className="btn-brutal text-sm py-2 px-5"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => scrollTo('contact')}
            className="btn-brutal text-xs py-2 px-3"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="w-10 h-10 flex items-center justify-center border-[3px] border-border bg-accent shrink-0 cursor-pointer"
          >
            {menuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t-[4px] border-border bg-accent"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left py-3 px-2 font-bold uppercase tracking-wider text-base border-b-[2px] border-border/30 last:border-b-0 hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
