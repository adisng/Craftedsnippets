import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutList, MessageSquare, MapPin, Search, Zap } from 'lucide-react';

const features = [
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "Modern Responsive Design",
    desc: "Flawless rendering on desktops, tablets, and phones. Mobile-first architecture built for customers on the go."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast-Loading Optimization",
    desc: "Stripped of bloated code. We deliver lightning-fast page loads to keep bounce rates at absolute zero."
  },
  {
    icon: <LayoutList className="w-8 h-8" />,
    title: "Menu & Services Setup",
    desc: "Crystal clear layouts for your offerings. No PDF menus — fully text-based, searchable, and accessible."
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Google Maps Integration",
    desc: "Frictionless location finding. Direct integration ensures customers can navigate to your door with one tap."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Basic SEO Setup",
    desc: "Properly structured semantic HTML, meta tags, and alt text so you actually show up when locals search."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Direct Contact Forms",
    desc: "Spam-protected, brutally simple forms that pipe inquiries directly to your inbox or WhatsApp."
  }
];

const Features = () => {
  return (
    <section className="py-24 border-b-[4px] border-border bg-accent noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <h2 className="text-4xl md:text-6xl text-background mb-4 inline-block bg-foreground px-4 py-2 border-[4px] border-border shadow-[4px_4px_0px_hsl(var(--primary))]">
            WHAT'S INCLUDED
          </h2>
          <p className="font-bold uppercase text-secondary border-b-[4px] border-border pb-2 max-w-sm">
            Everything you need. Nothing you don't. No upselling useless features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-brutal group hover:bg-foreground hover:text-background transition-colors duration-200 cursor-default flex flex-col gap-4"
            >
              <div className="w-16 h-16 bg-primary border-[3px] border-border flex items-center justify-center text-background shadow-[4px_4px_0px_hsl(var(--border))] group-hover:-rotate-6 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-display uppercase tracking-wide group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="font-medium text-sm text-secondary group-hover:text-accent transition-colors">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
