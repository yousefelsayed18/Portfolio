import { Box, Typography, LinearProgress } from "@mui/material";

export default function SkillBar({ title, value }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{value}%</Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#ffff",
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
            backgroundColor:"#A84CFF"
           
          },
        }}
      />
    </Box>
  );
}
