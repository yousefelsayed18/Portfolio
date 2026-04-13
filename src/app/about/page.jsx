"use client";
import React, { useEffect, useRef, useState } from "react";
import BrushIcon from "@mui/icons-material/Brush";
import DrawIcon from "@mui/icons-material/Draw";
import CardComponent from "../_Component/CardComponent/CardComponent";
import SkillBar from "../_Component/SkillBar/SkillBar";
import { Button } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { motion, useInView } from "framer-motion";
import { stats } from "../_Component/stateArr/stateArr";
import WaveText from "../_Component/WaveText/WaveText";

// ── Animated Counter ───────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / num;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= num) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Variants ──────────────────────────────────────────────────────────────────
const curtainLeft = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const curtainRight = {
  hidden: { clipPath: "inset(0 0 0 100%)", opacity: 0 },
  visible: { clipPath: "inset(0 0 0 0%)", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};
const serviceItem = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const cardPop = {
  hidden: { opacity: 0, scale: 0.7, rotate: -4 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const skillSlide = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  { icon: <BrushIcon className="text-[#A84CFF]" />, label: "Frontend Development" },
  { icon: <DrawIcon className="text-[#A84CFF]" />, label: "UI/UX Design" },
  { icon: <ArchitectureIcon className="text-[#A84CFF]" />, label: "Web Performance Optimization" },
];
const bar = [
  { value: "90", title: "Web Development" },
  { value: "95", title: "Api Integration" },
  { value: "85", title: "UI/UX Design" },
];

export default function About() {
  return (
    <section className="bg-[#0B0D19] py-20 relative overflow-hidden">

      {/* Diagonal decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A84CFF]/30 to-transparent"
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A84CFF]/20 to-transparent"
      />

      {/* Floating orbs */}
      <motion.div animate={{ y: [0, -25, 0], opacity: [0.04, 0.08, 0.04] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#A84CFF] blur-3xl" />
      <motion.div animate={{ y: [0, 20, 0], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#5F4BFF] blur-3xl" />

      <div className="w-[90%] mx-auto relative z-10">

        {/* ── Title — curtain reveal ── */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
            About{" "}
            <WaveText amplitude={7} duration={1} delay={0.1} className="text-[#A84CFF]">Me</WaveText>
            <motion.span variants={lineGrow} className="absolute left-0 -bottom-4 w-full h-1 bg-gradient-to-r from-[#A84CFF] to-[#5F4BFF] rounded origin-left block" />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-gray-500 text-sm tracking-wider uppercase">
            Let me introduce myself and what I do
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── Left — curtain from left ── */}
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
          >
            {/* Section tag */}
            <motion.div variants={curtainLeft} className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-[#A84CFF]" />
              <span className="text-[#A84CFF] text-xs uppercase tracking-[0.3em] font-medium">Who I am</span>
            </motion.div>

            <motion.h3 variants={curtainLeft} className="text-2xl md:text-4xl font-bold">
              <WaveText amplitude={6} duration={1.1} delay={0.06} className="text-white">
                Frontend Developer
              </WaveText>
            </motion.h3>

            <motion.p variants={fadeUp} className="mt-6 text-white/70 leading-relaxed text-sm md:text-base">
              I'm Yousef Elsayed, a Frontend Developer specialized in building
              modern, high-performance web applications using React and Next.js.
              I focus on creating clean, responsive, and user-friendly interfaces
              while paying strong attention to performance and accessibility.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">
              I enjoy transforming ideas and designs into real, scalable products,
              and I'm always eager to learn new technologies and improve my skills.
            </motion.p>

            {/* Services — staggered slide in */}
            <motion.div className="mt-10 flex flex-col gap-3 items-center lg:items-start" variants={stagger}>
              {services.map((s, i) => (
                <motion.div key={i} variants={serviceItem}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 cursor-default group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15, backgroundColor: "#A84CFF20" }}
                    transition={{ duration: 0.2 }}
                    className="p-2 rounded-lg bg-[#A84CFF]/10 flex"
                  >
                    {s.icon}
                  </motion.div>
                  <span className="text-white/70 group-hover:text-[#C27AFF] transition-colors duration-200 text-sm">{s.label}</span>
                  {/* Arrow appears on hover */}
                  <motion.span initial={{ opacity: 0, x: -5 }} whileHover={{ opacity: 1, x: 0 }} className="text-[#A84CFF] text-xs ml-auto">→</motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — curtain from right ── */}
          <motion.div className="w-full lg:w-1/2"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
          >
            {/* Stats with counter animation */}
            <motion.div variants={staggerFast} className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={cardPop}
                  whileHover={{ scale: 1.06, borderColor: "rgba(168,76,255,0.5)", boxShadow: "0 0 24px rgba(168,76,255,0.2)", transition: { duration: 0.25 } }}
                  className="bg-[#0f1420] border border-white/5 rounded-xl p-4 text-center group cursor-default"
                >
                  <div className="text-2xl font-bold text-[#A84CFF] group-hover:text-[#C27AFF] transition-colors">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </div>
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skill bars */}
            <motion.div variants={stagger} className="space-y-5">
              {bar.map((item, index) => (
                <motion.div key={index} variants={skillSlide}>
                  <SkillBar value={item.value} title={item.title} />
                </motion.div>
              ))}
            </motion.div>

            {/* CV Button */}
            <motion.div variants={curtainRight} className="text-center mt-10">
              <a href="/Yousef-Abdelmonem-Elsayed-CV.pdf" download target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Button sx={{
                    background: "linear-gradient(135deg, #A84CFF, #5F4BFF)",
                    color: "white", px: 5, py: 1.5,
                    borderRadius: "14px", fontWeight: 700, letterSpacing: "0.06em",
                    boxShadow: "0 0 30px rgba(168,76,255,0.4)",
                    "&:hover": { background: "linear-gradient(135deg, #9333EA, #4F46E5)", boxShadow: "0 0 45px rgba(168,76,255,0.6)" },
                    transition: "all 0.3s ease",
                  }}>
                    ↓ Download CV
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
