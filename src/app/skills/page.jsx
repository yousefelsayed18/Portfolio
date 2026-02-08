import React from "react";
import CardComponent from "../_Component/CardComponent/CardComponent";

export default function Skills() {
  return (
    <section className="py-20 bg-a-200 bg-[#0B0A17]">
      <div className="container w-[90%] mx-auto">

        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            My <span className="text-[#A84CFF]">Skills</span>
            <span className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded"></span>
          </h2>
          <p className="mt-6 text-gray-600">
            Technologies I work with and my proficiency level
          </p>
        </div>

        {/* ===== Core Foundations ===== */}
        <div className="text-center">
          <span className="text-4xl">🛠️</span>
          <h1 className="text-xl md:text-2xl font-semibold mt-2">
            Core Foundations
          </h1>
        </div>

        <div className="w-full flex justify-center my-10">
          <span className="w-[50%] h-px bg-gray-600"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-center">
          <CardComponent label="HTML" src="/html.jpg" />
          <CardComponent label="CSS" src="/css.jpg" />
          <CardComponent label="JS" src="/js.webp" />
          <CardComponent label="Bootstrap" src="/boot.jpg" />
        </div>

        {/* ===== Frontend Mastery ===== */}
        <div className="text-center mt-16">
          <span className="text-4xl">🎨</span>
          <h1 className="text-xl md:text-2xl font-semibold mt-2">
            Frontend Mastery
          </h1>
        </div>

        <div className="w-full flex justify-center my-10">
          <span className="w-[50%] h-px bg-gray-600"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-center">
          <CardComponent label="TS" src="/ts.png" />
          <CardComponent label="React" src="/react.png" />
          <CardComponent label="Tailwind CSS" src="/tailwand.jpg" />
          <CardComponent label="Next.JS" src="/next.png" />
          <CardComponent label="Framer Motion" src="/framer.jpeg" />
        </div>

        {/* ===== DevOps & Data ===== */}
        <div className="text-center mt-16">
          <span className="text-4xl">⚙️</span>
          <h1 className="text-xl md:text-2xl font-semibold mt-2">
            DevOps & Data
          </h1>
        </div>

        <div className="w-full flex justify-center my-10">
          <span className="w-[50%] h-px bg-gray-600"></span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-center">
          <CardComponent label="Git" src="/git.png" />
          <CardComponent label="Firebase" src="/fire.jpeg" />
        </div>

      </div>
    </section>
  );
}
