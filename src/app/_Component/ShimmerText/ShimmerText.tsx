// _Component/ShimmerText/ShimmerText.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in wrapper: wraps any text/children in an infinite shimmer gradient.
// Usage:
//   <ShimmerText>Frontend Developer</ShimmerText>
//   <ShimmerText color="white">Yousef Elsayed</ShimmerText>
//   <ShimmerText from="#A84CFF" via="#C27AFF" to="#5F4BFF">My Skills</ShimmerText>
// ─────────────────────────────────────────────────────────────────────────────

"use client";
import { motion } from "framer-motion";

export default function ShimmerText({
  children,
  className = "",
  // gradient stops — override to match any section palette
  from = "#A84CFF",
  via = "#E0AAFF",
  to = "#5F4BFF",
  // animation speed in seconds
  duration = 2.8,
  // any extra inline style
  style = {},
}) {
  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        backgroundImage: `linear-gradient(90deg, ${from} 0%, ${via} 40%, ${to} 60%, ${from} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        ...style,
      }}
      animate={{ backgroundPosition: ["0% center", "200% center"] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
