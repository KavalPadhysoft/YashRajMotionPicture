import { ReactNode, useRef, useState, useEffect, Children, isValidElement } from 'react';
import { motion } from 'motion/react';

interface RevealOnScrollProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  threshold?: number;
  distance?: number;
  className?: string;
  stagger?: boolean;  // automatic child staggering
  scale?: boolean;    // lens focus scale effect
  blur?: boolean;     // cinematic focus blur effect
  id?: string;
  key?: string | number;
}

export default function RevealOnScroll({
  children,
  direction = 'up',
  duration = 0.9,
  delay = 0,
  threshold = 0.05,
  distance = 35,
  className = '',
  stagger = false,
  scale = true,
  blur = true,
  id,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px', // slightly offset trigger line for natural flow
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
      default:
        return {};
    }
  };

  // Cinematic Easing curve (easeOutExpo: extremely premium feel)
  const cubicBezierEasing = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: blur ? "blur(10px)" : "blur(0px)",
      scale: scale ? 0.95 : 1,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: cubicBezierEasing,
      }
    }
  };

  if (stagger) {
    const childrenArray = Children.toArray(children);

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        className={className}
        id={id}
      >
        {childrenArray.map((child, index) => {
          if (!isValidElement(child)) {
            return child;
          }
          return (
            <motion.div key={index} variants={itemVariants} className="w-full">
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{
        opacity: 0,
        filter: blur ? "blur(10px)" : "blur(0px)",
        scale: scale ? 0.95 : 1,
        ...getDirectionOffset(),
      }}
      animate={
        isIntersecting
          ? {
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: cubicBezierEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
