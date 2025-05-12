import {
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  Container,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import image1 from "../../images/image.png";
import image2 from "../../images/Frame 1618871466.png";
import StarIcon from "@mui/icons-material/Star";
const testimonials = [
  {
    name: "James Anderson",
    title: "Chủ cửa hàng thời trang beeso",
    avatar: "/avatar1.jpg",
    content:
      "Since integrating Ecboost's AI chatbot, my shop’s revenue has increased significantly! The chatbot responds extremely quickly, provides smart prod..",
  },
  {
    name: "James Carter",
    title: "Chủ cửa hàng thời trang beeso",
    avatar: "/avatar2.jpg",
    content:
      "Since integrating Ecboost's AI chatbot, my shop’s revenue has increased significantly! The chatbot responds extremely quickly, provides smart prod...",
  },
  {
    name: "Camille Laurent",
    title: "Giám đốc Marketing",
    avatar: "/avatar3.jpg",
    content:
      "I am extremely impressed with the personalization capabilities of the Ecboost chatbot. Not only does it advise the right product, it also knows how to l...",
  },
];
const testimonials2 = [
  {
    name: "James Anderson",
    title: "Chủ cửa hàng thời trang beeso",
    avatar: "/avatar1.jpg",
    content:
      "Since integrating Ecboost's AI chatbot, my shop’s revenue has increased significantly! The chatbot responds extremely quickly, provides smart prod..",
  },
  {
    name: "James Carter",
    title: "Chủ cửa hàng thời trang beeso",
    avatar: "/avatar2.jpg",
    content:
      "Since integrating Ecboost's AI chatbot, my shop’s revenue has increased significantly! The chatbot responds extremely quickly, provides smart prod...",
  },
  {
    name: "Camille Laurent",
    title: "Giám đốc Marketing",
    avatar: "/avatar3.jpg",
    content:
      "I am extremely impressed with the personalization capabilities of the Ecboost chatbot. Not only does it advise the right product, it also knows how to l...",
  },
  {
    name: "Camille Laurent",
    title: "Giám đốc Marketing",
    avatar: "/avatar3.jpg",
    content:
      "I am extremely impressed with the personalization capabilities of the Ecboost chatbot. Not only does it advise the right product, it also knows how to l...",
  },
];

export default function Testimonials() {
  return (
    <Box
      mt={10}
      bgcolor={"#F5F8FF"}
      sx={{
        position: "relative",
      }}
      p={"30px"}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          boxShadow: {
            md: `
          inset 160px 0 30px -20px rgba(255,255,255,.5),   // bóng bên trái
          inset -160px 0 30px -20px rgba(255,255,255,.5)   // bóng bên phải
        `,
          },
          m: "-30px",
        }}></Box>
      <Typography
        variant='h4'
        align='center'
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", my: "30px" ,fontSize:{xs:"1.7rem",md:"2.125rem"}}}>
        Đánh giá của người dùng EcBoost
      </Typography>
      <Typography
        variant='body2'
        color='text.secondary'
        textAlign='center'
        mb={4}>
        Hàng trăm doanh nghiệp Thương mại điện tử đã tin tưởng sử dụng EcBoost
      </Typography>

      <Grid
        container
        width={"100%"}
        alignItems={{ xs: "center" }}
        mb={{xs:0,md:4}}
        justifyContent={"center"}
        spacing={{xs:0, md:3}}>
        {testimonials.map((t, i) => (
          <Grid item xs={12} sm={6} md={3.5} mb={{xs:2,md:0}}  key={i}>
            <Card elevation={1} sx={{ height: "80%", borderRadius: 3 }}>
              <CardContent>
                <Box display='flex' gap={0.5} mb={1}>
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <StarIcon
                        key={j}
                        sx={{ color: "#fbc02d", fontSize: "20px" }}
                      />
                    ))}
                </Box>
                <Typography variant='body2' color='text.secondary' mb={2}>
                  {t.content}
                </Typography>
                <Box display='flex' alignItems='center' gap={1}>
                  <Avatar src={t.avatar} alt={t.name} />
                  <Box>
                    <Typography variant='body2' fontWeight='bold'>
                      {t.name}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {t.title}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        width={{ xs: "100%", md: "120%" }}
        alignItems={{ xs: "center" }}
        sx={{ marginLeft: { md: "-10%" }, mt: "10px" }}
        flexWrap={{ md: "nowrap" }}
        spacing={{xs:0, md:3}}>
        {testimonials2.map((t, i) => (
          <Grid item xs={12} sm={6} mb={{xs:2,md:0}} md={3.8} key={i}>
            <Card elevation={1} sx={{ height: "80%", borderRadius: 3 }}>
              <CardContent>
                <Box display='flex' gap={0.5} mb={1}>
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <StarIcon
                        key={j}
                        sx={{ color: "#fbc02d", fontSize: "20px" }}
                      />
                    ))}
                </Box>
                <Typography variant='body2' color='text.secondary' mb={2}>
                  {t.content}
                </Typography>
                <Box display='flex' alignItems='center' gap={1}>
                  <Avatar src={t.avatar} alt={t.name} />
                  <Box>
                    <Typography variant='body2' fontWeight='bold'>
                      {t.name}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      {t.title}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
