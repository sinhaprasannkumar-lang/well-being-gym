import { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, Phone, User, Clock, Zap } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import confetti from 'canvas-confetti';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export default function FreeTrialModal({ isOpen, onClose, preselectedProgram }: FreeTrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: preselectedProgram || 'General Gym & Cardio Access',
    slot: 'Morning (6:00 AM - 9:00 AM)',
    date: new Date().toISOString().split('T')[0]
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border-2 border-amber-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-400 hover:text-white transition-colors"
          aria-label="Close modal"
          id="trial-modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
            <span>Complimentary VIP Pass</span>
          </div>
          <h3 className="text-2xl font-black text-white font-display uppercase">
            Claim Your 1-Day Free Trial
          </h3>
          <p className="text-xs text-zinc-400">
            Experience our imported machinery, friendly vibe, and consultation with coach Prashant in NIT-1 Faridabad.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest block">VIP Pass Confirmed</span>
              <h4 className="text-xl font-black text-white uppercase">Welcome, {formData.name}!</h4>
              <p className="text-xs text-zinc-300">
                Your 1-Day Free Pass for <strong className="text-amber-400">{formData.program}</strong> has been registered for <strong>{formData.date}</strong>.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-4 rounded-xl bg-black border border-amber-500/30 text-left space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Pass Code:</span>
                <span className="font-extrabold text-amber-400">#XPRESS-VIP-2026</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Location:</span>
                <span className="font-bold text-white">Block K, NIT-1 Faridabad</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400">Contact:</span>
                <span className="font-bold text-amber-400">{GYM_INFO.phonePrimary}</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 italic">
              Please present your phone number ({formData.phone}) at the reception counter upon arrival.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-black font-black text-xs uppercase tracking-wider shadow-lg"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Program Selection */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Program Of Interest
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                <option>General Gym & Cardio Access</option>
                <option>Personal Training Session</option>
                <option>Weight Training & Powerlifting</option>
                <option>Zumba Group Workout</option>
                <option>Yoga & Mindful Stretch</option>
                <option>Youth Conditioning</option>
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Time Slot
                </label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-400"
                >
                  <option>Morning (6 AM - 10 AM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (5 PM - 9 PM)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-2"
              id="trial-submit-btn"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              Confirm My Free Pass
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
