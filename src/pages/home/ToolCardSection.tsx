import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import toolimage1 from "../../images/image.png";
import toolimage2 from "../../images/image (1).png";
import toolimage3 from "../../images/image (2).png";

const ToolCardSection = () => {
  const tools = [
    {
      image: toolimage1,
      title: "AI Style Gen",
      description: "Hỗ trợ tạo ảnh cho shop thời trang",
    },
    {
      image: toolimage2,
      title: "AI Chat",
      description: "Hỗ trợ tích hợp chatbot cho các chủ shop",
    },
    {
      image: toolimage3,
      title: "AI Video Product",
      description: "Hỗ trợ tạo video giới thiệu sản phẩm - tạo video quảng cáo",
    },
  ];

  return (
    <Container maxWidth='lg' sx={{ my: 6 }}>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", my: "30px",fontSize:{xs:"1.7rem",md:"2.125rem"} }}>
        Công cụ AI vượt trội hàng đầu cho TMDT
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        gutterBottom
        sx={{ color: "#666", mb: 6 }}>
        Cùng sáng tạo với các công cụ được sử dụng từ EcBoost
      </Typography>
      <Grid container gap='15px' justifyContent='space-between'>
        {tools.map((tool, index) => (
          <Grid item xs={11} sm={5} md={3.6} key={index}>
            <Card
              sx={{
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 1,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 3,
                },
                height: "85%", // Ensure card height is 100% of parent
                display: "flex",
                flexDirection: "column",
              }}>
              <CardMedia
                component='img'
                height='170'
                image={tool.image}
                alt={tool.title}
                sx={{ objectFit: "cover", borderRadius: "10px" }} // Ensure image fits within height
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "10px",
                  paddingBottom: "0px",
                  // Align content to the top
                }}>
                <Typography
                  gutterBottom
                  variant='h6'
                  component='div'
                  align='center'
                  sx={{ fontWeight: "bold", color: "#444", mb: 1 }}>
                  {tool.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  align='center'
                  sx={{ color: "#666" }}>
                  {tool.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolCardSection;
