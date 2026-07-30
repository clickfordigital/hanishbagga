export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  popularKey: string;
  duration: string;
  price: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Mastery';
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  modulesCount: number;
  image: string;
  price: string;
  originalPrice: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceCategory: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface ZodiacSign {
  name: string;
  symbol: string;
  dateRange: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  luckyColor: string;
  luckyNumber: number;
  todaysPrediction: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  consultationMode: 'Video Call' | 'In-Person' | 'Telephonic' | 'Detailed Written Report';
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
