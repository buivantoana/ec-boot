import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EditIcon from "@mui/icons-material/Edit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import vnpay from "../../images/Frame 1618871626.png";
export default function PayView() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: "#f5f5f5",
        height: "max-content",
        paddingBottom: 0,
      }}>
      <Box display={"flex"} alignItems={"center"} gap={"15px"} mb={3}>
        <RiArrowLeftSLine size={30} />
        <Box>
          <Typography
            variant='h4'
            sx={{ fontSize: { xs: "1.825rem", md: "2.125rem" } }}
            mb={1}
            fontWeight='bold'
            color='primary'>
            Thông tin thanh toán
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Hoàn tất thanh toán để kích hoạt tài khoản thanh toán của bạn
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Left Side */}
        <Grid item xs={12} md={8}>
          {/* Section 1 */}
          <Box mb={3}>
            <Box display={"flex"} mb={2} alignItems={"center"} gap={"15px"}>
              <Typography
                variant='body1'
                style={{
                  borderRadius: "50px",
                  background: "white",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #2E68FD",
                  color: "#2E68FD",
                }}
                fontWeight={"bold"}>
                1
              </Typography>
              <Typography variant='h6' fontWeight='bold'>
                Thông tin người dùng
              </Typography>
            </Box>

            <Card variant='outlined'>
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bgcolor: "#eeeeee",
                      p: 2,
                      borderRadius: 2,
                    }}>
                    <Typography color='textSecondary'>Họ và tên</Typography>
                    <Typography fontWeight='bold'>Tùng Bùi</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bgcolor: "#eeeeee",
                      p: 2,
                      borderRadius: 2,
                    }}>
                    <Typography color='textSecondary'>Số điện thoại</Typography>
                    <Link
                      href='#'
                      underline='none'
                      sx={{
                        fontSize: 15,
                        display: "flex",
                        alignItems: "center",
                        color: "#1976d2",
                      }}>
                      Tạo thêm số điện thoại{" "}
                      <EditIcon fontSize='18px' sx={{ ml: 0.5 }} />
                    </Link>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Section 2 */}
          <Box>
            <Box display={"flex"} mb={2} alignItems={"center"} gap={"15px"}>
              <Typography
                variant='body1'
                style={{
                  borderRadius: "50px",
                  background: "white",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #2E68FD",
                  color: "#2E68FD",
                }}
                fontWeight={"bold"}>
                2
              </Typography>
              <Typography variant='h6' fontWeight='bold'>
                Thông tin người dùng
              </Typography>
            </Box>
            <Stack
              spacing={2}
              sx={{ bgcolor: "white", borderRadius: "15px", padding: "20px" }}>
              <Card sx={{ padding: "10px" }} variant='outlined'>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    ".css-1wizgzv-MuiCardContent-root:last-child": {
                      paddingBottom: "10px",
                    },
                  }}>
                  <AccountBalanceIcon color='primary' sx={{ mr: 2 }} />
                  <Box>
                    <Typography fontWeight='bold'>
                      Chuyển khoản ngân hàng
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      Chuyển khoản trực tiếp đến tài khoản ngân hàng
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ padding: "10px" }} variant='outlined'>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    ".css-1wizgzv-MuiCardContent-root:last-child": {
                      paddingBottom: "10px",
                    },
                  }}>
                  <img
                    style={{ marginRight: "16px" }}
                    src={vnpay}
                    width={24}
                    height={24}
                    alt=''
                  />
                  <Box>
                    <Typography fontWeight='bold'>
                      Thanh toán qua VNPay
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      Thanh toán nhanh chóng và an toàn qua cổng VNPay
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={4}>
          <Typography variant='h6' mb={2} fontWeight='bold' gutterBottom>
            Tổng quan đơn hàng
          </Typography>
          <Card variant='outlined'>
            <CardContent>
              <Stack spacing={2} mb={2}>
                <Box display='flex' justifyContent='space-between'>
                  <Typography color='textSecondary'>Ngày tạo</Typography>
                  <Typography fontWeight={"500"}>14/5/2025</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                  <Typography color='textSecondary'>Gói</Typography>
                  <Typography fontWeight={"500"}>Cơ bản</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                  <Typography color='textSecondary'>Đăng kí theo</Typography>
                  <Typography fontWeight={"500"}>12 tháng</Typography>
                </Box>
                <Divider />
                <Box
                  display='flex'
                  sx={{
                    bgcolor: "#F4F7FF",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  justifyContent='space-between'>
                  <Typography color='textSecondary'>Tổng tiền</Typography>
                  <Typography color='primary' fontWeight='bold'>
                    5.000.000 VND
                  </Typography>
                </Box>
              </Stack>
              <Button
                variant='contained'
                sx={{ borderRadius: "10px" }}
                fullWidth>
                Tiến hành thanh toán
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
