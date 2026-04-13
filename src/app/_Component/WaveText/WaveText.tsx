"use client";
import { motion } from "framer-motion";

export default function WaveText({
  children = "",
  className = "",
  amplitude = 8,
  duration = 1,
  delay = 0.06,
  style = {},
}) {
  const letters = String(children).split("");

  const letterVariant = {
    animate: (i) => ({
      y: [0, -amplitude, 0, amplitude, 0],
      transition: { duration, repeat: Infinity, ease: "easeInOut", delay: i * delay },
    }),
  };

  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", ...style }} aria-label={children}>
      {letters.map((letter, i) =>
        letter === " " ? (
          <span key={i} style={{ display: "inline-block", width: "0.3em" }} />
        ) : (
          <motion.span
            key={i} custom={i} variants={letterVariant} animate="animate"
            className={className} style={{ display: "inline-block" }}
          >
            {letter}
          </motion.span>
        )
      )}
    </span>
  );
}
