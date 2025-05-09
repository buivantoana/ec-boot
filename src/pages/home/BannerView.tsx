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
import user1 from "../../images/Avatar Image.png";
import user2 from "../../images/Avatar Image (1).png";
import user3 from "../../images/Avatar Image (2).png";
import chart from "../../images/Chart 2.png";
import kol from "../../images/image 4.png";
const BannerHero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #d0e6ff 0%, #f8fbff 100%)",

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
              Tăng doanh số với{" "}
              <Box component='span' color='primary.main'>
                EcBoot
              </Box>{" "}
              thông minh
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ mb: 6, fontSize: { xs: 15, md: 18 } }}>
              Lorem Ipsum is{" "}
              <Box component='span' fontWeight='bold'>
                simply dummy text
              </Box>{" "}
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </Typography>
            <Button variant='contained' size='large' sx={{ borderRadius: 1 }}>
              Bắt đầu miễn phí
            </Button>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} position='relative'>
            <Box
              sx={{ position: "relative", width: "100%", textAlign: "center" }}>
              {/* Người dùng và biểu đồ */}
              <Box
                component='img'
                src={kol} // 👉 Đổi thành link ảnh của bạn
                alt='Man'
                sx={{
                  maxWidth: "75%",
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  bottom: "-4px",
                }}
              />

              {/* Biểu đồ nổi */}
              <Box
                component='img'
                src={chart} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: 0,
                  right: { xs: "5%", md: "10%" },
                  width: { xs: 220, md: 480 },
                }}
              />

              {/* Card: Doanh thu */}
              <Card
                sx={{
                  position: "absolute",
                  bottom: "8%",
                  left: { xs: "5%", md: "10%" },
                  px: 4,
                  py: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  zIndex: 2,
                }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    fontSize={14}
                    fontWeight={"bold"}
                    color='text.secondary'>
                    Doanh thu nhận được
                  </Typography>
                  <Typography fontWeight='bold' color='primary' fontSize={16}>
                    +35,890.00$
                  </Typography>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography fontSize={12} color='text.secondary'>
                      01/04/2025
                    </Typography>
                    <Typography fontSize={12} color='green' fontWeight='bold'>
                      280%
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>

              {/* Card: Người dùng */}
              <Card
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: { xs: "5%", md: "10%" },
                  transform: "translateY(-50%)",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 2,
                }}>
                <AvatarGroup />
                <Box>
                  <Typography fontWeight='bold' fontSize={14}>
                    100k+
                  </Typography>
                  <Typography fontSize={12} color='text.secondary'>
                    Người dùng
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// AvatarGroup Component (Fake users)
const AvatarGroup = () => (
  <Stack direction='row' spacing={-1}>
    {[user1, user2, user3].map((src, idx) => (
      <Avatar
        key={idx}
        src={src}
        alt={`User ${idx + 1}`}
        sx={{ width: 24, height: 24, border: "2px solid white" }}
      />
    ))}
  </Stack>
);

export default BannerHero;
