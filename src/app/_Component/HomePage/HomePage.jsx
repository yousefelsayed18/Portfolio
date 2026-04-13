"use client";
import React, { useRef, useState } from "react";
import me from "../../Images/me.png";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import WaveText from "../WaveText/WaveText";


// ── Variants ──────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 } },
};
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -6 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ── 3D Tilt ────────────────────────────────────────────────────────────────
function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 });
  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ── Magnetic Button ────────────────────────────────────────────────────────
function MagneticButton({ children, className, onClick }) {
  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });
  const onMouseMove = (e) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.button
      ref={btnRef} style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.95 }} onClick={onClick} className={className}
    >
      {children}
    </motion.button>
  );
}

// ── Floating Orb ───────────────────────────────────────────────────────────
function FloatingOrb({ className, delay = 0, duration = 6 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function HomePage() {
  const tilt = useTilt();

  return (
    <div className="container w-[90%] m-auto min-h-screen relative overflow-hidden p-3">

      {/* Floating ambient orbs */}
      <FloatingOrb className="w-[400px] h-[400px] -top-40 -right-20 bg-white opacity-[0.04]" delay={0} duration={7} />
      <FloatingOrb className="w-[250px] h-[250px] top-1/2 -left-20 bg-[#A84CFF] opacity-[0.06]" delay={2} duration={9} />
      <FloatingOrb className="w-[180px] h-[180px] bottom-20 right-1/4 bg-[#5F4BFF] opacity-[0.05]" delay={1} duration={6} />

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <motion.div
        variants={containerVariants} initial="hidden" animate="visible"
        className="pt-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        {/* ── Content ── */}
        <div className="content pt-2 text-center md:text-left flex flex-col gap-6 flex-1">

          {/* Tag line with animated dash */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 justify-center md:justify-start">
            <motion.span
              animate={{ width: ["0px", "32px"] }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-white/40 block"
            />
            <span className="text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
              Portfolio 2025
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl leading-tight font-bold">
            Hi! I&apos;m{" "}
            <motion.span
              variants={badgeVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,255,255,0.3)", transition: { duration: 0.2 } }}
              className="bg-white text-black text-3xl md:text-5xl rounded-2xl px-3 py-1 font-bold inline-block mt-2 md:mt-0 cursor-default"
            >
              Yousef Elsayed
            </motion.span>
          </motion.h1>

          {/* Role with Wave */}
          <motion.h2 variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-4xl md:text-6xl font-bold">
            <span className="text-5xl md:text-7xl text-white/80">I&apos;m a</span>
            <motion.span
              variants={badgeVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(168,76,255,0.5)", transition: { duration: 0.2 } }}
              className="bg-[#1a0a2e] border border-[#A84CFF]/40 text-3xl md:text-5xl rounded-2xl px-4 py-2 font-bold cursor-default"
            >
              <WaveText amplitude={6} duration={1.1} delay={0.07} className="text-[#C27AFF]">
                Frontend Developer
              </WaveText>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg md:text-xl w-full md:w-[70%] lg:w-[55%] mx-auto md:mx-0 text-white/55 leading-relaxed">
            I build engaging digital experiences and advanced web applications
            that combine high performance with creative design
          </motion.p>

          {/* Magnetic CTAs */}
          {/* <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
            <MagneticButton className="px-8 py-3.5 bg-white text-black font-bold rounded-full text-sm tracking-wide cursor-pointer">
              View My Work ↗
            </MagneticButton>
            <MagneticButton className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full text-sm tracking-wide cursor-pointer backdrop-blur-sm">
              Contact Me
            </MagneticButton>
          </motion.div> */}

          {/* Stats row */}
          <motion.div variants={fadeUp} className="flex gap-8 justify-center md:justify-start mt-2">
            {[["10+", "Projects"], ["1+", "Years Exp"], ["100%", "Passion"]].map(([val, label]) => (
              <div key={label} className="text-center md:text-left">
                <div className="text-xl font-bold text-white">{val}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Image with 3D tilt ── */}
        <motion.div variants={fadeLeft} className="flex justify-center relative flex-shrink-0" style={{ perspective: 1000 }}>
          {/* Rotating ring behind image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] rounded-3xl border border-dashed border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-40px] rounded-3xl border border-dashed border-[#A84CFF]/10"
          />

          <motion.div
            ref={tilt.ref} style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}
            className="relative z-10"
          >
            {/* Glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-[#A84CFF] blur-2xl"
            />
            <Image
              className="rounded-2xl w-[240px] md:w-[380px] relative z-10 shadow-2xl"
              src={me} width={380} height={380} alt="Yousef Elsayed" priority
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-6 bg-[#1a0a2e] border border-[#A84CFF]/30 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg z-20 flex items-center gap-2"
            >
              <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                🟢
              </motion.span>
              Available for work
            </motion.div>
            {/* Tech stack floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 -right-6 bg-[#1a0a2e] border border-white/10 text-white/70 text-xs px-3 py-2 rounded-xl shadow-lg z-20"
            >
              React · Next.js · TS
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </div>
  );
}
