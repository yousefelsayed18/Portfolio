"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { motion } from "framer-motion";

export default function CardComponent({ label, src, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#151B28",
          color: "#9491FF",
          minWidth: 200,
          cursor: "pointer",
          transition:
            "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.04)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
          },
          "&:active": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardContent className="flex flex-col items-center">
          {src && (
            <CardMedia
              component="img"
              image={src}
              alt={label}
              sx={{
                width: 60,
                height: 60,
                objectFit: "contain",
                mb: 2,
                transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          )}
          {value && <Typography>{value}</Typography>}
          <Typography>{label}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
