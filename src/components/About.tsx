import { useState, useEffect } from 'react';
import { Award, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import awardImg from '../assets/images/award_mouni_roy_1785932919126.jpg';

export default function About() {
  const [counts, setCounts] = useState({
    rating: 0,
    reviews: 0,
    trainers: 0,
    equipment: 0,
    members: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('about-counters');
      if (el && !hasAnimated) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          setHasAnimated(true);

          let start = 0;
          const duration = 1500;
          const intervalTime = 30;
          const steps = duration / intervalTime;

          const timer = setInterval(() => {
            start++;
            const progress = Math.min(start / steps, 1);

            setCounts({
              rating: Number((4.9 * progress).toFixed(1)),
              reviews: Math.floor(117 * progress),
              trainers: Math.floor(10 * progress),
              equipment: Math.floor(100 * progress),
              members: Math.floor(1500 * progress),
            });

            if (progress >= 1) {
              clearInterval(timer);
              setCounts({
                rating: 4.9,
                reviews: 117,
                trainers: 10,
                equipment: 100,
                members: 1500,
              });
            }
          }, intervalTime);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const highlights = [
    "Modern imported fitness machinery engineered for peak biomechanics",
    "Certified professional coaches led by Head Coach & Owner Prashant",
    "Welcoming, elite, and highly encouraging workout community",
    "Spotlessly clean & sanitized gym floor with optimal climate control",
    "Custom workout routines & nutrition plans tailored to Indian lifestyles",
    "Ideal training setup for absolute beginners & seasoned athletes"
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background ambient gold lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame & Prestige Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Luxury Gold Border */}
              <div className="relative bg-[#111111] border border-[#D4AF37]/40 p-2 shadow-2xl">
                <img
                  src={awardImg}
                  alt="Awarded The Largest Indian Branded Gym Chain by Mouni Roy"
                  className="w-full h-[460px] object-cover object-top filter contrast-105 brightness-95 hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Quote Text */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 backdrop-blur-md border border-[#D4AF37]/30">
                  <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> International Business Award 2022-23
                  </span>
                  <p className="text-white font-serif font-bold text-base uppercase">Largest Indian Branded Gym Chain</p>
                  <p className="text-zinc-300 text-xs italic font-light">"Awarded by Bollywood Actress Mouni Roy to Owner & Founder Prashant Sir."</p>
                </div>
              </div>

              {/* Floating Top Prestige Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-black border border-[#D4AF37]/40 p-4 shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#D4AF37] font-serif font-bold text-lg leading-none">4.9 / 5.0</p>
                  <p className="text-zinc-400 text-[9px] font-semibold uppercase tracking-widest">Top Rated Gym in NIT</p>
                </div>
              </div>

              {/* Floating Bottom Prestige Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-black border border-[#D4AF37]/40 p-4 shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-serif font-bold text-xs uppercase">NIT-1 Faridabad</p>
                  <p className="text-[#D4AF37] text-[10px] font-medium tracking-widest">Block K, Prime Location</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-3.5 py-1.5 border border-[#D4AF37]/30 inline-block">
                Welcome To The Wellness Club Gym Xpress
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Faridabad's Premier <br />
                <span className="text-[#D4AF37] italic font-serif">Fitness & Transformation Hub</span>
              </h2>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Located in <strong className="text-white font-normal">Block K, NIT-1 Faridabad</strong>,{' '}
              <strong className="text-[#D4AF37] font-normal">{GYM_INFO.name}</strong> is engineered to deliver an unmatched fitness experience. Whether your goal is body fat reduction, muscular hypertrophy, strength conditioning, or athletic longevity, our facility provides imported biomechanical machines, structured guidance, and expert coaching.
            </p>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#111111] border border-zinc-800 hover:border-[#D4AF37]/40 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300 font-light leading-snug">{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Animated Counters Section */}
        <div id="about-counters" className="mt-20 pt-12 border-t border-[#D4AF37]/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          
          <div className="p-6 bg-[#111111] border border-[#D4AF37]/20 shadow-xl group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] block">
              {counts.rating}★
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1 block">Google Rating</span>
            <span className="text-[10px] text-zinc-500">Verified Reviews</span>
          </div>

          <div className="p-6 bg-[#111111] border border-[#D4AF37]/20 shadow-xl group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] block">
              {counts.reviews}+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1 block">Happy Reviews</span>
            <span className="text-[10px] text-zinc-500">5-Star Testimonials</span>
          </div>

          <div className="p-6 bg-[#111111] border border-[#D4AF37]/20 shadow-xl group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] block">
              {counts.trainers}+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1 block">Certified Coaches</span>
            <span className="text-[10px] text-zinc-500">1-on-1 Mentorship</span>
          </div>

          <div className="p-6 bg-[#111111] border border-[#D4AF37]/20 shadow-xl group hover:border-[#D4AF37]/50 transition-all">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] block">
              {counts.equipment}+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1 block">Imported Equipment</span>
            <span className="text-[10px] text-zinc-500">Biomechanical Setup</span>
          </div>

          <div className="p-6 bg-[#111111] border border-[#D4AF37]/20 shadow-xl group hover:border-[#D4AF37]/50 transition-all col-span-2 sm:col-span-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37] block">
              {counts.members}+
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mt-1 block">Active Members</span>
            <span className="text-[10px] text-zinc-500">Transformed Lives</span>
          </div>

        </div>

      </div>
    </section>
  );
}
