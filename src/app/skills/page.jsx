"use client";
import React from "react";
import CardComponent from "../_Component/CardComponent/CardComponent";
import { motion } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const sectionHeadVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const emojiVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardItem = {
  hidden: { opacity: 0, scale: 0.8, y: 25 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const sections = [
  {
    emoji: "🛠️",
    title: "Core Foundations",
    skills: [
      { label: "HTML", src: "/html.jpg" },
      { label: "CSS", src: "/css.jpeg" },
      { label: "JS", src: "/js.webp" },
      { label: "Bootstrap", src: "/boot.jpeg" },
    ],
  },
  {
    emoji: "🎨",
    title: "Frontend Mastery",
    skills: [
      { label: "TS", src: "/ts.png" },
      { label: "React", src: "/react.png" },
      { label: "Tailwind CSS", src: "/tailwand.png" },
      { label: "Next.JS", src: "/next.jpg" },
      { label: "Framer Motion", src: "/framer.jpeg" },
    ],
  },
  {
    emoji: "⚙️",
    title: "DevOps & Data",
    skills: [
      { label: "Git", src: "/git.png" },
      { label: "Firebase", src: "/fire.png" },
    ],
  },
];

// ── Section Block ─────────────────────────────────────────────────────────────

function SkillSection({ emoji, title, skills, isFirst }) {
  return (
    <div className={isFirst ? "" : "mt-16"}>
      {/* Section heading */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
      >
        <motion.span variants={emojiVariants} className="text-4xl inline-block">
          {emoji}
        </motion.span>
        <motion.h3
          variants={sectionHeadVariants}
          className="text-xl md:text-2xl font-semibold mt-2"
        >
          {title}
        </motion.h3>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-full flex justify-center my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={dividerVariants}
      >
        <span className="w-[50%] h-px bg-gray-600 block origin-center" />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={cardsContainerVariants}
      >
        {skills.map((skill, i) => (
          <motion.div key={i} variants={cardItem}>
            <CardComponent label={skill.label} src={skill.src} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section className="py-20 bg-[#0B0A17] relative overflow-hidden">

      {/* Ambient glows */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5 }}
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#A84CFF] opacity-[0.05] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }}
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-[#5F4BFF] opacity-[0.04] blur-3xl"
      />

      <div className="container w-[90%] mx-auto relative z-10">

        {/* ── Title ──────────────────────────────────────────────────── */}
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
            My <span className="text-[#A84CFF]">Skills</span>
            <motion.span
              variants={lineVariants}
              className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded origin-left block"
            />
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-gray-500">
            Technologies I work with and my proficiency level
          </motion.p>
        </motion.div>

        {/* ── Skill Sections ─────────────────────────────────────────── */}
        {sections.map((sec, i) => (
          <SkillSection
            key={i}
            emoji={sec.emoji}
            title={sec.title}
            skills={sec.skills}
            isFirst={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
