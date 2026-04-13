"use client";
import React from "react";
import ProjectCard from "../_Component/ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import WaveText from "../_Component/WaveText/WaveText";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

export default function Projects() {
  return (
    <section className="mt-15 w-[90%] m-auto relative overflow-hidden">

      {/* Top border glow */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5 }}
        className="pointer-events-none absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A84CFF]/30 to-transparent"
      />

      {/* Ambient orb */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[300px] rounded-full bg-[#A84CFF] blur-3xl"
      />

      <div className="container relative z-10">

        {/* ── Title ── */}
        <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
            My{" "}
            <WaveText amplitude={7} duration={1} delay={0.1} className="text-[#A84CFF]">
              Projects
            </WaveText>
            <motion.span variants={lineGrow} className="absolute left-0 -bottom-4 w-full h-1 bg-gradient-to-r from-[#A84CFF] to-[#5F4BFF] rounded origin-left block" />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-gray-500 text-sm tracking-wider">
            Some of my recent work and case studies
          </motion.p>

          {/* Decorative dots row */}
          <motion.div variants={fadeUp} className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map(i => (
              <motion.span key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="w-1.5 h-1.5 rounded-full bg-[#A84CFF] inline-block"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="flex flex-wrap gap-7 w-full justify-center">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
