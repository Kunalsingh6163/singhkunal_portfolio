import React from "react";
import Image from "next/image";
import { ABOUT_ME } from "../contants/Texts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box id="about" component="section" className="section-band">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography component="h2" variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" } }}>
            About <Box component="span" sx={{ color: "primary.light" }}>Me</Box>
          </Typography>
        </Box>

        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
          }}
        >
          <Card className="glass-card reveal-up">
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/aboutSticker.png"
                  alt="Developer workspace illustration"
                  width={420}
                  height={360}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
              </Box>
            </CardContent>
          </Card>

          <Card className="glass-card reveal-up">
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography color="text.secondary" sx={{ fontSize: "1.05rem", lineHeight: 1.9 }}>
                {ABOUT_ME}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
                {["Clean UI", "Performance", "API Integration", "Scalable Apps"].map((item) => (
                  <Chip key={item} label={item} variant="outlined" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
