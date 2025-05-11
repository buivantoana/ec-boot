import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Avatar,
} from "@mui/material";
import tiki from "../../images/tiki.png";
import tiktok from "../../images/tiktok.png";
import fb from "../../images/fb.png";
import shopee from "../../images/shopee.png";
import zalo from "../../images/zalo.png";
import lazada from "../../images/lazada.png";
const platforms = [
  { name: "Tiki", img: tiki },
  { name: "TikTok", img: tiktok },
  { name: "Facebook", img: fb },
  { name: "Shopee", img: shopee },
  { name: "Zalo", img: zalo },
  { name: "Lazada", img: lazada },
];

const PlatformSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}>
      <Container maxWidth='lg'>
        {/* Heading */}
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", my: "30px" }}>
          Lorem Ipsum is simply dummy text of the printing
        </Typography>

        {/* Description */}
        <Typography
          variant='body1'
          sx={{ color: "#666", mb: 4, lineHeight: 1.7 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>

        {/* Platform Icons */}
        <Stack
          direction='row'
          justifyContent='center'
          flexWrap='wrap'
          sx={{ mb: 4 }}>
          {platforms.map((platform, index) => (
            <Avatar
              key={index}
              src={platform.img}
              alt={platform.name}
              sx={{ width: 120, height: 120, marginLeft: "-16px" }}
            />
          ))}
        </Stack>

        {/* Button */}
        <Button
          variant='contained'
          sx={{
            backgroundColor: "#3b82f6",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#2563eb",
            },
          }}>
          Dùng thử miễn phí
        </Button>
      </Container>
    </Box>
  );
};

export default PlatformSection;
