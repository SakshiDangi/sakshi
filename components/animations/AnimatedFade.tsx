"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

export interface AnimatedFadeProps {
  children: React.ReactNode;

  className?: string;

  direction?: "up" | "down" | "left" | "right" | "none";

  delay?: number;

  duration?: number;

  once?: boolean;
}

export function AnimatedFade({
  children,
  className,

  direction = "up",

  delay = 0,

  duration = 0.5,

  once = true,
}: AnimatedFadeProps) {
  const distance = 32;

  const variants: Variants = {
    hidden: {
      opacity: 0,

      x:
        direction === "left"
          ? distance
          : direction === "right"
          ? -distance
          : 0,

      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? -distance
          : 0,
    },

    visible: {
      opacity: 1,

      x: 0,

      y: 0,

      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}