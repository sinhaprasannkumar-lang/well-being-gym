import { Award, MessageSquare, Instagram, Facebook, Sparkles } from 'lucide-react';
import { TRAINERS } from '../data/gymData';

interface TrainersProps {
  onBookTrainer: (trainerName: string) => void;
}

export default function Trainers({ onBookTrainer }: TrainersProps) {
  return (
    <section id="trainers" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Expert Coaching Team
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Meet Our Certified{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Fitness Coaches
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Guided by owner and head coach Prashant, our certified instructors bring years of practical experience, passion, and scientific protocol to every workout.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className={`group bg-[#111111] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                trainer.isOwner
                  ? 'border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                  : 'border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-xl'
              }`}
            >
              <div className="space-y-5">
                
                {/* Photo Frame */}
                <div className="relative overflow-hidden h-72 border border-zinc-800">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  
                  {/* Badge */}
                  {trainer.isOwner ? (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#D4AF37] text-black font-black text-[9px] uppercase tracking-widest flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3 fill-black" /> Gym Owner & Founder
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/90 border border-zinc-800 text-[#D4AF37] font-bold text-[9px] uppercase tracking-widest">
                      {trainer.experience}
                    </div>
                  )}

                  {/* Name on image overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif font-bold text-white uppercase">
                      {trainer.name}
                    </h3>
                    <p className="text-[#D4AF37] text-xs font-medium">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Specialization:</span>
                    <p className="text-xs text-zinc-200 font-medium">{trainer.specialization}</p>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed font-light line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Certifications List */}
                  <div className="pt-2 space-y-1">
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Certifications:
                    </span>
                    <ul className="space-y-1">
                      {trainer.certifications.map((cert, idx) => (
                        <li key={idx} className="text-[11px] text-zinc-300 font-light flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Socials & Booking Button */}
              <div className="pt-6 mt-6 border-t border-zinc-900 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-zinc-400 font-light uppercase tracking-widest">Connect:</span>
                  <div className="flex items-center gap-2">
                    {trainer.socials.whatsapp && (
                      <a
                        href={`https://wa.me/${trainer.socials.whatsapp}?text=Hi%20${encodeURIComponent(trainer.name)},%20I'd%20like%20to%20inquire%20about%20personal%20training%20at%20The%20Wellness%20Club%20Gym%20Xpress.`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-emerald-950 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black border border-zinc-800 text-zinc-400 hover:text-[#D4AF37] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-black border border-zinc-800 text-zinc-400 hover:text-[#D4AF37] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onBookTrainer(trainer.name)}
                  className="w-full py-3 bg-black hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] border border-[#D4AF37]/40 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                  id={`trainer-book-btn-${trainer.id}`}
                >
                  Book Coaching Session
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
