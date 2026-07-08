import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Onboarding & Requirements",
    desc: "We align on your goals, target audience, and must-have features. No fluff, just the critical details."
  },
  {
    num: "02",
    title: "Structure & Layout",
    desc: "Wireframing the user journey. Mapping out content blocks so the site flows logically before we touch colors."
  },
  {
    num: "03",
    title: "Design Preview & Feedback",
    desc: "You get a hard-edged, polished visual concept. We iterate until the aesthetic perfectly matches your brand."
  },
  {
    num: "04",
    title: "Development & Content Setup",
    desc: "Writing clean, fast, mobile-optimized code. Integrating your copy and imagery directly into the build."
  },
  {
    num: "05",
    title: "Final Review & Delivery",
    desc: "Rigorous testing across devices. Once approved, we hand over the keys and push your site live."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 border-b-[4px] border-border bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-foreground mb-4 inline-block bg-accent px-4 py-2 border-[4px] border-border shadow-[4px_4px_0px_hsl(var(--border))]">
            HOW WE BUILD
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[4px] bg-border z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex-1 relative z-10 group"
            >
              {/* Connector for mobile */}
              {idx !== steps.length - 1 && (
                <div className="lg:hidden w-[4px] h-8 bg-border ml-10 my-2" />
              )}
              
              <div className="card-brutal bg-cream lg:mr-4 relative h-full flex flex-col transition-colors duration-200 group-hover:bg-primary group-hover:text-background group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[10px_10px_0px_hsl(var(--border))]">
                <div className="font-display text-4xl mb-4 text-border group-hover:text-background transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 leading-tight border-b-[2px] border-border pb-3 group-hover:border-background/30 transition-colors">
                  {step.title}
                </h3>
                <p className="font-medium text-sm leading-relaxed text-secondary group-hover:text-accent transition-colors">
                  {step.desc}
                </p>
                
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-[28px] w-8 h-8 bg-background border-[3px] border-border rounded-full items-center justify-center z-20">
                    <ArrowRight className="w-4 h-4 text-border" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
