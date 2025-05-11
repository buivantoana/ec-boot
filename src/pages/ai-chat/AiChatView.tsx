import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BannerHero from "./BannerView";
import shoppe from "../../images/image 13.png";
import ToolCardSection from "./ToolCardSection";
import EcBoostIntroBlocks from "./EcBoostIntroBlocks";
import HeroSection from "./HeroSection";
import PlatformSection from "./PlatformSection";
import Testimonials from "../home/Testimonials";
import FAQSection from "../home/FAQSection";
import CTASection from "../home/CTASection";
type Props = {};

const AiChatView = (props: Props) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
      }}>
      <BannerHero />
      <Container
        maxWidth='lg'
        sx={{
          my: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
        }}>
        <Typography sx={{ fontSize: "16px" }} color='#666666'>
          Được tin tưởng bởi Người bán và các KOL thời trang
        </Typography>
        <img
          src={shoppe}
          style={{ width: "80%", height: "auto", objectFit: "contain" }}
        />
        <ToolCardSection />
        <EcBoostIntroBlocks />
      </Container>
      <HeroSection />
      <Container maxWidth='lg'>
        <PlatformSection />
      </Container>
      <Testimonials />
      <Container maxWidth='lg'>
        <FAQSection />
      </Container>
      <CTASection />
    </Box>
  );
};

export default AiChatView;
