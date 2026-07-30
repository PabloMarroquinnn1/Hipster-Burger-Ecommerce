"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025, delayChildren: 0.15 },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.42em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type AnimatedHeadlineProps = {
  words: string[];
  highlightIndex?: number;
  className?: string;
};

export function AnimatedHeadline({ words, highlightIndex, className }: AnimatedHeadlineProps) {
  return (
    <motion.h1
      className={cn("glitch-hover", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className={cn(
            "inline-block mr-[0.22em]",
            wordIndex === highlightIndex &&
              "text-on-surface [-webkit-text-stroke:2px_var(--color-on-primary)]",
          )}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
