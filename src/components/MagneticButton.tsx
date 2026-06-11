import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number; // Maximum displacement in pixels
}

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick, 
  strength = 15 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance of mouse cursor from the center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Limit displacement offset based on strength constant
    const moveX = (distanceX / (width / 2)) * strength;
    const moveY = (distanceY / (height / 2)) * strength;

    setCoords({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      id="magnetic-wrapper"
    >
      <motion.div
        animate={{ x: coords.x, y: coords.y }}
        transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 0.1 }}
        onClick={onClick}
        className="w-full h-full cursor-pointer"
      >
        {children}
      </motion.div>
    </div>
  );
}
