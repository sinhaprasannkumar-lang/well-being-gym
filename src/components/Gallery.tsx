import { useState } from 'react';
import { GALLERY_IMAGES } from '../data/gymData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Gym Interior' },
    { id: 'equipment', label: 'Modern Machinery' },
    { id: 'training', label: 'Personal Training' },
    { id: 'classes', label: 'Yoga & Zumba' },
    { id: 'members', label: 'Members' },
  ];

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Virtual Tour & Facility Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Gym{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Photo Gallery
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Take a visual tour inside Block K NIT-1 Faridabad's cleanest and most modern fitness facility.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-black text-zinc-400 hover:text-white border border-[#D4AF37]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden cursor-pointer h-64 bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-110 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">
                  NIT-1 Facility
                </span>
                <h4 className="text-sm font-serif font-bold text-white uppercase">
                  {image.title}
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                  <Maximize2 className="w-3 h-3" /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-black border border-[#D4AF37]/40 text-[#D4AF37] hover:text-white transition-colors"
            aria-label="Close Lightbox"
            id="lightbox-close-btn"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black border border-[#D4AF37]/40 text-[#D4AF37] hover:text-white transition-colors"
            aria-label="Previous Image"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black border border-[#D4AF37]/40 text-[#D4AF37] hover:text-white transition-colors"
            aria-label="Next Image"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain border border-[#D4AF37]/40 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-serif font-bold text-white uppercase">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#D4AF37] font-medium tracking-widest">
                Image {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
