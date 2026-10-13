import React from "react";
import { CERTIFICATIONS } from "../contants/Texts";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

function Certificate() {
  return (
    <Box id="certifications" component="section" className="section-band">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 5, textAlign: "center" }}
        >
          Certifications
        </Typography>
        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" } }}>
          {CERTIFICATIONS.map((certificate, index) => (
            <Card key={certificate.title} className="glass-card reveal-up" sx={{ animationDelay: `${index * 70}ms` }}>
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2.5}>
                  <Box>
                    <Typography component="h3" variant="h5" fontWeight={800}>
                      {certificate.title}
                    </Typography>
                    <Typography color="secondary.light">{certificate.provider}</Typography>
                    <Typography color="primary.light" fontWeight={700} sx={{ mt: 0.5 }}>
                      {certificate.Session}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {certificate.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {certificate.technologies.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                  </Stack>
                  <Box>
                    <Button
                      component={Link}
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      endIcon={<OpenInNewRoundedIcon />}
                    >
                      Watch Certificate
                    </Button>
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

export default Certificate;
