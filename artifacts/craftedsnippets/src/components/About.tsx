import React from 'react';
import { motion } from 'framer-motion';
import adityaPhoto from '@assets/portfolio.png';

const About = () => {
  return (
    <section id="about" className="py-24 border-b-[4px] border-border bg-accent noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          
          {/* Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="relative max-w-sm mx-auto w-full"
          >
            {/* Offset decorative box */}
            <div className="absolute inset-0 bg-primary border-[4px] border-border rotate-6 translate-x-4 translate-y-4 shadow-[4px_4px_0px_hsl(var(--border))]" />
            
            {/* Image container */}
            <div className="relative bg-background border-[4px] border-border aspect-[3/4] overflow-hidden group">
              <img 
                src={adityaPhoto} 
                alt="Aditya Singh"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background border-t-[4px] border-border p-3 text-center">
                <p className="font-display uppercase tracking-widest text-sm">Aditya Singh</p>
                <p className="text-xs font-bold uppercase text-secondary">Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Bio Stamped Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-background border-[4px] border-border shadow-[12px_12px_0px_hsl(var(--border))] p-8 md:p-12 relative"
          >
            <div className="absolute top-6 right-6 border-[2px] border-primary text-primary px-3 py-1 font-display text-xs uppercase tracking-widest rotate-12 opacity-80">
              Verified
            </div>

            <h2 className="text-4xl md:text-5xl mb-8 leading-none">
              HI, I'M ADITYA.
            </h2>
            
            <div className="space-y-6 text-lg font-medium text-secondary">
              <p>
                I help local businesses build clean, modern, easy-to-use websites that turn visitors into real-world customers. 
              </p>
              <p>
                Too many cafes, salons, and stores are stuck with slow, cluttered template sites that actively drive people away. At <strong className="text-foreground bg-primary/10 px-1">CraftedSnippets Co.</strong>, we rip out the unnecessary and build structural, mobile-first experiences that respect your customer's time.
              </p>
              <p>
                No bloat. No hidden fees. Just precision-built web platforms designed to work as hard as you do.
              </p>
            </div>
            
            <div className="mt-10 border-t-[4px] border-border pt-6 flex gap-4">
              <div className="w-16 h-16 bg-primary noise-bg border-[3px] border-border flex items-center justify-center -rotate-6 shadow-[2px_2px_0px_hsl(var(--border))]">
                <span className="font-display text-background text-2xl">CS</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display uppercase text-sm">EST. 2024</span>
                <span className="font-bold text-xs text-secondary">Independent Studio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
