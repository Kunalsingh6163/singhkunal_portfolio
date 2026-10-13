import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa6";
import { CgTwilio } from "react-icons/cg";
import { FaFigma } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Technologies() {
  const technologies = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#f97316" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#60a5fa" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#facc15" },
    { name: "TypeScript", icon: <BiLogoTypescript />, color: "#3b82f6" },
    { name: "React", icon: <RiReactjsLine />, color: "#22d3ee" },
    { name: "Next.js", icon: <TbBrandNextjs />, color: "#f8fafc" },
    { name: "Node.js", icon: <FaNode />, color: "#22c55e" },
    { name: "Express", icon: <SiExpress />, color: "#93c5fd" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#22c55e" },
    { name: "MUI", icon: <SiMui />, color: "#38bdf8" },
    { name: "Twilio", icon: <CgTwilio />, color: "#f43f5e" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#67e8f9" },
    { name: "Bitbucket", icon: <FaBitbucket />, color: "#38bdf8" },
    { name: "Figma", icon: <FaFigma />, color: "#fb7185" },
  ];

  return (
    <Box id="technologies" component="section" className="section-band">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 5, textAlign: "center" }}
        >
          Technologies
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(126px, 1fr))",
          }}
        >
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="glass-card reveal-up"
              sx={{
                alignItems: "center",
                animationDelay: `${index * 45}ms`,
                aspectRatio: "1 / 1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 2,
                textAlign: "center",
              }}
            >
              <Box sx={{ color: tech.color, fontSize: 58, lineHeight: 0 }}>{tech.icon}</Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, fontWeight: 700 }}>
                {tech.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Technologies;
