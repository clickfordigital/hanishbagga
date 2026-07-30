import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MapPin, CheckCircle2, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceCategory = 'Career & Business Astrology'
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialServiceCategory,
    consultationMode: 'Video Call',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    preferredDate: '',
    preferredTimeSlot: '11:00 AM - 12:00 PM',
    notes: ''
  });
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, serviceType: e.target.value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'HB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(3);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1026] border border-[#D4AF37]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative text-slate-100 max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Official Consultation Portal</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            Book Session with Hanish Bagga
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Personalized 1-on-1 Vedic Astrology & Astro-Vastu Guidance
          </p>
        </div>

        {/* Progress Tracker */}
        {step !== 3 && (
          <div className="flex items-center justify-center gap-4 mb-6 text-xs uppercase tracking-wider">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#D4AF37] font-bold' : 'text-slate-500'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#D4AF37] text-slate-950 font-bold' : 'bg-white/10'}`}>1</span>
              <span>Details</span>
            </div>
            <div className="w-8 h-[1px] bg-white/10"></div>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#D4AF37] font-bold' : 'text-slate-500'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#D4AF37] text-slate-950 font-bold' : 'bg-white/10'}`}>2</span>
              <span>Schedule</span>
            </div>
          </div>
        )}

        {/* STEP 1: Personal & Service Details */}
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Select Consultation Type *</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleServiceChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Career & Business Astrology">Career & Business Astrology</option>
                <option value="Love & Marriage Compatibility">Love & Marriage Compatibility</option>
                <option value="Health & Medical Astrology">Health & Medical Astrology</option>
                <option value="Financial & Wealth Astrology">Financial & Wealth Astrology</option>
                <option value="Vastu Shastra Consultation">Vastu Shastra Consultation</option>
                <option value="Numerology & Name Correction">Numerology & Name Correction</option>
                <option value="Full Comprehensive Kundli Analysis">Full Comprehensive Kundli Analysis</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Email Address *</label>
              <input
                type="email"
                required
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1 uppercase">Date of Birth</label>
                <input
                  type="date"
                  required
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-2.5 py-2 text-[11px] text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1 uppercase">Time of Birth</label>
                <input
                  type="time"
                  required
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-2.5 py-2 text-[11px] text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1 uppercase">Place of Birth</label>
                <input
                  type="text"
                  required
                  name="placeOfBirth"
                  placeholder="City, State"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-2.5 py-2 text-[11px] text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Consultation Mode</label>
              <div className="grid grid-cols-2 gap-2">
                {(['Video Call', 'In-Person', 'Telephonic', 'Detailed Written Report'] as const).map((mode) => (
                  <button
                    type="button"
                    key={mode}
                    onClick={() => setFormData({ ...formData, consultationMode: mode })}
                    className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      formData.consultationMode === mode
                        ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37] font-bold'
                        : 'bg-black/40 text-slate-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-4 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
            >
              Proceed to Slot Selection →
            </button>
          </form>
        )}

        {/* STEP 2: Schedule & Slot */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Preferred Consultation Date *</label>
              <input
                type="date"
                required
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Preferred Time Slot *</label>
              <select
                name="preferredTimeSlot"
                value={formData.preferredTimeSlot}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM (IST)</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM (IST)</option>
                <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM (IST)</option>
                <option value="08:00 PM - 09:00 PM">08:00 PM - 09:00 PM (IST / International)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Specific Questions / Notes</label>
              <textarea
                rows={3}
                name="notes"
                placeholder="Mention any specific concerns regarding career, marriage timing, business, or health..."
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
              ></textarea>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-[#D4AF37] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <span>You will receive instant confirmation and Zoom link on WhatsApp and Email.</span>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10"
              >
                ← Back
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
              >
                Confirm Booking Now
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation Receipt */}
        {step === 3 && (
          <div className="text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Consultation Slot Held Successfully!
            </h3>

            <div className="bg-black/40 p-4 rounded-2xl border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Booking Reference:</span>
                <span className="font-mono font-bold text-[#D4AF37]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Client Name:</span>
                <span className="text-slate-200 font-semibold">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Consultation Category:</span>
                <span className="text-[#D4AF37] font-semibold">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mode:</span>
                <span className="text-slate-200">{formData.consultationMode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Scheduled Date & Time:</span>
                <span className="text-[#D4AF37] font-semibold">{formData.preferredDate || 'Tomorrow'} at {formData.preferredTimeSlot}</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs">
              Our team has sent a confirmation receipt to <strong className="text-[#D4AF37]">{formData.email}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/919876543210?text=Hello%20Hanish%20Bagga%20Team,%20I%20have%20booked%20consultation%20ref%20${bookingRef}%20for%20${encodeURIComponent(formData.serviceType)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 font-semibold text-xs border border-white/10 uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
