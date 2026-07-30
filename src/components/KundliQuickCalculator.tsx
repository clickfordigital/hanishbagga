import React, { useState } from 'react';
import { Compass, Sparkles, Moon, Sun, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ZODIAC_SIGNS } from '../data/astrologyData';
import { ZodiacSign } from '../types';

interface KundliQuickCalculatorProps {
  onOpenBooking: (serviceCategory?: string) => void;
}

export const KundliQuickCalculator: React.FC<KundliQuickCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacSign>(ZODIAC_SIGNS[0]);
  const [dobInput, setDobInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [placeInput, setPlaceInput] = useState('');
  const [calculatedChart, setCalculatedChart] = useState<boolean>(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dobInput || !placeInput) return;
    
    // Auto map month to zodiac or simulate chart calculation
    const month = new Date(dobInput).getMonth();
    const mapped = ZODIAC_SIGNS[month % 12];
    setSelectedZodiac(mapped);
    setCalculatedChart(true);
  };

  return (
    <section id="kundli" className="py-16 lg:py-20 bg-[#05070A] text-slate-100 relative border-b border-white/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Cosmic Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
            Instant Birth Chart & Daily Horoscope Reading
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Select your Zodiac sign or enter birth details for immediate astrological planetary insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form / Zodiac Selector Panel - Bento Theme */}
          <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl backdrop-blur-md">
            
            <h3 className="font-serif font-bold text-xl text-slate-100 mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5 text-[#D4AF37]" />
              <span>Quick Horoscope & Kundli Check</span>
            </h3>

            {/* Zodiac Selector Grid */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                Select Your Zodiac Sign (Rashi):
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {ZODIAC_SIGNS.map((sign) => (
                  <button
                    key={sign.name}
                    onClick={() => {
                      setSelectedZodiac(sign);
                      setCalculatedChart(false);
                    }}
                    className={`p-2 rounded-xl text-center border transition-all cursor-pointer flex flex-col items-center justify-center ${
                      selectedZodiac.name === sign.name && !calculatedChart
                        ? 'bg-[#D4AF37] text-slate-950 font-bold border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-black/40 text-slate-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                    }`}
                  >
                    <span className="text-lg leading-none">{sign.symbol}</span>
                    <span className="text-[9px] mt-1 truncate w-full">{sign.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative bg-[#080C1A] px-3 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                OR Enter Birth Details
              </span>
            </div>

            {/* Birth Details Form */}
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Date of Birth</label>
                <input
                  type="date"
                  value={dobInput}
                  onChange={(e) => setDobInput(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Time of Birth</label>
                  <input
                    type="time"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Place of Birth</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={placeInput}
                    onChange={(e) => setPlaceInput(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Analyze Planetary Alignment</span>
              </button>
            </form>

          </div>

          {/* Results Display Panel - Bento Theme */}
          <div className="lg:col-span-7 bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-slate-950 text-2xl font-bold shadow-md">
                  {selectedZodiac.symbol}
                </div>
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                    {selectedZodiac.element} Element • {selectedZodiac.dateRange}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-100">
                    {selectedZodiac.name}
                  </h3>
                </div>
              </div>

              <span className="hidden sm:inline-block bg-black/50 text-[#D4AF37] text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium uppercase tracking-wider">
                Lord: {selectedZodiac.rulingPlanet}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Ruling Planet</span>
                <span className="font-bold text-[#D4AF37] text-xs">{selectedZodiac.rulingPlanet}</span>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Lucky Color</span>
                <span className="font-bold text-emerald-400 text-xs">{selectedZodiac.luckyColor}</span>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Lucky Number</span>
                <span className="font-bold text-blue-400 text-xs">{selectedZodiac.luckyNumber}</span>
              </div>
            </div>

            {/* Daily Guidance */}
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 mb-6">
              <div className="flex items-center gap-2 mb-2 text-[#D4AF37] font-serif font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Hanish Bagga’s Cosmic Daily Forecast:</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                "{selectedZodiac.todaysPrediction}"
              </p>
            </div>

            {/* Call to Action for Full In-Depth Kundli */}
            <div className="bg-black/40 p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-slate-100 text-sm">Need a 100% Customized Birth Chart Analysis?</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Book a direct 1-on-1 session with Hanish Bagga for accurate life predictions & remedies.
                </p>
              </div>

              <button
                onClick={() => onOpenBooking(`Full Kundli Analysis (${selectedZodiac.name})`)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform flex-shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <span>Consult Hanish Bagga</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
