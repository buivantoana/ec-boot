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

export default function EcBoostIntroBlocks() {
  return (
    <>
      <Container sx={{ my: 6 }}>
        {/* Section 1 */}
        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6} mt={3}>
            <Typography variant='h5' color='#787878' gutterBottom>
              <b style={{ color: "black" }}>Lorem Ipsum is</b> simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's <b style={{ color: "black" }}>standard dummy</b> text
              ever since the 1500s,
            </Typography>

            <Button
              variant='contained'
              sx={{
                borderRadius: "24px",
                px: 4,
                py: 1.5,
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
              }}>
              Dùng thử miễn phí
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
      </Container>
    </>
  );
}
