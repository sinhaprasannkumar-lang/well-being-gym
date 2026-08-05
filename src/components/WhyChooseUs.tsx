import {
  Dumbbell,
  Award,
  Sparkles,
  Users,
  Tag,
  FileText,
  Utensils,
  Clock,
  ChevronRight
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';

interface WhyChooseUsProps {
  onOpenTrialModal: () => void;
}

export default function WhyChooseUs({ onOpenTrialModal }: WhyChooseUsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#D4AF37]" />;
      case 'Tag': return <Tag className="w-5 h-5 text-[#D4AF37]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            The Xpress Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Why Choose{' '}
            <span className="text-[#D4AF37] italic font-serif">
              The Wellness Club?
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Everything you need for an elite fitness transformation, engineered into NIT-1 Faridabad's top destination.
          </p>
        </div>

        {/* 8 Feature Icon Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-black border border-[#D4AF37]/40 flex items-center justify-center group-hover:scale-105 transition-all">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-sm font-serif font-bold text-white group-hover:text-[#D4AF37] uppercase tracking-wider transition-colors flex items-center gap-1.5">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white">
                <span>Included in Membership</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 bg-[#111111] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              Ready to feel the difference yourself?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Book a complimentary 1-Day VIP Trial workout pass in NIT-1 Faridabad.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="gold-btn px-8 py-3.5 text-xs font-black uppercase tracking-widest text-black shrink-0"
            id="why-choose-trial-btn"
          >
            Book Free VIP Pass →
          </button>
        </div>

      </div>
    </section>
  );
}
