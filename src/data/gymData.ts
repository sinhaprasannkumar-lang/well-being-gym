import {
  GymInfo,
  ServiceItem,
  MembershipPlan,
  Trainer,
  GalleryImage,
  Testimonial
} from '../types';

import heroGymImg from '../assets/images/hero_gym_interior_1785930892133.jpg';
import trainerCoachingImg from '../assets/images/trainer_coaching_1785930908173.jpg';
import equipmentZoneImg from '../assets/images/gym_equipment_zone_1785930921598.jpg';
import awardImg from '../assets/images/award_mouni_roy_1785932919126.jpg';
import gymFloorMachinesImg from '../assets/images/gym_floor_machines_1785933150753.jpg';

export const GYM_INFO: GymInfo = {
  name: "The Wellness Club Gym Xpress",
  tagline: "Transform Your Body. Transform Your Lifestyle.",
  location: "Block K, New Industrial Township (NIT-1), Faridabad",
  fullAddress: "Block K, New Industrial Township (NIT-1), Faridabad, Haryana 121001",
  googleRating: 4.9,
  googleReviewsCount: 117,
  phonePrimary: "+91 7291994495",
  phoneSecondary: "+91 87008 23638",
  email: "prashant@wellnessclub.com",
  ownerName: "Prashant",
  whatsappNumber: "917291994495",
  openingHours: {
    weekdays: "Monday – Saturday: 5:30 AM – 10:00 PM",
    sunday: "Sunday: 6:00 AM – 12:00 PM (Special Morning Sessions)"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "personal-training",
    title: "Personal Training",
    category: "specialized",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    shortDescription: "1-on-1 dedicated coaching tailored specifically to your body type, fitness goals, and biomechanics.",
    fullDescription: "Our certified master trainers, led by Head Coach Prashant, craft bespoke workout blueprints, posture corrections, and active recovery routines. Get continuous accountability, performance tracking, and customized goal assessments.",
    features: [
      "Customized Workout Plans",
      "Body Composition Analysis",
      "Nutritional Blueprint & Diet Support",
      "1-on-1 Form & Posture Guidance"
    ],
    suitableFor: "Beginners needing guidance, athletes targeting weight loss, muscle gain, or injury recovery."
  },
  {
    id: "weight-training",
    title: "Weight Training & Bodybuilding",
    category: "strength",
    iconName: "Dumbbell",
    image: equipmentZoneImg,
    shortDescription: "Heavy-duty imported biomechanically engineered plate-loaded and pin-selected strength equipment.",
    fullDescription: "Train on state-of-the-art power racks, Olympic squat cages, cable crossover towers, leverage presses, and custom dumbbell sets up to 50kg. Engineered to isolate muscle groups safely and build maximum strength.",
    features: [
      "Imported High-Precision Machines",
      "Olympic Lifting Platforms & Squat Racks",
      "Dumbbells Range from 2.5kg to 50kg",
      "Hypertrophy & Powerlifting Support"
    ],
    suitableFor: "Anyone aiming to sculpt muscle mass, boost bone density, or increase athletic power."
  },
  {
    id: "cardio-training",
    title: "Cardio & Fat Burn Zone",
    category: "cardio",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800",
    shortDescription: "High-tech commercial treadmills, elliptical cross trainers, spin bikes, and stairmasters.",
    fullDescription: "Ignite your metabolism in our climate-controlled cardio zone equipped with touch consoles, heart rate sensors, and motivational workout playlists designed to maximize caloric expenditure.",
    features: [
      "Commercial Touchscreen Treadmills",
      "Elliptical Trainers & Air Bikes",
      "Heart Rate Monitoring Tech",
      "HIIT Interval Conditioning"
    ],
    suitableFor: "Stamina building, cardiovascular health improvement, and rapid fat loss."
  },
  {
    id: "yoga-classes",
    title: "Yoga & Mindfulness",
    category: "group",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Rejuvenating Hatha, Vinyasa, and Power Yoga sessions for mental clarity, balance, and flexibility.",
    fullDescription: "Experience serene group yoga sessions conducted in an airy studio. Enhance core stability, improve joint mobility, relieve stress, and harmonize mind and body connection.",
    features: [
      "Certified Ashtanga/Vinyasa Instructors",
      "Pranayama & Meditation Practices",
      "Flexibility & Joint Mobility Focus",
      "Calm & Atmospheric Studio Space"
    ],
    suitableFor: "All fitness levels seeking stress relief, flexibility, core strength, and inner balance."
  },
  {
    id: "zumba",
    title: "Zumba & Dance Fitness",
    category: "group",
    iconName: "Music",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    shortDescription: "High-energy Latin and Bollywood rhythm dance workouts that make calorie burning feel like a party.",
    fullDescription: "Join our vibrant Zumba community led by licensed instructors. Blast up to 600+ calories per hour while grooving to invigorating soundtracks and dynamic rhythm sequences.",
    features: [
      "Energetic Licensed Zumba Coaches",
      "Upbeat Lighting & Sound System",
      "Full-Body Cardio Workout",
      "Fun & Social Group Dynamics"
    ],
    suitableFor: "Anyone looking for a fun, uplifting, high-calorie-burning group fitness experience."
  },
  {
    id: "functional-training",
    title: "Functional & Cross Conditioning",
    category: "strength",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Kettlebell flows, battle ropes, plyometric boxes, and tire flips for real-world functional agility.",
    fullDescription: "Develop athletic speed, endurance, balance, and explosive power using multi-directional movements that mimic everyday real-world physical challenges.",
    features: [
      "Battle Ropes & Slam Balls",
      "Plyometric Jump Platforms",
      "Agility Ladders & Sled Pushes",
      "Core & Metabolic Conditioning"
    ],
    suitableFor: "Athletes, sports enthusiasts, and individuals aiming for functional strength and agility."
  },
  {
    id: "youth-fitness",
    title: "Youth Fitness Programs",
    category: "specialized",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Age-appropriate foundation movement drills for teenagers and young adults to build healthy habits.",
    fullDescription: "Safe, supervised, and fun athletic training programs focused on posture, motor skills, core strength, confidence building, and obesity prevention in growing teenagers.",
    features: [
      "Supervised Low-Impact Training",
      "Posture Correction & Mobility",
      "Confidence & Habit Building",
      "Injury Prevention Focus"
    ],
    suitableFor: "Students and youths aged 12–18 seeking healthy active lifestyle routines."
  },
  {
    id: "youth-sports",
    title: "Youth Sports Conditioning",
    category: "specialized",
    iconName: "Trophy",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
    shortDescription: "Targeted conditioning for budding athletes in cricket, football, badminton, and martial arts.",
    fullDescription: "Specialized speed, agility, quickness (SAQ) and endurance drills designed to enhance competitive athletic performance for young sports prospects in NIT Faridabad.",
    features: [
      "Speed, Agility & Quickness (SAQ)",
      "Sport-Specific Muscle Endurance",
      "Reaction Time & Reflex Drills",
      "Periodized Training Cycles"
    ],
    suitableFor: "Young athletes training for school, district, and state-level sports competitions."
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Access",
    tagline: "Essential starter access for self-driven fitness enthusiasts.",
    monthlyPrice: 1499,
    quarterlyPrice: 3999,
    annualPrice: 11999,
    features: [
      "Full Gym Floor Access",
      "Cardio & Weight Training Zones",
      "Locker Room & Shower Access",
      "General Trainer Orientation",
      "Free High-Speed Wi-Fi"
    ],
    notIncluded: [
      "Group Classes (Zumba/Yoga)",
      "Dedicated 1-on-1 Personal Trainer",
      "Custom Diet Plan Blueprint"
    ]
  },
  {
    id: "premium",
    name: "Premium Pro",
    tagline: "Comprehensive membership for guided fitness and group energy.",
    monthlyPrice: 2499,
    quarterlyPrice: 6499,
    annualPrice: 18999,
    isPopular: false,
    features: [
      "Everything in Basic Access",
      "Unlimited Access to Yoga & Zumba",
      "Weekly Trainer Guidance & Form Checks",
      "Monthly BMI & Body Composition Tracking",
      "Nutritional Orientation Guide",
      "Guest Pass (1/month)"
    ],
    notIncluded: [
      "Dedicated 1-on-1 Personal Trainer"
    ]
  },
  {
    id: "elite",
    name: "Elite VIP",
    tagline: "The ultimate transformation experience with dedicated coach Prashant.",
    monthlyPrice: 3999,
    quarterlyPrice: 9999,
    annualPrice: 29999,
    isPopular: true,
    features: [
      "Everything in Premium Pro",
      "Dedicated Personal Trainer Sessions",
      "Customized Nutrition & Macro Diet Plan",
      "1-on-1 Posture & Movement Assessment",
      "Unlimited Group Classes & Functional Zone",
      "Priority Locker Allocation",
      "Free Guest Passes (3/month)",
      "Direct Coach WhatsApp Support"
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "prashant-founder",
    name: "Prashant",
    role: "Owner & Head Fitness Coach",
    specialization: "Body Transformation, Strength & Nutrition",
    experience: "10+ Years",
    certifications: [
      "Certified Master Personal Trainer",
      "Sports Nutrition Specialist",
      "Postural Assessment & Rehab"
    ],
    bio: "Passionate fitness visionary and founder of The Wellness Club Gym Xpress NIT Faridabad. Prashant has guided over 1000+ individuals to achieve lifelong physical transformations with science-backed workouts and holistic nutrition.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800",
    isOwner: true,
    socials: {
      whatsapp: "917291994495",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  },
  {
    id: "coach-vikram",
    name: "Vikram Sharma",
    role: "Senior Strength & Powerlifting Coach",
    specialization: "Hypertrophy, Powerlifting & Functional Strength",
    experience: "7+ Years",
    certifications: [
      "ACE Certified Personal Trainer",
      "Kettlebell & Functional Movement Spec"
    ],
    bio: "Specializes in heavy strength gains, muscle hypertrophy, and posture alignment. Known for his disciplined coaching style and motivational energy on the gym floor.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      whatsapp: "917291994495"
    }
  },
  {
    id: "coach-neha",
    name: "Neha Kapoor",
    role: "Yoga & Zumba Lead Instructor",
    specialization: "Flexibility, Zumba Dance & Weight Loss",
    experience: "6+ Years",
    certifications: [
      "Licensed Zumba Instructor (ZIN)",
      "200-Hour RYT Yoga Teacher"
    ],
    bio: "Brings electric enthusiasm and rhythmic rhythm to every group class. Neha ensures workouts are engaging, joyful, and effective for high calorie burning.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    }
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-award",
    title: "Largest Indian Branded Gym Chain Awarded by Mouni Roy",
    category: "interior",
    src: awardImg,
    alt: "Owner Prashant receiving IBA trophy from Mouni Roy"
  },
  {
    id: "gal-1",
    title: "Luxury Dark Gym Interior",
    category: "interior",
    src: heroGymImg,
    alt: "The Wellness Club Gym Xpress NIT Faridabad interior with gold lighting"
  },
  {
    id: "gal-2",
    title: "Imported Strength Machines",
    category: "equipment",
    src: equipmentZoneImg,
    alt: "Modern gym equipment and pin loaded machines"
  },
  {
    id: "gal-3",
    title: "Wellness Gym Selectorized Strength Floor",
    category: "equipment",
    src: gymFloorMachinesImg,
    alt: "Silver and black WELLNESS GYM strength machines with modern overhead LED lighting"
  },
  {
    id: "gal-4",
    title: "Heavy Dumbbell & Free Weights Zone",
    category: "equipment",
    src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800",
    alt: "Dumbbell rack and free weight lifting area"
  },
  {
    id: "gal-5",
    title: "Cardio & Stamina Zone",
    category: "equipment",
    src: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&q=80&w=800",
    alt: "Treadmills and cardio machines"
  },
  {
    id: "gal-6",
    title: "Energizing Zumba Fitness Session",
    category: "classes",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    alt: "Members participating in Zumba class"
  },
  {
    id: "gal-7",
    title: "Mindful Yoga Studio",
    category: "classes",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    alt: "Yoga and stretch room in NIT Faridabad gym"
  },
  {
    id: "gal-8",
    title: "Members Working Out",
    category: "members",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    alt: "Athletes performing functional training"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Amit Sharma",
    rating: 5,
    review: "From the moment I stepped inside, the atmosphere was welcoming and motivating. The trainers, especially Prashant sir, pay close attention to form and safety. Best gym in NIT Faridabad by far!",
    memberSince: "Member for 1.5 Years",
    verifiedReview: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Ritu Verma",
    rating: 5,
    review: "Awesome gym with the latest imported equipment, the best trainers, and a great environment. The Zumba classes are so energetic and helped me shed 12 kgs in 4 months!",
    memberSince: "Member for 8 Months",
    verifiedReview: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Rahul Batra",
    rating: 5,
    review: "The staff is courteous and supportive, and the vibe is super energetic. Spotlessly clean lockers and top-notch machinery. Highly recommended for beginners and serious lifters alike.",
    memberSince: "Member for 2 Years",
    verifiedReview: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-4",
    name: "Pooja Malhotra",
    rating: 5,
    review: "I joined the Elite Personal Training program with Prashant sir. The diet plan was easy to follow without starving, and my energy levels have skyrocketed. 4.9 stars well deserved!",
    memberSince: "Member for 6 Months",
    verifiedReview: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Dumbbell",
    title: "Premium Imported Machines",
    description: "Biomechanical machinery engineered for smooth movement, joint protection, and maximum muscular activation."
  },
  {
    icon: "Award",
    title: "Certified Master Trainers",
    description: "Coaches with international certifications who guide your form, prevent injuries, and accelerate results."
  },
  {
    icon: "Sparkles",
    title: "Clean & Hygienic Facility",
    description: "Rigorous sanitization schedules, fresh air ventilation system, and immaculate locker facilities."
  },
  {
    icon: "Users",
    title: "Friendly Community",
    description: "A welcoming, zero-ego atmosphere where beginners and advanced athletes motivate each other."
  },
  {
    icon: "Tag",
    title: "Affordable Memberships",
    description: "Flexible membership packages with high value, transparent pricing, and zero hidden maintenance fees."
  },
  {
    icon: "FileText",
    title: "Personalized Workout Plans",
    description: "Custom routines structured specifically around your body metrics, goals, and daily schedule."
  },
  {
    icon: "Utensils",
    title: "Nutrition Guidance",
    description: "Practical macro blueprints and meal suggestions tailored to Indian dietary preferences."
  },
  {
    icon: "Clock",
    title: "Flexible Timings",
    description: "Open early morning till late night (5:30 AM to 10:00 PM) so you never miss a workout session."
  }
];

export const FAQS = [
  {
    q: "What are the gym operational timings?",
    a: "We are open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 6:00 AM to 12:00 PM for special morning sessions."
  },
  {
    q: "Is a free trial workout available before taking membership?",
    a: "Yes! We offer a Complimentary 1-Day Free Pass to experience our equipment, trial a workout, and consult with coach Prashant."
  },
  {
    q: "Where is the gym located in Faridabad?",
    a: "We are conveniently located in Block K, New Industrial Township (NIT-1), Faridabad, Haryana 121001, with easy parking access."
  },
  {
    q: "Do you provide customized diet plans?",
    a: "Yes, our Premium & Elite plans include customized Indian meal plans (vegetarian & non-vegetarian) crafted by Prashant sir."
  },
  {
    q: "Is the gym suitable for absolute beginners?",
    a: "100%! Over 40% of our members started as beginners. Our trainers assist every newcomer with machine orientation and proper movement form."
  }
];
