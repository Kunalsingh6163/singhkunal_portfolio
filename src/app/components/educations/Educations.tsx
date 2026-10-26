import React from "react";
import Image from "next/image";
import { EDUCATIONS } from "../contants/Texts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Educations() {
  return (
    <Box id="education" component="section" className="section-band">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 5, textAlign: "center" }}
        >
          Education
        </Typography>
        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
          {EDUCATIONS.map((education, index) => (
            <Card key={education.degree} className="glass-card reveal-up" sx={{ animationDelay: `${index * 90}ms` }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                  <Box
                    sx={{
                      alignItems: "center",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: 2,
                      display: "flex",
                      flex: "0 0 120px",
                      height: 120,
                      justifyContent: "center",
                      p: 1.5,
                      width: 120,
                    }}
                  >
                    <Image
                      src={education.image}
                      alt={education.university}
                      width={96}
                      height={96}
                      sizes="96px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h5" fontWeight={800}>
                      {education.degree}
                    </Typography>
                    <Typography color="secondary.light" sx={{ mt: 0.5 }}>
                      {education.university}
                    </Typography>
                    <Typography color="primary.light" fontWeight={700} sx={{ mt: 1 }}>
                      {education.Session}
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7, my: 2 }}>
                      {education.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {education.technologies.slice(0, 8).map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Educations;
