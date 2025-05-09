import { Box, Typography, Grid, Paper, Stack, Button, Container } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import group from "../../images/Group 39533.png";
import user_aigen from "../../images/aigen_user.png";

export default function VirtualTryOnBanner() {
  return (
    <Box
      sx={{
        background: "linear-gradient(225deg, #EEF4FF 0%, #F5F8FF 100%)",
        py: { xs: 8, md: 12 },
        px: { xs: 0, md: 4 },
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        {/* Center Text */}
        <Grid item xs={12} mt={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 30, md: 42 } }}
              fontWeight={700}
            >
              AI Clothes Changer for Virtual Clothes Try On
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Change outfits, change clothes in your photos in seconds with FitRoom
            </Typography>
          </Stack>
        </Grid>

        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          mt={{ xs: 4, md: 8 }}
        >
          {/* Left Image */}
          <Grid item xs={12} md={5} textAlign="center">
            <Box
              component="img"
              src={group}
              alt="Virtual Tryon"
              sx={{
                width: { xs: "80%", md: "100%" },
                height: "auto",
                borderRadius: 2,
                objectFit: "contain",
                mx: "auto",
              }}
            />
          </Grid>

          {/* Right Upload Box */}
          <Grid item xs={12}  md={5}>
            <Paper
              
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                width: {xs:"80%",md:"100%"},
                mx: "auto",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mb: 2, borderRadius: 1, p: "10px" }}
                startIcon={<UploadIcon />}
              >
                Tải lên hình ảnh
              </Button>
              <Typography
                variant="body2"
                align="center"
                my={{ xs: 2, md: "20px" }}
                color="text.secondary"
              >
                Hoặc chỉ cần thả vào đây
                <br />
                Ctrl + V để dán hình ảnh
              </Typography>
              <Typography
                variant="caption"
                align="center"
                display="block"
                color="text.disabled"
                mt={2}
              >
                Không có hình ảnh? Thử một trong những cái này
              </Typography>
              <Box display="flex" justifyContent="center" gap={1} mt={3}>
                {[1, 2, 3, 4].map((num) => (
                  <Box
                    key={num}
                    component="img"
                    src={user_aigen}
                    alt={`Sample ${num}`}
                    sx={{ width: 40, height: 40, borderRadius: 1 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
