import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { PageBanner } from "./PageBanner";
import { MotionWrapper } from "./MotionWrapper";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets
  const imageYTransform = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const textYTransform = useTransform(scrollYProgress, [0, 1], [15, -15]);

  const philosophyItems = [
    {
      title: "Authentic Legacies",
      desc: "We avoid robotic over-posing. We capture authentic royal smiles, wet eyes, and sacred rituals in high-stakes heritages.",
    },
    {
      title: "Midnight Color Grading",
      desc: "Our proprietary color correction suite guarantees deep warm gold shadows, tailored matching ancient Haveli redstones.",
    },
    {
      title: "Punctual Delivery System",
      desc: "Backed by legal contracts. Your cinematic film and handbound albums are delivered within exactly 4 to 5 weeks.",
    },
  ];

  return (
    <div
      className="bg-[#0a0a0a] overflow-hidden text-white"
      id="about-us-module"
      ref={containerRef}
    >
      <PageBanner
        title="About Us"
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Storytelling split */}
      <section
        className="bg-[#0a0a0a] py-24 border-t border-[#5a5650]/20"
        id="about-storytelling-split"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Asymmetrical Frame with Parallax */}
          <div
            className="relative flex justify-center items-center h-[500px] sm:h-[600px] overflow-hidden rounded-none border border-[#5a5650]/20"
            id="asymmetrical-image-frame"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 blur-[100px] pointer-events-none rounded-none" />
            <motion.div
              style={{ y: imageYTransform }}
              className="w-full h-[120%] absolute inset-0 z-10 transition-shadow duration-[800ms] rounded-none"
            >
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85"
                alt="High-resolution editorial production portrait"
                className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.85] hover:grayscale-0 hover:scale-[1.02] transition-all duration-[1200ms] ease-out rounded-none"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20 pointer-events-none" />

              {/* Tag overlay */}
              <div className="absolute bottom-6 left-6 z-35 bg-black/85 border border-luxury-gold/20 p-4 rounded-none flex items-center gap-3">
                <span className="w-2 h-2 bg-luxury-gold animate-pulse" />
                <div className="text-left">
                  <span className="text-[9px] font-sans tracking-[3px] text-luxury-gold uppercase block">
                    Lead Director
                  </span>
                  <span className="text-xs font-serif text-[#f0ece4] font-bold block mt-0.5">
                    Yash Raj Shah
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description Text Side */}
          <motion.div
            style={{ y: textYTransform }}
            className="text-left flex flex-col justify-center animate-fadeIn"
          >
            <MotionWrapper stagger={true} direction="up" distance={20} className="space-y-6">
              <div className="space-y-2">
                <span
                  className="text-[10px] font-sans tracking-[4px] text-luxury-gold uppercase font-medium block"
                  id="biography-tag"
                >
                  OUR CONTEXT
                </span>
                <h2 className="font-serif text-3xl text-white uppercase tracking-wider leading-tight">
                  AHMEDABAD’S PREMIER <i>CINEMATOGRAPHIC</i> HAND
                </h2>
                <div className="h-[1px] bg-luxury-gold w-16 mt-4" />
              </div>

              <div
                className="space-y-4 text-xs sm:text-xs text-[#5a5650] group-hover:text-gray-400 font-light leading-[1.7] max-w-[550px] transition-colors"
                id="biography-p-container"
              >
                <p className="text-gray-400">
                  Since 2012, Yash Raj Shah has documented over 300+ couples across Ahmedabad, Delhi, and Rajasthan, transforming fleeting traditional values into monumental visual cinema.
                </p>
                <p className="text-gray-400">
                  Our photography captures the architectural soul of Indian tradition, freezing true presence rather than manufactured poses. Every frame is treated as a museum artifact, balanced with cinematic color depth.
                </p>
                <p className="text-[#5a5650]">
                  Our flagship office is dynamically stationed near Sindhu Bhavan Road, Bodakdev, enabling prompt production planning meetings. From high-fashion editorial texture matching to standard traditional rituals at Taj Skyline or premium setups at GIFT City, we handle everything with extreme precision.
                </p>
              </div>

              {/* Statistics Grid */}
              <div
                className="grid grid-cols-3 gap-5 pt-8 border-t border-[#5a5650]/20 max-w-[550px]"
                id="intro-authority-stat-grid"
              >
                <div className="flex flex-col text-left group">
                  <span className="text-2xl sm:text-3xl font-serif text-luxury-gold tracking-wider transition-transform duration-300">
                    12+ Yrs
                  </span>
                  <span className="text-[8px] text-[#5a5650] font-sans tracking-[3px] uppercase mt-1">
                    Artistry Era
                  </span>
                </div>
                <div className="flex flex-col text-left group">
                  <span className="text-2xl sm:text-3xl font-serif text-luxury-gold tracking-wider transition-transform duration-300">
                    300+
                  </span>
                  <span className="text-[8px] text-[#5a5650] font-sans tracking-[3px] uppercase mt-1">
                    Weddings File
                  </span>
                </div>
                <div className="flex flex-col text-left group">
                  <span className="text-[12px] sm:text-[14px] font-serif font-bold text-[#f0ece4] tracking-[3px] leading-tight self-start mt-2 uppercase">
                    GUJARAT
                  </span>
                  <span className="text-[8px] text-[#5a5650] font-sans tracking-[3px] uppercase mt-1">
                    HQ Coordinates
                  </span>
                </div>
              </div>
            </MotionWrapper>
          </motion.div>
        </div>
      </section>

      {/* Values & Philosophy Core */}
      <section
        className="bg-[#0a0a0a] py-24 border-t border-[#5a5650]/20"
        id="about-lower-values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-5xl mx-auto px-6 sm:px-10 bg-[#020202] border border-[#5a5650]/20 rounded-none py-20 relative overflow-hidden"
            id="about-values"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 blur-[130px] pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <span className="text-[10px] font-sans tracking-[4px] text-luxury-gold uppercase font-light block">
                  THE STUDIO CODE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f0ece4] uppercase mt-1.5 tracking-wider">
                  Our <i>Studio</i> Philosophy
                </h3>
              </div>

              <MotionWrapper
                stagger={true}
                direction="up"
                distance={25}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                id="about-values-grid"
              >
                {philosophyItems.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-4 p-7 sm:p-8 border border-[#5a5650]/15 bg-[#020202] relative rounded-none hover:border-luxury-gold/30 transition-all duration-300 text-left"
                  >
                    <div className="p-2.5 bg-luxury-gold/10 text-luxury-gold w-fit rounded-none">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-sans font-medium text-[#f0ece4] tracking-[3px] uppercase mt-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#5a5650] hover:text-gray-400 font-light leading-relaxed transition-colors">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
