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
  import image1 from "../../images/Group 1171275700.png";
  import image2 from "../../images/Group 1171275701.png";
  import image3 from "../../images/Group 1171275702.png";
  import StarIcon from "@mui/icons-material/Star";
  
  
  export default function EcBoostIntroBlocks() {
    return (
      <>
        <Container  sx={{ my: 6 }}>
         
          {/* Section 1 */}
          <Grid container spacing={4} mb={10}>
            <Grid item xs={12} md={6}>
              <Typography variant='h1'  sx={{fontSize:{xs:"1.7rem",md:"2.5rem"}}}  mt={5} fontWeight='bold' gutterBottom>
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography
                variant='body1'
                my={"30px"}
                color='text.secondary'
                mb={2}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </Typography>
  
              
  
              <Button
                variant='contained'
                sx={{
                  borderRadius: 1,
                fontSize:{xs:"14px",md:"18px"},
                px: 4,
                py: {xs:1,md:1.5},
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
  
          {/* Section 2 */}
          <Grid
            container
            spacing={4}
            mb={10}
            flexDirection={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src={image2}
                alt='Chatbot'
                sx={{
                  width: "100%",
                  borderRadius: 4,
                  maxWidth: 500,
                  mr: "auto",
                  display: "block",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h1'  sx={{fontSize:{xs:"1.7rem",md:"2.5rem"}}}  mt={5} fontWeight='bold' gutterBottom>
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography
                variant='body1'
                my={"30px"}
                color='text.secondary'
                mb={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </Typography>
  
              
  
              <Button
                variant='contained'
                sx={{
                  borderRadius: 1,
                fontSize:{xs:"14px",md:"18px"},
                px: 4,
                py: {xs:1,md:1.5},
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
                }}>
               Dùng thử miễn phí
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={4} >
            <Grid item xs={12} md={6}>
              <Typography variant='h1'  sx={{fontSize:{xs:"1.7rem",md:"2.5rem"}}}  mt={5} fontWeight='bold' gutterBottom>
                Lorem Ipsum is simply dummy text
              </Typography>
              <Typography
                variant='body1'
                my={"30px"}
                color='text.secondary'
                mb={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s,
              </Typography>
  
              
  
              <Button
                variant='contained'
                sx={{
                  borderRadius: 1,
                fontSize:{xs:"14px",md:"18px"},
                px: 4,
                py: {xs:1,md:1.5},
                backgroundColor: "#2D66F7",
                fontWeight: "bold",
                }}>
               Dùng thử miễn phí
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src={image3}
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
  