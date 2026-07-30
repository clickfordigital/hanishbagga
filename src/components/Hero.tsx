import React from 'react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  Briefcase,
  Heart,
  Activity,
  Home as HomeIcon,
  TrendingUp,
  Hash,
  MessageCircle
} from 'lucide-react';
import { SERVICE_HIGHLIGHTS } from '../data/astrologyData';
import portraitImg from '../assets/images/regenerated_image_1785403165903.png';
import zodiacWheelImg from '../assets/images/golden_zodiac_wheel_1785401629394.jpg';

const PORTRAIT_IMAGE = portraitImg;

interface HeroProps {
  onOpenBooking: (serviceCategory?: string) => void;
  onNavigateCourses: () => void;
  onNavigateService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onNavigateCourses,
  onNavigateService
}) => {
  return (
    <section id="hero" className="relative bg-[#180a04] text-orange-50 overflow-hidden pt-6 pb-16 lg:pb-24 border-b border-orange-500/30">
      {/* Background Decorative Layer - Warm Orange & Rich Chocolate Brown */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/60 via-[#1c0d06] to-[#110602] pointer-events-none"></div>

      {/* Fiery Orange/Saffron Glow Background */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] opacity-25 pointer-events-none rounded-full blur-3xl bg-orange-500/25"></div>
      
      <div 
        className="absolute top-12 right-0 lg:right-12 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] opacity-25 pointer-events-none mix-blend-screen bg-contain bg-center bg-no-repeat animate-spin-slow"
        style={{ backgroundImage: `url('${zodiacWheelImg}')` }}
      ></div>

      {/* Subtle Constellation Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left pt-2">
            
            {/* Top Badge - Saffron Orange Accent */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/25 via-amber-500/15 to-orange-900/30 border border-orange-500/50 text-orange-200 text-xs sm:text-sm font-medium shadow-inner shadow-orange-500/20">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>Proven Vedic Astrology Excellence</span>
              <span className="hidden sm:inline bg-orange-500/30 text-orange-200 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border border-orange-400/40">
                Certified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] bg-gradient-to-r from-orange-50 via-amber-100 to-orange-200 bg-clip-text text-transparent">
              Transform Your Life with <br className="hidden sm:inline" />
              <span className="italic text-orange-400 relative inline-block font-serif drop-shadow-sm">
                Trusted Vedic Guidance
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-400 to-orange-500/0 rounded-full"></span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-amber-100/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Unlock the secrets of your cosmic blueprint. Renowned astrologer <strong className="text-orange-300 font-semibold">Hanish Bagga</strong> provides accurate, non-superstitious astrology consultations for <span className="text-orange-100 font-medium">Career</span>, <span className="text-orange-100 font-medium">Marriage</span>, <span className="text-orange-100 font-medium">Finance</span>, and <span className="text-orange-100 font-medium">Astro-Vastu</span>.
            </p>

            {/* Primary & Secondary CTAs - Warm Orange Theme */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary CTA - Saffron Orange Glow Button */}
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold px-8 py-4 text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-amber-200/60 cursor-pointer flex items-center justify-center gap-3"
              >
                <Calendar className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA - WhatsApp Connect */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Hanish%20Bagga%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 hover:text-emerald-200 font-semibold px-8 py-4 text-sm uppercase tracking-wider border border-emerald-500/50 hover:border-emerald-400 transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Connect</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hanish Bagga Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Ambient Orange/Brown Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 via-amber-600/25 to-orange-900/40 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

            {/* Glass Container - Rich Copper & Chocolate Brown */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#2a1309]/95 via-[#1f0d05]/90 to-[#120602]/98 p-3.5 sm:p-4 rounded-3xl border border-orange-500/40 shadow-2xl backdrop-blur-md">
              
              {/* Image Frame - Pure and Clean */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-orange-500/50 shadow-2xl group">
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Hanish Bagga - Renowned Vedic Astrologer"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Quick Service Highlights Strip */}
        <div className="mt-16 pt-10 border-t border-orange-500/25">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-orange-400 text-xs uppercase tracking-widest font-bold">Quick Consultation Categories</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-orange-100 mt-1">
              Select Your Area of Guidance
            </h2>
            <p className="text-amber-100/70 text-xs sm:text-sm mt-1">
              Get personalized Vedic insights tailored to your specific life questions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {SERVICE_HIGHLIGHTS.map((service) => {
              const getIcon = (name: string) => {
                switch (name) {
                  case 'Briefcase': return <Briefcase className="w-5 h-5 text-orange-400" />;
                  case 'Heart': return <Heart className="w-5 h-5 text-rose-400" />;
                  case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
                  case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
                  case 'Home': return <HomeIcon className="w-5 h-5 text-orange-300" />;
                  case 'Hash': return <Hash className="w-5 h-5 text-orange-300" />;
                  default: return <Sparkles className="w-5 h-5 text-orange-400" />;
                }
              };

              return (
                <div
                  key={service.id}
                  onClick={() => onNavigateService(service.id)}
                  className="bg-[#230e06]/80 hover:bg-[#321408] p-4 rounded-2xl border border-orange-500/25 hover:border-orange-400/70 transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between hover:-translate-y-1 shadow-lg shadow-black/50"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#140602] border border-orange-500/35 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="font-serif font-bold text-sm text-orange-100 group-hover:text-orange-300 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-amber-100/60 mt-1 line-clamp-2 leading-tight">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-orange-950 flex items-center justify-between text-[10px] font-medium text-orange-400 group-hover:text-orange-200">
                    <span>Consult Now</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
