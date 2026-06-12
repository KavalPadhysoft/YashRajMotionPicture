import React from "react";
import { motion, Variants } from "motion/react";

interface MotionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  delay?: number;
  stagger?: boolean;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  direction = "up",
  distance = 25,
  delay = 0,
  stagger = false,
  className = "",
  id,
  ...props
}) => {
  const directionOffset = (() => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { y: 0, x: distance };
      case "right":
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  })();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: directionOffset.x,
      y: directionOffset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...(stagger && {
          staggerChildren: 0.12,
          delayChildren: delay,
        }),
      },
    },
  };

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
