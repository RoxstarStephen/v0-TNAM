'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, CheckCircle } from 'lucide-react';
import { testimonials } from '@/lib/constants';

export function TestimonialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      y: -4,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance mb-4">
            Loved by Sellers Across Tamil Nadu
          </h2>
          <p className="text-slate-600 text-lg">
            Real stories from people just like you
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="h-full p-6 md:p-8 bg-slate-50 border-slate-200">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="text-left">
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.city}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {testimonial.carModel}
                    </p>
                  </div>

                  {/* Verified Badge */}
                  {testimonial.verified && (
                    <motion.div
                      className="flex items-center gap-1 text-green-600 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-xs font-semibold hidden md:inline">
                        Verified
                      </span>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
