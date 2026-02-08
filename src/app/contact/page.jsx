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

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "var(--color-gray-400)",
    },
    "&:hover fieldset": {
      borderColor: "#A84CFF",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A84CFF",
    },
  },
  "& label": {
    color: "var(--color-gray-400)",
  },
  "& label.Mui-focused": {
    color: "#C27AFF",
  },
};

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_96piv85",
        "template_mbm3tgl",
        formRef.current,
        "KDMcigTsV45UGRrHb",
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");

          formRef.current.reset();
        },
        (error) => {
          toast.error("Something went wrong ❌");
          console.error(error);
        },
      );
  };

  return (
    <section className="mt-32 w-[90%] mx-auto">
      {/* ===== Title ===== */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
          Contact <span className="text-[#A84CFF]">Me</span>
          <span className="absolute left-0 -bottom-4 w-full h-1 bg-[#A84CFF] rounded"></span>
        </h2>
        <p className="mt-6 text-gray-400">
          Get in touch for collaborations or just to say hello
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ===== Left Info ===== */}
        <div className="w-full lg:w-[35%] bg-[#121725] rounded-xl p-8">
          <h1 className="text-xl font-semibold mb-6">Contact Information</h1>

          {[
            {
              icon: <LocationPinIcon />,
              title: "Location",
              value: "Tanta, Egypt",
            },
            {
              icon: <EmailIcon />,
              title: "Email",
              value: "yousefabdelmonem18@gmail.com",
            },
            { icon: <LocalPhoneIcon />, title: "Phone", value: "01283957041" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mt-6 items-center">
              <div className="p-3 bg-[#271743] text-[#C27AFF] rounded-xl">
                {item.icon}
              </div>
              <div>
                <h1>{item.title}</h1>
                <span className="text-[#858D9B] text-sm">{item.value}</span>
              </div>
            </div>
          ))}
          <hr className=" mt-8 text-[#252D3C]" />
          <div className=" flex flex-wrap gap-5 mt-5">
            <a
              href="https://github.com/yousefelsayed18"
              target="_blank"
              rel="noopener noreferrer"
              className="
    p-3 w-[25%] text-center rounded-xl cursor-pointer
    bg-[#271743] text-[#C27AFF]

    transition-all duration-300 ease-out
    hover:bg-[#A84CFF]
    hover:text-white
    hover:scale-105
  "
            >
              <div className="flex justify-center">
                <GitHubIcon />
              </div>
            </a>
            <a
              className="    p-3 w-[25%] text-center rounded-xl cursor-pointer
    bg-[#271743] text-[#C27AFF]

    transition-all duration-300 ease-out
    hover:bg-[#A84CFF]
    hover:text-white
    hover:scale-105"
              href="https://www.linkedin.com/in/yousef-elsayed-13580b309"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <LinkedInIcon />
              </div>
            </a>
            <a
              className="    p-3 w-[25%] text-center rounded-xl cursor-pointer
    bg-[#271743] text-[#C27AFF]

    transition-all duration-300 ease-out
    hover:bg-[#A84CFF]
    hover:text-white
    hover:scale-105"
              href="https://www.facebook.com/yousef.elsayed.7792?rdid=zwDe5Aisf8M7cl9B&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dj3zMaWa8%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FacebookIcon />
              </div>
            </a>
            <a
              className="    p-3 w-[25%] text-center rounded-xl cursor-pointer
    bg-[#271743] text-[#C27AFF]

    transition-all duration-300 ease-out
    hover:bg-[#A84CFF]
    hover:text-white
    hover:scale-105"
              href="https://wa.me/201283957041?text=Hello%20Yousef,%20I%20visited%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <WhatsAppIcon />
              </div>
            </a>
          </div>
        </div>

        {/* ===== Form ===== */}
        <div className="w-full lg:w-[65%] bg-[#121725] rounded-xl p-8">
          <h1 className="text-xl font-semibold mb-6">Send Me a Message</h1>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                required
                fullWidth
                name="name"
                label="Name"
                sx={inputStyle}
              />
              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                sx={inputStyle}
              />
            </div>

            <div className="mt-6">
              <TextField
                required
                fullWidth
                name="subject"
                label="Subject"
                sx={inputStyle}
              />
            </div>

            <TextareaAutosize
              re
              name="message"
              minRows={5}
              placeholder="Message"
              className="w-full mt-6 p-4 rounded-lg bg-transparent border border-[#A84CFF] text-white placeholder-white outline-none"
            />

            <Button
              type="submit"
              sx={{
                width: "100%",
                mt: 3,
                background: "linear-gradient(90deg,#A84CFF,#5F4BFF)",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
