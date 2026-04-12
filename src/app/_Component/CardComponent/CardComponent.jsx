"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// ── Variants ──────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: 6,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const glowVariants = {
  rest: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35 },
  },
};

const valueVariants = {
  rest: { color: "#9491FF" },
  hover: {
    color: "#A84CFF",
    transition: { duration: 0.25 },
  },
};

// ── 3D Tilt Hook ──────────────────────────────────────────────────────────────

function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CardComponent({ label, src, value }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="relative"
      >
        {/* Purple glow on hover */}
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            boxShadow: "0 0 32px 6px rgba(168, 76, 255, 0.35)",
            borderRadius: 12,
            zIndex: 0,
          }}
        />

        <Card
          sx={{
            backgroundColor: "#151B28",
            color: "#9491FF",
            minWidth: 200,
            cursor: "pointer",
            border: "1px solid rgba(168, 76, 255, 0.08)",
            borderRadius: "12px",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            transition: "border-color 0.3s ease",
            "&:hover": {
              borderColor: "rgba(168, 76, 255, 0.35)",
            },
          }}
        >
          {/* Shimmer sweep on hover */}
          <motion.div
            variants={{
              rest: { x: "-100%", opacity: 0 },
              hover: {
                x: "200%",
                opacity: 1,
                transition: { duration: 0.6, ease: "easeInOut" },
              },
            }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(168,76,255,0.12) 50%, transparent 60%)",
              zIndex: 2,
            }}
          />

          <CardContent className="flex flex-col items-center gap-2 relative z-10">
            {src && (
              <motion.div variants={imageVariants} className="mb-1">
                <CardMedia
                  component="img"
                  image={src}
                  alt={label}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            )}

            {value && (
              <motion.div variants={valueVariants}>
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: "inherit",
                  }}
                >
                  {value}
                </Typography>
              </motion.div>
            )}

            <Typography
              sx={{
                fontSize: "0.82rem",
                color: "rgba(148, 145, 255, 0.6)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {label}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
