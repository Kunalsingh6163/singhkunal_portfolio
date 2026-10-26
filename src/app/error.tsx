"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box component="main" sx={{ py: { xs: 12, md: 18 } }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h3" fontWeight={800} sx={{ mb: 2 }}>
          Something went wrong
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Please try again. If the problem continues, refresh the page.
        </Typography>
        <Button onClick={reset} variant="contained" size="large">
          Try again
        </Button>
      </Container>
    </Box>
  );
}
