import { ServiceItem, CourseItem, TestimonialItem, ZodiacSign } from '../types';

export const TRUST_STATS = [
  { value: 'Certified', label: 'Vedic Master', sub: 'Parashari & Nadi System' },
  { value: 'Global', label: 'Clientele Base', sub: 'Worldwide Online Guidance' },
  { value: 'Mastery', label: 'Astro-Vastu', sub: 'Non-Destructive Solutions' },
  { value: 'Confidential', label: '1-on-1 Sessions', sub: 'Direct Live Zoom Consults' },
];

export const SERVICE_HIGHLIGHTS: ServiceItem[] = [
  {
    id: 'career',
    title: 'Career & Business Astrology',
    iconName: 'Briefcase',
    shortDesc: 'Discover optimal career choices, promotion timings, job switches, and business expansion yogas.',
    fullDesc: 'Analyze your 10th & 11th houses, D10 Dashamsha chart, and planetary periods to maximize professional growth, overcome workplace hurdles, and pinpoint high-luck investment windows.',
    highlights: ['Job Switch & Promotion Timing', 'Business Partnership Compatibility', 'Financial Growth Yogas', 'Foreign Work Opportunity Analysis'],
    popularKey: 'Most Requested for Professionals',
    duration: '45 Mins',
    price: '₹3,500 ($50)'
  },
  {
    id: 'marriage',
    title: 'Love & Marriage Compatibility',
    iconName: 'Heart',
    shortDesc: 'Deep Kundli Milan, delayed marriage remedies, marital harmony, and partner analysis.',
    fullDesc: 'Comprehensive 36 Guna matching combined with 7th house and Venus/Jupiter strength checks. Identify Manglik Dosha, Nadi Dosha, and personalized Vedic remedies for a blissful union.',
    highlights: ['36 Guna Milan & Beyond', 'Delay in Marriage Remedies', 'Spouse Personality Insights', 'Marital Discord Resolution'],
    popularKey: 'High Precision Matching',
    duration: '45 Mins',
    price: '₹3,500 ($50)'
  },
  {
    id: 'health',
    title: 'Health & Medical Astrology',
    iconName: 'Activity',
    shortDesc: 'Identify underlying planetary afflictions impacting vitality, immunity, and mental balance.',
    fullDesc: 'Detailed inspection of the 6th, 8th, and 12th houses alongside Maraka planets to pinpoint potential health vulnerabilities and align with natural Vedic wellness practices.',
    highlights: ['Planetary Wellness Audit', 'Chakra & Gemstone Guidance', 'Mental Stress Mitigation', 'Astro-Remedial Fasting & Mantras'],
    popularKey: 'Preventive Guidance',
    duration: '30 Mins',
    price: '₹2,800 ($40)'
  },
  {
    id: 'business',
    title: 'Financial & Wealth Astrology',
    iconName: 'TrendingUp',
    shortDesc: 'Unlock Dhana Yogas, stock market luck, debt clearance strategies, and wealth preservation.',
    fullDesc: 'Evaluating your 2nd house of wealth and 11th house of gains. Get clarity on high-yield investment periods, debt recovery timing, and business brand name vibration alignment.',
    highlights: ['Dhana & Laxmi Yogas', 'Stock Market & Speculation Luck', 'Debt Relief Astrological Plan', 'Asset & Property Purchase Timing'],
    popularKey: 'High ROI Consultation',
    duration: '45 Mins',
    price: '₹4,000 ($55)'
  },
  {
    id: 'vastu',
    title: 'Vastu Shastra Consultation',
    iconName: 'Home',
    shortDesc: 'Transform home & commercial spaces without demolition using scientific Astro-Vastu.',
    fullDesc: 'Combine classical Vastu principles with your personal birth chart to eliminate energy blockages. Achieve directional harmony, prosperity, and peace in your living or working environment.',
    highlights: ['Zero-Demolition Remedies', 'Directional Energy Balancing', 'Office & Factory Layout Audit', 'Entrance & Master Bedroom Vastu'],
    popularKey: 'Home & Office Transformation',
    duration: '60 Mins',
    price: '₹5,500 ($75)'
  },
  {
    id: 'numerology',
    title: 'Numerology & Name Correction',
    iconName: 'Hash',
    shortDesc: 'Align your name vibration, mobile number, and brand name for effortless success.',
    fullDesc: 'Harmonize your Life Path Number and Expression Number with planetary lords. Correct spelling of your name or business brand to attract magnetic luck and positive cosmic vibrations.',
    highlights: ['Personal Name Correction', 'Business & Brand Name Audit', 'Lucky Mobile & Vehicle Number', 'Signature Vibration Analysis'],
    popularKey: 'Instant Life Shift',
    duration: '30 Mins',
    price: '₹2,500 ($35)'
  }
];

export const ASTRO_COURSES: CourseItem[] = [
  {
    id: 'astro-vastu-mastery',
    title: 'Astro-Vastu Masterclass (Complete System)',
    level: 'Mastery',
    studentsCount: 4250,
    rating: 4.9,
    reviewsCount: 380,
    duration: '12 Weeks (Live & Recorded)',
    modulesCount: 24,
    image: 'https://images.unsplash.com/photo-1532012164546-f43b74e66f93?auto=format&fit=crop&w=800&q=80',
    price: '₹14,999',
    originalPrice: '₹24,999',
    description: 'Master the revolutionary fusion of Vedic Astrology and Vastu Shastra to solve life challenges by adjusting space energies without tearing down walls.'
  },
  {
    id: 'predictive-nadi-astrology',
    title: 'Predictive Nadi & Planetary Transits',
    level: 'Intermediate',
    studentsCount: 3890,
    rating: 4.9,
    reviewsCount: 295,
    duration: '8 Weeks',
    modulesCount: 16,
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    price: '₹11,499',
    originalPrice: '₹18,000',
    description: 'Learn rapid prediction techniques using Nadi principles, Nakshatras, and planetary transits without complex calculations.'
  },
  {
    id: 'numerology-brand-power',
    title: 'Commercial Numerology & Name Correction',
    level: 'Beginner',
    studentsCount: 5120,
    rating: 4.8,
    reviewsCount: 410,
    duration: '4 Weeks',
    modulesCount: 10,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    price: '₹7,999',
    originalPrice: '₹12,500',
    description: 'Discover how numbers shape human destiny. Learn Chaldean numerology, mobile number analysis, and corporate name correction.'
  },
  {
    id: 'prashna-kundli-expert',
    title: 'Prashna Kundli (Horary Astrology Expert)',
    level: 'Mastery',
    studentsCount: 2400,
    rating: 4.9,
    reviewsCount: 185,
    duration: '6 Weeks',
    modulesCount: 12,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    price: '₹9,999',
    originalPrice: '₹15,000',
    description: 'Answer urgent questions instantly when birth time is unknown using the exact moment a client asks a query.'
  }
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    location: 'London, UK',
    serviceCategory: 'Career Astrology',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Hanish Bagga ji’s guidance saved my business during a critical transition. His prediction about my Dashamsha transit was 100% accurate, and the simple Vedic remedies gave immediate peace.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: '2',
    name: 'Priya Agarwal',
    location: 'New Delhi, India',
    serviceCategory: 'Love & Marriage',
    rating: 5,
    date: '1 month ago',
    comment: 'We were facing severe marriage delays and family disagreements. Hanish Sir performed a thorough Kundli analysis and suggested gemstone remedies. Within 4 months, everything fell into place smoothly!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Vikramaditya Rao',
    location: 'California, USA',
    serviceCategory: 'Astro-Vastu',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The zero-demolition Vastu modifications Hanish ji suggested for my medical clinic transformed the energy flow. Patient walk-ins increased significantly, and staff harmony restored!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    verified: true
  },
  {
    id: '4',
    name: 'Ananya & Sahil Verma',
    location: 'Dubai, UAE',
    serviceCategory: 'Business & Finance',
    rating: 5,
    date: '1 week ago',
    comment: 'His insight into planetary transits for company launch dates was spot on. We unlocked a major investment deal just as predicted by Hanish Bagga. Eternally grateful!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    verified: true
  }
];

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Aries (Mesha)',
    symbol: '♈',
    dateRange: 'Mar 21 - Apr 19',
    element: 'Fire',
    rulingPlanet: 'Mars (Mangal)',
    luckyColor: 'Ruby Red',
    luckyNumber: 9,
    todaysPrediction: 'Mars bestows high energy for career breakthroughs today. Focus on bold strategic decisions and avoid impulse spending.'
  },
  {
    name: 'Taurus (Vrishabha)',
    symbol: '♉',
    dateRange: 'Apr 20 - May 20',
    element: 'Earth',
    rulingPlanet: 'Venus (Shukra)',
    luckyColor: 'Emerald Green',
    luckyNumber: 6,
    todaysPrediction: 'Venus enhances harmony in personal relationships and artistic ventures. Financial gains through unexpected sources are likely.'
  },
  {
    name: 'Gemini (Mithuna)',
    symbol: '♊',
    dateRange: 'May 21 - Jun 20',
    element: 'Air',
    rulingPlanet: 'Mercury (Budh)',
    luckyColor: 'Golden Yellow',
    luckyNumber: 5,
    todaysPrediction: 'Mercury sharpens your intellect for key business negotiations and public speaking. Ideal time for contracts and networking.'
  },
  {
    name: 'Cancer (Karka)',
    symbol: '♋',
    dateRange: 'Jun 21 - Jul 22',
    element: 'Water',
    rulingPlanet: 'Moon (Chandra)',
    luckyColor: 'Pearl White',
    luckyNumber: 2,
    todaysPrediction: 'The Moon heightens your intuitive capabilities. Pay attention to dreams and spend quality time strengthening family bonds.'
  },
  {
    name: 'Leo (Simha)',
    symbol: '♌',
    dateRange: 'Jul 23 - Aug 22',
    element: 'Fire',
    rulingPlanet: 'Sun (Surya)',
    luckyColor: 'Bright Amber',
    luckyNumber: 1,
    todaysPrediction: 'Surya Dev shines directly on your house of leadership. Take charge of important projects and expect recognition from seniors.'
  },
  {
    name: 'Virgo (Kanya)',
    symbol: '♍',
    dateRange: 'Aug 23 - Sep 22',
    element: 'Earth',
    rulingPlanet: 'Mercury (Budh)',
    luckyColor: 'Forest Green',
    luckyNumber: 5,
    todaysPrediction: 'Analytical clarity is at its peak. Perfect day for organizing finances, health routines, and solving complex problems.'
  },
  {
    name: 'Libra (Tula)',
    symbol: '♎',
    dateRange: 'Sep 23 - Oct 22',
    element: 'Air',
    rulingPlanet: 'Venus (Shukra)',
    luckyColor: 'Royal Blue',
    luckyNumber: 7,
    todaysPrediction: 'Balance and aesthetic bliss prevail. Romantic proposals or joint venture agreements receive planetary favor.'
  },
  {
    name: 'Scorpio (Vrishchika)',
    symbol: '♏',
    dateRange: 'Oct 23 - Nov 21',
    element: 'Water',
    rulingPlanet: 'Mars (Mangal)',
    luckyColor: 'Deep Crimson',
    luckyNumber: 8,
    todaysPrediction: 'Deep research and spiritual practices yield powerful revelations. Trust your instincts on investments.'
  },
  {
    name: 'Sagittarius (Dhanu)',
    symbol: '♐',
    dateRange: 'Nov 22 - Dec 21',
    element: 'Fire',
    rulingPlanet: 'Jupiter (Guru)',
    luckyColor: 'Saffron Gold',
    luckyNumber: 3,
    todaysPrediction: 'Guru Jupiter radiates luck for higher education, travel, and spiritual guidance. A mentor brings valuable insights.'
  },
  {
    name: 'Capricorn (Makara)',
    symbol: '♑',
    dateRange: 'Dec 22 - Jan 19',
    element: 'Earth',
    rulingPlanet: 'Saturn (Shani)',
    luckyColor: 'Charcoal Black',
    luckyNumber: 4,
    todaysPrediction: 'Shani Dev rewards discipline and long-term perseverance. Consistent effort today lays the foundation for major gains.'
  },
  {
    name: 'Aquarius (Kumbha)',
    symbol: '♒',
    dateRange: 'Jan 20 - Feb 18',
    element: 'Air',
    rulingPlanet: 'Saturn (Shani)',
    luckyColor: 'Sky Blue',
    luckyNumber: 11,
    todaysPrediction: 'Innovative social ideas gain rapid momentum. Connect with like-minded communities for mutual expansion.'
  },
  {
    name: 'Pisces (Meena)',
    symbol: '♓',
    dateRange: 'Feb 19 - Mar 20',
    element: 'Water',
    rulingPlanet: 'Jupiter (Guru)',
    luckyColor: 'Sea Green',
    luckyNumber: 12,
    todaysPrediction: 'Creative imagination and spiritual tranquility bloom. A quiet meditation session clears past stress.'
  }
];

export const FAQS = [
  {
    q: 'Why should I choose Hanish Bagga for Vedic Astrology consultation?',
    a: 'Hanish Bagga brings extensive, rigorous Vedic astrology experience, combining ancient Parashari and Nadi systems with modern Astro-Vastu principles. Thousands of students and consultation clients worldwide trust his logical, non-superstitious approach and highly actionable, practical remedies.'
  },
  {
    q: 'How does an online video consultation work?',
    a: 'After booking your slot, you will receive a confirmation email and WhatsApp message with a secure Zoom/Google Meet link. At your appointed time, Hanish Bagga personally reviews your birth chart (Kundli) live, answers your specific questions, and provides custom remedies.'
  },
  {
    q: 'What if I do not know my exact birth time?',
    a: 'If your birth time is uncertain, Hanish Bagga utilizes advanced Birth Time Rectification (BTR) techniques or Prashna Kundli (Horary Astrology), where planetary positions at the exact moment of your question provide precise answers.'
  },
  {
    q: 'Are remedies expensive or hard to perform?',
    a: 'No! Hanish Bagga strictly advocates simple, practical, and effective remedies such as daily mantra recitation, directional energy adjustments (Astro-Vastu without demolition), charitable acts, and specific lifestyle modifications.'
  },
  {
    q: 'Can I get my business or home Vastu analyzed online?',
    a: 'Yes. Online Vastu consultation involves sharing your floor layout plan, property coordinates, and photos. Hanish Bagga overlays your personal birth chart onto the 16 Vastu zones to give non-destructive remedial directions.'
  }
];
