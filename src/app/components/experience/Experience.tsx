import React from "react";
import { EXPERIENCES } from "../contants/Texts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Experience() {
  return (
    <Box id="experience" component="section" className="section-band">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: { xs: "2.4rem", md: "3.4rem" },
            mb: 5,
            textAlign: "center",
          }}
        >
          Experience
        </Typography>
        <Stack spacing={3}>
          {EXPERIENCES.map((experience, index) => (
            <Card
              key={`${experience.company}-${experience.year}`}
              className="glass-card reveal-up"
              sx={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    display: "grid",
                    gap: 3,
                    gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
                  }}
                >
                  <Box>
                    <Typography color="primary.light" fontWeight={800}>
                      {experience.year}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h5" fontWeight={800}>
                      {experience.role}
                    </Typography>
                    <Typography color="secondary.light" sx={{ mb: 1.5 }}>
                      {experience.company}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ lineHeight: 1.75, mb: 2.5 }}
                    >
                      {experience.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {experience.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Experience;
