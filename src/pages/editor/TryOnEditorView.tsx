import React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Button,
  Container,
  Avatar,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { RiFilterOffLine, RiInformationLine } from "react-icons/ri";
import user_aigen from "../../images/aigen_user.png";

// Header buttons
const ProButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right, #FFD700, #FF6600)",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "12px",
  padding: "6px 16px",
  "&:hover": {
    background: "linear-gradient(to right, #FFC300, #FF5722)",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  color: "#000",
  fontWeight: "500",
  textTransform: "none",
  borderRadius: "12px",
  padding: "6px 16px",
  "&:hover": {
    backgroundColor: "#d5d5d5",
  },
}));

// Header component
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: 1, zIndex: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "#ddd",
                borderRadius: 2,
                mr: 1.5,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#0c0c1d", fontWeight: "bold" }}
            >
              EcBoot
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <ProButton startIcon={<StarIcon />}>Mở khóa Pro</ProButton>
            <LoginButton>Đăng nhập</LoginButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Main View
export default function TryOnEditorView() {
  return (
    <Box sx={{ backgroundColor: "#fff", width: "100%", minHeight: "100vh" }}>
      <Header />
      <Grid container spacing={0}>
        {/* Sidebar */}
        <Grid item xs={12} md={3.5}>
          <Paper
            sx={{
              minHeight: "calc(100vh - 64px)",
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
              p: 0,
              borderRight: "1px solid #eee",
            }}
          >
            {/* Scrollable content */}
            <Box className="hidden-add-voice" sx={{ flexGrow: 1, overflowY: "auto", p: 2 }}>
              {/* Header */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="h6" fontWeight={600}>
                  Chọn quần áo
                </Typography>
                <IconButton size="small">
                  <RiInformationLine />
                  <Typography fontSize={"12px"} ml={"5px"}>
                    Mẹo
                  </Typography>
                </IconButton>
              </Box>

              {/* Tabs */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#F5F6FA",
                  borderRadius: 2,
                  mb: 2,
                  p: "5px",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: "white",
                    borderRadius: 2,
                    textAlign: "center",
                    py: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <Typography fontWeight={"600"}>Quần áo đơn</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    color: "#888",
                    textAlign: "center",
                    py: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <Typography fontWeight={"600"}>Trên & dưới</Typography>
                </Box>
              </Box>

              {/* Preview */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid #eee"
                borderRadius={2}
                p={2}
                mb={2}
              >
                <Avatar
                  src={user_aigen}
                  variant="rounded"
                  sx={{ width: 140, height: 200 }}
                />
              </Box>

              {/* Mặc gần đây */}
              <Box my={5}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography fontWeight={600}>Mục gần đây</Typography>
                  <Typography
                    fontSize={14}
                    color="primary"
                    sx={{ cursor: "pointer" }}
                  >
                    Xem tất cả
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  gap={1}
                  overflow="auto"
                >
                  {[...Array(6)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{ width: 75, height: 87, position: "relative" }}
                    >
                      <Avatar
                        src={user_aigen}
                        sx={{ width: 75, height: 87, borderRadius: 1 }}
                      />
                      <Typography
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          background: "rgba(0,0,0,.5)",
                          width: "100%",
                          fontSize: "12px",
                          textAlign: "center",
                          borderRadius: 1,
                          color: "white",
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 0,
                        }}
                      >
                        Demo
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Chọn mẫu */}
              <Box mb={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    Chọn một mẫu
                  </Typography>
                  <IconButton size="small">
                    <RiInformationLine />
                    <Typography fontSize={"12px"} ml={"5px"}>
                      Mẹo
                    </Typography>
                  </IconButton>
                </Box>
                <Typography fontSize={"12px"} mb={1}>
                  Chọn mẫu của chúng tôi hoặc tải lên mẫu của bạn để thử
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#F5F6FA",
                      borderRadius: 2,
                      mb: 4,
                      p: "4px",
                      width: "70%",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "white",
                        borderRadius: 2,
                        textAlign: "center",
                        py: 1,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                    >
                      <Typography fontWeight={"600"}>Mẫu của chúng tôi</Typography>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        color: "#888",
                        textAlign: "center",
                        py: 1,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                    >
                      <Typography fontWeight={"600"}>Mẫu của bạn</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <RiFilterOffLine /> <Typography>Tất cả</Typography>
                  </Box>
                </Box>

                <Box display="flex" gap={1} flexWrap={"wrap"}>
                  <Box
                    sx={{
                      width: "23.5%",
                      height: 154,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#555",
                      cursor: "pointer",
                      border: "1px dashed #ccc",
                    }}
                  >
                    Tải lên
                  </Box>
                  {[...Array(5)].map((_, i) => (
                    <Avatar
                      key={i}
                      src={user_aigen}
                      variant="rounded"
                      sx={{
                        width: "23.5%",
                        height: 154,
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Fixed button */}
            <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                Tạo (1 credit)
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8.5}>
          <Box
            sx={{
              width: "100%",
              minHeight: "calc(100vh - 64px)", // Trừ chiều cao header
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 6 },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                p: 3,
                borderRadius: 3,
                width: "100%",
                maxWidth: 800,
                alignItems: "center",
                gap: { xs: 2, md: 4 },
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src={user_aigen}
                alt="tutorial"
                sx={{
                  width: { xs: "100%", md: 200 },
                  height: "auto",
                  borderRadius: 2,
                }}
              />
              <Stack spacing={2}>
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    Chọn quần áo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chọn quần áo bạn muốn thử, vui lòng làm theo hướng dẫn
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    Chọn hoặc tải lên mẫu
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chọn mẫu hoặc tải mẫu của bạn để thử!
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    Thử ngay
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nhấp vào “Tạo” để xem bộ đồ trở nên sống động trên mẫu!
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
