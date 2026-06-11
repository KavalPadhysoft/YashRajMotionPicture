import React, { useEffect, useState, TouchEvent, useRef, ReactNode } from 'react';
import { Play, Calendar, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_VIDEO_URL, BACKUP_HERO_IMAGE } from '../data';
import MagneticButton from './MagneticButton';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

interface HeroSlide {
  id: string;
  badge: string;
  title: ReactNode;
  description: string;
  videoUrl: string;
  btnText: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 's1',
    badge: "AHMEDABAD'S FINEST WEDDING FILMS",
    title: (
      <>
        THE ROYAL <span className="text-gold-gradient font-light select-none italic font-serif font-serif">GUJARATI</span> <br />
        VIVAH
      </>
    ),
    description: "Preserving the magnificent, grand heritage of royal weddings with heartfelt candids, poetic frame styling, and rich midnight golden tones.",
    videoUrl: "/videos/Video-1.mp4",
    btnText: "Book Wedding Shoot"
  },
  {
    id: 's2',
    badge: "PRE-WEDDING & COUPLE FILMS",
    title: (
      <>
        ETHEREAL <span className="text-gold-gradient font-light select-none italic font-serif">ADALAJ</span> <br />
        WHISPERS
      </>
    ),
    description: "Turning your unique couple romance into a spectacular music film set against majestic ancient symmetry and historical landscapes.",
    videoUrl: "/videos/Video-2.mp4",
    btnText: "Book Couple Session"
  },
  {
    id: 's3',
    badge: "HIGH-CONTRAST FASHION EDITORIALS",
    title: (
      <>
        HERITAGE <span className="text-gold-gradient font-light select-none italic font-serif">COUTURE</span> <br />
        SHOWCASE
      </>
    ),
    description: "Bespoke lookbook photography and high-fashion cinematics utilizing rich custom shadows and our signature luxury aesthetics.",
    videoUrl: "/videos/Video-3.mov",
    btnText: "Book Fashion Editorial"
  }
];

interface VideoSlideProps {
  key?: string | number;
  slide: HeroSlide;
  isActive: boolean;
}

function VideoSlide({ slide, isActive }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronous and immediate setup on mounting/active state changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force strict mute, loop and inline flags on the element
    video.muted = true;
    (video as any).defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('loop', '');

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn(`Continuous play start failed for ${slide.id}:`, err);
        });
      }
    };

    playVideo();

    // Constant playback guard to prevent stalling or manual browser policy interference
    const checkPlaying = setInterval(() => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    }, 1000);

    return () => clearInterval(checkPlaying);
  }, [slide.videoUrl, slide.id]);

  // Document gesture resolver is registered to bypass autoplay policies instantly on mouse/touch
  useEffect(() => {
    const handleInteraction = () => {
      const video = videoRef.current;
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('scroll', handleInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div 
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <video
        ref={(el) => {
          if (el) {
            el.muted = true;
            el.defaultMuted = true;
            el.playsInline = true;
            el.loop = true;
            // @ts-ignore
            videoRef.current = el;
          }
        }}
        src={slide.videoUrl}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  // Autoplay Slideshow loop (6 seconds)
  useEffect(() => {
    if (isAutoplayPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isAutoplayPaused]);

  // Mobile Swipe Gestures
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 60) {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (diff < -60) {
      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex items-center pt-24 sm:pt-32 bg-[#0d0d0d] select-none" 
      id="cinematic-hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      {/* 1. Main Background Videos (z-index: 1) */}
      <div className="absolute inset-0 w-full h-full" id="hero-edge-to-edge-bg" style={{ zIndex: 1 }}>
        {HERO_SLIDES.map((s, idx) => (
          <VideoSlide 
            key={s.id} 
            slide={s} 
            isActive={idx === currentSlide} 
          />
        ))}
      </div>

      {/* 2. Dark Gradient Overlay Layer / Contrast Shield (z-index: 2) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" id="hero-contrast-shield" style={{ zIndex: 2 }}>
        {/* Soft, rich dark overlays/gradients to replicate premium dark cinematic aesthetic and protect text readability */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(to right, rgba(13, 13, 13, 0.9) 0%, rgba(13, 13, 13, 0.65) 45%, rgba(13, 13, 13, 0.2) 75%, rgba(13, 13, 13, 0.05) 100%)' 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/35 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,transparent_0%,rgba(13,13,13,0.7)_100%)] opacity-60 pointer-events-none"></div>
      </div>

      {/* 3. Foreground Content Layer (z-index: 3) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ zIndex: 3 }} id="hero-slider-content-panel">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Creative Presentation Details */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {/* Animated Slogan Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold/15 border border-luxury-gold/30 rounded-full mb-8 text-[10px] sm:text-[11px] tracking-[0.25em] font-sans font-semibold text-luxury-gold uppercase select-none">
                  <Award className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
                  <span>{slide.badge}</span>
                </div>

                {/* Grand Title with serif pair */}
                <h1
                  className="text-4xl sm:text-5xl md:text-6.5xl lg:text-7xl font-serif text-white uppercase tracking-wide leading-[1.12] mb-8 font-semibold"
                  id="hero-main-title"
                >
                  {slide.title}
                </h1>

                {/* Dynamic elegant bio summary text */}
                <p
                  className="text-gray-300 font-sans tracking-wide leading-[1.65] mb-0 font-normal text-sm sm:text-base max-w-[520px]"
                  id="hero-lead-text"
                >
                  {slide.description}
                </p>

                {/* Action CTAs in absolute clear contrast with increased 2.5rem padding margin-top */}
                <div
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full max-w-sm sm:max-w-none mt-10"
                  id="hero-action-buttons"
                >
                  <MagneticButton strength={12}>
                    <button
                      onClick={onBookClick}
                      className="px-8 py-4 bg-gold-gradient text-luxury-black font-sans font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-full w-full sm:w-auto shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-[1.03] active:scale-[0.98] select-none flex items-center justify-center gap-2.5 cursor-pointer border-none"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{slide.btnText}</span>
                    </button>
                  </MagneticButton>

                  <MagneticButton strength={8}>
                    <button
                      onClick={onExploreClick}
                      className="px-8 py-4 bg-transparent border border-white/20 hover:border-luxury-gold hover:text-luxury-gold text-white font-sans font-semibold text-xs tracking-[0.2em] uppercase transition duration-300 rounded-full w-full sm:w-auto hover:bg-white/5 select-none flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-luxury-gold animate-pulse" />
                      <span>Explore Reel</span>
                    </button>
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Kept empty to let the edge-to-edge media breathe beautifully */}
          <div className="hidden lg:block lg:col-span-4 h-1"></div>

        </div>
      </div>

      {/* Selected slide controls removed per user request */}
    </section>
  );
}
