'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen md:min-h-[80vh] bg-slate-900 text-white flex items-center justify-center px-4 md:px-8 py-20 md:py-0 mt-16 md:mt-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6"
          variants={itemVariants}
        >
          The Safest Way to Sell Your Car Anywhere in Tamil Nadu.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          Get a transparent valuation and doorstep inspection. We handle RC transfers and provide instant bank settlement. No hidden charges. No delays.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-lg h-auto transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Your Free Instant Quote
            <ChevronDown className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <div className="text-slate-400 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
