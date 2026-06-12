import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  Pause,
  Download,
  Eye,
  Maximize2,
  Minimize2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { portfolioItems } from "../data";

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  const filteredItems = portfolioItems.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  const handleNext = () => {
    if (activeIdx !== null) {
      setDirection(1);
      setZoomed(false);
      setActiveIdx((activeIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeIdx !== null) {
      setDirection(-1);
      setZoomed(false);
      setActiveIdx((activeIdx - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay || activeIdx === null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, activeIdx, filteredItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx !== null) {
        if (e.key === "Escape") {
          setActiveIdx(null);
          setAutoplay(false);
          setZoomed(false);
        } else if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrev();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, filteredItems]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `cinematique-shot-${activeIdx}.jpg`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCount = (catId: string) => {
    return catId === "all"
      ? portfolioItems.length
      : portfolioItems.filter((i) => i.category === catId).length;
  };

  const filters = [
    { id: "all", label: "All Cases" },
    { id: "wedding", label: "Wedding" },
    { id: "pre-wedding", label: "Pre-Wedding" },
    { id: "fashion", label: "Fashion" },
    { id: "corporate", label: "Corporate" },
  ];

  const getColSpanStyles = (idx: number) => {
    const modVal = idx % 5;
    if (modVal === 0) {
      return {
        wrapper: "col-span-12 md:col-span-12 lg:col-span-8 h-[520px]",
        img: "h-[520px]",
      };
    } else if (modVal === 1) {
      return {
        wrapper: "col-span-12 md:col-span-6 lg:col-span-4 h-[250px]",
        img: "h-[250px]",
      };
    } else if (modVal === 2) {
      return {
        wrapper: "col-span-12 md:col-span-6 lg:col-span-4 h-[250px]",
        img: "h-[250px]",
      };
    } else if (modVal === 3) {
      return {
        wrapper: "col-span-12 md:col-span-6 lg:col-span-4 h-[520px] lg:-mt-[270px]",
        img: "h-[520px]",
      };
    } else {
      return {
        wrapper: "col-span-12 lg:col-span-8 h-[250px] lg:mt-[-20px]",
        img: "h-[250px]",
      };
    }
  };

  const currentItem = activeIdx !== null ? filteredItems[activeIdx] : null;

  const animationVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 320 : dir < 0 ? -320 : 0,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 280, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 320 : dir > 0 ? -320 : 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 280, damping: 28 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  return (
    <section
      className="py-24 bg-[#0a0a0a] border-t border-[#5a5650]/20"
      id="gallery-portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[4px] text-luxury-gold uppercase font-sans font-medium block">
            SELECTED HEIRLOOM GALLERIES
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f0ece4] uppercase mt-2 tracking-wider">
            Our <i>Cinematic</i> Portfolio
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Portfolio Filters */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 px-4"
          id="portfolio-filters"
        >
          {filters.map((flt) => {
            const isActive = filter === flt.id;
            const count = getCount(flt.id);
            return (
              <button
                key={flt.id}
                onClick={() => {
                  setFilter(flt.id);
                  setActiveIdx(null);
                }}
                className="relative text-[10px] font-sans tracking-[4px] uppercase px-5 py-3 cursor-pointer transition-colors duration-200 rounded-none border border-[#5a5650]/20 text-[#f0ece4] bg-[#020202] hover:text-luxury-gold outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-[#d4af64]/10 border-b border-luxury-gold z-0"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span
                    className={
                      isActive ? "text-luxury-gold font-medium" : "text-gray-400"
                    }
                  >
                    {flt.label}
                  </span>
                  <span
                    className={`text-[8px] font-mono px-1.5 py-0.5 rounded-none border transition-colors duration-200 ${
                      isActive
                        ? "bg-[#d4af64]/20 border-[#d4af64]/30 text-luxury-gold font-medium"
                        : "bg-transparent border-[#5a5650]/20 text-[#5a5650]"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
          id="portfolio-masonry-grid"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredItems.map((item, index) => {
              const absoluteIdx = filteredItems.findIndex((it) => it.id === item.id);
              const gridConfig = getColSpanStyles(index);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                  transition={{
                    opacity: { duration: 0.3 },
                    layout: { duration: 0.4, type: "spring", stiffness: 220, damping: 26 },
                  }}
                  className={`${gridConfig.wrapper} relative group overflow-hidden cursor-pointer bg-[#020202] border border-[#5a5650]/20 rounded-none`}
                  onClick={() => setActiveIdx(absoluteIdx)}
                >
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className={`w-full ${gridConfig.img} object-cover scale-100 group-hover:scale-102 transition-transform duration-700 ease-out rounded-none grayscale-[10%] group-hover:grayscale-0`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/30 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                  <div className="absolute top-4 right-4 p-2 bg-black/80 border border-luxury-gold/20 text-luxury-gold z-20 rounded-none">
                    {item.type === "video" ? (
                      <Play className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col gap-1.5 text-left">
                    <span className="text-[8px] tracking-[4px] font-sans font-light text-luxury-gold uppercase">
                      {item.category} • {item.location || "Ahmedabad"}
                    </span>
                    <h3 className="text-base font-serif text-[#f0ece4] tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5a5650] font-light line-clamp-1">
                      {item.description}
                    </p>
                    <span className="text-[8px] tracking-[3px] text-luxury-gold font-sans font-medium mt-1 uppercase">
                      VIEW FULL HIGH-CONTRAST CASE +
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#020202] border border-[#5a5650]/15 rounded-none">
            <p className="text-sm text-gray-500">
              No projects available under this collection currently.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202] flex flex-col justify-between backdrop-blur-xl select-none text-left"
            id="lightbox-view"
          >
            {autoplay && (
              <>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes lightboxProgress {
                        0% { width: 0%; }
                        100% { width: 100%; }
                      }
                      .lightbox-progress-bar {
                        animation: lightboxProgress 5000ms linear forwards;
                      }
                    `,
                  }}
                />
                <div
                  key={activeIdx}
                  className="absolute top-0 left-0 h-[2px] bg-luxury-gold z-[100] lightbox-progress-bar"
                />
              </>
            )}

            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#5a5650]/20 bg-[#0a0a0a] backdrop-blur-md relative z-50">
              <div className="flex flex-col">
                <span className="text-[8px] tracking-[4px] font-sans text-luxury-gold uppercase font-light">
                  PROJECT {activeIdx + 1} OF {filteredItems.length}
                </span>
                <span className="text-xs text-[#f0ece4] uppercase tracking-[4px] font-light font-sans mt-0.5 truncate max-w-[150px] sm:max-w-xs">
                  {currentItem.title}
                </span>
              </div>

              {/* Lightbox Controls */}
              <div className="flex items-center gap-2 sm:gap-3.5">
                <button
                  onClick={() => setAutoplay(!autoplay)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-[8px] tracking-[4px] font-sans uppercase transition-all duration-300 border rounded-none cursor-pointer ${
                    autoplay
                      ? "bg-luxury-gold/20 border-luxury-gold text-luxury-gold"
                      : "bg-[#0a0a0a] border-[#5a5650]/30 text-gray-400 hover:text-white"
                  }`}
                  title={autoplay ? "Pause Slideshow" : "Start Slideshow"}
                >
                  {autoplay ? (
                    <Pause className="w-3 h-3 text-luxury-gold animate-pulse" />
                  ) : (
                    <Play className="w-3 h-3" />
                  )}
                  <span className="hidden xs:inline">
                    {autoplay ? "Autoplay On" : "Autoplay"}
                  </span>
                </button>

                {currentItem.type !== "video" && (
                  <>
                    <button
                      onClick={() => setZoomed(!zoomed)}
                      className={`p-2 bg-transparent hover:bg-white/5 border border-[#5a5650]/30 text-white rounded-none cursor-pointer transition-colors duration-200 flex items-center justify-center ${
                        zoomed ? "text-luxury-gold border-luxury-gold" : ""
                      }`}
                      title={zoomed ? "Actual Size (100%)" : "Zoom In"}
                    >
                      {zoomed ? (
                        <Minimize2 className="w-4 h-4 text-luxury-gold" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleDownload(currentItem.url)}
                      className="p-2 bg-transparent hover:bg-white/5 border border-[#5a5650]/30 text-white hover:text-luxury-gold rounded-none cursor-pointer transition-all flex items-center justify-center"
                      title="Download Shot"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </>
                )}

                <a
                  href={currentItem.url}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="p-2 bg-transparent hover:bg-white/5 border border-[#5a5650]/30 text-white hover:text-luxury-gold rounded-none cursor-pointer transition-all flex items-center justify-center"
                  title="Open Original Source"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="w-[1px] h-6 bg-[#5a5650]/30 self-center hidden xs:block" />

                <button
                  onClick={() => {
                    setActiveIdx(null);
                    setAutoplay(false);
                    setZoomed(false);
                  }}
                  className="p-2 sm:p-2.5 bg-[#d4af64]/10 hover:bg-luxury-gold text-luxury-gold hover:text-black border border-luxury-gold/30 hover:border-luxury-gold cursor-pointer transition-colors duration-200 rounded-none flex items-center justify-center"
                  aria-label="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Body with Slider */}
            <div
              className="flex-1 flex items-center justify-between px-2 sm:px-6 relative overflow-hidden"
              id="lightbox-canvas"
            >
              {/* Previous Handlers */}
              <button
                onClick={handlePrev}
                className="hidden md:flex p-3 bg-black/60 hover:bg-white/10 border border-[#5a5650]/30 text-white hover:text-luxury-gold cursor-pointer transition-all rounded-none z-40 backdrop-blur-sm"
                aria-label="Previous frame"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Media Core */}
              <div
                className="flex-1 w-full h-full flex items-center justify-center relative py-4 px-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIdx}
                    custom={direction}
                    variants={animationVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag={currentItem.type === "image" && !zoomed ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -55) {
                        handleNext();
                      } else if (info.offset.x > 55) {
                        handlePrev();
                      }
                    }}
                    className="max-w-full max-h-[58vh] sm:max-h-[64vh] flex items-center justify-center relative select-none transition-shadow duration-300 cursor-grab active:cursor-grabbing"
                    style={{ touchAction: "none" }}
                  >
                    {currentItem.type === "video" ? (
                      <div className="w-[90vw] max-w-3xl aspect-video border border-luxury-gold/35 relative bg-black shadow-none rounded-none overflow-hidden select-none z-10">
                        {currentItem.url.endsWith(".mp4") ||
                        currentItem.url.includes("mixkit") ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            referrerPolicy="no-referrer"
                            poster={currentItem.thumbnailUrl}
                            className="w-full h-full object-cover"
                            style={{ filter: "brightness(0.92) contrast(1.03)" }}
                          >
                            <source src={currentItem.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            src={`${currentItem.url}?autoplay=1&mute=1&rel=0&showinfo=0`}
                            title={currentItem.title}
                            className="w-full h-full select-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        onClick={() => setZoomed(!zoomed)}
                        className={`overflow-hidden rounded-none transition-transform duration-300 max-h-[58vh] sm:max-h-[64vh] max-w-full flex items-center justify-center border border-[#5a5650]/20 ${
                          zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                        }`}
                        style={{ transform: zoomed ? "scale(1.25)" : "scale(1)" }}
                      >
                        <img
                          src={currentItem.url}
                          alt={currentItem.title}
                          referrerPolicy="no-referrer"
                          className="max-h-[58vh] sm:max-h-[64vh] object-contain max-w-full pointer-events-none select-none rounded-none"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Handler */}
              <button
                onClick={handleNext}
                className="hidden md:flex p-3 bg-black/60 hover:bg-white/10 border border-[#5a5650]/30 text-white hover:text-luxury-gold cursor-pointer transition-all rounded-none z-40 backdrop-blur-sm"
                aria-label="Next frame"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Strips */}
            <div className="hidden sm:flex justify-center gap-2 overflow-x-auto py-3 px-6 bg-[#0a0a0a] border-t border-[#5a5650]/20 max-w-full z-40">
              {filteredItems.map((item, idx) => {
                const isActiveThumbnail = activeIdx === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setDirection(idx > (activeIdx ?? 0) ? 1 : -1);
                      setZoomed(false);
                      setActiveIdx(idx);
                    }}
                    className={`relative w-14 h-9 flex-shrink-0 transition-all duration-300 border focus:outline-none cursor-pointer rounded-none overflow-hidden ${
                      isActiveThumbnail
                        ? "border-luxury-gold scale-102 opacity-100"
                        : "border-[#5a5650]/20 opacity-30 hover:opacity-80"
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover pointer-events-none rounded-none"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 text-luxury-gold fill-luxury-gold" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom info shelf */}
            <div className="bg-[#020202] border-t border-[#5a5650]/20 p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-40">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-luxury-gold text-[8px] font-sans tracking-[4px] uppercase font-light mb-1.5">
                  <span className="bg-luxury-gold/15 px-2 py-0.5 rounded-none border border-luxury-gold/20">
                    {currentItem.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>{currentItem.location}</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif text-[#f0ece4] tracking-wide">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-[#5a5650] font-light mt-1.5 leading-relaxed max-w-xl">
                  {currentItem.description}
                </p>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch md:items-center gap-4 w-full md:w-auto self-end md:self-auto">
                <div className="block md:hidden text-center text-[9px] text-luxury-gold/50 tracking-[3px] uppercase py-1 px-3 border border-white/5 bg-white/5 rounded-none select-none">
                  ← Swipe screen to navigate →
                </div>
                <div className="p-2 px-4 border border-[#5a5650]/20 bg-[#0a0a0a] flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center rounded-none min-w-[130px]">
                  <span className="text-[8px] tracking-[3px] font-sans text-gray-500 uppercase">
                    Director / Lens
                  </span>
                  <span className="text-xs font-medium text-[#f0ece4] tracking-[3px] uppercase">
                    Yash Raj
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
