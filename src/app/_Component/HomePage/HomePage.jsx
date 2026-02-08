"use client";
import React from "react";
import me from "../../Images/me.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="container w-[90%] m-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="pt-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="content pt-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl">
              Hi! I'm{" "}
              <span className="bg-white text-black text-3xl md:text-5xl rounded-4xl p-2 font-bold inline-block mt-2 md:mt-0">
                Yousef Elsayed
              </span>
            </h1>

            <h1 className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4 text-4xl md:text-6xl">
              <span className="text-5xl md:text-7xl">I'm a</span>
              <span className="bg-[#2F2F2F] text-white text-3xl md:text-5xl rounded-4xl p-2 font-bold">
                Frontend Developer
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-2xl w-full md:w-[70%] lg:w-[50%] mx-auto md:mx-0">
              I build engaging digital experiences and advanced web applications
              that combine high performance with creative design
            </p>
          </div>

          {/* Image */}
          <div className="image flex justify-center">
            <Image
              className="rounded-4xl w-[250px] md:w-[400px]"
              src={me}
              width={400}
              height={300}
              alt="yousef"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
