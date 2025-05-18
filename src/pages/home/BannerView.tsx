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
  Hidden,
} from "@mui/material";
import user1 from "../../images/Avatar Image.png";
import user2 from "../../images/Avatar Image (1).png";
import user3 from "../../images/Avatar Image (2).png";
import fb from "../../images/fbbanner.png";
import linefb from "../../images/linefbbanner.png";
import whatapp from "../../images/whatapp.png";
import linewhatapp from "../../images/linewhatapp.png";
import message from "../../images/message.png";
import linemessage from "../../images/linemessage.png";
import web from "../../images/web.png";
import lineweb from "../../images/lineweb.png";
import zalo from "../../images/zalo.png";
import linezalo from "../../images/linezalo.png";
import linked from "../../images/linked.png";
import linelinked from "../../images/linelinked.png";
import kol from "../../images/satisfied-lovely-woman-holds-modern-cell-phone 1 1.png";
import bg1 from "../../images/Rectangle 27.png";
import bg2 from "../../images/Rectangle 28.png";
const BannerHero = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, #d0e6ff 0%, #f8fbff 100%)",

        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 12 },
      }}>
      <Hidden smDown>
        <Box position={"absolute"} right={"-600px"} bottom={"-5px"} zIndex={0}>
          <img src={bg1} width={"100%"} height={"600px"} alt='' />
        </Box>
        <Box position={"absolute"} right={"-200px"} bottom={"-5px"} zIndex={0}>
          <img src={bg2} width={"100%"} height={"100%"} alt='' />
        </Box>
      </Hidden>
      <Container
        maxWidth='lg'
        sx={{ paddingTop: "80px", position: "relative", zIndex: "1" }}>
        <Grid container spacing={12}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant='h1'
              fontWeight='bold'
              sx={{
                mb: 6,
                mt: "15px",
                fontSize: { xs: 30, md: 42 },
                color: "#FFB617",
              }}
              gutterBottom>
              Bán tốt hơn,nổ nghìn đơn với
              <Box component='span' color='primary.main'>
                {" "}
                EcBoot AI
              </Box>{" "}
            </Typography>
            <Typography
              variant='body1'
              color='black'
              fontWeight={"500"}
              sx={{ mb: 6, fontSize: { xs: 15, md: 18 } }}>
              Tăng tốc công việc – Tiết kiệm thời gian & tiền bạc Tăng 50% tỉ lệ
              chốt đơn - tất cả trong một
            </Typography>
            <Box>
              <Button
                variant='contained'
                size='large'
                sx={{ borderRadius: 1, mr: "20px" }}>
                Bắt đầu miễn phí
              </Button>
              <Button
                variant='outlined'
                size='large'
                sx={{ borderRadius: 1, background: "white" }}>
                Tư vấn trực tiếp
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
                src={fb} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: 0,
                  right: { xs: "5%", md: "10%" },
                }}
              />
              <Box
                component='img'
                src={linefb} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "23%", md: "16%" },
                  right: { xs: "5%", md: "10%" },
                }}
              />
              <Box
                component='img'
                src={whatapp} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: "30%",

                  right: { xs: "-2%", md: "-5%" },
                }}
              />
              <Box
                component='img'
                src={linewhatapp} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "43%", md: "40%" },
                  right: { xs: "5%", md: "-3%" },
                }}
              />
              <Box
                component='img'
                src={message} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "50%", md: "55%" },

                  right: { xs: "-10%", md: "-20%" },
                }}
              />
              <Box
                component='img'
                src={linemessage} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: "68%",
                  right: { xs: "5%", md: "-14%" },
                }}
              />
              <Box
                component='img'
                src={web} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "-5%", md: 0 },
                  left: { xs: "-5%", md: "2%" },
                }}
              />
              <Box
                component='img'
                src={lineweb} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: "15%",
                  left: { xs: "5%", md: "10%" },
                }}
              />
              <Box
                component='img'
                src={zalo} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                width={"70px"}
                sx={{
                  position: "absolute",
                  top: { xs: "18%", md: "25%" },
                  left: { xs: "-4%", md: "-15%" },
                }}
              />
              <Box
                component='img'
                src={linezalo} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: "38%",
                  left: { xs: "5%", md: "-10%" },
                }}
              />
              <Box
                component='img'
                src={linked} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "52%", md: "60%" },
                  left: { xs: "-4%", md: "-20%" },
                }}
              />
              <Box
                component='img'
                src={linelinked} // 👉 Đổi thành link ảnh biểu đồ
                alt='Chart'
                sx={{
                  position: "absolute",
                  top: { xs: "64%", md: "68%" },
                  left: { xs: "0%", md: "-15%" },
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
