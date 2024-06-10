import { Box, Typography, Button } from "@mui/material";
import React from 'react'
import bg from '../assets/Images/images.jpeg'
import MainLayout from '../Layout/MainLayout'

const Hero = () => {
  return (
    <Box
      width="100%"
      margin="0 auto"
      // height="100dvh"
      pb="13px"
      position="relative"
      sx={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgcolor="#1A2727D9"
      ></Box>
      <MainLayout
        sx={{
          pb: { xs: "90px", sm: "136px" },
          px: { xs: "16px", sm: "20px", lg: "80px" },
          zIndex: 1,
          position: "relative",
        }}
      >
        <Box
          pt={{ xs: "130px", sm: "296px" }}
          maxWidth="620px"
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "flex-start" }}
        >
          <Typography
            fontSize={{ xs: "24px", sm: "40px" }}
            color="#EAEAEA"
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight={700}
            mb="16px"
          >
            Pioneering the future of digital innovation in Africa.
          </Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "24px" }}
            color="#E6E4E4"
            fontWeight={400}
            textAlign={{ xs: "center", sm: "left" }}
            mb={{ xs: "20px", sm: "32px" }}
          >
            At creplanos, we are more than just a tech company; we are
            visionaries committed to bridging gaps and creating transformative
            digital infrastructures tailored for Africa’s dynamic and vibrant
            ecosytem.
          </Typography>
          <Button
            variant="contained"
            alignSelf="center"
            sx={{
              width: { xs: "169px", sm: "294px" },
              height: { xs: "40px", sm: "71px" },
              borderRadius: { xs: "10px", sm: "100px" },
              textTransform: "none",
              fontFamily: "poppins",
              fontSize: { xs: "16px", sm: "24px" },
              color: "#fff",
              fontWeight: 500,
            }}
          >
            Discover More
          </Button>
        </Box>
      </MainLayout>
    </Box>
  );
}

export default Hero
