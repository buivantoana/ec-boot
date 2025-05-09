import { Box, Typography, Grid, Button, Container } from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ImageIcon from "@mui/icons-material/Image";
import LockIcon from "@mui/icons-material/Lock";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const features = [
  {
    icon: <FlashOnIcon fontSize="large" color="primary" />,
    title: "Ghép Ảnh Nhanh Chóng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    icon: <ImageIcon fontSize="large" color="primary" />,
    title: "Ghép Ảnh Nhanh Chóng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    icon: <LockIcon fontSize="large" color="primary" />,
    title: "Riêng Tư và Bảo Mật",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    icon: <TravelExploreIcon fontSize="large" color="primary" />,
    title: "Thay Đổi Trải Nghiệm Thời Trang",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

export default function FeatureGridSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
      <Container maxWidth="lg">
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
          Ưu điểm của AI Style Gen
        </Typography>

        <Grid container spacing={4} mt={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index} textAlign="center">
              <Box mb={1}>{feature.icon}</Box>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{lineHeight:2.2}} color="text.secondary">
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" mt={6}>
          <Button variant="contained" sx={{borderRadius:1,fontWeight:"bold"}} endIcon={<ArrowForwardIcon />}  size="large">
            Thử ngay
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
