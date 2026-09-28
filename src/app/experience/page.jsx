"use client";
import React from "react";
import { motion } from "framer-motion";
import WaveText from "../_Component/WaveText/WaveText";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

const experience = [
  {
    role: "Front-End Developer",
    company: "Boxit",
    period: "May 2026 – Present",
    current: true,
    points: [
      "Build and maintain the Admin Operations Dashboard and customer-facing web application for Boxit's live storage and logistics platform, serving dozens of users.",
      "Designed and built a library of reusable, responsive UI components adopted across multiple product screens, reducing duplicated code and speeding up new feature development.",
      "Integrated RESTful APIs with RTK Query, implementing data fetching, caching, and state synchronization across core features.",
      "Collaborate with design, backend, and QA teams in Agile sprints to ship features to production.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Material UI"],
  },
  {
    role: "Front-End Developer Intern",
    company: "Beetleware",
    period: "Feb 2025 – Jun 2025",
    current: false,
    points: [
      "Built UI features with React.js across 5 small projects, from design handoff through deployment, under the guidance of senior developers.",
      "Worked with the team to build a large dashboard as the final internship project, integrating third-party APIs and resolving bugs.",
      "Worked in an Agile environment using Git, contributing to sprint planning and code reviews.",
    ],
    tech: ["React.js", "Git", "REST APIs", "Agile"],
  },
];

const education = [
  { title: "Information Technology Institute (ITI)", detail: "Intensive Front-End Development Track", period: "2025 – 2026" },
  { title: "Higher Institute of Computers and Information, Tanta", detail: "", period: "2022 – 2025" },
];

function Chip({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-[#A84CFF]/10 text-[#C27AFF] border border-[#A84CFF]/20">
      {children}
    </span>
  );
}

export default function Experience() {
  return (
    <section className="py-20 bg-[#0A0A15] relative overflow-hidden">
      <div
        className="orb-fade pointer-events-none absolute top-10 -right-32 w-[400px] h-[400px] rounded-full bg-[#5F4BFF] blur-3xl"
        style={{ "--dy": "20px", "--o1": 0.03, "--o2": 0.06, "--dur": "10s" }}
      />

      <div className="w-[90%] max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#A84CFF]/50" />
            <span className="text-[#A84CFF] text-xs uppercase tracking-[0.3em] font-medium">My journey</span>
            <span className="w-8 h-px bg-[#A84CFF]/50" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
            Work{" "}
            <WaveText amplitude={7} duration={1} delay={0.1} className="text-[#A84CFF]">Experience</WaveText>
            <motion.span variants={lineGrow} className="absolute left-0 -bottom-4 w-full h-1 bg-gradient-to-r from-[#A84CFF] to-[#5F4BFF] rounded origin-left block" />
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-gray-500 text-sm tracking-wider">
            Where I have worked and what I have built
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[#A84CFF] via-[#5F4BFF]/40 to-transparent" />

          {experience.map((job) => (
            <motion.div
              key={job.company}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute -left-[34px] top-7 flex w-3 h-3">
                {job.current && <span className="ping-soft absolute inset-0 rounded-full bg-[#A84CFF]" />}
                <span className="relative w-3 h-3 rounded-full bg-[#A84CFF] ring-4 ring-[#0A0A15]" />
              </span>

              <div className="bg-[#0e1422] border border-white/5 rounded-2xl p-6 md:p-8 transition-colors duration-300 hover:border-[#A84CFF]/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-[#C27AFF] font-semibold mt-0.5">{job.company}</p>
                  </div>
                  <span className="self-start text-xs px-3 py-1 rounded-full border border-white/10 text-white/60 whitespace-nowrap flex items-center gap-2">
                    {job.current && <span className="w-1.5 h-1.5 rounded-full bg-green-400" />}
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A84CFF] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tech.map((t) => <Chip key={t}>{t}</Chip>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
        >
          <h3 className="text-center text-sm uppercase tracking-[0.3em] text-white/40 mb-6">Education</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((ed) => (
              <div key={ed.title} className="bg-[#0e1422] border border-white/5 rounded-xl p-5 hover:border-[#A84CFF]/30 transition-colors duration-300">
                <p className="font-semibold text-white text-sm">{ed.title}</p>
                {ed.detail && <p className="text-white/55 text-sm mt-1">{ed.detail}</p>}
                <p className="text-[#C27AFF] text-xs mt-3">{ed.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
