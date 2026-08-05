export interface GymInfo {
  name: string;
  tagline: string;
  location: string;
  fullAddress: string;
  googleRating: number;
  googleReviewsCount: number;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  ownerName: string;
  whatsappNumber: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'group' | 'specialized';
  iconName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  suitableFor: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  quarterlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  bio: string;
  image: string;
  isOwner?: boolean;
  socials: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'interior' | 'equipment' | 'training' | 'classes' | 'members';
  src: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  memberSince: string;
  avatar?: string;
  verifiedReview: boolean;
}

export interface BmiResult {
  bmi: number;
  category: 'Underweight' | 'Normal Weight' | 'Overweight' | 'Obese';
  color: string;
  recommendation: string;
  calorieTarget: string;
}

export interface FreeTrialFormData {
  name: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  fitnessGoal: string;
}
