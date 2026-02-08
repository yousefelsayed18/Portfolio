import React from "react";
import ProjectCard from "../_Component/ProjectCard/ProjectCard";
import { ProjectData } from "../_Component/stateArr/stateArr";

export default function Projects() {
  return (
    <section className=" mt-15 w-[90%] m-auto">
      <div className=" container">
        <div className=" mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-center">
            My <span className=" text-[#A84CFF]">Projects</span>
            <span className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded"></span>
          </h2>
          <p className="mt-6 text-gray-600">
            Some of my recent work and case studies
          </p>
        </div>
        <div className=" flex flex-wrap gap-7 w-full justify-center">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
