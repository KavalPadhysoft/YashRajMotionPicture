import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-[250px] sm:h-[350px] w-full bg-[#020202] overflow-hidden flex flex-col justify-end text-left"
      id={`page-banner-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={backgroundImage}
          alt={`${title} banner background`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.38) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/90 via-transparent to-[#020202]/90 z-10" />
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.06] scanlines" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-2xl"
        >
          {subtitle && (
            <div className="flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-luxury-gold" />
              <span className="text-[8px] sm:text-[9px] tracking-[4px] text-luxury-gold font-sans font-medium uppercase">
                {subtitle}
              </span>
            </div>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f0ece4] uppercase tracking-wider">
            {title}
          </h1>
          <div className="w-12 h-[1px] bg-luxury-gold mt-3" />
        </motion.div>
      </div>
    </div>
  );
};
