import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoMark } from './LogoMark';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isWiping, setIsWiping] = useState(false);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const sequence = async () => {
      // Allow mark and text to fade in and settle
      await new Promise(r => setTimeout(r, prefersReducedMotion ? 900 : 1800));
      setIsWiping(true);
      await new Promise(r => setTimeout(r, 600)); // wait for wipe/fade animation
      onComplete();
    };
    sequence();
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary noise-bg"
          initial={{ opacity: 1 }}
          animate={{ opacity: isWiping ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <div className="mb-6">
            <LogoMark className="w-24 h-24" variant="light" />
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-accent tracking-wider uppercase text-center">
            CraftedSnippets Co.
          </h1>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-secondary noise-bg"
        initial={{ y: 0 }}
        animate={isWiping ? { y: '-100%' } : {}}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 drop-shadow-[4px_4px_0px_#1A1208]"
        >
          <LogoMark className="w-24 h-24" variant="light" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-3xl md:text-5xl text-accent tracking-wider uppercase text-center drop-shadow-[2px_2px_0px_#1A1208]"
        >
          CraftedSnippets Co.
        </motion.h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
