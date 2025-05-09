import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BannerHero from "./BannerView";
import shoppe from "../../images/image 13.png";
import ToolCardSection from "./ToolCardSection";
import EcBoostHowItWorks from "./EcBoostHowItWorks";
import EcBoostIntroBlocks from "./EcBoostIntroBlocks";
type Props = {};

const HomeView = (props: Props) => {
  return (
    <Box>
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
        <EcBoostHowItWorks />
        <EcBoostIntroBlocks />
      </Container>
    </Box>
  );
};

export default HomeView;
