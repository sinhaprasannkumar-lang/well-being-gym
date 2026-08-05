import { useState, FormEvent } from 'react';
import { Dumbbell, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'BMI Calculator', href: '#bmi' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/30 text-zinc-400 text-xs pt-16 pb-8 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] p-0.5 shadow-lg shadow-[#D4AF37]/10">
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-[#D4AF37] -rotate-45" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-serif font-bold text-white leading-tight tracking-wider">
                  THE WELLNESS CLUB <span className="text-[#D4AF37]">XPRESS</span>
                </span>
                <span className="text-[9px] text-[#D4AF37] tracking-[0.2em] uppercase">
                  NIT-1 Faridabad
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed font-light">
              Transform your body and lifestyle with state-of-the-art imported equipment, 4.9★ Google rated trainers, and personalized coaching led by Prashant in Block K, NIT-1 Faridabad.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[#D4AF37] font-bold text-xs tracking-widest uppercase">
              <span>⭐ 4.9 / 5.0 Google Rating</span>
              <span>•</span>
              <span>117+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-[#D4AF37] transition-colors font-light">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors font-light">Personal Coaching</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors font-light">Weight Training</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors font-light">Zumba Classes</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors font-light">Yoga Sessions</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors font-light">Youth Fitness</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">Stay Motivated</h4>
            <p className="text-xs text-zinc-400 font-light">
              Subscribe to get weekly workout tips, diet blueprints, and member offers.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-black border border-zinc-800 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase hover:bg-[#b89628] transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-zinc-500 space-y-1 font-light">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{GYM_INFO.location}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{GYM_INFO.phonePrimary} / {GYM_INFO.phoneSecondary}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{GYM_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} {GYM_INFO.name}. All rights reserved. Owner: {GYM_INFO.ownerName}.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-[#D4AF37]">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-[#D4AF37]">Terms of Service</a>
            <span>•</span>
            <a href="#home" className="hover:text-[#D4AF37]">NIT-1 Faridabad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
