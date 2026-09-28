"use client";
import React, { useRef } from "react";
import me from "../../Images/me.webp";
import Image from "next/image";
import WaveText from "../WaveText/WaveText";

// ── Floating Orb (CSS animation) ──────────────────────────────────────────
function FloatingOrb({ className, delay = 0, duration = 6 }) {
  return (
    <div
      className={`orb pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ "--dx": "15px", "--dy": "-30px", "--s": 1.1, "--dur": `${duration}s`, "--delay": `${delay}s` }}
    />
  );
}

export default function HomePage() {
  const tiltRef = useRef(null);

  // 3D tilt with plain pointer events (no animation library)
  const onTiltMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-y * 20).toFixed(2)}deg) rotateY(${(x * 20).toFixed(2)}deg)`;
  };
  const onTiltLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    <div className="container w-[90%] m-auto min-h-screen relative overflow-hidden p-3">

      {/* Floating ambient orbs */}
      <FloatingOrb className="w-[400px] h-[400px] -top-40 -right-20 bg-white opacity-[0.04]" delay={0} duration={7} />
      <FloatingOrb className="w-[250px] h-[250px] top-1/2 -left-20 bg-[#A84CFF] opacity-[0.06]" delay={2} duration={9} />
      <FloatingOrb className="w-[180px] h-[180px] bottom-20 right-1/4 bg-[#5F4BFF] opacity-[0.05]" delay={1} duration={6} />

      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="pt-20 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* ── Content (visible immediately, animated with CSS) ── */}
        <div className="content pt-2 text-center md:text-left flex flex-col gap-6 flex-1">

          <div className="fade-up flex items-center gap-3 justify-center md:justify-start" style={{ "--d": "0.05s" }}>
            <span className="h-px w-8 bg-white/40 block" />
            <span className="text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
              Portfolio 2026
            </span>
          </div>

          <h1 className="fade-up text-4xl md:text-6xl leading-tight font-bold" style={{ "--d": "0.15s" }}>
            Hi! I&apos;m{" "}
            <span className="bg-white text-black text-3xl md:text-5xl rounded-2xl px-3 py-1 font-bold inline-block mt-2 md:mt-0 cursor-default transition duration-200 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Yousef Elsayed
            </span>
          </h1>

          <h2 className="fade-up flex flex-col md:flex-row items-center md:items-start gap-4 text-4xl md:text-6xl font-bold" style={{ "--d": "0.25s" }}>
            <span className="text-5xl md:text-7xl text-white/80">I&apos;m a</span>
            <span className="bg-[#1a0a2e] border border-[#A84CFF]/40 text-3xl md:text-5xl rounded-2xl px-4 py-2 font-bold cursor-default transition duration-200 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(168,76,255,0.5)]">
              <WaveText amplitude={6} duration={1.1} delay={0.07} className="text-[#C27AFF]">
                Frontend Developer
              </WaveText>
            </span>
          </h2>

          <p className="fade-up text-lg md:text-xl w-full md:w-[70%] lg:w-[55%] mx-auto md:mx-0 text-white/55 leading-relaxed" style={{ "--d": "0.35s" }}>
            I build engaging digital experiences and advanced web applications
            that combine high performance with creative design
          </p>

          {/* Stats row */}
          <div className="fade-up flex gap-8 justify-center md:justify-start mt-2" style={{ "--d": "0.45s" }}>
            {[["10+", "Projects"], ["1+", "Years Exp"], ["100%", "Passion"]].map(([val, label]) => (
              <div key={label} className="text-center md:text-left">
                <div className="text-xl font-bold text-white">{val}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Image with 3D tilt ── */}
        <div className="fade-left flex justify-center relative flex-shrink-0" style={{ perspective: 1000, "--d": "0.2s" }}>
          <div className="spin-cw absolute inset-[-20px] rounded-3xl border border-dashed border-white/10" />
          <div className="spin-ccw absolute inset-[-40px] rounded-3xl border border-dashed border-[#A84CFF]/10" />

          <div
            ref={tiltRef} style={{ transformStyle: "preserve-3d" }}
            onMouseMove={onTiltMove} onMouseLeave={onTiltLeave}
            className="relative z-10 transition-transform duration-200 ease-out"
          >
            <div className="glow-pulse absolute inset-0 rounded-2xl bg-[#A84CFF] blur-2xl" />
            <Image
              className="rounded-2xl w-[240px] md:w-[380px] h-auto relative z-10 shadow-2xl"
              src={me} width={380} height={507} alt="Yousef Elsayed"
              sizes="(max-width: 768px) 240px, 380px" preload
            />
            <div className="fade-up absolute -bottom-4 -left-6 bg-[#1a0a2e] border border-[#A84CFF]/30 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg z-20 flex items-center gap-2" style={{ "--d": "1.2s" }}>
              <span className="dot-scale inline-block">🟢</span>
              Available for work
            </div>
            <div className="fade-down absolute -top-4 -right-6 bg-[#1a0a2e] border border-white/10 text-white/70 text-xs px-3 py-2 rounded-xl shadow-lg z-20" style={{ "--d": "1.4s" }}>
              React · Next.js · TS
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fade-in absolute bottom-8 left-1/2 -translate-x-1/2" style={{ "--d": "2s" }}>
        <div className="flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-[0.4em] uppercase text-white">Scroll</span>
          <div className="bob w-px h-10 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}
