import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import toolimage1 from "../../images/Frame 1618871476.png";
import toolimage2 from "../../images/Frame 1618871477.png";
import toolimage3 from "../../images/Frame 1618871478.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ToolCardSection2 = () => {
  const tools = [
    {
      image: toolimage1,
      title: "Thay đổi phần trên",
      description: "Biến trang phục hiện tại của bạn thành áo sơ mi, áo polo, áo phông, áo khoác, áo khoác blazer và nhiều loại khác.",
    },
    {
      image: toolimage2,
      title: "Thay đổi phần dưới",
      description: "Chuyển đổi trang phục hiện tại của bạn thành quần short, quần jean, quần âu, quần da, váy, v.v.",
    },
    {
      image: toolimage3,
      title: "Thay đổi toàn bộ trang phục",
      description: "Biến đổi toàn bộ trang phục của bạn thành bộ đồ công sở, bộ đồ denim, bộ đồ liền thân, bộ đồ bikini, bộ đồ thể thao, bộ đồ,...",
    },
  ];

  return (
    <Container maxWidth='lg' sx={{ my: 6 }}>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", my: "30px",fontSize:{xs:"1.7rem",md:"2.125rem"} }}>
        Trông thật tuyệt vời trong mọi dịp với AI Style Gen
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        gutterBottom
        sx={{ color: "#666", mb: 6 }}>
        Nhận vô số ý tưởng trang phục với công cụ thay đổi quần áo AI của chúng tôi. Với sự trợ giúp của công cụ này, bạn có thể thay đổi toàn bộ trang phục hoặc chỉ một phần nhất định của trang phục trong vài giây. Cá nhân hóa trang phục của bạn một cách dễ dàng với các tùy chọn có sẵn hoặc trang phục do AI tạo ra từ văn bản của bạn.
      </Typography>
      <Grid container gap='15px' justifyContent={{xs:"center",md:'space-between'}}>
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
                height: "95%", // Ensure card height is 100% of parent
                display: "flex",
                flexDirection: "column",
                padding:0
              }}>
              <CardMedia
                component='img'
                height='auto'
                image={tool.image}
                alt={tool.title}
                sx={{ objectFit: "cover", }} // Ensure image fits within height
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "16px",
                 
                  // Align content to the top
                }}>
                <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'
                  
                    sx={{ fontWeight: "bold", color: "#444", mb: 1 }}>
                    {tool.title}
                  </Typography>

                </Box>

                <Typography
                  variant='body2'
                  color='text.secondary'
                  
                  sx={{ color: "#666" ,mb: 2}}>
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

export default ToolCardSection2;
