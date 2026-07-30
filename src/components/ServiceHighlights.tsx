import React, { useState } from 'react';
import {
  Briefcase,
  Heart,
  Activity,
  TrendingUp,
  Home as HomeIcon,
  Hash,
  Sparkles,
  Check,
  Calendar,
  Clock,
  X,
  ArrowRight
} from 'lucide-react';
import { SERVICE_HIGHLIGHTS } from '../data/astrologyData';
import { ServiceItem } from '../types';

interface ServiceHighlightsProps {
  onOpenBooking: (serviceCategory?: string) => void;
}

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-amber-300" />;
      case 'Hash': return <Hash className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#05070A] text-slate-100 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Core Astrology Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
            Comprehensive Vedic & Vastu Guidance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Personalized birth chart readings, predictive timing, non-destructive Vastu solutions, and practical Vedic remedies curated personally by Hanish Bagga.
          </p>
        </div>

        {/* Services Grid - Bento Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_HIGHLIGHTS.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-sm"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-[#D4AF37]/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.popularKey}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>

                {/* Short Desc */}
                <p className="text-slate-400 text-sm mt-2 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-white/10">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Fee</div>
                  <div className="font-bold text-[#D4AF37] text-sm sm:text-base">{service.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 hover:border-[#D4AF37]/40 transition-all cursor-pointer"
                  >
                    Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal - Bento Theme */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1026] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative text-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-black/60 border border-[#D4AF37]/40 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {selectedService.popularKey}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 space-y-3">
              <h4 className="font-serif font-bold text-[#D4AF37] text-sm uppercase tracking-wider">Key Areas Covered in Session:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Duration: {selectedService.duration}</span>
                </div>
                <div className="font-bold text-[#D4AF37] text-lg">
                  {selectedService.price}
                </div>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const category = selectedService.title;
                    setSelectedService(null);
                    onOpenBooking(category);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
