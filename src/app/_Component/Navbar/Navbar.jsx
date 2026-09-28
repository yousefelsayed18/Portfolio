"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import me from "../../Images/me.webp";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const WA_HREF =
  "https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio";

// Inline icons (no MUI icon runtime needed in the first paint)
function WhatsAppIcon({ size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#22c55e" aria-hidden="true" className="relative z-[1]">
      <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
    </svg>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-transform duration-200 hover:scale-[1.18] active:scale-90"
    >
      <span className="ping-soft absolute inset-0 rounded-full bg-green-500" />
      <WhatsAppIcon />
    </a>
  );
}

function NavLink({ name, path, active }) {
  return (
    <Link href={path} className="relative group">
      <span
        className={`text-base font-medium tracking-wide transition-colors duration-200 ${
          active ? "text-[#C27AFF]" : "text-white/60 group-hover:text-white"
        }`}
      >
        {name}
      </span>
      {active ? (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#A84CFF] rounded-full" />
      ) : (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
      )}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Shrink + hide on scroll down
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY.current || y < 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on outside click / Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1300] transition-all duration-[400ms] ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`backdrop-blur-lg border-b transition-all duration-[400ms] ${
          scrolled
            ? "bg-[rgba(10,11,20,0.85)] border-[rgba(168,76,255,0.1)] shadow-[0_1px_0_rgba(168,76,255,0.15)]"
            : "bg-[rgba(10,11,20,0.5)] border-transparent"
        }`}
      >
        <div
          className={`mx-auto w-full max-w-[1536px] px-4 sm:px-6 flex items-center transition-[min-height] duration-[400ms] ${
            scrolled ? "min-h-[56px]" : "min-h-[68px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#A84CFF]/30 group-hover:ring-[#A84CFF]/70 transition duration-300 group-hover:scale-[1.08] group-hover:rotate-3">
              <Image src={me} alt="Yousef" fill sizes="36px" className="object-cover object-[50%_28%]" />
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
              Yousef<span className="text-[#A84CFF]">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex mx-auto gap-8" aria-label="Main">
            {navLinks.map((l) => (
              <NavLink key={l.name} name={l.name} path={l.path} active={pathname === l.path} />
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <WhatsAppButton />
          </div>

          {/* Mobile */}
          <div className="md:hidden ml-auto flex items-center gap-2 relative" ref={menuRef}>
            <WhatsAppButton />
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-[#A84CFF]/10 active:scale-90 transition"
            >
              <span className={`block transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}>
                <MenuIcon />
              </span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[160px] rounded-xl border border-[#A84CFF]/20 bg-[#0d1117] py-2 shadow-2xl">
                {navLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-[#A84CFF]/10 hover:text-white ${
                      pathname === l.path ? "text-[#C27AFF]" : "text-white/70"
                    }`}
                  >
                    {pathname === l.path && <span className="w-1.5 h-1.5 rounded-full bg-[#A84CFF]" />}
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
