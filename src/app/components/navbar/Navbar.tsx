"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1PzHSvHf6UyJpWNRop51APT5-KXSw-M2A/view?usp=drive_link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(3, 7, 18, 0.68)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
        backdropFilter: "blur(18px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 84 } }}>
          <Box
            component={Link}
            href="#home"
            sx={{
              alignItems: "center",
              display: "flex",
              gap: 1.5,
              minWidth: 0,
            }}
          >
            <Image
              src="/portfolioLogo.svg"
              alt="Kunal portfolio logo"
              width={52}
              height={52}
              priority
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography component="p" variant="subtitle1" fontWeight={800} lineHeight={1.1}>
                Kunal Singh
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Full Stack Portfolio
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              justifyContent: "center",
            }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ ml: "auto" }}>
            <Tooltip title="LinkedIn">
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/kunalsingh2021/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component={Link}
                href="https://github.com/kunalsingh2021"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                component={Link}
                href="https://www.instagram.com/singhkunal97/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                color="inherit"
                sx={{ display: { xs: "none", sm: "inline-flex" } }}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Button
              component={Link}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<DownloadRoundedIcon />}
              sx={{ display: { xs: "none", sm: "inline-flex" }, ml: 1 }}
            >
              Resume
            </Button>
            <IconButton
              color="inherit"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#07111f",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)} color="inherit">
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((item) => (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, pt: 1 }}>
          <Button
            component={Link}
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            fullWidth
            startIcon={<DownloadRoundedIcon />}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
