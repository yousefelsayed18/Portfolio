"use client";
import { motion, Variants } from "framer-motion";

type Props = {
  children?: string;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  style?: React.CSSProperties;
};

export default function WaveText({
  children = "",
  className = "",
  amplitude = 8,
  duration = 1,
  delay = 0.06,
  style = {},
}: Props) {
  const letters = String(children).split("");

  const letterVariant: Variants = {
    animate: (i: number) => ({
      y: [0, -amplitude, 0, amplitude, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut" as const, // ✅ الحل هنا
        delay: i * delay,
      },
    }),
  };

  return (
    <span
      style={{ display: "inline-flex", flexWrap: "wrap", ...style }}
      aria-label={children}
    >
      {letters.map((letter, i) =>
        letter === " " ? (
          <span key={i} style={{ display: "inline-block", width: "0.3em" }} />
        ) : (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariant}
            animate="animate"
            className={className}
            style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        )
      )}
    </span>
  );
}