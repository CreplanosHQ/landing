import React from 'react'
import { Box, Typography } from "@mui/material";
import MainLayout from "../Layout/MainLayout";
import image from '../assets/Images/image 4.png'
import image1 from '../assets/Images/Frame 3.png'

const AboutUs = () => {
    return (
      <Box
        id='about-us'
        py={{ xs: "16px", sm: "33px" }}
        sx={{
          background:
            "linear-gradient(to right, #608686, #365151, #3C7070, #2A3F3F, #243838)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <MainLayout sx={{ px: { xs: "16px", sm: "20px", lg: "80px" } }}>
          <Typography
            fontSize="48px"
            color="#fff"
            fontWeight={700}
            mb={{ xs: "20px", sm: "40px" }}
            textAlign="center"
          >
            Who we are?
          </Typography>
          <Box
            display="flex"
            gap={{ xs: "20px", sm: "40px" }}
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box display={{ xs: "none", sm: "block" }}width='100%' height='100%'>
              <img src={image} alt="about us" style={{ width: "100%" }} />
            </Box>
            <Box display={{ xs: "block", sm: "none" }}width='100%'>
              <img src={image1} alt="about us" style={{ width: "100%" }} />
            </Box>
            <Box
              height={{ xs: "fit-content", sm: "500px" }}
              borderLeft={{ xs: "none", sm: "3px solid #3B3A3A" }}
              display="flex"
              alignItems="center"
              width={'100%'}
              pl="10px"
            >
              <Typography
                fontSize={{ xs: "14px", sm: "28px" }}
                color="#fff"
                fontWeight={400}
                textAlign="center"
              >
                Our passion lies in creating cutting-edge digital solution that
                bridge gaps, connect people, and propel businesses forward. We
                believe in the power of technology to transform lives and drive
                sustainable growth across Africa.
              </Typography>
            </Box>
          </Box>
        </MainLayout>
      </Box>
    );
}

export default AboutUs