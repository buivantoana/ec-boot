import React from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

const CTASection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #d8e6ff 100%)',
        py: { xs: 6, md: 8 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
          Sẵn sàng nâng doanh số cùng Ec boost
        </Typography>
        <Typography variant="body1" fontWeight={"500"} color="text.secondary" mb={4}>
          Hơn 500+ doanh nghiệp thương mại điện tử đã tăng doanh thu nhờ giải pháp của chúng tôi
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#2563eb',
              color: '#fff',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#1d4ed8',
              },
            }}
          >
            Dùng thử miễn phí
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: '#000',
              borderColor: '#e0e0e0',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Liên hệ tư vấn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
