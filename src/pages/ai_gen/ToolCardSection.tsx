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
import toolimage1 from "../../images/Frame 1618871474.png";
import toolimage2 from "../../images/Frame 1618871470 (1).png";
import toolimage3 from "../../images/Frame 1618871470 (2).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ToolCardSection = () => {
  const tools = [
    {
      image: toolimage1,
      title: "Tải/chọn ảnh quần áo",
      description: "Khám phá nhiều loại trang phục AI có sẵn và chọn trang phục bạn thích hoặc viết lời nhắc tùy chỉnh để tạo trang phục của riêng bạn.",
    },
    {
      image: toolimage2,
      title: "Tải/chọn ảnh mẫu",
      description: "Chọn một bức ảnh rõ nét của bạn mà bạn muốn áp dụng tính năng thử trang phục ảo. ",
    },
    {
      image: toolimage3,
      title: "Đợi AI thay đồ trong ảnh",
      description: "Nhấp vào “Tạo” để áp dụng trang phục ảo. Tải hình ảnh đã tạo về thiết bị.",
    },
  ];

  return (
    <Container maxWidth='lg' sx={{ my: 6 }}>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", my: "30px" ,fontSize:{xs:"1.7rem",md:"2.125rem"}}}>
       Cách thay quần áo trong ảnh dễ dàng
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        gutterBottom
        sx={{ color: "#666", mb: 6 }}>
       EcBoost giúp bạn thử những bộ đồ, trang phục ngay trong ảnh chỉ với 3 bước cực kì đơn giản:
      </Typography>
      <Grid container gap='15px' justifyContent={'space-between'}>
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
                height='auto'
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
                <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                  <Typography
                    gutterBottom
                    variant='body1'
                    component='div'
                    align='center'
                    sx={{  color: "#2E68FD", mb: 1,width:"32px",height:"32px",borderRadius:"50%",border:"1px solid #2E68FD",display:'flex',alignItems:"center",justifyContent:"center" }}>
                    {index +1}
                  </Typography>
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

export default ToolCardSection;
