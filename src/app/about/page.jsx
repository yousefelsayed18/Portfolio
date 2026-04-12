"use client";
import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import DrawIcon from "@mui/icons-material/Draw";
import CardComponent from "../_Component/CardComponent/CardComponent";
import SkillBar from "../_Component/SkillBar/SkillBar";
import { Button } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { motion } from "framer-motion";
import { stats } from "../_Component/stateArr/stateArr";

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const serviceVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const serviceItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const skillBarVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const skillItem = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

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

      {/* Ambient purple glow top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A84CFF] opacity-[0.06] blur-3xl"
      />
      {/* Ambient purple glow bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#A84CFF] opacity-[0.05] blur-3xl"
      />

      <div className="w-[90%] mx-auto relative z-10">

        {/* ── Title ─────────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold relative inline-block"
          >
            About <span className="text-[#A84CFF]">Me</span>
            <motion.span
              variants={lineVariants}
              className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded origin-left block"
            />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-gray-500">
            Let me introduce myself and what I do
          </motion.p>
        </motion.div>

        {/* ── Content ───────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.h3
              variants={fadeLeft}
              className="text-2xl md:text-4xl font-bold"
            >
              Frontend Developer
            </motion.h3>

            <motion.p variants={fadeLeft} className="mt-6 text-white leading-relaxed">
              I'm Yousef Elsayed, a Frontend Developer specialized in building
              modern, high-performance web applications using React and Next.js.
              I focus on creating clean, responsive, and user-friendly interfaces
              while paying strong attention to performance and accessibility.
            </motion.p>

            <motion.p variants={fadeLeft} className="mt-4 text-white leading-relaxed">
              I enjoy transforming ideas and designs into real, scalable products,
              and I'm always eager to learn new technologies and improve my skills.
            </motion.p>

            {/* Services */}
            <motion.div
              className="mt-8 flex flex-col gap-4 items-center lg:items-start"
              variants={serviceVariants}
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={serviceItem}
                  whileHover={{
                    x: 6,
                    color: "#A84CFF",
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-3 cursor-default group"
                >
                  <motion.span
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    {s.icon}
                  </motion.span>
                  <span className="group-hover:text-[#A84CFF] transition-colors duration-200">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {/* Stats Cards */}
            <motion.div
              variants={cardContainerVariants}
              className="flex flex-wrap gap-6 justify-center mb-10 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardItem}
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 0 24px rgba(168, 76, 255, 0.3)",
                    transition: { duration: 0.25 },
                  }}
                >
                  <CardComponent value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>

            {/* Skill Bars */}
            <motion.div
              variants={skillBarVariants}
              className="space-y-6"
            >
              {bar.map((item, index) => (
                <motion.div key={index} variants={skillItem}>
                  <SkillBar value={item.value} title={item.title} />
                </motion.div>
              ))}
            </motion.div>

            {/* CV Button */}
            <motion.div
              variants={fadeRight}
              className="text-center mt-10"
            >
              <a
                href="/Yousef-Abdelmonem-Elsayed-CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <Button
                    sx={{
                      backgroundColor: "#A84CFF",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      boxShadow: "0 0 20px rgba(168, 76, 255, 0.35)",
                      "&:hover": {
                        backgroundColor: "#9333EA",
                        boxShadow: "0 0 30px rgba(168, 76, 255, 0.55)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Download CV
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
