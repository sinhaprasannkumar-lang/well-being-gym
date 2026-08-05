import { MessageSquare, Phone } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Hotline Call Button */}
      <a
        href={`tel:${GYM_INFO.phonePrimary.replace(/\s+/g, '')}`}
        className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/90 border border-amber-500/40 text-amber-400 hover:text-black hover:bg-amber-400 font-bold text-xs shadow-2xl backdrop-blur-md transition-all duration-300"
        id="floating-call-btn"
      >
        <Phone className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Call Gym:</span>
        <span>{GYM_INFO.phonePrimary}</span>
      </a>

      {/* WhatsApp Button with pulse animation */}
      <a
        href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=Hi%20Prashant!%20I'm%20interested%20in%20joining%20The%20Wellness%20Club%20Gym%20Xpress.`}
        target="_blank"
        rel="noreferrer"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp with Prashant"
        id="floating-whatsapp-btn"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-black animate-ping" />
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-zinc-900 border border-emerald-500/40 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat with Prashant sir
        </span>
      </a>

    </div>
  );
}
