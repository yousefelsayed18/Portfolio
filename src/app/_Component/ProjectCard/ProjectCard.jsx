"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ProjectData } from "../stateArr/stateArr";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

// ── 3D Tilt Hook ──────────────────────────────────────────────────────────────

function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300, damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300, damping: 30,
  });

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ── Single Card ───────────────────────────────────────────────────────────────

function ProjectCardItem({ project, index }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => { onMouseLeave(); setHovered(false); }}
        onMouseEnter={() => setHovered(true)}
        className="relative"
      >
        {/* Glow ring */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            boxShadow: "0 0 36px 6px rgba(168, 76, 255, 0.3)",
            borderRadius: 12,
            zIndex: 0,
          }}
        />

        <Card
          sx={{
            maxWidth: 420,
            cursor: "pointer",
            backgroundColor: "#151C2A",
            color: "white",
            border: "1px solid rgba(168,76,255,0.1)",
            borderRadius: "12px",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            transition: "border-color 0.3s ease",
            "&:hover": { borderColor: "rgba(168,76,255,0.4)" },
          }}
        >
          {/* Shimmer sweep */}
          <motion.div
            animate={hovered ? { x: "200%", opacity: 1 } : { x: "-100%", opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(168,76,255,0.1) 50%, transparent 60%)",
              zIndex: 10,
            }}
          />

          {/* Image with zoom */}
          <div className="relative w-full h-48 overflow-hidden">
            <motion.div
              animate={{ scale: hovered ? 1.07 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151C2A] via-transparent to-transparent opacity-60" />

            {/* Index badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.4, duration: 0.4 }}
              className="absolute top-3 right-3 bg-[#A84CFF] text-white text-xs font-bold px-3 py-1 rounded-full"
            >
              0{index + 1}
            </motion.div>
          </div>

          <CardContent sx={{ pb: 1 }}>
            <motion.div
              animate={{ color: hovered ? "#C27AFF" : "#ffffff" }}
              transition={{ duration: 0.25 }}
            >
              <Typography gutterBottom variant="h5" sx={{ fontWeight: 700, fontSize: "1.15rem", color: "inherit" }}>
                {project.title}
              </Typography>
            </motion.div>

            <Typography variant="body2" sx={{ color: "#958692", lineHeight: 1.6, mt: 0.5 }}>
              {project.discribtion}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1.5, fontSize: "11px" }}>
              <span style={{ color: "#A84CFF", fontWeight: 600 }}>Features</span>
              {" "}: {project.feactuers}
            </Typography>
          </CardContent>

          <CardActions sx={{ px: 2, pb: 2 }}>
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-[#BD7AFF] font-semibold text-sm"
            >
              View Project
              <motion.span
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-block"
              >
                →
              </motion.span>
            </motion.a>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function ProjectCard() {
  return (
    <>
      {ProjectData.map((project, index) => (
        <ProjectCardItem key={index} project={project} index={index} />
      ))}
    </>
  );
}
