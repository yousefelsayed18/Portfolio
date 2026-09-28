"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Below-the-fold sections are split into their own chunks and mounted right
// after the hero has painted, so the first screen loads and hydrates fast.
const About = dynamic(() => import("../../about/page"), { ssr: false });
const Experience = dynamic(() => import("../../experience/page"), { ssr: false });
const Skills = dynamic(() => import("../../skills/page"), { ssr: false });
const Projects = dynamic(() => import("../../projects/page"), { ssr: false });
const Contact = dynamic(() => import("../../contact/page"), { ssr: false });

export default function HomeSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(start, 250);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <div aria-hidden="true" style={{ minHeight: "300vh" }} />;

  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
