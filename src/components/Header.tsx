import React, { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Menu, X, Sparkles, BookOpen, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceCategory?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Courses', sectionId: 'courses' },
    { label: 'Kundli', sectionId: 'kundli' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'Vastu', sectionId: 'vastu' },
    { label: 'FAQs', sectionId: 'faqs' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#05070A] text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
              <span>Experienced Vedic Astrologer</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors cursor-pointer">
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+91 98765 43210</span>
            </span>
            <span className="hidden lg:inline text-white/20">|</span>
            <span className="hidden lg:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>consult@hanishbagga.com</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-white/5 text-[#D4AF37] text-[11px] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Online Consultations Open
            </span>
            <button 
              onClick={() => onNavigateSection('kundli')}
              className="text-slate-300 hover:text-[#D4AF37] text-xs font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Free Kundli Check</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05070A]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-[#05070A]/80 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#05070A] rounded-[10px] flex items-center justify-center font-serif font-bold text-[#D4AF37] text-lg tracking-wider border border-white/10">
                HB
              </div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-200 transition-all">
                HANISH BAGGA
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold -mt-1">
                Vedic Astrologer & Astro-Vastu Master
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleLinkClick(link.sectionId)}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#D4AF37] transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Book Consultation</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-[#D4AF37] rounded-lg hover:bg-white/5 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#05070A] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => handleLinkClick(link.sectionId)}
                  className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors border border-white/10"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20Hanish%20Bagga%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
