import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface FloatingContactProps {
  onOpenBooking: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#05070A]/90 text-[#D4AF37] hover:text-amber-200 border border-white/10 hover:border-[#D4AF37]/50 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 group cursor-pointer"
      >
        <Calendar className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
        <span>Book Consultation</span>
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Hanish%20Bagga%20Team,%20I%20would%20like%20to%20book%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-6 h-6 text-slate-950 fill-slate-950" />
      </a>
    </div>
  );
};
