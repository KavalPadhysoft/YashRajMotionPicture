import React from "react";
import { motion } from "motion/react";
import { Calendar, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const marqueeItems = [
    "WEDDING FILMS",
    "PRE-WEDDING TEASERS",
    "HERITAGE PORTRAIT COLLAGES",
    "HIGH-FASHION EDITORIALS",
    "CINEMATIC LANDSCAPES",
    "MIDNIGHT GOLD MATTE TEXTURES",
  ];

  const backupVideoUrl =
    "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-tender-embrace-on-their-wedding-day-40034-large.mp4";

  return (
    <div
      className="relative h-screen min-h-[650px] w-full bg-[#020202] overflow-hidden flex flex-col justify-between"
      id="cinematic-hero"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale-[15%] filter contrast-125"
          referrerPolicy="no-referrer"
        >
          <source src="/videos/Video-1.mp4" type="video/mp4" />
          <source src={backupVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/35 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[#020202]/45 mix-blend-multiply z-10" />
      </div>

      {/* Retro Scanlines */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10 scanlines" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center text-center items-center">
        <div className="max-w-4xl space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-[#d4af64]/20 rounded-none backdrop-blur-sm"
          >
            <span className="text-[9px] sm:text-[11px] tracking-[5px] text-[#d4af64] uppercase font-sans font-medium">
              THE PREMIER GUJARATI CINEMATOGRAPHY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#f0ece4] leading-[1.1] tracking-wide"
          >
            CRAFTING <i>Your</i> <br />
            <span className="text-gold-gradient font-medium italic">FOREVER</span>{" "}
            LEGACY <br />
            IN CELLULOID
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Preserving the deep emotions and architectural grandeur of <i>your</i>{" "}
            sacred union. Our signature high-contrast midnight-gold suite turns moments
            into timeless pieces of art in Ahmedabad and destination venues worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-5 pt-4 justify-center items-center w-full max-w-md mx-auto"
          >
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto bg-[#d4af64] hover:bg-[#b3914e] text-black font-sans font-medium text-[10px] tracking-[4px] uppercase px-8 py-4.5 transition duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Shoot</span>
            </button>
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto border border-white/30 hover:border-[#d4af64] text-[#f0ece4] hover:text-[#d4af64] font-sans font-medium text-[10px] tracking-[4px] uppercase px-8 py-4.5 bg-black/40 backdrop-blur-sm transition duration-300 rounded-none cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>View Portfolio</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="bg-[#d4af64] py-4 border-y border-[#d4af64]/20 relative overflow-hidden z-20 flex">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-infinite-marquee {
                animation: marquee 28s linear infinite;
              }
            `,
          }}
        />
        <div className="flex animate-infinite-marquee whitespace-nowrap gap-12 select-none">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[10px] tracking-[4px] font-sans font-bold text-black uppercase">
                {item}
              </span>
              <Sparkles className="w-3 h-3 text-black shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
