import React from "react";
import Image from "next/image";
import { PROJECTS } from "../contants/Texts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Projects() {
  return (
    <Box id="projects" component="section" className="section-band">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 5, textAlign: "center" }}
        >
          Projects
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          }}
        >
          {PROJECTS.map((project, index) => (
            <Card key={project.title} className="glass-card reveal-up" sx={{ animationDelay: `${index * 70}ms`, overflow: "hidden" }}>
              <Box
                sx={{
                  alignItems: "center",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(226,232,240,0.82))",
                  display: "flex",
                  height: 190,
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={260}
                  height={150}
                  style={{ maxHeight: "138px", maxWidth: "100%", objectFit: "contain" }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography component="h3" variant="h5" fontWeight={800} sx={{ mb: 1.5 }}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 2.5 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.technologies.slice(0, 8).map((tech) => (
                    <Chip key={tech} label={tech} size="small" variant="outlined" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
