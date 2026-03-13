'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Shield, Lock, Award } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-amber-500">About TNAM</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              TNAM (Tamil Nadu Auto-Mart) is the trusted platform for transparent car buying and selling in Tamil Nadu. We prioritize trust, transparency, and convenience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Sell Your Car
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>All 38 Districts of Tamil Nadu</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          className="border-t border-slate-700 pt-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4 className="text-center text-slate-400 text-sm mb-6">Why Trust TNAM?</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Verified & Licensed</p>
              <p className="text-xs text-slate-400">
                All operations follow RTA & legal guidelines
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-center mb-3">
                <Lock className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Secure Transactions</p>
              <p className="text-xs text-slate-400">
                Encrypted payments & guaranteed safety
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-white mb-1">5000+ Satisfied</p>
              <p className="text-xs text-slate-400">
                Trusted by sellers across Tamil Nadu
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            © 2024 TNAM (Tamil Nadu Auto-Mart). All rights reserved. | Designed with
            <span className="text-amber-500 mx-1">♥</span>
            for Tamil Nadu
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
