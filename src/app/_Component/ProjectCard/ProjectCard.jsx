"use client"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ProjectData } from "../stateArr/stateArr";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard() {
  return (
    <>
      {ProjectData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * 0.1, // ✨ يدخلوا ورا بعض
          }}
        >
          <Card
            sx={{
              maxWidth: 420,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              backgroundColor:"#151C2A",
              color:"white",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                
              },
              "&:active": {
                transform: "scale(1.02)",
              },
            }}
          >
            <div className="relative w-full h-40">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent>
              <Typography gutterBottom variant="h5">
                {project.title}
              </Typography>

              <Typography  variant="body2" color="#958692">
                {project.discribtion}
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 , fontSize:"10px" }}>
                <span className="text-red-600">Features</span> :{" "}
                {project.feactuers}
              </Typography>
            </CardContent>

            <CardActions className="group">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1
                  text-[#BD7AFF] font-medium
                  transition-all duration-200
                  hover:text-blue-800
                "
              >
                View Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </CardActions>
          </Card>
        </motion.div>
      ))}
    </>
  );
}
