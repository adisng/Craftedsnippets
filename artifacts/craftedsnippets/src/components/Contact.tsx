import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-primary noise-bg border-b-[4px] border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-8 text-background"
          >
            <div>
              <h2 className="text-5xl md:text-7xl mb-6 drop-shadow-[4px_4px_0px_#1A1208]">
                REACH OUT.
              </h2>
              <p className="text-xl font-medium bg-foreground p-4 border-[3px] border-border shadow-[4px_4px_0px_hsl(var(--accent))]">
                Ready to stop losing customers to a bad website? Let's talk specifics.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <h3 className="font-display uppercase text-sm tracking-widest border-b-[3px] border-foreground/30 pb-2">
                Direct Lines
              </h3>
              <a 
                href="mailto:singh09aaditya@gmail.com" 
                className="flex items-center gap-4 group p-4 border-[3px] border-border bg-background text-foreground hover:bg-accent hover:-translate-y-1 hover:shadow-[4px_4px_0px_hsl(var(--border))] transition-all"
              >
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
                <span className="font-bold uppercase tracking-wide">singh09aaditya@gmail.com</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-4 group p-4 border-[3px] border-border bg-primary text-background hover:bg-foreground hover:-translate-y-1 hover:shadow-[4px_4px_0px_hsl(var(--border))] transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wide">WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="bg-background border-[4px] border-border shadow-[12px_12px_0px_hsl(var(--border))] p-12 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-primary text-background border-[4px] border-border flex items-center justify-center mb-6 rotate-12 shadow-[4px_4px_0px_hsl(var(--border))]">
                  <span className="font-display text-4xl">OK</span>
                </div>
                <h3 className="text-3xl font-display uppercase mb-4">Message Received.</h3>
                <p className="text-secondary font-medium text-lg mb-8">
                  We'll review your details and get back to you within 24 hours to discuss the build.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-brutal">
                  Send Another
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="bg-background border-[4px] border-border shadow-[12px_12px_0px_hsl(var(--border))] p-8 md:p-12 flex flex-col gap-6"
              >
                <div className="bg-foreground text-background px-4 py-2 font-display uppercase tracking-widest text-sm inline-block self-start border-[2px] border-border">
                  Project Inquiry Form
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold uppercase text-sm tracking-wide">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      id="name"
                      className="border-[3px] border-border p-4 bg-accent focus:bg-background focus:outline-none focus:ring-0 font-medium transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold uppercase text-sm tracking-wide">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      id="email"
                      className="border-[3px] border-border p-4 bg-accent focus:bg-background focus:outline-none focus:ring-0 font-medium transition-colors"
                      placeholder="john@business.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="font-bold uppercase text-sm tracking-wide">Business Type</label>
                  <select 
                    id="business"
                    className="border-[3px] border-border p-4 bg-accent focus:bg-background focus:outline-none focus:ring-0 font-medium transition-colors appearance-none"
                    required
                  >
                    <option value="">Select an option...</option>
                    <option value="cafe">Cafe / Restaurant</option>
                    <option value="salon">Salon / Barbershop</option>
                    <option value="retail">Local Retail</option>
                    <option value="service">Home Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="font-bold uppercase text-sm tracking-wide">Project Details</label>
                  <textarea 
                    required
                    id="details"
                    rows={4}
                    className="border-[3px] border-border p-4 bg-accent focus:bg-background focus:outline-none focus:ring-0 font-medium transition-colors resize-none"
                    placeholder="Tell us about your business and what you need the website to achieve."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-brutal-primary w-full mt-4 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
