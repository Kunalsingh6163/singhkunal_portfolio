import React from "react";
import { HERO_CONTENT } from "../contants/Texts";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

function Hero() {
  return (
    <Box id="home" component="section" sx={{ minHeight: { md: "calc(100vh - 84px)" }, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" },
          }}
        >
          <Box className="reveal-up">
            <Chip
              icon={<RocketLaunchRoundedIcon />}
              label="Open to impactful frontend and full-stack roles"
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "clamp(3rem, 16vw, 4.8rem)", md: "6.8rem" },
                lineHeight: 0.94,
                mb: 2,
                maxWidth: 760,
              }}
              variant="h1"
            >
              Kunal Singh
            </Typography>
            <Typography
              component="p"
              sx={{
                background: "linear-gradient(90deg, #7dd3fc, #f0abfc, #fda4af)",
                backgroundClip: "text",
                color: "transparent",
                fontSize: { xs: "1.65rem", md: "2.35rem" },
                fontWeight: 800,
                mb: 3,
              }}
            >
              Full Stack Developer
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.85, maxWidth: 720 }}>
              {HERO_CONTENT}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
              <Button
                component={Link}
                href="#projects"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                size="large"
              >
                View Projects
              </Button>
              <Button component={Link} href="#contact" variant="outlined" size="large">
                Contact Me
              </Button>
            </Stack>
          </Box>

          <Card className="glass-card float-soft" sx={{ overflow: "hidden" }}>
            <Box sx={{ p: { xs: 2, sm: 3 } }}>
              <Box
                sx={{
                  border: "1px solid rgba(125, 211, 252, 0.32)",
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/KunalPicture.jpg"
                  alt="Kunal Singh profile"
                  width={680}
                  height={780}
                  priority
                  style={{ display: "block", height: "auto", width: "100%" }}
                />
              </Box>
            </Box>
            <CardContent sx={{ pt: 0 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {["React.js", "Next.js", "TypeScript", "MUI", "Node.js"].map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
