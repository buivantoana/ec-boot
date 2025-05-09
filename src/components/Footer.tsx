import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Google,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", pt: 6, pb: 3, mt: 8 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Logo + Description */}
          <Grid item xs={12} md={3}>
            <Box display='flex' alignItems='center' mb={1}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: "#ccc",
                  mr: 1,
                }}
              />
              <Typography fontWeight='bold'>EcBoost</Typography>
            </Box>
            <Typography variant='body2' color='text.secondary' mb={2}>
              Giải pháp hàng đầu cho doanh nghiệp thương mại điện tử
            </Typography>
            <Stack direction='row' spacing={1}>
              <IconButton size='small'>
                <Google fontSize='small' />
              </IconButton>
              <IconButton size='small'>
                <Twitter fontSize='small' />
              </IconButton>
              <IconButton size='small'>
                <Instagram fontSize='small' />
              </IconButton>
              <IconButton size='small'>
                <LinkedIn fontSize='small' />
              </IconButton>
            </Stack>
          </Grid>

          {/* Về chúng tôi */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight='bold' gutterBottom>
              Về chúng tôi
            </Typography>
            <Stack spacing={1}>
              <Link href='#' underline='hover' color='text.secondary'>
                Giới thiệu
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Đội ngũ
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Blog
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Liên hệ
              </Link>
            </Stack>
          </Grid>

          {/* Công cụ */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight='bold' gutterBottom>
              Công cụ
            </Typography>
            <Stack spacing={1}>
              <Link href='#' underline='hover' color='text.secondary'>
                AI Style Gen
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                AI video product
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                AI voice chat
              </Link>
            </Stack>
          </Grid>

          {/* Hỗ trợ */}
          <Grid item xs={12} md={3}>
            <Typography fontWeight='bold' gutterBottom>
              Hỗ trợ
            </Typography>
            <Stack spacing={1}>
              <Link href='#' underline='hover' color='text.secondary'>
                Trung tâm hỗ trợ
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Hướng dẫn
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Câu hỏi thường gặp
              </Link>
              <Link href='#' underline='hover' color='text.secondary'>
                Chính sách bảo mật
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          mt={4}
          pt={3}
          borderTop='1px solid #e0e0e0'
          display='flex'
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent='space-between'
          alignItems='center'
          textAlign={{ xs: "center", md: "left" }}>
          <Typography variant='body2' color='text.secondary'>
            © 2025 EcBoost. Bảo lưu mọi quyền
          </Typography>
          <Stack direction='row' spacing={3} mt={{ xs: 2, md: 0 }}>
            <Link href='#' underline='hover' color='text.secondary'>
              Điều khoản
            </Link>
            <Link href='#' underline='hover' color='text.secondary'>
              Bảo mật
            </Link>
            <Link href='#' underline='hover' color='text.secondary'>
              Cookie
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
