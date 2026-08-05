import { useState, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Send,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Weight Loss & Fat Reduction',
    preferredTime: 'Morning (6 AM - 10 AM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Visit Us Or{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Send An Inquiry
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Ready to start your body transformation? Reach out directly to owner Prashant or visit our facility in Block K, NIT-1 Faridabad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mt-16 items-start">
          
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Info Card */}
            <div className="p-8 bg-[#111111] border border-[#D4AF37]/30 space-y-6 shadow-2xl">
              
              <div className="flex items-center gap-4 pb-4 border-b border-zinc-900">
                <div className="w-12 h-12 bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-xl">
                  W
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white uppercase">
                    {GYM_INFO.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    NIT-1 Faridabad Branch
                  </p>
                </div>
              </div>

              {/* Owner */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-[#D4AF37] border border-zinc-800 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Gym Owner & Head Coach</span>
                  <p className="text-sm font-bold text-white">{GYM_INFO.ownerName}</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-[#D4AF37] border border-zinc-800 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Call / WhatsApp Hotlines</span>
                  <a href={`tel:${GYM_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-sm font-bold text-[#D4AF37] hover:underline block">
                    {GYM_INFO.phonePrimary} (Primary)
                  </a>
                  <a href={`tel:${GYM_INFO.phoneSecondary.replace(/\s+/g, '')}`} className="text-xs font-light text-zinc-300 hover:underline block">
                    {GYM_INFO.phoneSecondary} (Alternate)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-[#D4AF37] border border-zinc-800 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Official Email</span>
                  <a href={`mailto:${GYM_INFO.email}`} className="text-sm font-light text-zinc-200 hover:text-[#D4AF37] transition-colors">
                    {GYM_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black text-[#D4AF37] border border-zinc-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Location Address</span>
                  <p className="text-xs font-light text-zinc-300 leading-relaxed">
                    {GYM_INFO.fullAddress}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-900">
                <div className="p-3 bg-black text-[#D4AF37] border border-zinc-800 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Operational Timings</span>
                  <p className="text-xs font-bold text-white">{GYM_INFO.openingHours.weekdays}</p>
                  <p className="text-xs font-bold text-[#D4AF37]">{GYM_INFO.openingHours.sunday}</p>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <a
                href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Prashant!%20I'm%20interested%20in%20joining%20The%20Wellness%20Club%20Gym%20Xpress%20NIT-1%20Faridabad.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
                id="contact-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Chat Directly On WhatsApp
              </a>

            </div>

          </div>

          {/* Form & Map Embed Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Contact Form */}
            <div className="p-8 bg-[#111111] border border-[#D4AF37]/20 space-y-6 shadow-2xl">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-bold text-white uppercase">
                  Book A Free Consultation Or Trial
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Fill in your details below and coach Prashant will connect with you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-white uppercase">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto font-light">
                    Thank you, <strong className="text-[#D4AF37]">{formData.name}</strong>. Coach Prashant has received your inquiry and will reach out to <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-black text-[#D4AF37] font-bold text-xs uppercase border border-[#D4AF37]/30 hover:bg-zinc-900 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Primary Fitness Goal</label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option>Weight Loss & Fat Reduction</option>
                        <option>Muscle Building & Hypertrophy</option>
                        <option>Personal Fitness Coaching</option>
                        <option>Zumba & Dance Fitness</option>
                        <option>Yoga & Mindful Flexibility</option>
                        <option>Youth Athletic Conditioning</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Preferred Time Slot</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option>Morning (5:30 AM - 10:00 AM)</option>
                        <option>Afternoon (12:00 PM - 4:00 PM)</option>
                        <option>Evening (5:00 PM - 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Message or Specific Questions</label>
                    <textarea
                      rows={3}
                      placeholder="Ask any question about membership pricing, personal coaching, or trial timings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b89628] transition-all flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry To Coach Prashant
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Location Embed */}
            <div className="overflow-hidden border border-[#D4AF37]/30 h-64 shadow-2xl relative">
              <iframe
                title="The Wellness Club Gym Xpress Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.123456789!2d77.2950!3d28.3888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdce123456789%3A0x123456789abcdef!2sNew%20Industrial%20Twp%201%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 invert opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
