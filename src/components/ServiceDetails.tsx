import React from "react";
import { ArrowLeft, Video, Camera, Award, Package, Check, ChevronRight } from "lucide-react";
import { services } from "../data";
import { MotionWrapper } from "./MotionWrapper";

interface ServiceDetailsProps {
  onQuoteRequested: (serviceName: string) => void;
  activeServiceId: string | null;
  onSelectService: (serviceId: string | null) => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  onQuoteRequested,
  activeServiceId,
  onSelectService,
}) => {
  if (activeServiceId) {
    const service = services.find((s) => s.id === activeServiceId);
    if (!service) return null;

    return (
      <section
        className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20 relative overflow-hidden"
        id={`service-detail-${service.id}`}
      >
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[45%] bg-[#d4af64]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => onSelectService(null)}
            className="inline-flex items-center gap-2 text-[10px] tracking-[4px] text-luxury-gold hover:text-[#f0ece4] transition uppercase font-light mb-12 group cursor-pointer"
            id="back-to-services-hub"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition" />
            <span>Back to Services Catalog</span>
          </button>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            {/* Visual Media Block */}
            <MotionWrapper
              className="w-full lg:w-1/2 flex flex-col gap-6"
              direction="left"
              distance={30}
            >
              {service.videoUrl && (
                <div className="w-full aspect-video bg-[#020202] border border-[#5a5650]/30 relative overflow-hidden group rounded-none">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    referrerPolicy="no-referrer"
                    poster={service.bannerImage}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                    style={{ filter: "brightness(0.92) contrast(1.03)" }}
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute top-3 left-3 bg-[#0a0a0a] border border-[#d4af64]/30 text-luxury-gold text-[9px] font-sans uppercase tracking-[4px] px-2.5 py-1 z-10 flex items-center gap-1.5 rounded-none">
                    <Video className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold animate-pulse" />
                    <span>Featured Film</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3" id="service-photos-grid">
                {service.galleryImages.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-[#020202] border border-[#5a5650]/20 overflow-hidden group/img relative rounded-none"
                  >
                    <img
                      src={img}
                      alt={`${service.title} captured frame`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover scale-100 group-hover/img:scale-105 transition-transform duration-500 rounded-none"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-60 group-hover/img:opacity-10 transition-opacity" />
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* Structured Specifications Info */}
            <MotionWrapper
              className="w-full lg:w-1/2 flex flex-col justify-center gap-4 animate-fadeIn"
              direction="right"
              distance={30}
              stagger={true}
            >
              <div className="flex items-center gap-3.5 mb-2">
                <div className="p-2 bg-[#d4af64]/10 border border-[#d4af64]/20 rounded-none">
                  <Camera className="w-4 h-4 text-luxury-gold" />
                </div>
                <span className="text-[10px] tracking-[4px] font-sans text-luxury-gold uppercase font-medium">
                  {service.pricing}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#f0ece4] uppercase mt-2 tracking-wider">
                Explore <i>your</i> {service.title}
              </h1>
              <p className="text-sm font-serif italic text-[#f0ece4]/70 tracking-wide mb-4">
                "{service.subtitle}"
              </p>
              <div className="h-[1px] bg-[#5a5650]/20 my-2" />
              <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                {service.longDescription}
              </p>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-left"
                id="service-specifications"
              >
                <div>
                  <h4 className="flex items-center gap-2 text-[10px] tracking-[4px] font-medium text-[#f0ece4] uppercase mb-4">
                    <Award className="w-4 h-4 text-luxury-gold" />
                    <span>FEATURES INCLUDED</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#5a5650]/90">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-relaxed text-[#f0ece4]/80"
                      >
                        <span className="w-1.5 h-1.5 mt-1.5 bg-[#d4af64] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-[10px] tracking-[4px] font-medium text-[#f0ece4] uppercase mb-4">
                    <Package className="w-4 h-4 text-luxury-gold" />
                    <span>DELIVERABLES</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[#f0ece4]/85">
                    {service.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-relaxed"
                      >
                        <Check className="w-3.5 h-3.5 mt-0.5 text-luxury-gold shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row items-stretch gap-4 pt-4 border-t border-[#5a5650]/20"
                id="service-ctas"
              >
                <button
                  onClick={() => onQuoteRequested(service.title)}
                  className="px-6 py-4 bg-[#d4af64] hover:bg-[#b3914e] text-black font-semibold tracking-[4px] text-[10px] uppercase cursor-pointer rounded-none"
                  id={`detail-quote-btn-${service.id}`}
                >
                  Request Quote
                </button>
                <a
                  href="tel:+919876543210"
                  className="px-6 py-4 border border-[#5a5650]/30 hover:border-[#d4af64] text-[#f0ece4] hover:text-[#d4af64] font-semibold tracking-[4px] text-[10px] uppercase text-center flex items-center justify-center gap-2 bg-[#020202] hover:bg-white/5 transition rounded-none"
                >
                  <span>Call Lead Director</span>
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    );
  }

  // Fallback: full catalog hub grid
  return (
    <section className="py-24 bg-[#0a0a0a]" id="services-hub-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionWrapper direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-medium block">
              INDELIBLE CINEMATIC SPECTRUM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f0ece4] uppercase mt-2 tracking-wider">
              Selected <i>Couture</i> Services
            </h2>
            <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="services-master-grid">
          {services.map((service, index) => (
            <MotionWrapper
              key={service.id}
              direction="up"
              delay={index * 0.1}
              className="h-full"
            >
              <div className="p-6 h-full bg-[#020202] border border-[#5a5650]/20 hover:border-[#d4af64]/40 flex flex-col justify-between group transition-all duration-300 relative rounded-none text-left">
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[#d4af64] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="w-full h-44 bg-[#020202] relative overflow-hidden mb-6 rounded-none border border-[#5a5650]/20">
                    <img
                      src={service.bannerImage}
                      alt={service.title}
                      className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] group-hover:scale-102 transition-transform duration-500 rounded-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 bg-black/90 border border-[#d4af64]/20 px-2 py-0.5 text-[8px] font-mono tracking-wider text-luxury-gold rounded-none">
                      {service.pricing}
                    </div>
                  </div>

                  <h3 className="text-lg font-serif text-[#f0ece4] uppercase tracking-wide group-hover:text-luxury-gold transition duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[9px] tracking-[4px] text-luxury-gold/80 uppercase mt-1 mb-4 font-sans font-light">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-[#5a5650] group-hover:text-gray-400 font-light leading-relaxed mb-6 transition-colors duration-300">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#5a5650]/15 mt-auto">
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="inline-flex items-center gap-1.5 text-[9px] font-sans tracking-[3px] text-[#f0ece4] hover:text-luxury-gold transition font-medium uppercase cursor-pointer outline-none"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5 text-luxury-gold group-hover:translate-x-0.5 transition" />
                  </button>
                  <button
                    onClick={() => onQuoteRequested(service.title)}
                    className="text-[9px] text-[#d4af64] font-sans font-medium hover:text-[#f0ece4] border-b border-[#d4af64]/40 hover:border-[#f0ece4] transition pb-0.5 uppercase tracking-[3px] cursor-pointer outline-none"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
