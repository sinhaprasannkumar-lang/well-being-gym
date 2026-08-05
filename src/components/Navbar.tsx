import { useState, useEffect, MouseEvent } from 'react';
import { Dumbbell, Phone, Menu, X, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export default function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const sections = ['home', 'about', 'services', 'membership', 'trainers', 'gallery', 'testimonials', 'bmi', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'BMI Tool', href: '#bmi' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3.5 shadow-2xl shadow-black'
          : 'bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent py-5 border-b border-[#D4AF37]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            id="nav-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-[#D4AF37]/40 flex items-center justify-center p-0.5 shadow-md shadow-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all">
              <Dumbbell className="w-5 h-5 text-[#D4AF37] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-[#D4AF37] uppercase font-brand leading-none">
                THE WELLNESS CLUB
              </span>
              <span className="text-[10px] text-[#D4AF37]/80 tracking-[0.25em] font-semibold uppercase mt-0.5">
                GYM XPRESS • NIT-1
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/60 px-4 py-1.5 rounded-full border border-[#D4AF37]/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-black bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'text-zinc-300 hover:text-[#D4AF37]'
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${GYM_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#D4AF37] hover:text-white transition-colors"
              id="nav-call-button"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{GYM_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={onOpenTrialModal}
              className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              id="nav-join-today-btn"
            >
              Join Today
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-black border border-[#D4AF37]/40 text-[#D4AF37] hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#0A0A0A] border-b border-[#D4AF37]/30 backdrop-blur-xl shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-xs uppercase tracking-widest font-bold text-zinc-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors flex items-center justify-between border-b border-zinc-900"
                id={`mobile-nav-${link.name.toLowerCase()}`}
              >
                <span>{link.name}</span>
                <span className="text-[#D4AF37]">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${GYM_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 rounded-lg bg-black border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                id="mobile-call-btn"
              >
                <Phone className="w-4 h-4" />
                Call: {GYM_INFO.phonePrimary}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="gold-btn w-full py-3 px-4 rounded-lg text-black font-extrabold text-center text-xs uppercase tracking-widest"
                id="mobile-trial-btn"
              >
                Book 1-Day Free VIP Pass
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
