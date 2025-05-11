import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        //   background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        pt: { xs: 8, md: 12 },
      }}>
      <Container maxWidth='lg' sx={{ textAlign: "center" }}>
        <Typography
          variant='h1'
          fontWeight='bold'
          sx={{ mb: 6, mt: "15px", fontSize: { xs: 30, md: 35 } }}
          gutterBottom>
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
        <Typography variant='body1' sx={{ mb: 3, color: "text.secondary" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Typography>
        <Button
          variant='contained'
          size='large'
          sx={{
            backgroundColor: "#2563eb",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            mb: 4,
            "&:hover": {
              backgroundColor: "#1e40af",
            },
          }}>
          Tạo Video ngay
        </Button>

        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            mx: "auto",
            borderRadius: 3,
            backgroundColor: "#e5e7eb",
            height: { xs: 200, sm: 300, md: 400 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}>
          <PlayArrowIcon sx={{ fontSize: 50, color: "#6b7280" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
