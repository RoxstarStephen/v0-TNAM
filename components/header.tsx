'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onGetStarted?: () => void;
}

export function Header({ onGetStarted }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg md:text-xl">TNAM</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-sm md:text-base">TNAM</span>
              <span className="text-slate-400 text-xs">Tamil Nadu Auto-Mart</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={onGetStarted}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-slate-300 hover:text-white transition-colors duration-200 font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => {
                  onGetStarted?.();
                  setIsOpen(false);
                }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
              >
                Get Free Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
