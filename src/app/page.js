import Image from "next/image";
import HomePage from "./_Component/HomePage/HomePage";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <HomePage/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
 
  );
}
