"use client";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await res.json()) as { success?: boolean; error?: string };

      if (res.ok && result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch {
      setStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-card reveal-up">
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography component="h3" variant="h5" fontWeight={800} sx={{ mb: 3 }}>
          Send a Message
        </Typography>
        <Stack component="form" onSubmit={handleSubmit} spacing={2.5} noValidate>
          <TextField
            type="text"
            name="company"
            label="Company"
            value={formData.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            sx={{
              position: "absolute",
              left: "-10000px",
              height: 0,
              width: 0,
              overflow: "hidden",
            }}
            inputProps={{ "aria-hidden": true }}
          />
          <TextField
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            inputProps={{ maxLength: 80 }}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            inputProps={{ maxLength: 120 }}
          />
          <TextField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            minRows={5}
            inputProps={{ maxLength: 2000 }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendRoundedIcon />}
            disabled={isSubmitting}
            sx={{ alignSelf: "flex-start" }}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
          {status && (
            <Alert severity={status.includes("successfully") ? "success" : "error"}>
              {status}
            </Alert>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
