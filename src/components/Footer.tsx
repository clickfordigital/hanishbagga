import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] text-slate-300 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <div className="w-full h-full bg-[#05070A] rounded-[10px] flex items-center justify-center font-serif font-bold text-[#D4AF37] text-base border border-white/10">
                  HB
                </div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-slate-100">HANISH BAGGA</div>
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Vedic Astrologer & Astro-Vastu</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering individuals, families, and businesses worldwide with authentic, non-superstitious Vedic Astrology, Astro-Vastu, and Numerology guidance.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#D4AF37] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Confidential & Professional Consultation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-[#D4AF37] text-xs mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['hero', 'about', 'services', 'courses', 'kundli', 'reviews'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigateSection(sec)}
                    className="hover:text-[#D4AF37] text-slate-400 transition-colors capitalize cursor-pointer"
                  >
                    {sec === 'hero' ? 'Home' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-serif font-bold text-[#D4AF37] text-xs mb-4 uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Career & Business Guidance</li>
              <li>Love & Kundli Matching</li>
              <li>Health & Medical Astrology</li>
              <li>Zero-Demolition Astro-Vastu</li>
              <li>Numerology & Brand Names</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-[#D4AF37] text-xs mb-4 uppercase tracking-widest">Direct Connect</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>consult@hanishbagga.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">New Delhi, India (Global Online Zoom Sessions)</span>
              </li>
            </ul>

            <button
              onClick={onOpenBooking}
              className="mt-4 w-full py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Hanish Bagga Astrology. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 hover:text-[#D4AF37] cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="text-slate-400 hover:text-[#D4AF37] cursor-pointer">Terms of Consultation</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#D4AF37] border border-white/10 ml-2 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
