import { useState, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem, MediaCategory } from '../types';
import { Grid, Eye, Calendar, MapPin, X, ChevronLeft, ChevronRight, Play, Pause, Download, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function PortfolioMasonry() {
  const [activeFilter, setActiveFilter] = useState<MediaCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // -1 for previous, 1 for next
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Filter products
  const filteredItems = PORTFOLIO_ITEMS.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setDirection(1);
    setIsZoomed(false);
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setDirection(-1);
    setIsZoomed(false);
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Slideshow Autoplay (every 5 seconds)
  useEffect(() => {
    if (!isPlaying || lightboxIndex === null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, lightboxIndex, filteredItems]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsPlaying(false);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Mobile Swipe Gestures
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX); // reset
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        // Swiped Left -> show next
        handleNext();
      } else {
        // Swiped Right -> show previous
        handlePrev();
      }
    }
  };

  // Group portfolio items in responsive columns for genuine Masonry layout
  // 3 columns on desktop, 2 on tablet, 1 on mobile
  const getMasonryColumns = () => {
    const cols: PortfolioItem[][] = [[], [], []];
    filteredItems.forEach((item, index) => {
      cols[index % 3].push(item);
    });
    return cols;
  };

  const columns = getMasonryColumns();
  const currentMedia = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 320 : dir < 0 ? -320 : 0,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 320 : dir > 0 ? -320 : 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `cinematique-shot-${lightboxIndex}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryCount = (categoryId: MediaCategory | 'all'): number => {
    if (categoryId === 'all') {
      return PORTFOLIO_ITEMS.length;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === categoryId).length;
  };

  const filterTabs: { id: MediaCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'pre-wedding', label: 'Pre-Wedding' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'corporate', label: 'Corporate' }
  ];

  return (
    <section className="py-24 bg-luxury-black relative" id="gallery-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-3 tracking-wider">
            OUR PORTFOLIO
          </h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto mt-5"></div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-16 px-4" id="portfolio-filters">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            const count = getCategoryCount(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setLightboxIndex(null);
                }}
                className="relative text-[10px] sm:text-xs font-sans tracking-[0.15em] uppercase px-4 sm:px-5 py-3 cursor-pointer transition-colors duration-300 rounded-none border border-white/5 text-gray-300 hover:text-white bg-luxury-charcoal/20 select-none overflow-hidden"
              >
                {/* Active Underline or Border Slide using layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-luxury-gold/15 to-luxury-gold/5 border-b-2 border-luxury-gold z-[0]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className={`${isActive ? 'text-luxury-gold font-bold font-sans' : ''}`}>
                    {tab.label}
                  </span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-sm border transition-colors duration-300 ${
                    isActive 
                      ? 'bg-luxury-gold/20 border-luxury-gold/30 text-luxury-gold font-bold' 
                      : 'bg-white/5 border-white/10 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-masonry-grid">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {col.map((item) => {
                  // Find global index in filtered list for lightbox reference
                  const globalIndex = filteredItems.findIndex(fi => fi.id === item.id);
                  
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ 
                        opacity: { duration: 0.3 },
                        layout: { duration: 0.4, type: "spring", stiffness: 220, damping: 26 },
                        scale: { duration: 0.25 }
                      }}
                      className="relative group overflow-hidden cursor-pointer bg-luxury-charcoal border border-white/5"
                      onClick={() => setLightboxIndex(globalIndex)}
                    >
                      {/* Thumbnail Image */}
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full object-cover h-auto max-h-[480px] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Darkness gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>

                      {/* Media Type Icon indicator */}
                      <div className="absolute top-4 right-4 p-2.5 rounded-sm bg-luxury-black/75 border border-luxury-gold/20 text-luxury-gold z-20">
                        {item.type === 'video' ? <Play className="w-4 h-4 fill-luxury-gold" /> : <Eye className="w-4 h-4" />}
                      </div>

                      {/* Slide reveal details panel */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col gap-1.5">
                        <span className="text-[10px] font-mono font-medium text-luxury-gold tracking-widest uppercase">
                          {item.category} • {item.location || 'Ahmedabad'}
                        </span>
                        <h3 className="text-base sm:text-lg font-serif text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-light line-clamp-2">
                          {item.description}
                        </p>
                        <span className="text-[10px] text-luxury-gold font-sans font-semibold mt-1 flex items-center gap-1">
                          VIEW CINEMATIC SOURCE +
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Empty State if filter matches nothing */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-luxury-charcoal/30 border border-white/5">
            <p className="text-sm text-gray-400">No projects available under this collection currently.</p>
          </div>
        )}
      </div>

      {/* LUXURY SLIDING LIGHTBOX WIDGET WITH INTERACTIVE SWIPE AND PREMIUM NAVIGATION CONTROLS */}
      <AnimatePresence>
        {lightboxIndex !== null && currentMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/98 flex flex-col justify-between backdrop-blur-xl select-none"
            id="lightbox-view"
          >
            {/* Slide Progress bar (Autoplay countdown) */}
            {isPlaying && (
              <>
                <style>{`
                  @keyframes lightboxProgress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                  }
                  .lightbox-progress-bar {
                    animation: lightboxProgress 5000ms linear forwards;
                  }
                `}</style>
                <div 
                  key={lightboxIndex}
                  className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold z-[100] lightbox-progress-bar"
                />
              </>
            )}

            {/* Top Toolbar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-luxury-charcoal/45 backdrop-blur-md relative z-50">
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.25em] font-mono text-luxury-gold uppercase">
                  PROJECT {lightboxIndex + 1} OF {filteredItems.length}
                </span>
                <span className="text-xs text-gray-300 uppercase tracking-widest font-semibold font-sans mt-0.5 truncate max-w-[150px] sm:max-w-xs">
                  {currentMedia.title}
                </span>
              </div>

              {/* Autoplay & Zoom & High-Res Controls */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                {/* Slideshow button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-xs font-sans tracking-widest uppercase transition-all duration-300 border rounded-sm cursor-pointer ${
                    isPlaying 
                      ? 'bg-luxury-gold/20 border-luxury-gold text-luxury-gold font-bold shadow-[0_0_15px_rgba(197,168,128,0.25)]' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
                >
                  {isPlaying ? <Pause className="w-3 h-3 text-luxury-gold animate-pulse" /> : <Play className="w-3 h-3" />}
                  <span className="hidden xs:inline">{isPlaying ? 'Autoplay On' : 'Autoplay'}</span>
                </button>

                {currentMedia.type !== 'video' && (
                  <>
                    {/* Zoom Toggle */}
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className={`p-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white rounded-sm cursor-pointer transition-colors duration-200 flex items-center justify-center ${
                        isZoomed ? 'text-luxury-gold border-luxury-gold/50' : ''
                      }`}
                      title={isZoomed ? "Actual Size (100%)" : "Zoom In"}
                    >
                      {isZoomed ? <Minimize2 className="w-4 h-4 text-luxury-gold" /> : <Maximize2 className="w-4 h-4" />}
                    </button>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(currentMedia.url)}
                      className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white hover:text-luxury-gold rounded-sm cursor-pointer transition-colors duration-200 flex items-center justify-center"
                      title="Download Shot"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* External Link */}
                <a
                  href={currentMedia.url}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="p-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white hover:text-luxury-gold rounded-sm cursor-pointer transition-colors duration-200 flex items-center justify-center"
                  title="Open Original Source"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Divider */}
                <div className="w-[1px] h-6 bg-white/10 self-center hidden xs:block"></div>

                {/* Close Panel Button */}
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    setIsPlaying(false);
                    setIsZoomed(false);
                  }}
                  className="p-2 sm:p-2.5 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-black border border-luxury-gold/30 hover:border-luxury-gold cursor-pointer transition-colors duration-300 rounded-sm flex items-center justify-center"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
              </div>
            </div>

            {/* Media Canvas Body with Swipe / Drag Transitions */}
            <div className="flex-1 flex items-center justify-between px-2 sm:px-6 relative overflow-hidden" id="lightbox-canvas">
              {/* Previous Nav Control btn */}
              <button
                onClick={handlePrev}
                className="hidden md:flex p-3 bg-luxury-black/60 hover:bg-white/15 border border-white/10 text-white hover:text-luxury-gold cursor-pointer transition-all duration-300 rounded-full z-40 backdrop-blur-sm shadow-xl hover:scale-105 active:scale-95"
                aria-label="Previous frame"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Slider Image Frame Wrapper */}
              <div 
                className="flex-1 w-full h-full flex items-center justify-center relative py-4 px-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentMedia.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag={currentMedia.type === 'image' && !isZoomed ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(e, info) => {
                      const swipeThreshold = 55;
                      if (info.offset.x < -swipeThreshold) {
                        handleNext();
                      } else if (info.offset.x > swipeThreshold) {
                        handlePrev();
                      }
                    }}
                    className={`max-w-full max-h-[58vh] sm:max-h-[64vh] flex items-center justify-center relative select-none transition-shadow duration-300 cursor-grab active:cursor-grabbing`}
                    style={{
                      touchAction: 'none'
                    }}
                  >
                    {currentMedia.type === 'video' ? (
                      <div className="w-[90vw] max-w-3xl aspect-video border border-luxury-gold/25 relative bg-black shadow-2xl rounded-sm overflow-hidden select-none z-10">
                        {currentMedia.url.endsWith('.mp4') || currentMedia.url.includes('mixkit') ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            referrerPolicy="no-referrer"
                            poster={currentMedia.thumbnailUrl}
                            className="w-full h-full object-cover"
                            style={{ filter: "brightness(0.92) contrast(1.03)" }}
                          >
                            <source src={currentMedia.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            src={`${currentMedia.url}?autoplay=1&mute=1&rel=0&showinfo=0`}
                            title={currentMedia.title}
                            className="w-full h-full select-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    ) : (
                      <div 
                        onClick={() => setIsZoomed(!isZoomed)}
                        className={`overflow-hidden rounded-sm transition-transform duration-300 max-h-[58vh] sm:max-h-[64vh] max-w-full flex items-center justify-center border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] ${
                          isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                        }`}
                        style={{
                          transform: isZoomed ? 'scale(1.25)' : 'scale(1)'
                        }}
                      >
                        <img
                          src={currentMedia.url}
                          alt={currentMedia.title}
                          referrerPolicy="no-referrer"
                          className="max-h-[58vh] sm:max-h-[64vh] object-contain max-w-full pointer-events-none select-none"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Nav Control btn */}
              <button
                onClick={handleNext}
                className="hidden md:flex p-3 bg-luxury-black/60 hover:bg-white/15 border border-white/10 text-white hover:text-luxury-gold cursor-pointer transition-all duration-300 rounded-full z-40 backdrop-blur-sm shadow-xl hover:scale-105 active:scale-95"
                aria-label="Next frame"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Interactive Thumbnail Carousel Strip */}
            <div className="hidden sm:flex justify-center gap-2 overflow-x-auto py-3 px-6 bg-luxury-charcoal/30 border-t border-white/10 max-w-full z-40">
              {filteredItems.map((item, idx) => {
                const isSelected = lightboxIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDirection(idx > (lightboxIndex ?? 0) ? 1 : -1);
                      setIsZoomed(false);
                      setLightboxIndex(idx);
                    }}
                    className={`relative w-14 h-9 flex-shrink-0 transition-all duration-300 border focus:outline-none cursor-pointer rounded-sm overflow-hidden ${
                      isSelected 
                        ? 'border-luxury-gold scale-105 opacity-100 ring-1 ring-luxury-gold/40' 
                        : 'border-white/10 opacity-35 hover:opacity-85'
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-luxury-gold fill-luxury-gold" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Panel Metadata Summary */}
            <div className="bg-luxury-black border-t border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-luxury-gold text-xs font-mono font-semibold uppercase tracking-widest mb-1.5">
                  <span className="bg-luxury-gold/10 px-2 py-0.5 rounded-sm text-[10px] text-luxury-gold border border-luxury-gold/10">{currentMedia.category}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>{currentMedia.location}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-white tracking-wide">
                  {currentMedia.title}
                </h3>
                <p className="text-xs sm:text-xs text-gray-400 font-light mt-1.5 leading-relaxed max-w-xl">
                  {currentMedia.description}
                </p>
              </div>

              {/* Photographer Info and swipe cue */}
              <div className="flex flex-col xs:flex-row items-stretch md:items-center gap-4 w-full md:w-auto self-end md:self-auto">
                {/* Swipe cue for mobile */}
                <div className="block md:hidden text-center text-[9px] text-luxury-gold/50 tracking-widest uppercase py-1 px-3 border border-white/5 bg-white/5 rounded-full select-none">
                  ← Swipe screen to navigate →
                </div>

                <div className="p-2 px-4 border border-white/10 bg-luxury-charcoal/30 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center rounded-sm min-w-[130px]">
                  <span className="text-[8px] tracking-widest text-gray-500 uppercase">Director / Lens</span>
                  <span className="text-xs font-semibold text-white tracking-widest uppercase">
                    {currentMedia.photographer || 'Yash Raj'}
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
