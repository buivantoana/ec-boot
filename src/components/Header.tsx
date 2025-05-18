import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../images/Frame 10.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Bảng giá", "Khách hàng"];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position='fixed'
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        padding: "10px 16px",
      }}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img src={logo} alt='' />
          </Box>

          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                gap: 3,
                justifyContent: "end",
              }}>
              <Button
                onClick={handleMenuOpen}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: "black", fontSize: "16px" }}>
                Công cụ giải pháp
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Giải pháp A</MenuItem>
                <MenuItem onClick={handleMenuClose}>Giải pháp B</MenuItem>
              </Menu>
              {menuItems.map((text) => (
                <Button key={text} sx={{ color: "black", fontSize: "16px" }}>
                  {text}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <>
              <Button onClick={() => navigate("/login")} sx={{ mr: 2 }}>
                Đăng nhập
              </Button>
              <Button variant='contained' sx={{ borderRadius: 1 }}>
                Dùng thử miễn phí
              </Button>
            </>
          ) : (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor='right' open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            <ListItem button onClick={handleMenuOpen}>
              <ListItemText primary='Công cụ giải pháp' />
            </ListItem>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary='Đăng nhập' />
            </ListItem>
            <ListItem button>
              <Button fullWidth variant='contained'>
                Dùng thử miễn phí
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
