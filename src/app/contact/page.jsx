"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import WaveText from "../_Component/WaveText/WaveText";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": { borderColor: "rgba(148,145,255,0.2)" },
    "&:hover fieldset": { borderColor: "#A84CFF" },
    "&.Mui-focused fieldset": { borderColor: "#A84CFF" },
  },
  "& label": { color: "rgba(148,145,255,0.5)" },
  "& label.Mui-focused": { color: "#C27AFF" },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};
const panelLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const panelRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const infoItem = {
  hidden: { opacity: 0, x: -25, filter: "blur(3px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const socialPop = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } },
};
const fieldSlide = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const contactInfo = [
  { icon: <LocationPinIcon />, title: "Location", value: "Tanta, Egypt" },
  { icon: <EmailIcon />, title: "Email", value: "yousefabdelmonem18@gmail.com" },
  { icon: <LocalPhoneIcon />, title: "Phone", value: "01283957041" },
];
const socials = [
  { icon: <GitHubIcon />, href: "https://github.com/yousefelsayed18", label: "GitHub", color: "#ffffff" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/yousef-elsayed-13580b309", label: "LinkedIn", color: "#0A66C2" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/yousef.elsayed.7792", label: "Facebook", color: "#1877F2" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio", label: "WhatsApp", color: "#25D366" },
];

export default function Contact() {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_96piv85", "template_mbm3tgl", formRef.current, "KDMcigTsV45UGRrHb")
      .then(
        () => { toast.success("Message sent successfully ✅"); formRef.current.reset(); },
        (error) => { toast.error("Something went wrong ❌"); console.error(error); }
      );
  };

  return (
    <section className="mt-32 w-[90%] mx-auto relative overflow-hidden">

      {/* Edge glows */}
      <motion.div animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#A84CFF] blur-3xl" />
      <motion.div animate={{ opacity: [0.03, 0.07, 0.03], scale: [1, 1.08, 1] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#5F4BFF] blur-3xl" />

      {/* ── Title ── */}
      <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
          <motion.span animate={{ width: ["0px", "24px"] }} transition={{ duration: 0.8, delay: 0.4 }} className="h-px bg-[#A84CFF]/50 block" />
          <span className="text-[#A84CFF] text-xs uppercase tracking-[0.3em] font-medium">Get in touch</span>
          <motion.span animate={{ width: ["0px", "24px"] }} transition={{ duration: 0.8, delay: 0.4 }} className="h-px bg-[#A84CFF]/50 block" />
        </motion.div>

        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
          Contact{" "}
          <WaveText amplitude={7} duration={1} delay={0.1} className="text-[#A84CFF]">Me</WaveText>
          <motion.span variants={lineGrow} className="absolute left-0 -bottom-4 w-full h-1 bg-gradient-to-r from-[#A84CFF] to-[#5F4BFF] rounded origin-left block" />
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-gray-500 text-sm tracking-wider">
          Get in touch for collaborations or just to say hello
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ── Left Info panel ── */}
        <motion.div
          className="w-full lg:w-[35%] bg-[#0e1422] border border-white/5 rounded-2xl p-8 relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={panelLeft}
          whileHover={{ borderColor: "rgba(168,76,255,0.2)", boxShadow: "0 0 50px rgba(168,76,255,0.08)", transition: { duration: 0.3 } }}
        >
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#A84CFF]/30 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#A84CFF]/20 rounded-br-2xl" />
          <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#A84CFF] opacity-[0.06] blur-2xl" />

          <motion.h1
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold mb-8 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#A84CFF] inline-block" />
            Contact Information
          </motion.h1>

          {/* Info items */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {contactInfo.map((item, i) => (
              <motion.div key={i} variants={infoItem}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="flex gap-4 mt-5 items-center cursor-default group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#A84CFF", color: "#fff", boxShadow: "0 0 15px rgba(168,76,255,0.5)" }}
                  transition={{ duration: 0.25 }}
                  className="p-3 bg-[#A84CFF]/10 text-[#C27AFF] rounded-xl flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">{item.title}</p>
                  <p className="text-white/80 text-sm mt-0.5 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#A84CFF]/30 to-transparent origin-left"
          />

          {/* Social icons with individual color on hover */}
          <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i} variants={socialPop}
                whileHover={{ scale: 1.15, backgroundColor: `${s.color}20`, color: s.color, borderColor: `${s.color}60`, boxShadow: `0 0 20px ${s.color}40` }}
                whileTap={{ scale: 0.93 }} transition={{ duration: 0.22 }}
                href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-3 flex-1 flex justify-center rounded-xl cursor-pointer bg-[#A84CFF]/8 text-[#C27AFF] border border-white/5"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Form panel ── */}
        <motion.div
          className="w-full lg:w-[65%] bg-[#0e1422] border border-white/5 rounded-2xl p-8 relative overflow-hidden"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={panelRight}
          whileHover={{ borderColor: "rgba(95,75,255,0.15)", boxShadow: "0 0 50px rgba(95,75,255,0.06)", transition: { duration: 0.3 } }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#5F4BFF]/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#5F4BFF]/20 rounded-bl-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#5F4BFF] opacity-[0.06] blur-2xl" />

          <motion.h1
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold mb-8 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#5F4BFF] inline-block" />
            Send Me a Message
          </motion.h1>

          <form ref={formRef} onSubmit={sendEmail}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>

              <motion.div variants={fieldSlide} className="flex flex-col md:flex-row gap-4">
                <TextField required fullWidth name="name" label="Name" sx={inputStyle} />
                <TextField required fullWidth name="email" label="Email" sx={inputStyle} />
              </motion.div>

              <motion.div variants={fieldSlide} className="mt-5">
                <TextField required fullWidth name="subject" label="Subject" sx={inputStyle} />
              </motion.div>

              <motion.div variants={fieldSlide} className="mt-5">
                <TextareaAutosize
                  name="message" minRows={5} placeholder="Your message..."
                  className="w-full p-4 rounded-xl bg-transparent border border-[#A84CFF]/25 text-white placeholder-white/20 outline-none focus:border-[#A84CFF] transition-all duration-300 resize-none text-sm hover:border-[#A84CFF]/50"
                />
              </motion.div>

              <motion.div variants={fieldSlide} whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }} className="mt-5">
                <Button type="submit" variant="contained" fullWidth sx={{
                  py: 1.6,
                  background: "linear-gradient(135deg, #A84CFF 0%, #5F4BFF 100%)",
                  fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.9rem",
                  borderRadius: "14px",
                  boxShadow: "0 4px 30px rgba(168,76,255,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)",
                    boxShadow: "0 6px 40px rgba(168,76,255,0.55)",
                  },
                  transition: "all 0.3s ease",
                }}>
                  Send Message →
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
