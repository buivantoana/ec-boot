import {
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
  import user_aigen from "../../images/aigen_user.png";
  
  export default function TryOnEditorView() {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          py: { xs: 2, md: 4 },
          px: { xs: 1, md: 2 },
          width: "100%",
          minHeight: "100vh",
          mt:"60px"
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Chọn quần áo
                  </Typography>
                  <IconButton size="small">
                    <MoreHorizIcon fontSize="small" />
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
                    p: "2px",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: "#E7F0FF",
                      borderRadius: 2,
                      textAlign: "center",
                      py: 1,
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    Quần áo đơn
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
                    Trên & dưới
                  </Box>
                </Box>
  
                {/* Preview item */}
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  border="1px solid #eee"
                  borderRadius={2}
                  p={2}
                  mb={2}
                >
                  <Avatar src={user_aigen} variant="rounded" sx={{ width: 80, height: 100 }} />
                </Box>
  
                {/* Mặc gần đây */}
                <Box mb={3}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography fontWeight={600}>Mục gần đây</Typography>
                    <Typography fontSize={12} color="primary" sx={{ cursor: "pointer" }}>
                      Xem tất cả
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} overflow="auto">
                    {[...Array(6)].map((_, i) => (
                      <Avatar
                        key={i}
                        src={user_aigen}
                        sx={{ width: 48, height: 48, borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                </Box>
  
                {/* Chọn mẫu */}
                <Box mb={3}>
                  <Typography fontWeight={600} mb={1}>
                    Chọn một mẫu
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #eee",
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#000",
                        borderBottom: "2px solid #1976d2",
                        cursor: "pointer",
                      }}
                    >
                      Mẫu của chúng tôi
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: 13,
                        color: "#666",
                        cursor: "pointer",
                      }}
                    >
                      Mẫu của bạn
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.5,
                        fontSize: 13,
                        color: "#666",
                        cursor: "pointer",
                      }}
                    >
                      Tất cả
                    </Box>
                  </Box>
  
                  <Box display="flex" gap={1} overflow="auto">
                    <Box
                      sx={{
                        width: 48,
                        height: 64,
                        backgroundColor: "#F3F4F6",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#555",
                        cursor: "pointer",
                      }}
                    >
                      Tải lên
                    </Box>
                    {[...Array(5)].map((_, i) => (
                      <Avatar
                        key={i}
                        src={user_aigen}
                        variant="rounded"
                        sx={{ width: 48, height: 64, borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                </Box>
  
                {/* Button */}
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
              </Paper>
            </Grid>
  
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
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
        </Container>
      </Box>
    );
  }