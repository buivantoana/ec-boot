import React, { useState } from 'react';
import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const plans = [
  {
    title: 'Cơ bản',
    price: '999.000đ',
    subtitle: 'Phù hợp cho cửa hàng nhỏ',
    features: [true, true, true, false, false],
    button: 'Chọn gói',
  },
  {
    title: 'Chuyên nghiệp',
    price: '1.699.000đ',
    subtitle: 'Tối ưu cho TMĐT cỡ vừa',
    features: [true, true, true, true, true],
    button: 'Chọn gói',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    title: 'Doanh nghiệp',
    price: 'Liên hệ',
    subtitle: 'Giải pháp tuỳ chỉnh',
    features: [true, true, true, true, true],
    button: 'Liên hệ tư vấn',
  },
];

const PricingCard = ({ plan }) => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: plan.highlight ? 6 : 1,
        border: plan.highlight ? '2px solid #2563eb' : '1px solid #e5e7eb',
        textAlign: 'center',
        backgroundColor: '#fff',
        maxWidth: {xs:"290px", md:"25%"},
        width: '100%',
        position: 'relative',
        transform: {md:plan.highlight ? "translateY(-50px)" : 'none'},
       
      }}
    >
      {plan.highlight ? (
        <Box
          sx={{
            display:"flex",
            gap:"10px",
            mb:2
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
        {plan.title}

      </Typography>
      <Button  sx={{ backgroundColor: '#2563eb' ,
          color:'#fff',borderRadius:1}}>{plan.badge}</Button>
        </Box>
      ):<Typography variant="h6" sx={{ mb: 1 }}>
      {plan.title}
    </Typography>}
      
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1,color:plan.highlight?"#2563eb":"none" }}>
        {plan.price}
        {!plan.price.includes('Liên hệ') && (
          <Typography component="span" variant="body1" sx={{ fontWeight: 400 }}>
            /tháng
          </Typography>
        )}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        {plan.subtitle}
      </Typography>
      <Box sx={{ textAlign: 'left', mb: 3 }}>
        {plan.features.map((f, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            {f ? (
              <CheckCircleIcon sx={{ color: 'green', fontSize: 18 }} />
            ) : (
              <CancelIcon sx={{ color: 'red', fontSize: 18 }} />
            )}
            <Typography variant="body2">Lorem Ipsum is simply dummy</Typography>
          </Box>
        ))}
      </Box>
      <Button
        fullWidth
        variant={plan.highlight ? 'contained' : 'outlined'}
        sx={{
          textTransform: 'none',
          backgroundColor: plan.highlight ? '#2563eb' : '#f3f4f6',
          color: plan.highlight ? '#fff' : '#000',
          '&:hover': {
            backgroundColor: plan.highlight ? '#1e40af' : '#e5e7eb',
          },
          borderRadius:1,
          fontWeight:"bold"
          
        }}
      >
        {plan.button}
      </Button>
    </Box>
  );
};

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly');

  return (
    <Box sx={{ py: 10, px: 2, textAlign: 'center', backgroundColor: '#f9fafb' }}>
      <Typography  variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" ,fontSize:{xs:"1.7rem",md:"2.125rem"}}}>
        Bảng giá linh hoạt EcBoost
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        Chọn gói dịch vụ phù hợp với quy mô doanh nghiệp của bạn
      </Typography>

      <ToggleButtonGroup
        value={billing}
        exclusive
        onChange={(e, value) => value && setBilling(value)}
        sx={{ mb: 8, backgroundColor: '#f3f4f6', borderRadius: "10px", p: 0.5 }}
      >
        <ToggleButton value="monthly" sx={{ textTransform: 'none',  px: {xs:1, md:3}, border: 'none',borderRadius:"10px !important" }}>
          Hàng tháng
        </ToggleButton>
        <ToggleButton value="yearly" sx={{ textTransform: 'none',  px: {xs:1, md:3}, border: 'none', fontWeight: 'bold', color: '#2563eb',borderRadius:"10px !important"  }}>
          Hàng năm - save 40%
        </ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
        mt:"50px",
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: "space-between",
          alignItems:{xs:"center"}
         
        }}
      >
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </Box>
    </Box>
  );
}
