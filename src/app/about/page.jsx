"use client"
import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import DrawIcon from "@mui/icons-material/Draw";
import CardComponent from "../_Component/CardComponent/CardComponent";
import SkillBar from "../_Component/SkillBar/SkillBar";
import { Button } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { motion } from "framer-motion";
import { stats } from "../_Component/stateArr/stateArr";

export default function About() {


  const bar = [
    { value: "90", title: "Web Development" },
    { value: "75", title: "Mobile Development" },
    { value: "85", title: "UI/UX Design" },
  ];

  return (
    <section className=" bg-[#0B0D19] py-20">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
      >
        <div className="w-[90%] mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              About <span className=" text-[#A84CFF]">Me</span>
              <span className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded"></span>
            </h2>
            <p className="mt-6 text-gray-600">
              Let me introduce myself and what I do
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-bold">
                Frontend Developer
              </h3>

              <p className="mt-6 text-gray-700 leading-relaxed">
                I’m Yousef Elsayed, a Frontend Developer specialized in building
                modern, high-performance web applications using React and
                Next.js. I focus on creating clean, responsive, and
                user-friendly interfaces while paying strong attention to
                performance and accessibility.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                I enjoy transforming ideas and designs into real, scalable
                products, and I’m always eager to learn new technologies and
                improve my skills.
              </p>

              {/* Services */}
              <div className="mt-8 flex flex-col gap-4 items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <BrushIcon className="text-gray-400" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <DrawIcon className="text-gray-400" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArchitectureIcon className="text-gray-400" />
                  <span>Web Performance Optimization</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/2">
              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center mb-10 text-center">
                {stats.map((stat, index) => (
                  <CardComponent
                    key={index}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {bar.map((item, index) => (
                  <SkillBar key={index} value={item.value} title={item.title} />
                ))}
              </div>

              {/* CV */}
              <div className="text-center mt-10">
                <a
                  href="/Yousef-Abdelmonem-Elsayed-CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#333" },
                    }}
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
