import { motion } from 'motion/react';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  const isHeader = variant === 'header';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`} id={`logo-${variant}`}>
      {/* 3D Gold Film Reel Square Icon */}
      <div className={`relative shrink-0 ${isHeader ? 'w-10 h-10' : 'w-12 h-12'}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2.5px_6px_rgba(0,0,0,0.7)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ultra-realistic Metallic Gold Gradient */}
            <linearGradient id="gold-3d-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#AA7C11" />
              <stop offset="10%" stopColor="#FFF9E6" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFEFB8" />
              <stop offset="65%" stopColor="#AA7C11" />
              <stop offset="85%" stopColor="#F0C243" />
              <stop offset="100%" stopColor="#FFEFB8" />
            </linearGradient>

            {/* Inner Dark Bevel shadow mapping */}
            <linearGradient id="dark-bevel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5a4209" />
              <stop offset="50%" stopColor="#9a6b0c" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
            </linearGradient>

            {/* Subtle Inner Glow */}
            <filter id="gold-extrude" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="1.5" dy="1.5" stdDeviation="1.2" floodColor="#000" floodOpacity="0.85" />
            </filter>
          </defs>

          {/* Golden Outer Rounded Rectangle with Bevel effect */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="21"
            fill="#0f0f0f"
            stroke="url(#gold-3d-metallic)"
            strokeWidth="6"
            className="stroke-[6.5]"
          />
          
          <rect
            x="10.5"
            y="10.5"
            width="79"
            height="79"
            rx="15"
            fill="none"
            stroke="url(#dark-bevel)"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />

          {/* Heart shaped Film Strip logo vector (Matches Image 1 layout) */}
          <g filter="url(#gold-extrude)">
            {/* Beautiful stylized compound path representing heart-shaped film strip core */}
            <path
              d="M50 78 C56 72 73 53.5 73.5 39 C74 27.5 64 21 54.5 21 C51.5 21 50 22.5 50 22.5 C50 22.5 48.5 21 45.5 21 C36 21 26 27.5 26.5 39 C27 53.5 44 72 50 78 Z"
              fill="none"
              stroke="url(#gold-3d-metallic)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Film core circle (the inner reel hub on the right side) */}
            <circle cx="58" cy="38" r="8" fill="url(#gold-3d-metallic)" />
            
            {/* Left side film strip perforations (cutout details representing movie frames) */}
            <rect x="33" y="27" width="3.5" height="4" rx="1" fill="url(#gold-3d-metallic)" transform="rotate(-15, 33, 27)" />
            <rect x="29" y="37" width="3.5" height="4" rx="1" fill="url(#gold-3d-metallic)" transform="rotate(5, 29, 37)" />
            <rect x="32" y="48" width="3.5" height="4" rx="1" fill="url(#gold-3d-metallic)" transform="rotate(25, 32, 48)" />
            <rect x="38" y="58" width="3.5" height="4" rx="1" fill="url(#gold-3d-metallic)" transform="rotate(45, 38, 58)" />
            
            {/* Film spokes detailing */}
            <line x1="58" y1="38" x2="58" y2="21" stroke="url(#gold-3d-metallic)" strokeWidth="1.5" />
            <line x1="58" y1="38" x2="71" y2="45" stroke="url(#gold-3d-metallic)" strokeWidth="1.5" />
            <line x1="58" y1="38" x2="48" y2="46" stroke="url(#gold-3d-metallic)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Elegant Golden 3D Typography */}
      <div className="flex flex-col">
        {/* Main YASH RAJ title */}
        <span 
          className={`font-sans tracking-[0.16em] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ffeeb8] via-[#d4af37] to-[#aa7c11] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-none ${
            isHeader ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
          }`}
          style={{
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Yash Raj
        </span>
        
        {/* Subtitle mapping */}
        <span 
          className={`font-sans tracking-[0.22em] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e8c766] to-[#a3791a] leading-none ${
            isHeader ? 'text-[8px] sm:text-[9px] mt-1' : 'text-[9px] sm:text-[10px] mt-1.5'
          }`}
          style={{
            fontFamily: '"Inter", sans-serif',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Motion Picture • Ahmedabad
        </span>
      </div>
    </div>
  );
}
