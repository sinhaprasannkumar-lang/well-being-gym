import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.25em]">
            <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>{GYM_INFO.googleRating}★ Google Rating ({GYM_INFO.googleReviewsCount}+ Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Real Member{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Success Stories
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Read what our members say about our welcoming atmosphere, expert coaching, and modern fitness machinery in NIT-1 Faridabad.
          </p>
        </div>

        {/* Featured Review Carousel Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative bg-[#111111] border border-[#D4AF37]/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-[#D4AF37]/5 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#D4AF37] p-0.5 shadow-xl shrink-0">
                <img
                  src={TESTIMONIALS[currentIndex].avatar}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-full h-full object-cover filter brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Review Text */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-1 text-[#D4AF37]">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-white text-base sm:text-xl font-light leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].review}"
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-zinc-900">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white uppercase flex items-center gap-2 justify-center sm:justify-start">
                      <span>{TESTIMONIALS[currentIndex].name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] inline-block" />
                    </h4>
                    <span className="text-xs text-[#D4AF37] font-light">{TESTIMONIALS[currentIndex].memberSince}</span>
                  </div>

                  <span className="text-[9px] px-3 py-1 bg-black text-zinc-400 border border-zinc-800 uppercase font-bold tracking-widest">
                    Google Verified Review
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-zinc-900">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all ${
                      currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-zinc-800'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-black hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
                  aria-label="Previous Testimonial"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-black hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
                  aria-label="Next Testimonial"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Columns Grid for More Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#111111] border border-[#D4AF37]/20 space-y-4 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">5.0 Star</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed italic font-light">"{t.review}"</p>
              <div className="pt-2 border-t border-zinc-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-black border border-[#D4AF37]/30 text-[#D4AF37] font-bold flex items-center justify-center text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white uppercase">{t.name}</h5>
                  <span className="text-[10px] text-zinc-500">{t.memberSince}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
