import React from 'react';
import { Home, Compass, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface VastuSectionProps {
  onOpenBooking: (serviceCategory?: string) => void;
}

export const VastuSection: React.FC<VastuSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="vastu" className="py-16 lg:py-24 bg-[#05070A] text-slate-100 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Scientific Astro-Vastu Solutions</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
              Transform Your Space Without Demolition
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Hanish Bagga’s signature <strong className="text-[#D4AF37] font-semibold">Astro-Vastu methodology</strong> overlays your individual horoscope onto your home or commercial floor plan. We balance spatial 16-zone directional energies using color therapy, elemental placement, and simple metallic strips — without breaking a single wall.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Zero-demolition non-structural Vastu remedies',
                'Customized 16-Zone directional energy map for your birth chart',
                'Office & Industrial Vastu for revenue & employee productivity',
                'Entrance, Kitchen, & Bedroom Vastu alignment for peace'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('Vastu Shastra Consultation')}
                className="px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <Home className="w-4 h-4 text-slate-950" />
                <span>Book Astro-Vastu Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative backdrop-blur-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">16</div>
                <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">Vastu Zones</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Directional energy grids</div>
              </div>

              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">0%</div>
                <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">Demolition</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Non-destructive remedies</div>
              </div>

              <div className="bg-black/40 p-5 rounded-2xl border border-white/10 text-center col-span-2">
                <h4 className="font-serif font-bold text-[#D4AF37] text-base mb-1 uppercase tracking-wider">Commercial & Residential Vastu</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ideal for homes, corporate offices, retail stores, manufacturing units, and real estate developments.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
