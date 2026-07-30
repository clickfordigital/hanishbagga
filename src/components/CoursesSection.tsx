import React, { useState } from 'react';
import { BookOpen, Star, Users, Clock, Award, GraduationCap, CheckCircle2, ArrowRight, Sparkles, X } from 'lucide-react';
import { ASTRO_COURSES } from '../data/astrologyData';
import { CourseItem } from '../types';

interface CoursesSectionProps {
  onOpenBooking: (category?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenBooking }) => {
  const [filterLevel, setFilterLevel] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [enrolledCourseTitle, setEnrolledCourseTitle] = useState<string | null>(null);

  const filteredCourses = filterLevel === 'All'
    ? ASTRO_COURSES
    : ASTRO_COURSES.filter(c => c.level === filterLevel);

  return (
    <section id="courses" className="py-16 lg:py-24 bg-[#05070A] text-slate-100 relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
            <span>Certified Astrology & Vastu Courses</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
            Learn Authentic Vedic Astrology & Vastu
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Structured online courses designed personally by Hanish Bagga with step-by-step video lessons, live Q&A sessions, and certification.
          </p>

          {/* Level Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['All', 'Beginner', 'Intermediate', 'Mastery'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                  filterLevel === lvl
                    ? 'bg-[#D4AF37] text-slate-950 font-bold border-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                }`}
              >
                {lvl} {lvl !== 'All' ? 'Courses' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid - Bento Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/30 to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 bg-black/80 text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D4AF37]/30 uppercase tracking-wider">
                    {course.level}
                  </span>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/80 text-[#D4AF37] text-xs px-2.5 py-1 rounded-full border border-white/10 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    <span>{course.rating} ({course.reviewsCount})</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-base text-slate-100 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{course.studentsCount.toLocaleString()} Students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 mt-2">
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <span className="text-xs text-slate-500 line-through mr-1">{course.originalPrice}</span>
                    <span className="font-bold text-[#D4AF37] text-base">{course.price}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Detail / Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0B1026] border border-[#D4AF37]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative text-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => { setSelectedCourse(null); setEnrolledCourseTitle(null); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 font-bold uppercase tracking-wider">
              {selectedCourse.level} Certification Course
            </span>

            <h3 className="font-serif text-2xl font-bold text-slate-100 mt-2">
              {selectedCourse.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {selectedCourse.description}
            </p>

            <div className="grid grid-cols-3 gap-3 my-4 p-3 bg-black/40 rounded-2xl border border-white/10 text-center text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Duration</span>
                <span className="font-bold text-[#D4AF37]">{selectedCourse.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Modules</span>
                <span className="font-bold text-[#D4AF37]">{selectedCourse.modulesCount} Chapters</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Access</span>
                <span className="font-bold text-emerald-400">Lifetime + Live Q&A</span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="font-serif font-bold text-[#D4AF37] text-xs uppercase tracking-wider">Course Curriculum Highlights:</h4>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Module 1: Foundational Principles & Astronomical Chart Mechanics</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Module 2: Planet-House Combinations & Precise Event Timing</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Module 3: Parashari, Nadi, & Non-Destructive Vastu Remedies</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Module 4: Live Case Studies & Hanish Bagga’s Personal Notes</div>
              </div>
            </div>

            {enrolledCourseTitle ? (
              <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl text-center text-xs text-emerald-300">
                ✅ Instant Enrollment Request Received! Check your email for LMS portal access instructions.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-xs text-slate-500 line-through mr-2">{selectedCourse.originalPrice}</span>
                  <span className="font-bold text-[#D4AF37] text-xl">{selectedCourse.price}</span>
                </div>

                <button
                  onClick={() => setEnrolledCourseTitle(selectedCourse.title)}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  Enroll In Course Now
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
