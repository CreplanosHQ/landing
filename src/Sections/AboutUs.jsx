import React from 'react'
import { Box, Typography } from "@mui/material";
import MainLayout from "../Layout/MainLayout";
import image from '../assets/Images/image 4.png'

const AboutUs = () => {
    return (
      <Box
        py="33px"
        sx={{
          background:
            "linear-gradient(to right, #608686, #365151, #3C7070, #2A3F3F, #243838)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <MainLayout sx={{ px: "80px" }}>
          <Typography
            fontSize="48px"
            color="#fff"
            fontWeight={700}
            mb="40px"
            textAlign="center"
            
          >
            Who we are?
          </Typography>
          <Box display="flex" gap="40px" alignItems="center">
            <img src={image} alt="about us" style={{ width: "50%" }} />
            <Box
              height="500px"
              borderLeft="3px solid #3B3A3A"
              display="flex"
              alignItems="center"
              pl="10px"
            >
              <Typography
                fontSize="28px"
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