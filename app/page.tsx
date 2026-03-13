'use client';

import { useRef } from 'react';
import { HeroSection } from '@/components/hero-section';
import { ValuationForm } from '@/components/valuation-form';
import { TrustGrid } from '@/components/trust-grid';
import { TestimonialSection } from '@/components/testimonial-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = (): void => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* Trust Grid Section */}
      <TrustGrid />

      {/* Valuation Form Section */}
      <section
        ref={formRef}
        className="py-16 md:py-24 px-4 md:px-8 bg-white scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance mb-4">
              Get Your Instant Car Valuation
            </h2>
            <p className="text-slate-600 text-lg">
              Fill in your car details to receive an instant quote. No registration required.
            </p>
          </div>
          <ValuationForm />
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
