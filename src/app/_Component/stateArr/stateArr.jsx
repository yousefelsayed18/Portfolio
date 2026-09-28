import project1 from "../../Images/p1.webp";
import project2 from "../../Images/p2.webp";
import project3 from "../../Images/p3.webp";
import project4 from "../../Images/p4.webp";
import project5 from "../../Images/p5.webp";
import project6 from "../../Images/p6.webp";
import project7 from "../../Images/p7.webp";
import project9 from "../../Images/p9.webp";
import perume from "../../Images/perfume.webp";
export const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "1+", label: "Live Production App" },
];

export const ProjectData = [
  {
    title: "Boxit Web App",
    featured: true,
    discribtion:
      "Production admin operations dashboard and customer-facing web app for a storage & logistics platform, used by dozens of users.",
    feactuers:
      "React · Next.js · TypeScript · Redux Toolkit · RTK Query · Material UI",
    // add src: boxitImg (import boxitImg from "../../Images/boxit.webp") when you have a screenshot
    url: "https://www.boxitstorage.com/",
  },
  {
    title: "Perfume Store E-commerce Website",
    featured: true,
    discribtion:
      "Built a responsive e-commerce app with product listing, cart, authentication, and API integration.",
    feactuers:
      "Responsive UI · dynamic products · search & filtering · cart system · user authentication · API integration",
    src: perume,
    url: "https://perfume-store-ajx2.vercel.app/",
  },
  {
    title: "SaaS Landing Page",
    featured: true,
    discribtion:
      "A modern and responsive SaaS landing page built to showcase product features, highlight value propositions, and guide users through clear call-to-action sections.",
    feactuers:
      "React · Vite · React Router · TanStack Query · Chart.js · i18next · Swiper",
    src: project1,
    url: "https://saas-landing-opal.vercel.app/",
  },
  {
    title: "Movie Database App",
    featured: true,
    discribtion:
      "A dynamic movie browsing application built with React, allowing users to explore trending movies and view detailed information fetched from the TMDB API.",
    feactuers:
      "React · Vite · Tailwind CSS · Flowbite · React Router · Axios · TMDB API · Pagination",
    src: project2,
    url: "https://movie-app-ku2h.vercel.app/",
  },
  {
    title: "React Login",
    discribtion:
      "A responsive login interface built using pure JavaScript, focusing on clean UI structure, form handling, and basic client-side validation without using any frameworks.",
    feactuers: "JavaScript · Responsive UI · Form validation",
    src: project5,
    url: "https://login-aap.vercel.app/",
  },
  {
    title: "Weather App",
    discribtion:
      "A responsive weather app built with JavaScript that fetches real-time climate data from a public API and displays current weather conditions in an intuitive interface.",
    feactuers: "JavaScript (Vanilla) · Weather API · Responsive Design",
    src: project6,
    url: "https://weather-app-dun-five-63.vercel.app/",
  },
  {
    title: "Book Mark App",
    discribtion:
      "A clean and responsive bookmark manager built with vanilla JavaScript, allowing users to save, categorize, and quickly access favorite websites with intuitive UI and local storage support.",
    feactuers: "JavaScript (Vanilla) · Local Storage · Responsive Design",
    src: project7,
    url: "https://book-mark-seven-tau.vercel.app/",
  },
  {
    title: "Menu UI Web App",
    discribtion:
      "A responsive menu interface built with Next.js that displays food categories and items in a clean, organized layout. Designed with usability and visual clarity for modern web browsing.",
    feactuers: "Next.js · Responsive Design",
    src: project3,
    url: "https://menu-next-55e1.vercel.app/",
  },
  {
    title: "Questions Bay",
    discribtion:
      "A responsive Q&A web app built with React/Next.js that allows users to explore, submit, and interact with questions in an intuitive interface, showcasing dynamic rendering and state management.",
    feactuers: "Next.js · Responsive UI · Client-side state handling",
    src: project4,
    url: "https://questions-bay.vercel.app/",
  },
  {
    title: "Bootstrap UI Web App",
    discribtion:
      "A responsive web application built using Bootstrap, featuring clean layouts, grid system, and interactive UI components designed for optimal usability across devices.",
    feactuers: "Bootstrap · HTML · CSS · JavaScript · Responsive Design",
    src: project9,
    url: "https://bootstrab-application.vercel.app/",
  },
];
