import { X, CheckCircle2, UserCheck, Dumbbell, Activity, Flame, Music, Zap, Smile, Trophy } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookTrial: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onBookTrial }: ServiceDetailModalProps) {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#D4AF37]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#D4AF37]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#D4AF37]" />;
      case 'Smile': return <Smile className="w-6 h-6 text-[#D4AF37]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#D4AF37]" />;
      default: return <Dumbbell className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-black border border-[#D4AF37]/30 text-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors"
          aria-label="Close modal"
          id="service-modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-[#D4AF37]/20 pb-4">
          <div className="w-12 h-12 bg-black border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.25em]">
              Program Details
            </span>
            <h3 className="text-xl font-serif font-bold text-white uppercase">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Image Preview */}
        <div className="relative overflow-hidden h-56 border border-zinc-800">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter contrast-110 brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Overview</h4>
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
            {service.fullDescription}
          </p>
        </div>

        {/* Suitable For */}
        <div className="p-4 bg-black border border-zinc-800 space-y-1">
          <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">Recommended For:</span>
          <p className="text-xs text-zinc-300 font-light">{service.suitableFor}</p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Key Program Highlights</h4>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 bg-black border border-zinc-800 hover:border-[#D4AF37] text-zinc-300 font-bold text-xs uppercase tracking-widest"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookTrial(service.title);
            }}
            className="gold-btn w-full sm:w-auto px-6 py-3 text-black font-black text-xs uppercase tracking-widest"
            id="service-modal-book-btn"
          >
            Book Free VIP Pass →
          </button>
        </div>

      </div>
    </div>
  );
}
