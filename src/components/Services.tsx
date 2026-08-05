import { useState } from 'react';
import {
  UserCheck,
  Dumbbell,
  Activity,
  Flame,
  Music,
  Zap,
  Smile,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data/gymData';
import { ServiceItem } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

interface ServicesProps {
  onOpenTrialModal: (serviceTitle?: string) => void;
}

export default function Services({ onOpenTrialModal }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength & Power' },
    { id: 'cardio', label: 'Cardio & Fat Loss' },
    { id: 'group', label: 'Group Classes' },
    { id: 'specialized', label: 'Personal Coaching' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#D4AF37]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#D4AF37]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Dumbbell className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Our Training Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            World-Class Fitness{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Services & Programs
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            From heavy strength training and fat loss conditioning to soothing yoga and energetic group sessions, explore our full spectrum of elite offerings.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-black text-zinc-400 hover:text-white border border-[#D4AF37]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image & Icon Header */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-2 bg-black border border-[#D4AF37]/40 shadow-lg">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Bullet snippets */}
                  <div className="pt-2 space-y-1.5">
                    {service.features.slice(0, 2).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300 font-light">
                        <span className="text-[#D4AF37] font-bold">•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-zinc-900 mt-4">
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-4 py-2.5 bg-black border border-zinc-800 hover:border-[#D4AF37] text-[#D4AF37] font-bold text-[11px] uppercase tracking-widest transition-colors flex items-center gap-1.5"
                  id={`service-learn-more-${service.id}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenTrialModal(service.title)}
                  className="px-4 py-2.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-[11px] uppercase tracking-widest transition-colors"
                  id={`service-trial-${service.id}`}
                >
                  Book Trial
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookTrial={(title) => onOpenTrialModal(title)}
      />
    </section>
  );
}
