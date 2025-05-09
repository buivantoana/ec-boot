import { Container, Typography } from '@mui/material'
import React from 'react'
import VirtualTryOnBanner from './VirtualTryOnBanner'
import shoppe from "../../images/image 13.png";
import ToolCardSection from './ToolCardSection';
import EcBoostIntroBlocks from './EcBoostIntroBlocks';
import FeatureGridSection from './FeatureGridSection';
import Testimonials from '../home/Testimonials';
import FAQSection from '../home/FAQSection';
import CTASection from '../home/CTASection';
type Props = {}

const AiGenView = (props: Props) => {
    return (
        <>
            <VirtualTryOnBanner />
            <Container
                maxWidth="lg"
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
                <ToolCardSection />
                <FeatureGridSection />
            </Container>
            <Testimonials />
            <Container maxWidth="lg">
                <FAQSection />
            </Container>
            <CTASection />
        </>
    )
}

export default AiGenView