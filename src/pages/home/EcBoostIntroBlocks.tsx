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
import image3 from "../../images/video.png";
import image4 from "../../images/tts.png";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function EcBoostIntroBlocks() {
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ my: 6 }}>
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
          Công cụ AI thông minh hiệu quả cao cho mọi nhu cầu,
          <br />
          mọi ngành nghề
        </Typography>
        <Typography
          variant='body1'
          textAlign='center'
          color='text.secondary'
          mt={1}
          mb={6}>
          Cùng sáng tạo với các công cụ cực dễ sử dụng của EcBoost
        </Typography>

        {/* Section 1 */}
        <Grid container spacing={4} mb={10}>
          <Grid item xs={12} md={6}>
            <Typography
              variant={"h1"}
              sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}
              fontWeight='bold'
              gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
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
                    <Typography variant='body1'>
                      Lorem Ipsum is simply dummy
                    </Typography>
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
        {/* <Grid
          container
          spacing={4}
          flexDirection={{ xs: "column-reverse", md: "row" }} 
          mb={10}>
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
            <Typography variant={'h1'} sx={{fontSize:{xs:"1.7rem",md:"2.5rem"}}}  fontWeight='bold' gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
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
                    <Typography variant='body1'>
                      Lorem Ipsum is simply dummy
                    </Typography>
                  </Box>
                ))}
            </Stack>

            <Button
              variant='contained'
              sx={{
                borderRadius: 1,
                fontSize:{xs:"14px",md:"18px"},
                px: 4,
                py: {xs:1,md:1.5},
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Thử AI Chatbot
            </Button>
          </Grid>
        </Grid> */}

        <Grid container spacing={4} my={10}>
          <Grid item xs={12} md={6}>
            <Typography
              variant={"h1"}
              sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}
              fontWeight='bold'
              gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
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
                    <Typography variant='body1'>
                      Lorem Ipsum is simply dummy
                    </Typography>
                  </Box>
                ))}
            </Stack>

            <Button
              variant='contained'
              sx={{
                borderRadius: 1,
                fontSize: { xs: "14px", md: "18px" },
                px: 4,
                py: { xs: 1, md: 1.5 },
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Thử AI video
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={image3}
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
        {/* <Grid
          container
          spacing={4}
          flexDirection={{ xs: "column-reverse", md: "row" }}>
          <Grid item xs={12} md={6}>
            <Box
              component='img'
              src={image4}
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
            <Typography
              variant={"h1"}
              sx={{ fontSize: { xs: "1.7rem", md: "2.5rem" } }}
              fontWeight='bold'
              gutterBottom>
              Lorem Ipsum is simply dummy text
            </Typography>
            <Typography
              variant='body1'
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
                    <Typography variant='body1'>
                      Lorem Ipsum is simply dummy
                    </Typography>
                  </Box>
                ))}
            </Stack>

            <Button
              variant='contained'
              sx={{
                borderRadius: 1,
                fontSize: { xs: "14px", md: "18px" },
                px: 4,
                py: { xs: 1, md: 1.5 },
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Thử AI voice text
            </Button>
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
}
