import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7dd3fc",
      light: "#bae6fd",
      dark: "#0284c7",
    },
    secondary: {
      main: "#d946ef",
      light: "#f5d0fe",
      dark: "#a21caf",
    },
    background: {
      default: "#030712",
      paper: "rgba(8, 13, 34, 0.72)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(148, 163, 184, 0.22)",
          background:
            "linear-gradient(145deg, rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.58))",
          backdropFilter: "blur(18px)",
          boxShadow: "0 22px 70px rgba(0, 0, 0, 0.34)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: "rgba(125, 211, 252, 0.28)",
          backgroundColor: "rgba(14, 165, 233, 0.1)",
          color: "#e0f2fe",
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
