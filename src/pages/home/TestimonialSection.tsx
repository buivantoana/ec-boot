import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import image from "../../images/image 1838.png";
const Root = styled(Box)(({ theme }) => ({
  backgroundColor: "#f4f7fe",
  padding: theme.spacing(8, 2),
  textAlign: "center",
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  maxWidth: 1000,
  margin: "0 auto",
  backgroundColor: "white",
  boxShadow: theme.shadows[2],
  borderRadius: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "left",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: 320,
  height: "auto",
  borderRadius: theme.spacing(1),
  objectFit: "cover",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
    width: "100%",
  },
}));

export default function TestimonialSection() {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Root>
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
        Câu chuyện của người dùng EcBoost
      </Typography>
      <Typography variant='body1' color='textSecondary' mb={4}>
        Hàng trăm doanh nghiệp Thương mại điện tử đã tin tưởng sử dụng EcBoost
      </Typography>

      <TestimonialCard>
        <Image
          width={"100%"}
          height={"100%"}
          src={image} // Replace with actual path
          alt='Customer'
        />
        <CardContent>
          <Typography
            variant='body2'
            align='left'
            sx={{ color: "#3b82f6", fontWeight: 500, mb: 1 }}>
            Câu chuyện thành công
          </Typography>
          <Typography align='left' variant='h6' fontWeight='bold' gutterBottom>
            Shop thời trang Beso tăng doanh số 45% sau 2 tháng
          </Typography>
          <Typography
            align='left'
            variant='body2'
            color='text.secondary'
            gutterBottom>
            "Từ khi sử dụng bộ công cụ AI ShopMaster, chúng tôi không còn phải
            trực khuya trả lời tin nhắn khách hàng. Hình ảnh sản phẩm trở nên
            chuyên nghiệp hơn hẳn, video quảng cáo được làm nhanh chóng giúp
            chúng tôi chạy nhiều chiến dịch marketing hơn."
          </Typography>

          <Box mt={2} display='flex' alignItems='center'>
            <Avatar
              src='/testimonials/avatar.png' // Replace with actual path
              alt='Chị Nguyễn Quỳnh Trang'
              sx={{ width: 40, height: 40, mr: 1.5 }}
            />
            <Box>
              <Typography variant='body2' fontWeight={600}>
                Chị Nguyễn Quỳnh Trang
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                Chủ cửa hàng thời trang beso
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </TestimonialCard>
    </Root>
  );
}
