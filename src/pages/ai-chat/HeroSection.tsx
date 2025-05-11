import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import user from "../../images/image 46.png";
import chart from "../../images/Chart 2.png";
import group from "../../images/Group 37.png";
const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #2F80ED 0%, #9B51E0 100%)",
        color: "#fff",
        py: { xs: 6, md: 10 },
      }}>
      <Container maxWidth='xl'>
        <Grid container spacing={4} alignItems='center'>
          {/* Left - Image */}
          <Grid item xs={12} md={6} style={{ position: "relative" }}>
            <Box
              component='img'
              src={chart}
              alt='Hero'
              sx={{
                width: "60%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
                position: "absolute",
                top: "17%",
                left: "15%",
              }}
            />
            <Box
              component='img'
              src={user}
              alt='Hero'
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              component='img'
              src={group}
              alt='Hero'
              sx={{
                width: "60%",
                maxWidth: 500,
                display: "block",
                mx: "auto",
                position: "absolute",
                top: 0,
                left: "15%",
                zIndex: 2,
              }}
            />
          </Grid>

          {/* Right - Content */}
              <Grid item xs={12} md={6}>
                 <Box>
                    
                 </Box>
            <Typography
              variant='h4'
              component='h1'
              fontWeight='bold'
              sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 2 }}>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: "#e0e0e0", mb: 4, lineHeight: 1.6 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#3b82f6",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#2563eb",
                },
              }}>
              Dùng thử miễn phí
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
