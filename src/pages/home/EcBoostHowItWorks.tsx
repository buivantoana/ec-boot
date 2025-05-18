import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  Container,
} from "@mui/material";
import group from "../../images/Group 39530.png";
import CheckIcon from "@mui/icons-material/Check";
import chat from "../../images/Frame 1321315984.png";
const tabItems = [
  { label: "Style gen", icon: "🧢" },
  { label: "Chatbot", icon: "🤖" },
  { label: "Text to voice", icon: "🎙️" },
  { label: "Video product", icon: "📹" },
];

export default function EcBoostHowItWorks() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Container maxWidth='lg' sx={{ my: 6 }}>
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
        Bộ Công Cụ Chính Giúp Bạn Bán Hàng Hiệu Quả Hơn
      </Typography>
      <Typography variant='body1' textAlign='center' mb={4}>
        Tất cả những gì bạn cần để phát triển shop online đều có trong một nền
        tảng
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
            bgcolor: "#f2f2f2",
            p: 1.2,
            borderRadius: 1.5,
            width: "max-content",
          }}>
          {tabItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: { xs: 1, md: 3 },
                py: 1,
                bgcolor: index === 0 ? "white" : "unset",
                borderRadius: 1.5,
                fontWeight: index === 0 ? "bold" : "normal",
                boxShadow: index === 0 ? 2 : "none",
                cursor: "pointer",
              }}>
              <span>{item.icon}</span>
              <Typography variant='body2' fontWeight={"500"}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Grid container spacing={4} mt={3} mb={10}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={"h2"}
            sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}
            fontWeight='500'
            gutterBottom>
            🧠 AI Chat Bot - Giải pháp tối ưu cho CSKH
          </Typography>
          <Typography variant='body1' my={"30px"} color='text.secondary' mb={2}>
            Trợ lý tư vấn bán hàng 24/7
          </Typography>

          <Stack spacing={3} mb={3}>
            {[
              "Các kịch bản chốt bán hàng đa dạng phục vụ mục tiêu tăng tỷ lệ chuyển đổi",
              "Chatbot có thể hỏi lại thông tin của khách hàng",
              "Tự động trả lời tin nhắn khách hàng Facebook/Website/Zalo OA",
              "Đã được chứng minh là tăng tỷ lệ chốt hợp đồng lên 50%",
            ].map((_, i) => (
              <Box display='flex' alignItems='center' gap={"15px"} key={i}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",

                    color: " #2D66F7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    flexShrink: 0,
                    border: "1px solid #2D66F7",
                  }}>
                  {i + 1}
                </Box>
                <Typography variant='body1'>{_}</Typography>
              </Box>
            ))}
          </Stack>

          <Button
            variant='contained'
            onClick={() => navigate("/ai-gen")}
            sx={{
              borderRadius: 1,
              fontSize: { xs: "14px", md: "18px" },
              px: 4,
              py: { xs: 1, md: 1.5 },
              backgroundColor: "#2D66F7",
              fontWeight: "bold",
              mt: 2,
            }}>
            Bắt đầu miễn phí
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component='img'
            src={chat}
            alt='Style Gen'
            sx={{
              width: "100%",
              borderRadius: 4,
              maxWidth: 500,
              ml: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
      <Box>
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
          Công cụ AI thông minh hiệu quả cao cho mọi nhu cầu, mọi ngành nghê
        </Typography>
        <Typography variant='body1' textAlign='center' mb={4}>
          Cùng sáng tạo với các công cụ cực dễ sử dụng của EcBoot
        </Typography>
      </Box>
      <Grid container spacing={6} alignItems='center'>
        <Grid item xs={12} md={6}>
          <Box
            component='img'
            src={group}
            alt='Trước và Sau'
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: 3,
              maxWidth: 420,
              display: "block",
              mx: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={8}>
            {[1, 2, 3].map((step) => (
              <Box
                key={step}
                display='flex'
                alignItems='flex-start'
                width={"90%"}
                gap={2}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",

                    color: " #2D66F7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    flexShrink: 0,
                    border: "1px solid #2D66F7",
                  }}>
                  {step}
                </Box>
                <Box>
                  <Typography variant='subtitle1' fontWeight='bold'>
                    Lorem Ipsum is simply dummy text
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Box textAlign='center' mt={6}>
        <Button
          variant='contained'
          size='large'
          sx={{
            borderRadius: 1,
            px: 2,
            py: 1,

            backgroundColor: "#2D66F7",
            ":hover": {
              backgroundColor: "#1a4fd3",
            },
          }}>
          Bắt đầu miễn phí
        </Button>
      </Box>
    </Container>
  );
}
