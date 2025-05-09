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
      "Ecboost saves me dozens of hours each week in responding to messages. The chatbot automatically handles up to 80% of customer questions while still looking...",
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
      "Ecboost saves me dozens of hours each week in responding to messages. The chatbot automatically handles up to 80% of customer questions while still looking...",
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

export default function EcBoostIntroBlocks() {
  return (
    <>
      <Container maxWidth='lg' sx={{ my: 6 }}>
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
          Công cụ AI thông minh hiệu quả cao cho mọi nhu cầu,
          <br />
          mọi ngành nghề
        </Typography>
        <Typography
          variant='body2'
          textAlign='center'
          color='text.secondary'
          mt={1}
          mb={6}>
          Cùng sáng tạo với các công cụ cực dễ sử dụng của EcBoost
        </Typography>

        {/* Section 1 */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' fontWeight='bold' gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body2'
              my={"30px"}
              color='text.secondary'
              mb={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>

            <Stack spacing={3} mb={3}>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Box display='flex' alignItems='center' key={i}>
                    <CheckIcon
                      fontSize='small'
                      sx={{ color: "#2D66F7", mr: 1 }}
                    />
                    <Typography variant='body2'>
                      Lorem Ipsum is simply dummy
                    </Typography>
                  </Box>
                ))}
            </Stack>

            <Button
              variant='contained'
              sx={{
                borderRadius: "24px",
                px: 4,
                py: 1.5,
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Thử AI style gen
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={image1}
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

        {/* Section 2 */}
        <Grid
          container
          spacing={4}
          flexDirection={{ xs: "column-reverse", md: "row" }}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={image2}
              alt='Chatbot'
              sx={{
                width: "100%",
                borderRadius: 4,
                maxWidth: 500,
                mr: "auto",
                display: "block",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h2' fontWeight='bold' gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body2'
              my={"30px"}
              color='text.secondary'
              mb={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>

            <Stack spacing={3} mb={3}>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Box display='flex' alignItems='center' key={i}>
                    <CheckIcon
                      fontSize='small'
                      sx={{ color: "#2D66F7", mr: 1 }}
                    />
                    <Typography variant='body2'>
                      Lorem Ipsum is simply dummy
                    </Typography>
                  </Box>
                ))}
            </Stack>

            <Button
              variant='contained'
              sx={{
                borderRadius: "24px",
                px: 4,
                py: 1.5,
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Thử AI Chatbot
            </Button>
          </Grid>
        </Grid>

        <Box mt={10}>
          <Typography
            variant='h4'
            align='center'
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
            Đánh giá của người dùng EcBoost
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            textAlign='center'
            mb={4}>
            Hàng trăm doanh nghiệp Thương mại điện tử đã tin tưởng sử dụng
            EcBoost
          </Typography>

          <Grid container justifyContent={"center"} spacing={3}>
            {testimonials.map((t, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
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
          <Grid container width={"100%"} spacing={3}>
            {testimonials2.map((t, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
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
      </Container>
    </>
  );
}
