import { SERVICES } from '../data';
import { Check, Video, Camera, Award, HelpCircle, Package, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import RevealOnScroll from './RevealOnScroll';

interface ServicesListProps {
  onQuoteRequested: (serviceName: string) => void;
  activeServiceId?: string;
  onSelectService?: (id: string | null) => void;
}

export default function ServicesList({ onQuoteRequested, activeServiceId, onSelectService }: ServicesListProps) {
  
  // If activeServiceId is provided, render the specific Service Detail Page
  if (activeServiceId) {
    const service = SERVICES.find(s => s.id === activeServiceId);
    if (!service) return null;

    return (
      <section className="py-24 bg-luxury-charcoal relative overflow-hidden" id={`service-detail-${service.id}`}>
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[45%] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back button to Services Master list */}
          {onSelectService && (
            <button
              onClick={() => onSelectService(null)}
              className="inline-flex items-center gap-2 text-xs text-luxury-gold hover:text-white transition uppercase font-semibold mb-8 group cursor-pointer"
              id="back-to-services-hub"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
              <span>Back to Services Catalog</span>
            </button>
          )}

          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            
            {/* Visual Frame Column */}
            <RevealOnScroll className="w-full lg:w-1/2 flex flex-col gap-6" direction="left" distance={30}>
              
              {/* Autoplay Loop MP4 Reel Showcase */}
              {service.videoUrl && (
                <div className="w-full aspect-video bg-luxury-black border border-luxury-gold/25 shadow-2xl relative overflow-hidden group rounded-sm">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    referrerPolicy="no-referrer"
                    poster={service.bannerImage}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    style={{ filter: "brightness(0.92) contrast(1.03)" }}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute top-3 left-3 bg-luxury-black/95 border border-luxury-gold/30 text-luxury-gold text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 z-10 flex items-center gap-1.5 rounded-sm">
                    <Video className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold animate-pulse" />
                    <span>Featured Film</span>
                  </div>
                </div>
              )}

              {/* Multi-Photo Grid */}
              <div className="grid grid-cols-3 gap-3" id="service-photos-grid">
                {service.galleryImages.slice(0, 3).map((imgUrl, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-square bg-luxury-black border border-white/5 overflow-hidden group/img relative rounded-sm"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${service.title} captured frame`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover scale-100 group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-luxury-black/35 opacity-60 group-hover/img:opacity-10 transition-opacity"></div>
                  </div>
                ))}
              </div>

            </RevealOnScroll>

            {/* Spec / Description Information Column */}
            <RevealOnScroll className="w-full lg:w-1/2 flex flex-col justify-center gap-4" direction="right" distance={30} stagger={true}>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-md">
                  <Camera className="w-5 h-5 text-luxury-gold" />
                </div>
                <span className="text-[10px] tracking-widest font-mono text-luxury-gold font-bold uppercase">
                  {service.pricing}
                </span>
              </div>

              <h1 
                className="font-serif text-white uppercase tracking-wider mb-2"
                style={{ fontSize: '24px' }}
              >
                {service.title}
              </h1>
              <p className="text-sm font-serif italic text-luxury-gold-light tracking-wide mb-5">
                "{service.subtitle}"
              </p>

              <div className="h-[1px] bg-luxury-gold/15 my-2"></div>

              <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                {service.longDescription}
              </p>

              {/* Features and Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" id="service-specifications">
                
                {/* Features included */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold text-white tracking-wider uppercase mb-3.5">
                    <Award className="w-4 h-4 text-luxury-gold" />
                    <span>FEATURES INCLUDED</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-400">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-2 h-2 mt-1.5 rounded-full bg-luxury-gold/60 shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Physical deliverables list */}
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold text-white tracking-wider uppercase mb-3.5">
                    <Package className="w-4 h-4 text-luxury-gold" />
                    <span>DELIVERABLES</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-400">
                    {service.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="w-3.5 h-3.5 mt-1 text-luxury-gold shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Call CTAs with proper luxurious margins and spacing */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 pt-4 border-t border-white/5" id="service-ctas">
                <button
                  onClick={() => onQuoteRequested(service.title)}
                  className="px-6 py-4 bg-gold-gradient text-luxury-black font-semibold tracking-widest text-xs uppercase cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-300 rounded-none"
                  id={`detail-quote-btn-${service.id}`}
                >
                  Contact Us & Get Quote
                </button>
                <a
                  href="tel:+919876543210"
                  className="px-6 py-4 border border-white/20 hover:border-luxury-gold text-white font-semibold tracking-widest text-xs uppercase text-center flex items-center justify-center gap-2 bg-luxury-black/35 hover:bg-white/5 transition"
                >
                  <span>Call Lead Director</span>
                </a>
              </div>

            </RevealOnScroll>

          </div>

        </div>
      </section>
    );
  }

  // Master Services View: A gorgeous catalog layout
  return (
    <section className="py-24 bg-luxury-charcoal relative overflow-hidden" id="services-hub-panel">
      
      {/* Custom decorative glow assets */}
      <div className="absolute top-[10%] left-[-10%] w-[45%] h-[40%] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[40%] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-white uppercase mt-3 tracking-wider font-bold" style={{ fontSize: '24px' }}>
              Our Services
            </h2>
            <div className="w-16 h-[2px] bg-gold-gradient mx-auto mt-5"></div>
          </div>
        </RevealOnScroll>

        {/* Master Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-master-grid">
          {SERVICES.map((service, index) => (
            <RevealOnScroll 
              key={service.id} 
              direction="up" 
              delay={index * 0.15}
              className="h-full"
            >
              <div className="p-8 h-full bg-luxury-black/60 border border-white/10 hover:border-luxury-gold/35 rounded-sm flex flex-col justify-between group transition-all duration-500 relative overflow-hidden backdrop-blur-sm shadow-xl">
                
                {/* Thin top gold gradient strip on hover */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div>
                  
                  {/* Photo frame banner inside card */}
                  <div className="w-full h-48 bg-luxury-charcoal relative overflow-hidden mb-6 rounded-sm border border-white/5">
                    <img 
                      src={service.bannerImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-luxury-black/80 border border-luxury-gold/30 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-luxury-gold rounded-sm">
                      {service.pricing}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wider mb-2 group-hover:text-luxury-gold transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-mono tracking-widest text-luxury-gold-light uppercase mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Actions Row */}
                <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                  
                  {/* View Details clickable */}
                  {onSelectService ? (
                    <button
                      onClick={() => {
                        onSelectService(service.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-white hover:text-luxury-gold transition font-bold uppercase cursor-pointer"
                    >
                      <span>Explore Detail Page</span>
                      <ChevronRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition" />
                    </button>
                  ) : (
                    <span className="text-gray-500 text-[10px] font-mono">YASH RAJ EXCLUSIVE</span>
                  )}

                  <button
                    onClick={() => onQuoteRequested(service.title)}
                    className="text-[10px] sm:text-xs text-luxury-gold font-sans font-bold hover:text-white border-b border-luxury-gold hover:border-white transition pb-0.5 uppercase tracking-widest cursor-pointer"
                  >
                    Quick Quote
                  </button>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
