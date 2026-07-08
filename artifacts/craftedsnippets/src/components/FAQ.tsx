import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: "How long does it take to build a site?",
    a: "A standard single-page business site takes about 2 to 3 weeks from the day we receive your content. We move fast, but we don't skip the testing phase."
  },
  {
    q: "What do you need from me to start?",
    a: "We need your logo, brand colors (if you have them), photos of your business/products, and the core text (menu, services, about you). If you need help with copy, let us know."
  },
  {
    q: "Will the site work on mobile phones?",
    a: "Absolutely. We build mobile-first. Over 70% of local business traffic comes from phones, so your site will look and perform flawlessly on small screens."
  },
  {
    q: "Do you handle post-launch updates?",
    a: "Yes. We offer ongoing maintenance retainers if you want us to handle menu updates, price changes, or adding new photos. Otherwise, we can hand it off to you."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 border-b-[4px] border-border bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl text-foreground inline-block">
            STRICTLY BUSINESS
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`border-[4px] border-border bg-background transition-shadow ${isOpen ? 'shadow-[8px_8px_0px_hsl(var(--primary))]' : 'shadow-[4px_4px_0px_hsl(var(--border))]'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-accent transition-colors focus:outline-none"
                >
                  <span className="font-display text-xl uppercase tracking-wide pr-8">
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-background border-[3px] border-border transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus className="w-5 h-5" strokeWidth={3} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t-[4px] border-border bg-accent text-secondary font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
