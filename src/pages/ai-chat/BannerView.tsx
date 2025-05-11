import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Avatar,
} from "@mui/material";
import user1 from "../../images/Group 1171275709.png";

const BannerHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 12 },
      }}>
      <Container maxWidth='lg' sx={{ paddingTop: "80px" }}>
        <Grid container spacing={12}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant='h1'
              fontWeight='bold'
              sx={{ mb: 6, mt: "15px", fontSize: { xs: 30, md: 42 } }}
              gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ mb: 6, fontSize: { xs: 15, md: 18 } }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
            <Box display={"flex"} gap={"30px"}>
              <Button variant='contained' size='large' sx={{ borderRadius: 1 }}>
                Bắt đầu miễn phí
              </Button>
              <Button variant='outlined' size='large' sx={{ borderRadius: 1 }}>
                Liên hệ sales
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} position='relative'>
            <Box
              sx={{ position: "relative", width: "100%", textAlign: "center" }}>
              {/* Người dùng và biểu đồ */}
              <Box
                component='img'
                src={user1} // 👉 Đổi thành link ảnh của bạn
                alt='Man'
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  bottom: "-4px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BannerHero;
