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
import ShimmerText from "../_Component/ShimmerText/ShimmerText";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": { borderColor: "rgba(148,145,255,0.25)" },
    "&:hover fieldset": { borderColor: "#A84CFF" },
    "&.Mui-focused fieldset": { borderColor: "#A84CFF" },
  },
  "& label": { color: "rgba(148,145,255,0.6)" },
  "& label.Mui-focused": { color: "#C27AFF" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};
const contactInfoVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const infoItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const socialVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const socialItem = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
const formFieldVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fieldItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const contactInfo = [
  { icon: <LocationPinIcon />, title: "Location", value: "Tanta, Egypt" },
  { icon: <EmailIcon />, title: "Email", value: "yousefabdelmonem18@gmail.com" },
  { icon: <LocalPhoneIcon />, title: "Phone", value: "01283957041" },
];
const socials = [
  { icon: <GitHubIcon />, href: "https://github.com/yousefelsayed18", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/yousef-elsayed-13580b309", label: "LinkedIn" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/yousef.elsayed.7792", label: "Facebook" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio", label: "WhatsApp" },
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
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#A84CFF] opacity-[0.05] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#5F4BFF] opacity-[0.05] blur-3xl"
      />

      {/* ── Title ── */}
      <motion.div
        className="mb-16 text-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold relative inline-block">
          Contact{" "}
          {/* ── Shimmer على "Me" ── */}
          <ShimmerText from="#A84CFF" via="#E0AAFF" to="#5F4BFF" duration={2.5}>
            Me
          </ShimmerText>
          <motion.span
            variants={lineVariants}
            className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded origin-left block"
          />
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-gray-400">
          Get in touch for collaborations or just to say hello
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Info */}
        <motion.div
          className="w-full lg:w-[35%] bg-[#121725] rounded-xl p-8 relative overflow-hidden"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }} variants={fadeLeft}
          whileHover={{ boxShadow: "0 0 40px rgba(168,76,255,0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#A84CFF] opacity-[0.07] blur-2xl" />
          <motion.h1
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold mb-6"
          >
            Contact Information
          </motion.h1>

          <motion.div variants={contactInfoVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {contactInfo.map((item, i) => (
              <motion.div key={i} variants={infoItem}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex gap-4 mt-6 items-center cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.12, backgroundColor: "#A84CFF", color: "#fff" }}
                  transition={{ duration: 0.25 }}
                  className="p-3 bg-[#271743] text-[#C27AFF] rounded-xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h1 className="font-medium">{item.title}</h1>
                  <span className="text-[#858D9B] text-sm">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.hr
            initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 border-[#252D3C] origin-left"
          />

          <motion.div
            variants={socialVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap gap-5 mt-5"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i} variants={socialItem}
                whileHover={{ scale: 1.12, backgroundColor: "#A84CFF", color: "#fff", boxShadow: "0 0 18px rgba(168,76,255,0.45)" }}
                whileTap={{ scale: 0.95 }} transition={{ duration: 0.22 }}
                href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-3 w-[25%] flex justify-center rounded-xl cursor-pointer bg-[#271743] text-[#C27AFF]"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-full lg:w-[65%] bg-[#121725] rounded-xl p-8 relative overflow-hidden"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }} variants={fadeRight}
          whileHover={{ boxShadow: "0 0 40px rgba(95,75,255,0.08)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#5F4BFF] opacity-[0.06] blur-2xl" />
          <motion.h1
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold mb-6"
          >
            Send Me a Message
          </motion.h1>

          <form ref={formRef} onSubmit={sendEmail}>
            <motion.div variants={formFieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fieldItem} className="flex flex-col md:flex-row gap-4">
                <TextField required fullWidth name="name" label="Name" sx={inputStyle} />
                <TextField required fullWidth name="email" label="Email" sx={inputStyle} />
              </motion.div>
              <motion.div variants={fieldItem} className="mt-6">
                <TextField required fullWidth name="subject" label="Subject" sx={inputStyle} />
              </motion.div>
              <motion.div variants={fieldItem} className="mt-6">
                <TextareaAutosize
                  name="message" minRows={5} placeholder="Message"
                  className="w-full p-4 rounded-lg bg-transparent border border-[#A84CFF]/40 text-white placeholder-[rgba(148,145,255,0.5)] outline-none focus:border-[#A84CFF] transition-colors duration-200 resize-none"
                />
              </motion.div>
              <motion.div variants={fieldItem} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4">
                <Button type="submit" variant="contained" fullWidth sx={{
                  mt: 1, py: 1.5,
                  background: "linear-gradient(90deg, #A84CFF, #5F4BFF)",
                  fontWeight: "bold", letterSpacing: "0.06em", fontSize: "0.9rem",
                  borderRadius: "10px", boxShadow: "0 4px 24px rgba(168,76,255,0.3)",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": { background: "linear-gradient(90deg, #9333EA, #4F46E5)", boxShadow: "0 6px 32px rgba(168,76,255,0.5)" },
                }}>
                  Send Message
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
  