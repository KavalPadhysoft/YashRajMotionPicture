import { Check } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import InnerPageBanner from './InnerPageBanner';

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Clean scroll progress for seamless parallax movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate smooth translation offsets based on scroll progress
  const yParallaxImage1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yTextParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const values = [
    {
      title: "Authentic Legacies",
      desc: "We avoid robotic over-posing. We capture authentic royal smiles, wet eyes, and sacred rituals in high-stakes heritages."
    },
    {
      title: "Midnight Color Grading",
      desc: "Our proprietary color correction suite guarantees deep warm gold shadows, tailored matching ancient Haveli redstones."
    },
    {
      title: "Punctual Delivery System",
      desc: "Backed by legal contracts. Your cinematic film and handbound albums are delivered within exactly 4 to 5 weeks."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] overflow-hidden text-white" id="about-us-module" ref={containerRef}>
      
      <InnerPageBanner 
        title="About Us"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 2. SECOND SECTION: DYNAMIC STORYTELLING SPLIT (IMAGE LEFT, INTRO RIGHT) */}
      <section className="bg-[#0a0a0a] py-24 border-t border-white/5" id="about-storytelling-split">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: ANIMATED PARALLAX IMAGE */}
          <div className="relative flex justify-center items-center h-[500px] sm:h-[600px] overflow-hidden rounded-2xl border border-white/5 shadow-2xl" id="asymmetrical-image-frame">
            {/* Soft ambient background glow */}
            <div className="absolute inset-0 bg-[#aa8453]/5 blur-[100px] pointer-events-none rounded-full"></div>
            
            <motion.div 
              style={{ y: yParallaxImage1 }}
              className="w-full h-[120%] absolute inset-0 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-shadow duration-[800ms]"
            >
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85" 
                alt="High-resolution editorial production portrait" 
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 hover:grayscale-0 hover:scale-[1.03] transition-all duration-[1500ms] ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Soft edge gradient to prevent harsh lines */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-20"></div>
              
              {/* Discrete signature info badge for deep visual layers */}
              <div className="absolute bottom-6 left-6 z-35 bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-luxury-gold animate-ping"></span>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#aa8453] uppercase block">Lead Director</span>
                  <span className="text-xs font-serif text-white font-bold block mt-0.5">Yash Raj Shah</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: INTRO BIOGRAPHY */}
          <motion.div 
            style={{ y: yTextParallax }}
            className="text-left flex flex-col justify-center"
          >
            <RevealOnScroll stagger={true} direction="up" distance={20} className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#aa8453] uppercase font-bold block" id="biography-tag">
                  BIOGRAPHY
                </span>
                <h2 
                  className="font-serif text-white uppercase tracking-tight font-extrabold"
                  style={{
                    fontSize: '24px',
                    width: '521px',
                    maxWidth: '100%',
                    lineHeight: '41.2px',
                    textDecorationLine: 'none',
                    fontStyle: 'normal'
                  }}
                >
                  AHMEDABAD’S PREMIER CINEMATOGRAPHIC HAND
                </h2>
                <div className="h-[2px] bg-gradient-to-r from-[#aa8453] to-transparent w-24 mt-4"></div>
              </div>

              <div className="space-y-4 text-sm text-gray-300 font-light leading-[1.7] max-w-[550px]" id="biography-p-container">
                <p>
                  Since 2012, Yash Raj Shah has documented over 300+ couples across Ahmedabad, Delhi, and Rajasthan, transforming fleeting traditional values into monumental visual cinema.
                </p>
                <p>
                  Our photography captures the architectural soul of Indian tradition, freezing true presence rather than manufactured poses. Every frame is treated as a museum artifact, balanced with cinematic color depth.
                </p>
                <p className="text-gray-400">
                  Our flag office is dynamically stationed near Sindhu Bhavan Road, Bodakdev, enabling prompt production planning meetings. From high-fashion editorial texture matching to standard traditional rituals at Taj Skyline or premium setups at GIFT City, we handle everything with extreme precision.
                </p>
              </div>

              {/* MINIMALIST AUTHORITY STAT COUNTER GRID */}
              <div className="grid grid-cols-3 gap-5 pt-8 border-t border-white/10 max-w-[550px]" id="intro-authority-stat-grid">
                <div className="flex flex-col text-left group">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-luxury-gold tracking-tight group-hover:scale-105 transition duration-300 origin-left">
                    12+ Yrs
                  </span>
                  <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase mt-1">
                    Artistry Era
                  </span>
                </div>
                
                <div className="flex flex-col text-left group">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-luxury-gold tracking-tight group-hover:scale-105 transition duration-300 origin-left">
                    300+
                  </span>
                  <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase mt-1">
                    Weddings File
                  </span>
                </div>
                
                <div className="flex flex-col text-left group">
                  <span className="text-[15px] sm:text-[17px] font-serif font-bold text-white tracking-widest leading-none self-start mt-2 text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-white uppercase">
                    Ahmedabad
                  </span>
                  <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase mt-1.5">
                    & Beyond Coordinates
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </motion.div>

        </div>
      </section>

      {/* 3. LOWER SECTIONS: AS IT IS (CREDIBILITY & CONTACT) */}
      <section className="bg-[#070707] py-24 border-t border-white/5" id="about-lower-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-5xl mx-auto px-6 sm:px-10 bg-[#0d0d0d]/80 border border-white/10 rounded-2xl py-20 relative overflow-hidden" id="about-values">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#aa8453]/5 blur-[130px] pointer-events-none"></div>
            
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-[10px] font-mono tracking-[0.35em] text-[#aa8453] uppercase font-bold block">
                  THE STUDIO CODE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase mt-1.5 tracking-wider font-semibold">
                  Our Studio Philosophy
                </h3>
              </div>

              <RevealOnScroll stagger={true} direction="up" distance={25} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="about-values-grid">
                {values.map((v, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col gap-4 p-7 sm:p-8 border border-white/5 bg-[#121212]/50 relative rounded-2xl group hover:border-[#aa8453]/30 hover:bg-[#141414]/90 transition-all duration-500 ease-out shadow-lg"
                  >
                    <div className="p-3 bg-[#aa8453]/10 text-[#aa8453] rounded-full w-fit group-hover:scale-110 transition-transform duration-500">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-sans font-bold text-white tracking-wider uppercase mt-2">
                      {v.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
