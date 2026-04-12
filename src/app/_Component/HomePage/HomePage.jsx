"use client";
import React from "react";
import me from "../../Images/me.png";
import Image from "next/image";
import { motion } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.4 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="container w-[90%] m-auto min-h-screen relative overflow-hidden">

      {/* Ambient background glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-white"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        {/* ── Content ────────────────────────────────────────────────────── */}
        <div className="content pt-2 text-center md:text-left flex flex-col gap-6">

          {/* Greeting line */}
          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <span className="text-sm uppercase tracking-[0.3em] opacity-50 font-medium">
              Welcome to my portfolio
            </span>
            {/* Animated underline */}
            <motion.div
              variants={lineVariants}
              className="h-px w-32 bg-white opacity-30 origin-left mx-auto md:mx-0"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl leading-tight"
          >
            Hi! I&apos;m{" "}
            <motion.span
              variants={badgeVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(255,255,255,0.25)",
                transition: { duration: 0.2 },
              }}
              className="bg-white text-black text-3xl md:text-5xl rounded-4xl px-3 py-1 font-bold inline-block mt-2 md:mt-0 cursor-default"
            >
              Yousef Elsayed
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 text-4xl md:text-6xl"
          >
            <span className="text-5xl md:text-7xl">I&apos;m a</span>
            <motion.span
              variants={badgeVariants}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(47,47,47,0.6)",
                transition: { duration: 0.2 },
              }}
              className="bg-[#2F2F2F] text-white text-3xl md:text-5xl rounded-4xl px-3 py-1 font-bold cursor-default"
            >
              Frontend Developer
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-2xl w-full md:w-[70%] lg:w-[50%] mx-auto md:mx-0 opacity-70 leading-relaxed"
          >
            I build engaging digital experiences and advanced web applications
            that combine high performance with creative design
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-white text-black font-bold rounded-4xl text-base cursor-pointer"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 border border-white/30 text-white font-medium rounded-4xl text-base cursor-pointer"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* ── Image ──────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeLeft}
          className="image flex justify-center relative"
        >
          {/* Floating glow ring behind image */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-4xl bg-white/10 blur-2xl"
          />

          {/* Image itself */}
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.03,
              rotate: 1,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            className="relative z-10"
          >
            <Image
              className="rounded-4xl w-[250px] md:w-[400px] shadow-2xl"
              src={me}
              width={400}
              height={300}
              alt="Yousef Elsayed"
              priority
            />

            {/* Floating badge on image */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-4 bg-[#2F2F2F] text-white text-xs font-semibold px-4 py-2 rounded-2xl shadow-lg border border-white/10"
            >
              ✦ Available for work
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-white"
        />
      </motion.div>
    </div>
  );
}
