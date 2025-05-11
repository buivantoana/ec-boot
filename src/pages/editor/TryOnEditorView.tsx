import React, { useState } from "react";
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
  Select,
  MenuItem,
  Popover,
  Tabs,
  Tab,
  Hidden,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import {
  RiFilterOffLine,
  RiImageAddLine,
  RiInformationLine,
  RiUploadLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import user_aigen from "../../images/image 1820.png";
import user_left from "../../images/Frame 1618871470.png";
import user_demo from "../../images/image-editor.png";
import credits from "../../images/AI Icons.svg";
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
  const [anchorEl1, setAnchorEl1] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: "#fff",
        boxShadow: 1,
        zIndex: 2,
        height: "13vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box display='flex' alignItems='center'>
            <Box
              sx={{
                width: 36,
                height: "36px",
                backgroundColor: "#ddd",
                borderRadius: 2,
                mr: 1.5,
              }}
            />
            <Hidden smDown>
              <Typography
                variant='subtitle1'
                sx={{ color: "#0c0c1d", fontWeight: "bold" }}>
                EcBoot
              </Typography>
            </Hidden>
          </Box>
          <Box display='flex' alignItems='center' gap={1.5}>
            <Hidden smDown>
              <Button
                variant='contained'
                sx={{ borderRadius: 1 }}
                startIcon={<DownloadIcon />}>
                Download
              </Button>
            </Hidden>
            <ProButton startIcon={<StarIcon />}>Mở khóa Pro</ProButton>

            {/* <LoginButton>Đăng nhập</LoginButton> */}
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                <img src={credits} alt='' />{" "}
                <Typography color='black' fontWeight={"500"}>
                  10
                </Typography>
              </Box>
              <Box
                aria-describedby={id1}
                onClick={handleClick1}
                sx={{
                  borderRadius: "50%",
                  textAlign: "center",
                  width: "40px",
                  height: "40px",
                  background: "#2A9E0D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}>
                <Typography>T</Typography>
              </Box>
              <Popover
                id={id1}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}>
                <Box>
                  <UserProfileMenu />
                </Box>
              </Popover>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Styled components for the preview box
const PreviewBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #eee",
  borderRadius: 2,
  padding: theme.spacing(2),
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  "&:hover": {
    borderColor: "#2E68FD",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 200,
  "& img": {
    width: "100%",
    borderRadius: 8,
  },
}));

const ControlsBox = styled(Box)(({ theme }) => ({
  bottom: 5,
  right: 5,
  display: "flex",
  gap: "5px",
  justifyContent: "end",
  width: "100%",
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 12,
  textTransform: "none",
  backgroundColor: "#f5f5f5",
  "& .MuiSelect-select": {
    padding: "4px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

// Main View
export default function TryOnEditorView() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [action, setAction] = useState(1);
  const [action1, setAction1] = useState(1);
  const [category, setCategory] = useState("Đăng thường");
  const [userModels, setUserModels] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop1 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage1(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver1 = (event) => {
    event.preventDefault();
  };

  const handleFileUpload1 = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage1(e.target.result);
      reader.readAsDataURL(file);
    }
  };
  const handleDrop2 = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage2(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver2 = (event) => {
    event.preventDefault();
  };

  const handleFileUpload2 = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage2(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUserModelUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserModels((prev) => [...prev, e.target.result]); // Add the new image to the array
      };
      reader.readAsDataURL(file);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [anchorEl1, setAnchorEl1] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;
  return (
    <Box sx={{ backgroundColor: "#fff", width: "100%" }}>
      <Header />
      <Grid container spacing={0} height={"87vh"}>
        {/* Sidebar */}
        <Grid item xs={12} md={3.6}>
          <Paper
            className='hidden-add-voice'
            sx={{
              height: { xs: "auto", md: "87vh" },
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
              p: 0,
              borderRight: "1px solid #eee",
              position: "relative",
              overflowY: { xs: "unset", md: "scroll" },
            }}>
            {/* Scrollable content */}
            <Box
              className='hidden-add-voice'
              sx={{
                flexGrow: 1,
                overflowY: { xs: "unset", md: "scroll" },
                p: 2,
              }}>
              {/* Header */}
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mb={1}>
                <Typography variant='h6' fontWeight={600}>
                  Chọn quần áo
                </Typography>
                <IconButton onClick={() => setOpenModal(true)} size='small'>
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
                  borderRadius: 1,
                  mb: 2,
                  p: "5px",
                }}>
                <Box
                  onClick={() => setAction(1)}
                  sx={{
                    flex: 1,
                    backgroundColor: action == 1 ? "white" : "unset",
                    color: action == 1 ? "unset" : "#888",
                    borderRadius: 1,
                    textAlign: "center",
                    py: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                  }}>
                  <Typography
                    sx={{ fontSize: { xs: 13, md: "1rem" } }}
                    fontWeight={"600"}>
                    Quần áo đơn
                  </Typography>
                </Box>
                <Box
                  onClick={() => setAction(2)}
                  sx={{
                    flex: 1,
                    color: action == 2 ? "unset" : "#888",
                    backgroundColor: action == 2 ? "white" : "unset",
                    textAlign: "center",
                    py: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    borderRadius: 1,
                  }}>
                  <Typography
                    sx={{ fontSize: { xs: 13, md: "1rem" } }}
                    fontWeight={"600"}>
                    Trên & dưới
                  </Typography>
                </Box>
              </Box>

              {/* Preview */}
              {action == 1 ? (
                <PreviewBox
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  sx={{ mb: 2 }}>
                  {selectedImage ? (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <ImageContainer>
                        <img
                          src={selectedImage}
                          alt='Selected'
                          style={{
                            maxWidth: "100%",
                            maxHeight: 160,
                            borderRadius: 8,
                            objectFit: "contain",
                          }}
                        />
                      </ImageContainer>
                      <ControlsBox>
                        <StyledSelect
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          sx={{ minWidth: 100, borderRadius: 1 }}>
                          <MenuItem value='Đăng thường'>Dáng Thường</MenuItem>
                          <MenuItem value='Váy/Đồ suit'>Váy/Đồ suit</MenuItem>
                        </StyledSelect>
                        <StyledSelect
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          sx={{ minWidth: 100, borderRadius: 1 }}>
                          <MenuItem value='Đăng thường'>Váy/Đồ suit</MenuItem>
                          <MenuItem value='Váy/Đồ suit'>Váy/Đồ suit</MenuItem>
                        </StyledSelect>
                        <IconButton size='small' color='primary'>
                          <RiUploadLine />
                        </IconButton>
                        <IconButton
                          size='small'
                          color='error'
                          onClick={() => setSelectedImage(null)}>
                          <RiDeleteBinLine />
                        </IconButton>
                      </ControlsBox>
                    </Box>
                  ) : (
                    <label htmlFor='upload-input' style={{ cursor: "pointer" }}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"10px"}
                        alignItems={"center"}
                        height={160}
                        justifyContent={"center"}>
                        <Box
                          display={"flex"}
                          color={"#2E68FD"}
                          alignItems={"center"}
                          gap={"5px"}>
                          <RiImageAddLine size={20} />
                          <Typography fontWeight={"500"}>Thêm Item</Typography>
                        </Box>
                        <Typography variant='body1' color='#626262'>
                          Hoặc kéo & thả vào đây
                        </Typography>
                        <input
                          type='file'
                          accept='image/*'
                          onChange={handleFileUpload}
                          style={{ display: "none" }}
                          id='upload-input'
                        />
                      </Box>
                    </label>
                  )}
                </PreviewBox>
              ) : (
                <Box display={"flex"} justifyContent={"center"} gap={"15px"}>
                  <PreviewBox
                    onDrop={handleDrop1}
                    onDragOver={handleDragOver1}
                    sx={{ mb: 2, width: "40%" }}>
                    {selectedImage1 ? (
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <ImageContainer>
                          <img
                            src={selectedImage1}
                            alt='Selected'
                            style={{
                              maxWidth: "100%",
                              maxHeight: 160,
                              borderRadius: 8,
                              objectFit: "contain",
                            }}
                          />
                        </ImageContainer>
                        <ControlsBox>
                          <IconButton size='small' color='primary'>
                            <RiUploadLine />
                          </IconButton>
                          <IconButton
                            size='small'
                            color='error'
                            onClick={() => setSelectedImage1(null)}>
                            <RiDeleteBinLine />
                          </IconButton>
                        </ControlsBox>
                      </Box>
                    ) : (
                      <label
                        htmlFor='upload-input'
                        style={{ cursor: "pointer" }}>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}
                          alignItems={"center"}
                          height={160}
                          justifyContent={"center"}>
                          <Box
                            display={"flex"}
                            color={"#2E68FD"}
                            alignItems={"center"}
                            gap={"5px"}>
                            <RiImageAddLine size={20} />
                            <Typography fontWeight={"500"}>
                              Thêm Item
                            </Typography>
                          </Box>
                          <Typography variant='body1' color='#626262'>
                            Hoặc kéo & thả vào đây
                          </Typography>
                          <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileUpload1}
                            style={{ display: "none" }}
                            id='upload-input'
                          />
                        </Box>
                      </label>
                    )}
                  </PreviewBox>
                  <PreviewBox
                    onDrop={handleDrop2}
                    onDragOver={handleDragOver2}
                    sx={{ mb: 2, width: "40%" }}>
                    {selectedImage2 ? (
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <ImageContainer>
                          <img
                            src={selectedImage2}
                            alt='Selected'
                            style={{
                              maxWidth: "100%",
                              maxHeight: 160,
                              borderRadius: 8,
                              objectFit: "contain",
                            }}
                          />
                        </ImageContainer>
                        <ControlsBox>
                          <IconButton size='small' color='primary'>
                            <RiUploadLine />
                          </IconButton>
                          <IconButton
                            size='small'
                            color='error'
                            onClick={() => setSelectedImage2(null)}>
                            <RiDeleteBinLine />
                          </IconButton>
                        </ControlsBox>
                      </Box>
                    ) : (
                      <label
                        htmlFor='upload-input'
                        style={{ cursor: "pointer" }}>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          gap={"10px"}
                          alignItems={"center"}
                          height={160}
                          justifyContent={"center"}>
                          <Box
                            display={"flex"}
                            color={"#2E68FD"}
                            alignItems={"center"}
                            gap={"5px"}>
                            <RiImageAddLine size={20} />
                            <Typography fontWeight={"500"}>
                              Thêm Item
                            </Typography>
                          </Box>
                          <Typography variant='body1' color='#626262'>
                            Hoặc kéo & thả vào đây
                          </Typography>
                          <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileUpload2}
                            style={{ display: "none" }}
                            id='upload-input'
                          />
                        </Box>
                      </label>
                    )}
                  </PreviewBox>
                </Box>
              )}

              {/* Mặc gần đây */}
              <Box my={2}>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                  mb={1}>
                  <Typography fontWeight={600}>Mục gần đây</Typography>
                  <Typography
                    aria-describedby={id1}
                    onClick={handleClick1}
                    fontSize={14}
                    color='primary'
                    sx={{ cursor: "pointer" }}>
                    Xem tất cả
                  </Typography>
                  <Popover
                    id={id1}
                    open={open1}
                    anchorEl={anchorEl1}
                    onClose={handleClose1}
                    sx={{
                      left: {
                        xs: "2px !important",
                      },
                      maxWidth: { xs: "calc(100% - 32px)" },
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}>
                    <Box>
                      <WardrobeUI />
                    </Box>
                  </Popover>
                </Box>
                <Box
                  my={2}
                  display='flex'
                  justifyContent={"space-between"}
                  gap={1}
                  overflow='auto'>
                  {[...Array(6)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 75,
                        height: 87,
                        position: "relative",
                        bgcolor: "#E6E6E6",
                        borderRadius: 1,
                      }}>
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
                        }}>
                        Demo
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Chọn mẫu */}
              <Box mb={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant='h6' fontWeight={600} mb={1}>
                    Chọn một mẫu
                  </Typography>
                  <IconButton onClick={() => setOpenModal1(true)} size='small'>
                    <RiInformationLine />
                    <Typography fontSize={"12px"} ml={"5px"}>
                      Mẹo
                    </Typography>
                  </IconButton>
                </Box>
                <Typography variant='body1' color='#787878' mb={1}>
                  Chọn mẫu của chúng tôi hoặc tải lên mẫu của bạn để thử
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-between",
                    mb: 4,
                    mt: 2,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#F5F6FA",
                      borderRadius: 1,
                      p: "4px",
                      width: "70%",
                    }}>
                    <Box
                      onClick={() => setAction1(1)}
                      sx={{
                        flex: 1,
                        backgroundColor: action1 == 1 ? "white" : "unset",
                        color: action1 == 1 ? "unset" : "#888",
                        borderRadius: 1,
                        textAlign: "center",
                        py: 1,
                        fontWeight: 600,

                        cursor: "pointer",
                      }}>
                      <Typography
                        sx={{ fontSize: { xs: 13, md: "1rem" } }}
                        fontWeight={"600"}>
                        Mẫu của chúng tôi
                      </Typography>
                    </Box>
                    <Box
                      onClick={() => setAction1(2)}
                      sx={{
                        flex: 1,
                        backgroundColor: action1 == 2 ? "white" : "unset",
                        color: action1 == 2 ? "unset" : "#888",
                        textAlign: "center",
                        py: 1,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        borderRadius: 1,
                      }}>
                      <Typography
                        sx={{ fontSize: { xs: 13, md: "1rem" } }}
                        fontWeight={"600"}>
                        Mẫu của bạn
                      </Typography>
                    </Box>
                  </Box>
                  {action1 == 1 && (
                    <>
                      <Box
                        aria-describedby={id}
                        onClick={handleClick}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          cursor: "pointer",
                        }}>
                        <RiFilterOffLine /> <Typography>Tất cả</Typography>
                      </Box>

                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}>
                        <Box>
                          <Typography
                            sx={{
                              p: 1,
                              borderRadius: 1,
                              bgcolor: "#EFEFEF",
                              color: "#2E68FD",
                            }}>
                            Tất cả
                          </Typography>
                          <Typography sx={{ p: 1, borderRadius: 1 }}>
                            Nam{" "}
                          </Typography>
                          <Typography sx={{ p: 1, borderRadius: 1 }}>
                            Nữ{" "}
                          </Typography>
                          <Typography sx={{ p: 1, borderRadius: 1 }}>
                            Con trai
                          </Typography>
                          <Typography sx={{ p: 1, borderRadius: 1 }}>
                            Con gái
                          </Typography>
                        </Box>
                      </Popover>
                    </>
                  )}
                </Box>
                {action1 == 1 ? (
                  <Box display='flex' gap={1} flexWrap={"wrap"}>
                    <Box
                      sx={{
                        width: { xs: "21%", md: "23%" },
                        height: { xs: 125, md: 150 },
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 500,
                        color: "#555",
                        cursor: "pointer",
                        border: "2px dashed #ccc",
                        flexDirection: "column",
                        gap: "5px",
                      }}>
                      <RiImageAddLine size={18} />
                      <Typography variant='body2'>Tải lên</Typography>
                    </Box>
                    {[...Array(5)].map((_, i) => (
                      <Avatar
                        key={i}
                        src={user_demo}
                        variant='rounded'
                        sx={{
                          width: { xs: "21%", md: "23%" },
                          height: { xs: 125, md: 154 },
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Box>
                ) : (
                  <Box display='flex' gap={1} flexWrap={"wrap"}>
                    <label
                      htmlFor='user-model-upload'
                      style={{
                        width: "23%",
                        height: 150,
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 500,
                        color: "#555",
                        cursor: "pointer",
                        border: "2px dashed #ccc",
                        flexDirection: "column",
                        gap: "5px",
                      }}>
                      <RiImageAddLine size={18} />
                      <Typography variant='body2'>Tải lên</Typography>
                      <input
                        type='file'
                        accept='image/*'
                        onChange={handleUserModelUpload}
                        style={{ display: "none" }}
                        id='user-model-upload'
                      />
                    </label>
                    {userModels.map((model, i) => (
                      <Avatar
                        key={i}
                        src={model}
                        variant='rounded'
                        sx={{
                          width: "23.5%",
                          height: 154,
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>

            {/* Fixed button */}
            <Hidden smDown>
              <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
                <Button
                  fullWidth
                  variant='contained'
                  sx={{
                    borderRadius: 1,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 15,
                  }}>
                  Tạo (1 credit)
                </Button>
              </Box>
            </Hidden>
          </Paper>
        </Grid>
        <Hidden smUp>
          <Box
            sx={{
              py: 2,
              borderTop: "1px solid #eee",
              position: "fixed",
              bottom: 0,
              left: 0,

              background: "white",
              zIndex: 1,
              width: "100% !important",
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              fullWidth
              variant='contained'
              sx={{
                borderRadius: 1,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 15,
                width: "90% !important",
              }}>
              Tạo (1 credit)
            </Button>
          </Box>
        </Hidden>
        {/* Main Content */}
        <Grid item xs={12} md={8.4} bgcolor={"#E6E6E6"}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: { xs: "50px", md: 0 },
            }}>
            <TryOnResult />
            {/* <TryOnGuide /> */}
          </Box>
        </Grid>
      </Grid>
      <ImageModerationModal open={openModal} setOpen={setOpenModal} />
      <ImageModerationModal2 open={openModal1} setOpen={setOpenModal1} />
    </Box>
  );
}

// Other components remain the same
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: theme.spacing(3),
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "677px",
  height: "292px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    width: "100%",
    maxWidth: "95vw",
    height: "auto",
    padding: theme.spacing(2),
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    paddingRight: 0,
    marginBottom: theme.spacing(2),
    width: "100%",
  },
}));

const StepsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(3),
  },
}));

const Step = ({ number, title, description }) => (
  <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
    <Box display={"flex"} gap={"5px"}>
      <Typography
        fontWeight='bold'
        sx={{
          borderRadius: "50%",
          border: "1px solid #2E68FD",
          width: "25px",
          height: "25px",
          textAlign: "center",
        }}
        color='primary'>
        {number}
      </Typography>
      <Typography variant='body1' fontSize={"20px"} fontWeight='bold'>
        {title}
      </Typography>
    </Box>
    <Box>
      <Typography variant='body1' color='#787878'>
        {description}
      </Typography>
    </Box>
  </Box>
);

const TryOnGuide = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <StyledBox>
      <ImageBox>
        <img
          src={user_left}
          alt='Try on preview'
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
      </ImageBox>
      <StepsBox>
        <Step
          number='1'
          title='Chọn quần áo'
          description='Chọn quần áo bạn muốn thử, vui lòng làm theo hướng dẫn'
        />
        <Step
          number='2'
          title='Chọn hoặc tải lên mẫu'
          description='Chọn mẫu hoặc tải mẫu của bạn để thử!'
        />
        <Step
          number='3'
          title='Thử ngay'
          description="Nhấp vào 'Tạo' để xem bộ đồ trở nên sống động trên mẫu!"
        />
      </StepsBox>
    </StyledBox>
  );
};

function WardrobeUI() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box p={{ xs: 0, md: 2 }}>
      {/* Header + Filter */}
      <Box
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={isMobile ? "flex-start" : "center"}
        gap={1.5}>
        <Typography variant='body1' fontWeight={"bold"} gutterBottom>
          Tất cả quần áo của bạn
        </Typography>

        {/* Filter chips, scrollable on mobile */}
        <Box
          display='flex'
          gap={"6px"}
          overflow={isMobile ? "auto" : "visible"}
          sx={{
            width: isMobile ? "90%" : "auto",
            whiteSpace: "nowrap",
            paddingBottom: isMobile ? 1 : 0,
          }}>
          {["Tất cả", "Trên", "Dưới", "Bộ đầy đủ"].map((label, idx) => (
            <Typography
              key={label}
              variant='body2'
              sx={{
                p: "4px 10px",
                borderRadius: "15px",
                bgcolor: idx === 0 ? "#2E68FD" : "#E4E4E4",
                color: idx === 0 ? "white" : "black",
                fontSize: isMobile ? "13px" : "14px",
                cursor: "pointer",
                flexShrink: 0,
              }}>
              {label}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Danh sách quần áo */}
      <Box
        mt={2}
        display='flex'
        justifyContent={isMobile ? "flex-start" : "space-between"}
        gap={1}
        flexWrap='wrap'>
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              width: isMobile ? "30%" : 75,
              height: 87,
              position: "relative",
              bgcolor: "#E6E6E6",
              borderRadius: 1,
              flexShrink: 0,
            }}>
            <Avatar
              src={user_aigen}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 1,
              }}
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
              }}>
              Demo
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

import { Modal, Checkbox, FormControlLabel } from "@mui/material";
import meo1 from "../../images/meo1.png";
import meo2 from "../../images/meo2.png";
import meo3 from "../../images/meo3.png";
import meo4 from "../../images/meo4.png";
import meo5 from "../../images/meo5.png";
import meo6 from "../../images/meo6.png";
import meo7 from "../../images/meo7.png";
import meo8 from "../../images/meo8.png";
import meo9 from "../../images/meo9.png";
import meo10 from "../../images/meo10.png";
import meo11 from "../../images/meo11.png";
import meo12 from "../../images/meo12.png";
import meo13 from "../../images/meo13.png";
import meo14 from "../../images/meo14.png";
import meo15 from "../../images/meo15.png";
import meo16 from "../../images/meo16.png";
import meo17 from "../../images/meo17.png";
import meo18 from "../../images/meo18.png";
import meo19 from "../../images/meo19.png";
import meo20 from "../../images/meo20.png";
const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 8,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3),
  width: "90%",
  maxWidth: 600,
  position: "relative",
  maxHeight: "90vh",
  overflowY: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    padding: theme.spacing(2),
  },
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ImageItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    objectFit: "cover",
    width: 110,
    height: 160,
    borderRadius: 4,
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: 90,
      height: 130,
    },
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

function ImageModerationModal({ open, setOpen }) {
  const [checkedValid, setCheckedValid] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  });
  const [checkedInvalid, setCheckedInvalid] = useState({
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });

  const handleClose = () => setOpen(false);

  const validImages = [
    { src: meo1, id: "img1" },
    { src: meo2, id: "img2" },
    { src: meo3, id: "img3" },
    { src: meo4, id: "img4" },
    { src: meo5, id: "img5" },
  ];

  const invalidImages = [
    { src: meo6, id: "img6" },
    { src: meo7, id: "img7" },
    { src: meo8, id: "img8" },
    { src: meo9, id: "img9" },
    { src: meo10, id: "img10" },
  ];

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'>
      <ModalContent>
        <Typography
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
          }}>
          ✖
        </Typography>
        <Typography id='modal-title' variant='h6' gutterBottom>
          Mẹo tải hình ảnh
        </Typography>
        <Typography
          id='modal-description'
          variant='body2'
          color='textSecondary'
          gutterBottom>
          Độ phân giải hình ảnh được đề xuất: từ 512x512 pixel đến 2048x2048
          pixel
        </Typography>
        <hr style={{ margin: "10px 0" }} />
        <Typography variant='body2' gutterBottom>
          ✔ Ví dụ ảnh tốt
        </Typography>
        <Typography variant='caption' color='#787878' display='block' mb={2}>
          Nằm trên nền, một bộ trang phục và đứng thẳng.
        </Typography>

        <ImageGrid container spacing={1}>
          {validImages.map((image) => (
            <Grid item xs={4} sm={2.4} key={image.id}>
              <ImageItem>
                <img src={image.src} alt={image.id} />
              </ImageItem>
            </Grid>
          ))}
        </ImageGrid>

        <Typography variant='body2' gutterBottom>
          ❌ Ví dụ ảnh tệ
        </Typography>
        <Typography variant='caption' color='#787878' display='block' mb={2}>
          nhiều trang phục, bối cảnh phức tạp, quần áo được giấu và gấp lại, tư
          thế phức tạp.
        </Typography>

        <ImageGrid container spacing={1}>
          {invalidImages.map((image) => (
            <Grid item xs={4} sm={2.4} key={image.id}>
              <ImageItem>
                <img src={image.src} alt={image.id} />
              </ImageItem>
            </Grid>
          ))}
        </ImageGrid>
      </ModalContent>
    </StyledModal>
  );
}

function ImageModerationModal2({ open, setOpen }) {
  const [checkedValid, setCheckedValid]: any = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  });
  const [checkedInvalid, setCheckedInvalid]: any = useState({
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCheckboxChange = (setChecked, name) => (event) => {
    setChecked((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };

  const validImages = [
    { src: meo11, id: "img1" },
    { src: meo12, id: "img1" },
    { src: meo13, id: "img1" },
    { src: meo14, id: "img1" },
    { src: meo15, id: "img1" },
  ];

  const invalidImages = [
    { src: meo16, id: "img1" },
    { src: meo17, id: "img1" },
    { src: meo18, id: "img1" },
    { src: meo19, id: "img1" },
    { src: meo20, id: "img1" },
  ];

  return (
    <div>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'>
        <ModalContent>
          <Typography
            onClick={handleClose}
            sx={{ position: "absolute", top: "15px", right: "15px" }}>
            ✖
          </Typography>
          <Typography id='modal-title' variant='h6' gutterBottom>
            Mẹo tải hình ảnh
          </Typography>
          <Typography
            id='modal-description'
            variant='body2'
            color='textSecondary'
            gutterBottom>
            Độ phân giải hình ảnh được đề xuất: từ 512x512 pixel đến 2048x2048
            pixel
          </Typography>
          <hr style={{ margin: "10px 0" }} />
          <Typography variant='body2' gutterBottom>
            ✔ Ví dụ ảnh tốt
          </Typography>
          <Typography variant='caption' color='#787878' display='block' mb={2}>
            Ảnh đơn giản chụp toàn thân hoặc nửa thân phía trước và tạo dáng đơn
            giản không mặc quần áo.
          </Typography>
          <ImageGrid container spacing={1}>
            {validImages.map((image) => (
              <Grid item xs={4} sm={2.4} key={image.id}>
                <ImageItem>
                  <img src={image.src} alt={image.id} />
                </ImageItem>
              </Grid>
            ))}
          </ImageGrid>
          <Typography variant='body2' gutterBottom>
            ❌ Ví dụ ảnh tệ
          </Typography>
          <Typography variant='caption' color='#787878' display='block' mb={2}>
            Không sử dụng ảnh nhóm và không tạo dáng phức tạp với quần giấu bên
            trong.
          </Typography>
          <ImageGrid container spacing={1}>
            {invalidImages.map((image) => (
              <Grid item xs={4} sm={2.4} key={image.id}>
                <ImageItem>
                  <img src={image.src} alt={image.id} />
                </ImageItem>
              </Grid>
            ))}
          </ImageGrid>
        </ModalContent>
      </StyledModal>
    </div>
  );
}

import { Tooltip } from "@mui/material";

const MainImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
}));

const MainImage = styled("img")(({ theme }) => ({
  width: "456px",
  maxWidth: 400,
  height: "500px",
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: {
    maxWidth: 300,
    height: "400px",
  },
}));

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(0.5),
  },
}));

const Thumbnail = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: 8,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: 40,
    height: 40,
  },
}));

const DownloadButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#1976d2",
  borderRadius: "10px",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
}));

function TryOnResult() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const thumbnails = [
    user_demo,
    user_demo,
    user_demo,
    user_demo,
    user_demo,
    user_demo,
    user_demo,
  ];

  return (
    <Box>
      <MainImageContainer>
        <MainImage src={user_demo} alt='Try on result' />
      </MainImageContainer>

      <ThumbnailContainer>
        {thumbnails.map((thumb, index) => (
          <Thumbnail key={index} src={thumb} variant='rounded' />
        ))}
        <DownloadButtonContainer>
          <Tooltip title='Tải xuống tất cả' arrow>
            <StyledIconButton>
              <DownloadIcon fontSize={isMobile ? "medium" : "large"} />
            </StyledIconButton>
          </Tooltip>
        </DownloadButtonContainer>
      </ThumbnailContainer>
    </Box>
  );
}

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogoutIcon from "@mui/icons-material/Logout";

const ProfileContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff",
}));

const EmailText = styled(Typography)(({ theme }) => ({
  color: "#787878",
  marginBottom: theme.spacing(2),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const ProButton1 = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right, #FFD700, #FF6600)",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "10px",
  padding: theme.spacing(1, 3),
  margin: theme.spacing(2, 0),
  "&:hover": {
    background: "linear-gradient(to right, #FFC300, #FF5722)",
  },
}));

function UserProfileMenu() {
  return (
    <ProfileContainer>
      <Typography variant='h6' fontWeight={600}>
        Thangdo
      </Typography>
      <EmailText variant='body2'>Dothang261001@gmail.com</EmailText>

      <List>
        <StyledListItem>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText primary='Tài khoản của tôi' />
        </StyledListItem>

        <StyledListItem>
          <ListItemIcon>
            <CardGiftcardIcon />
          </ListItemIcon>
          <ListItemText primary='Gói của tôi' />
        </StyledListItem>

        <StyledListItem>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary='Quản lý IAP (0 credits)' />
        </StyledListItem>

        <StyledListItem>
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary='Hỗ trợ' />
        </StyledListItem>
      </List>

      <ProButton1 startIcon={<StarIcon />}>Mở khóa Pro</ProButton1>

      <Divider />

      <StyledListItem>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary='Đăng xuất' />
      </StyledListItem>
    </ProfileContainer>
  );
}
