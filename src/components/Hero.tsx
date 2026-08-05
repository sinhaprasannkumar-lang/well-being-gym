import { Star, ChevronDown, Award, Phone, ShieldCheck, Zap } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import heroGymImg from '../assets/images/hero_gym_interior_1785930892133.jpg';

interface HeroProps {
  onOpenTrialModal: () => void;
  onOpenMembershipModal: () => void;
}

export default function Hero({ onOpenTrialModal, onOpenMembershipModal }: HeroProps) {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background Hero Image with Prestige Gold Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGymImg}
          alt="The Wellness Club Gym Xpress Interior"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark luxury vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left pt-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Typography & Call-To-Actions */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start space-y-6">
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/90 border border-[#D4AF37]/30 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#D4AF37] tracking-widest uppercase">
                {GYM_INFO.googleRating} Google Rating ({GYM_INFO.googleReviewsCount}+ Reviews)
              </span>
            </div>

            {/* Main Prestige Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-[0.98] tracking-tight">
              Welcome To The <span className="text-[#D4AF37] italic font-serif">Club</span>..<br />
              Transform Your <span className="text-[#D4AF37] italic font-serif">Life Today</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
              Experience NIT-1 Faridabad's premier fitness destination. Exclusive hub for elite personal coaching, imported strength equipment, and high-intensity body transformations.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenTrialModal}
                className="gold-btn w-full sm:w-auto px-8 py-4 text-xs font-black uppercase tracking-widest text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                id="hero-book-trial-btn"
              >
                <Zap className="w-4 h-4 fill-black" />
                Book Free Trial Pass
              </button>

              <button
                onClick={onOpenMembershipModal}
                className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                id="hero-membership-btn"
              >
                Explore Memberships
              </button>

              <a
                href={`tel:${GYM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-4 border border-zinc-800 hover:border-[#D4AF37]/50 text-zinc-300 hover:text-[#D4AF37] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                id="hero-call-now-btn"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                {GYM_INFO.phonePrimary}
              </a>
            </div>

            {/* Key Stats Counter Grid */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/15 pt-6 w-full max-w-xl text-left">
              <div>
                <div className="text-[#D4AF37] text-2xl sm:text-3xl font-serif font-bold">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mt-1">Expert Trainers</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-2xl sm:text-3xl font-serif font-bold">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mt-1">Imported Machines</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-2xl sm:text-3xl font-serif font-bold">4.9★</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold mt-1">Google Rated</div>
              </div>
            </div>

          </div>

          {/* Right Floating Prestige Info Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative bg-[#111111] border border-[#D4AF37]/30 p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-4 pb-4 border-b border-zinc-800">
                <div className="w-14 h-14 bg-black border border-[#D4AF37]/50 p-0.5 shadow-lg shadow-[#D4AF37]/10 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=200"
                    alt="Owner Prashant"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">Owner & Head Coach</span>
                  <h3 className="text-base font-serif font-bold text-white uppercase">Prashant Sir</h3>
                  <p className="text-[11px] text-zinc-400 font-light">10+ Years Body Transformation</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs py-2 px-3 bg-black border border-zinc-800">
                  <span className="text-zinc-400 font-light">Location:</span>
                  <span className="font-bold text-white text-[11px]">Block K, NIT-1 Faridabad</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 px-3 bg-black border border-zinc-800">
                  <span className="text-zinc-400 font-light">Rating:</span>
                  <span className="font-bold text-[#D4AF37] text-[11px]">4.9 / 5.0 (117+ Reviews)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 px-3 bg-black border border-zinc-800">
                  <span className="text-zinc-400 font-light">Equipment:</span>
                  <span className="font-bold text-white text-[11px]">100% Imported Gym Setup</span>
                </div>
              </div>

              <button
                onClick={onOpenTrialModal}
                className="gold-btn w-full py-3.5 text-xs font-extrabold uppercase tracking-widest text-black shadow-lg"
                id="hero-floating-card-btn"
              >
                Claim Free Day Pass
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[#D4AF37] hover:text-white flex flex-col items-center gap-1 group transition-colors"
        aria-label="Scroll to About section"
        id="hero-scroll-down-btn"
      >
        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-[#D4AF37]">Discover More</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </button>
    </section>
  );
}
