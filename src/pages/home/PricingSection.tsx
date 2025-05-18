import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const billingOptions = [
  "1 tháng",
  "3 tháng",
  "6 tháng",
  "12 tháng - tiết kiệm 40%",
];

const plans = [
  {
    title: "Cơ bản",
    price: "999.000đ",
    note: "/tháng",
    description: "Dành cho chủ Shop nhỏ",
    features: [
      "15,000 Coins dùng cho tạo ảnh và video (tìm hiểu thêm)",
      "AI Chatbot chuyên nghiệp",
      "Giới hạn 5000 tin nhắn hỗ trợ",
      "Tích hợp AI Chatbot cho 5 fanpage, website, Zalo OA",
      "Đào tạo cho AI 2 lần đào training dữ liệu (tìm hiểu)",
      "Tạo Video tốc độ cao",
      "AI style generate - Change outfit",
      "Hỗ trợ cài đặt, đào tạo Chatbot",
    ],
    button: "Dùng thử 7 ngày miễn phí",
    buttonVariant: "contained",
    buttonColor: "#EEEEEE",
    color: "black",
  },
  {
    title: "Chuyên nghiệp",
    price: "1.699.000đ",
    note: "/tháng",
    description: "Tối ưu cho TMĐT cỡ vừa",
    features: [
      "15,000 Coins dùng cho tạo ảnh và video (tìm hiểu thêm)",
      "AI Chatbot chuyên nghiệp",
      "Giới hạn 20.000 tin nhắn hỗ trợ",
      "Tích hợp AI Chatbot cho 5 fanpage, website, Zalo OA",
      "10 Tài liệu đào tạo AI (tìm hiểu)",
      "Tạo Video tốc độ cao",
      "AI style generate - Change outfit",
      "Hỗ trợ cài đặt, đào tạo Chatbot",
    ],
    button: "Dùng thử 7 ngày miễn phí",
    highlight: true,
    badge: "Được dùng nhiều",
    buttonVariant: "contained",
    buttonColor: "#2E68FD",
    color: "white",
  },
  {
    title: "Doanh nghiệp",
    price: "Liên hệ",
    description: "Giải pháp tuỳ chỉnh",
    features: [
      "Tích hợp AI Chatbot đa nền tảng",
      "Đào tạo chuyên sâu cho Chatbot",
      "Tuỳ biến sâu theo nhu cầu đặc thù của từng doanh nghiệp",
      "Tích hợp hệ thống Tạo Video bảo mật cho doanh nghiệp. Quy trình khép kín",
      "Tích hợp hệ thống dữ liệu nội bộ hoặc hệ thống Chat Offline dành riêng cho doanh nghiệp",
    ],
    button: "Nhận tư vấn ngay",
    buttonVariant: "contained",
    buttonColor: "linear-gradient(135.46deg, #FFB617 3.18%, #FF440B 102.39%)",
    color: "white",
  },
];

const PricingCard = ({ plan }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: { xs: 0, md: 4 },
        py: { xs: 1, md: 4 },
        borderRadius: 4,
        boxShadow: plan.highlight ? 6 : 1,
        border: plan.highlight ? "2px solid #2563eb" : "1px solid #e5e7eb",
        textAlign: "center",
        backgroundColor: "#fff",
        width: "100%",
        position: "relative",
        maxWidth: { xs: "100%", sm: "90%", md: "320px" },
      }}>
      {plan.badge ? (
        <Box display={"flex"} justifyContent={"center"} gap={"15px"}>
          <Typography variant='h6' sx={{ mb: 1, fontWeight: 600 }}>
            {plan.title}
          </Typography>
          <Box
            sx={{
              backgroundColor: "#2563eb",
              color: "#fff",
              fontSize: 12,
              px: 1,
              py: 1,
              borderRadius: 1,
              height: "max-content",
            }}>
            {plan.badge}
          </Box>
        </Box>
      ) : (
        <Typography variant='h6' sx={{ mb: 1, fontWeight: 600 }}>
          {plan.title}
        </Typography>
      )}

      <Typography
        variant='h4'
        sx={{ fontWeight: "bold", color: plan.highlight ? "#2563eb" : "#000" }}>
        {plan.price}
        {plan.note && (
          <Typography component='span' variant='body1' sx={{ fontWeight: 400 }}>
            {plan.note}
          </Typography>
        )}
      </Typography>

      <Typography variant='body2' sx={{ color: "text.secondary", mb: 3 }}>
        {plan.description}
      </Typography>
      <hr style={{ margin: "20px 0" }}></hr>
      <Box p={{ xs: 1.5, md: 0 }}>
        <Button
          onClick={() => navigate("/pay")}
          fullWidth
          variant={plan.buttonVariant}
          sx={{
            textTransform: "none",
            mb: 3,
            fontWeight: 600,
            borderRadius: "10px",
            background: plan.buttonColor,
            color: plan.color,
          }}>
          {plan.button}
        </Button>

        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
          {plan.features.map((feature, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
              <CheckCircleIcon sx={{ color: "green", fontSize: 20 }} />
              <Typography variant='body2'>{feature}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default function PricingSection() {
  const [billing, setBilling] = useState(billingOptions[3]);

  return (
    <Box
      sx={{ py: 10, px: 2, textAlign: "center", backgroundColor: "#f9fafb" }}>
      <Typography
        variant='h4'
        sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
        Chọn gói phù hợp với nhu cầu của bạn
      </Typography>
      <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
        Chọn gói dịch vụ phù hợp với quy mô doanh nghiệp của bạn
      </Typography>

      <Box display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
            bgcolor: "#F6F6F6",
            width: "max-content",
            borderRadius: "10px",
            p: 1,
          }}>
          {billingOptions.map((option) => (
            <Button
              key={option}
              variant={billing === option ? "outlined" : "text"}
              onClick={() => setBilling(option)}
              sx={{
                textTransform: "none",

                backgroundColor: billing === option ? "white" : "transparent",
                color: billing === option ? "#2E68FD" : "#000",

                px: 2.5,
                border: "none",
                borderRadius: "10px",
              }}>
              {option}
            </Button>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </Box>
    </Box>
  );
}
