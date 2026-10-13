import React from "react";
import { CONTACTS } from "../contants/Texts";
import ContactForm from "./ContactForm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

function Contacts() {
  const contactItems = [
    { icon: <PlaceRoundedIcon />, label: CONTACTS.Address },
    { icon: <LocalPhoneRoundedIcon />, label: CONTACTS.Phone },
    { icon: <EmailRoundedIcon />, label: CONTACTS.Email, href: `mailto:${CONTACTS.Email}` },
  ];

  return (
    <Box id="contact" component="section" className="section-band" sx={{ pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{ fontSize: { xs: "2.4rem", md: "3.4rem" }, mb: 5, textAlign: "center" }}
        >
          Get in Touch
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.15fr" },
          }}
        >
          <Card className="glass-card reveal-up">
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography component="h3" variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                Let&apos;s build something clean and useful.
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                Send a message for collaboration, frontend work, or full-stack product development.
              </Typography>
              <Stack spacing={2}>
                {contactItems.map((item) => (
                  <Stack key={item.label} direction="row" spacing={1.5} alignItems="center">
                    <Box sx={{ color: "primary.light", display: "flex" }}>{item.icon}</Box>
                    {item.href ? (
                      <Link href={item.href} color="inherit" underline="hover">
                        {item.label}
                      </Link>
                    ) : (
                      <Typography color="text.secondary">{item.label}</Typography>
                    )}
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
}

export default Contacts;
