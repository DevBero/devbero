"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      {...animationProps}
      {...props}
      className={cn(
        "relative cursor-pointer rounded-full px-6 py-2 h-12 font-medium text-white flex items-center justify-center",
        "bg-primary hover:bg-primary/90",
        "transition-all duration-300",
        "shadow-lg hover:shadow-xl",
        className,
      )}
    >
      {/* Shimmer text mask */}
      <span
        className="relative inline-block text-sm tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* Shiny moving border/glow */}
      <span
        className="absolute inset-0 rounded-[inherit] p-px"
        style={{
          mask: "linear-gradient(#000,#000) content-box,linear-gradient(#000,#000)",
          WebkitMask:
            "linear-gradient(#000,#000) content-box,linear-gradient(#000,#000)",
          maskComposite: "exclude",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/40 calc(var(--x)+20%),var(--primary)/70 calc(var(--x)+25%),var(--primary)/40 calc(var(--x)+100%))",
        }}
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
