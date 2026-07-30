import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/astrologyData';

export const TestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Career Astrology', 'Love & Marriage', 'Astro-Vastu', 'Business & Finance'];

  const filteredTestimonials = activeTab === 'All'
    ? CLIENT_TESTIMONIALS
    : CLIENT_TESTIMONIALS.filter(t => t.serviceCategory === activeTab);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#05070A] text-slate-100 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Verified Client Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Real stories of career turns, happy marriages, thriving businesses, and peaceful homes guided by Hanish Bagga.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-[#D4AF37] text-slate-950 font-bold border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards - Bento Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between shadow-lg relative backdrop-blur-sm"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/10 pointer-events-none" />

              <div>
                {/* Rating Stars & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {review.serviceCategory}
                  </span>
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-serif">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#D4AF37]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-serif font-bold text-slate-100 text-sm flex items-center gap-1.5">
                      <span>{review.name}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-slate-400" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-slate-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
