import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/astrologyData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-[#05070A] text-slate-100 relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
            Got Questions About Consultation?
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Clear answers on how Vedic Astrology and Astro-Vastu consultations work with Hanish Bagga.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 overflow-hidden transition-all backdrop-blur-sm"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-slate-100 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
