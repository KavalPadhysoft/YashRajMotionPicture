import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  strength = 18,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    damping: 20,
    stiffness: 150,
    mass: 0.6,
  };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    x.set(deltaX * (strength / 100));
    y.set(deltaY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block pointer-events-auto"
    >
      <motion.div style={{ x: springX, y: springY }}>{children}</motion.div>
    </div>
  );
};
