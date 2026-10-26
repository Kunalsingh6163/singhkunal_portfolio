import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box component="main" sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Page not found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button component={Link} href="/" variant="contained" size="large">
          Back to home
        </Button>
      </Container>
    </Box>
  );
}
