"use client";
import React from "react";
import CardComponent from "../_Component/CardComponent/CardComponent";
import { motion } from "framer-motion";
import WaveText from "../_Component/WaveText/WaveText";

// ── Variants ──────────────────────────────────────────────────────────────────
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};
const emojiPop = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] } },
};
const headReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const cardPop = {
  hidden: { opacity: 0, scale: 0.75, rotate: -3 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

const sections = [
  {
    emoji: "🛠️", title: "Core Foundations", color: "#FF9F43",
    skills: [
      { label: "HTML", src: "/icons/html.webp" }, { label: "CSS", src: "/icons/css.webp" },
      { label: "JavaScript", src: "/icons/js.webp" }, { label: "Bootstrap", src: "/icons/bootstrap.webp" },
      { label: "Sass", src: "/icons/sass.svg" },
    ],
  },
  {
    emoji: "🎨", title: "Frontend Mastery", color: "#A84CFF",
    skills: [
      { label: "TypeScript", src: "/icons/ts.webp" }, { label: "React", src: "/icons/react.webp" },
      { label: "Next.js", src: "/icons/next.webp" }, { label: "Redux Toolkit", src: "/icons/redux.svg" },
      { label: "Material UI", src: "/icons/materialui.svg" }, { label: "Tailwind CSS", src: "/icons/tailwind.webp" },
      { label: "Framer Motion", src: "/icons/framer.webp" },
    ],
  },
  {
    emoji: "⚙️", title: "DevOps & Data", color: "#26de81",
    skills: [
      { label: "Git", src: "/icons/git.webp" }, { label: "Firebase", src: "/icons/firebase.webp" },
      { label: "Supabase", src: "/icons/supabase.webp" },
    ],
  },
];

function SkillSection({ emoji, title, color, skills, isFirst }) {
  return (
    <div className={isFirst ? "" : "mt-20"}>
      {/* Section heading */}
      <motion.div className="text-center"
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-60px" }} variants={stagger}
      >
        {/* Emoji with spring pop */}
        <motion.div variants={emojiPop} className="inline-block">
          <motion.span
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: title.length % 3 }}
            className="text-5xl inline-block"
          >
            {emoji}
          </motion.span>
        </motion.div>

        <motion.h3 variants={headReveal} className="text-xl md:text-2xl font-bold mt-3">
          <WaveText amplitude={5} duration={1.1} delay={0.07} className="text-white">
            {title}
          </WaveText>
        </motion.h3>

        {/* Colored tag under title */}
        <motion.div variants={headReveal} className="flex justify-center mt-2">
          <span style={{ backgroundColor: `${color}20`, color, borderColor: `${color}40` }}
            className="text-xs px-3 py-0.5 rounded-full border font-medium uppercase tracking-widest">
            {skills.length} Technologies
          </span>
        </motion.div>
      </motion.div>

      {/* Animated glowing divider */}
      <motion.div
        className="w-full flex justify-center my-8"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <div className="relative w-[50%] h-px">
          <span className="absolute inset-0 bg-gray-700" />
          <motion.span
            initial={{ scaleX: 0, x: "-50%" }} whileInView={{ scaleX: 1, x: "0%" }}
            viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: color }}
            className="absolute inset-0 opacity-60 origin-left block"
          />
        </div>
      </motion.div>

      {/* Cards with fast stagger */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-center"
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-40px" }} variants={staggerFast}
      >
        {skills.map((skill, i) => (
          <motion.div key={i} variants={cardPop}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <CardComponent label={skill.label} src={skill.src} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 bg-[#0B0A17] relative overflow-hidden">

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle, rgba(168,76,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      {/* Animated ambient orbs */}
      <div className="orb pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#A84CFF] opacity-[0.04] blur-3xl"
        style={{ "--dy": "-30px", "--s": 1.1, "--dur": "10s" }} />
      <div className="orb pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-[#5F4BFF] opacity-[0.03] blur-3xl"
        style={{ "--dy": "25px", "--s": 1.08, "--dur": "12s", "--delay": "3s" }} />

      <div className="container w-[90%] mx-auto relative z-10">

        {/* ── Title ── */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#A84CFF]/50" />
            <span className="text-[#A84CFF] text-xs uppercase tracking-[0.3em] font-medium">What I know</span>
            <span className="w-8 h-px bg-[#A84CFF]/50" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
            My{" "}
            <WaveText amplitude={7} duration={1} delay={0.1} className="text-[#A84CFF]">Skills</WaveText>
            <motion.span variants={lineGrow} className="absolute left-0 -bottom-4 w-full h-1 bg-gradient-to-r from-[#A84CFF] to-[#5F4BFF] rounded origin-left block" />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-gray-500 text-sm tracking-wider">
            Technologies I work with and my proficiency level
          </motion.p>
        </motion.div>

        {sections.map((sec, i) => (
          <SkillSection key={i} {...sec} isFirst={i === 0} />
        ))}
      </div>
    </section>
  );
}
