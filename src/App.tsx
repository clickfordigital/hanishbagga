import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceHighlights } from './components/ServiceHighlights';
import { KundliQuickCalculator } from './components/KundliQuickCalculator';
import { CoursesSection } from './components/CoursesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VastuSection } from './components/VastuSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>();

  const handleOpenBooking = (serviceCategory?: string) => {
    setSelectedServiceCategory(serviceCategory || 'Career & Business Astrology');
    setBookingModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-slate-950">
      
      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Redesigned Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onNavigateCourses={() => handleNavigateSection('courses')}
        onNavigateService={(id) => handleNavigateSection('services')}
      />

      {/* Quick Service Highlights */}
      <ServiceHighlights
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Birth Chart / Daily Horoscope Calculator */}
      <KundliQuickCalculator
        onOpenBooking={handleOpenBooking}
      />

      {/* Courses Section ("Explore Courses" Target) */}
      <CoursesSection
        onOpenBooking={handleOpenBooking}
      />

      {/* Astro-Vastu Feature Section */}
      <VastuSection
        onOpenBooking={handleOpenBooking}
      />

      {/* Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceCategory={selectedServiceCategory}
      />

      {/* Persistent Floating Contact & Booking Button */}
      <FloatingContact
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
