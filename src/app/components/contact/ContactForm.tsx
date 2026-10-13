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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
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
        <Stack component="form" onSubmit={handleSubmit} spacing={2.5}>
          <TextField
            type="text"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
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
