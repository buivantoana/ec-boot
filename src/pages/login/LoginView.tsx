import React from "react";
import { Button, Typography, Box, Grid, Link, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import bg from "../../images/bg.png";
import left from "../../images/Frame 1618871614.png";
import google from "../../images/Social button.png";
import fb from "../../images/Social button (1).png";
export default function LoginView() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url("${bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          width={{ xs: "100%", md: "80%" }}
          display={"flex"}
          justifyContent={"center"}>
          <img
            src={left}
            width={"100%"}
            style={{ objectFit: "contain" }}
            alt=''
          />
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          bgcolor: "white",
        }}>
        <Box maxWidth={360} width='100%'>
          <Typography variant='h6' align='center' fontWeight='500' gutterBottom>
            Ecboost
          </Typography>
          <Typography
            my={"20px"}
            variant='h5'
            align='center'
            fontWeight={"bold"}
            color='#2E68Fd'
            gutterBottom>
            Đăng nhập tài khoản
          </Typography>
          <Typography
            variant='body2'
            color='#515151'
            align='center'
            gutterBottom>
            Chọn phương thức đăng nhập
          </Typography>
          <Box>
            <img src={google} width={"100%"} alt='' />
          </Box>

          <Divider sx={{ my: 2 }}>Hoặc</Divider>

          <Box mb={2}>
            <img src={fb} width={"100%"} alt='' />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link href='#' fontSize={15}>
              Điều khoản dịch vụ
            </Link>
            <Link href='#' fontSize={15}>
              Chính sách bảo mật
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
