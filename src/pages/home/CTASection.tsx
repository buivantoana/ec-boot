import React from 'react';
import { Box, Button, Container, Hidden, Typography, useTheme } from '@mui/material';
import bg1 from "../../images/Rectangle 27.png"
import bg2 from "../../images/Rectangle 28.png"
const CTASection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #d8e6ff 100%)",
        py: { xs: 6, md: 8 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
      <Hidden smDown>
        <Box position={"absolute"} right={0} top={0} zIndex={0}>
          <img src={bg1} width={"100%"} height={"100%"} alt='' />
        </Box>
        <Box position={"absolute"} right={0} top={0} zIndex={0}>
          <img src={bg2} width={"100%"} height={"100%"} alt='' />
        </Box>
      </Hidden>
      <Container maxWidth='md' sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            my: "30px",
            fontSize: { xs: "1.7rem", md: "2.125rem" },
          }}>
          Sẵn sàng đưa shop của bạn lên tầm cao mới?
        </Typography>
        <Typography
          variant='body1'
          fontWeight={"500"}
          color='text.secondary'
          mb={4}>
          Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt cho 100 khách hàng đầu
          tiên
        </Typography>
        <Box
          display='flex'
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent='center'
          alignItems='center'
          gap={2}>
          <Button
            variant='contained'
            size='large'
            sx={{
              backgroundColor: "#2563eb",
              color: "#fff",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
            }}>
            Dùng thử miễn phí
          </Button>
          <Button
            variant='outlined'
            size='large'
            sx={{
              color: "#000",
              borderColor: "#e0e0e0",
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}>
            Liên hệ tư vấn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
