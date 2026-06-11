import { motion } from 'motion/react';

interface InnerPageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function InnerPageBanner({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
}: InnerPageBannerProps) {
  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center items-center border-b border-white/5 pt-32 sm:pt-40 pb-16 sm:pb-24" id="inner-page-banner">
      {/* Background Image Container with Ken Burns (slow zoom-in) & soft Fade effect */}
      <div className="absolute inset-0 select-none pointer-events-none overflow-hidden bg-luxury-black">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2.8,
            ease: [0.16, 1, 0.3, 1] // premium swift out slow in ease curve
          }}
          src={backgroundImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Soft, beautiful darkening overlays for legibility without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
      </div>

      {/* Elegant minimalist gold divider coordinates */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Title featuring Inter/Montserrat (Montserrat used as headings theme) */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif uppercase text-white tracking-widest font-extrabold"
        >
          {title}
        </motion.h1>

        {/* Minimal golden elegant visual divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "48px", opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="h-0.5 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mt-5"
        />
      </div>
    </div>
  );
}
