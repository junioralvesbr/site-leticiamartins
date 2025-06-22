"use client";
import React, { ElementType, Children } from "react";
import { AnimatePresence, motion, Variants, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface FlipTextProps extends MotionProps {
  /** The duration of the animation */
  duration?: number;
  /** The delay between each character */
  delayMultiple?: number;
  /** The variants of the animation */
  framerProps?: Variants;
  /** The class name of the component */
  className?: string;
  /** The element type of the component */
  as?: ElementType;
  /** The children of the component */
  children: React.ReactNode;
  /** The variants of the animation */
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08,

  className,
  as: Component = "span",
  variants,
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);
  const characters = Children.toArray(children).join("").split("");

  return (
    <div className="flex space-x-1">
      <AnimatePresence>
        {characters.map((char, i) => (
          <MotionComponent
            key={i}
            initial="hidden"
            whileInView="visible"
            // animate="visible"
            exit="hidden"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            viewport={{ once: true, amount: 0.5 }}
            className={cn("origin-center drop-shadow-sm font-anton font-bold text-deepViolet-700 inline-block text-4xl sm:text-6xl",
              className)}
            {...props}
          >
            {char}
          </MotionComponent>
        ))}
      </AnimatePresence>
    </div>
  );
}
