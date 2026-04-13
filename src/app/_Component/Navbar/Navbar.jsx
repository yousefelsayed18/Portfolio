"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import me from "../../Images/me.png";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────
const navLinks = [
  { name: "About",    path: "/about"    },
  { name: "Projects", path: "/projects" },
  { name: "Skills",   path: "/skills"   },
  { name: "Contact",  path: "/contact"  },
];

// ── Magnetic WhatsApp Button ───────────────────────────────────────────────
function MagneticWA({ href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width  / 2) * 0.4);
    y.set((e.clientY - r.top  - r.height / 2) * 0.4);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href} target="_blank" rel="noopener noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      whileHover={{ scale: 1.18 }} whileTap={{ scale: 0.92 }}
      className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.7, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-green-500"
      />
      <WhatsAppIcon sx={{ fontSize: "26px", color: "#22c55e", position: "relative", zIndex: 1 }} />
    </motion.a>
  );
}

// ── Nav Link with underline indicator ─────────────────────────────────────
function NavLink({ name, path, active }) {
  return (
    <Link href={path} className="relative group">
      <motion.span
        className="text-base font-medium tracking-wide transition-colors duration-200"
        style={{ color: active ? "#C27AFF" : "rgba(255,255,255,0.6)" }}
        whileHover={{ color: "#ffffff" }}
      >
        {name}
      </motion.span>

      {/* Active underline */}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 right-0 h-px bg-[#A84CFF] rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Hover underline (only when not active) */}
      {!active && (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
      )}
    </Link>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const pathname = usePathname();

  // Scroll: shrink + hide on scroll down
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1300 }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: scrolled
              ? "rgba(10, 11, 20, 0.85)"
              : "rgba(10, 11, 20, 0.5)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: scrolled ? "0 1px 0 rgba(168,76,255,0.15)" : "none",
            transition: "all 0.4s ease",
            borderBottom: scrolled ? "1px solid rgba(168,76,255,0.1)" : "1px solid transparent",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: scrolled ? "56px" : "68px", transition: "min-height 0.4s ease" }}>

              {/* ── Logo ── */}
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#A84CFF]/30 group-hover:ring-[#A84CFF]/70 transition-all duration-300"
                >
                  <Image src={me} alt="Yousef" fill className="object-cover" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="hidden sm:block text-sm font-semibold text-white/70 group-hover:text-white transition-colors"
                >
                  Yousef<span className="text-[#A84CFF]">.</span>
                </motion.span>
              </Link>

              {/* ── Mobile Menu Button ── */}
              <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto", alignItems: "center", gap: 1 }}>
                <MagneticWA href="https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio" />
                <motion.div whileTap={{ scale: 0.9 }}>
                  <IconButton onClick={(e) => setAnchorElNav(e.currentTarget)}
                    sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: "#fff", backgroundColor: "rgba(168,76,255,0.1)" } }}
                  >
                    <motion.div animate={{ rotate: anchorElNav ? 90 : 0 }} transition={{ duration: 0.3 }}>
                      <MenuIcon />
                    </motion.div>
                  </IconButton>
                </motion.div>

                <Menu
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={() => setAnchorElNav(null)}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#0d1117",
                      border: "1px solid rgba(168,76,255,0.2)",
                      borderRadius: "12px",
                      mt: 1,
                      minWidth: 160,
                    },
                  }}
                >
                  {navLinks.map((link, i) => (
                    <MenuItem
                      key={link.name}
                      onClick={() => setAnchorElNav(null)}
                      sx={{
                        color: pathname === link.path ? "#C27AFF" : "rgba(255,255,255,0.7)",
                        "&:hover": { backgroundColor: "rgba(168,76,255,0.08)", color: "#fff" },
                        fontSize: "0.9rem",
                        py: 1.2,
                      }}
                    >
                      <Link href={link.path} className="w-full flex items-center gap-2">
                        {pathname === link.path && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A84CFF]" />
                        )}
                        {link.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* ── Desktop Links ── */}
              <Box
                sx={{ display: { xs: "none", md: "flex" }, ml: "auto", mr: "auto" }}
                className="gap-8"
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    name={link.name}
                    path={link.path}
                    active={pathname === link.path}
                  />
                ))}
              </Box>

              {/* ── Desktop WhatsApp ── */}
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                <MagneticWA href="https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio" />
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    </AnimatePresence>
  );
}

export default Navbar;
