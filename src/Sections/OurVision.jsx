import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout'
import image1 from '../assets/Images/image3.png'
import image2 from '../assets/Images/image2.png'
import image3 from '../assets/Images/image3.png'
import image4 from '../assets/Images/image4.png'

const OurVision = () => {
  return (
      <Box
          pt='40px'
          pb='80px'
      sx={{
        background:
          "linear-gradient(to right, #191D1F, #202A30, #1F262C, #1F2228, #111B15, #202F33, #1E3D44)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <MainLayout sx={{ px: "80px" }}>
        <Box>
          <Typography
            fontSize="48px"
            color="#fff"
            fontWeight={700}
            mb="40px"
            textAlign="center"
            
          >
            Our Vision
          </Typography>
          <Typography
            fontSize="28px"
            color="#fff"
            fontWeight={400}
            textAlign="center"
            mb="42px"
          >
            Our vision is to be the leading force in digital transformation
            across Africa. We strive to create a seamless digital experience for
            all, transcending physical boundaries and embracing the diversity
            and uniqueness of the African landscape.
          </Typography>
          <Box width="70%" height="1px" bgcolor="#414040" mx='auto' mb="80px"></Box>
          <Box display="flex" gap="30px" width='100%'>
            <Box
              bgcolor="#fff"
              minHeight="560px"
              width="100%"
              borderRadius="20px"
              border=".5px solid #A49D9D"
              sx={{boxShadow: '0px 0px 40px 10px rgba(0, 0, 0, 0.7)'}}
            >
              <Box
                width="100%"
                height="100%"
                bgcolor="rgba(30, 61, 68, 0.71)"
                borderRadius="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <img
                  style={{
                    width: "100%",
                    height: "288px",
                    borderRadius: "20px 20px 0 0",
                  }}
                  src={image1}
                  alt="Empower individuals and Businesses"
                />
                <Box p="15px 20px">
                  <Typography
                    color="#fff"
                    fontSize="32px"
                    fontWeight={600}
                    
                  >
                    Empower individuals and Businesses
                  </Typography>
                  <Typography fontSize="24px" color="#fff" >
                    Provide cutting-edge tools and platforms that enable user to
                    thrive in digital world.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              bgcolor="#fff"
              minHeight="560px"
              width="100%"
              borderRadius="20px"
              border=".5px solid #A49D9D"
              sx={{boxShadow: '0px 0px 40px 10px rgba(0, 0, 0, 0.7)'}}
            >
              <Box
                width="100%"
                height="100%"
                bgcolor="rgba(30, 61, 68, 0.71)"
                borderRadius="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box p="15px 20px">
                  <Typography
                    color="#fff"
                    fontSize="32px"
                    fontWeight={600}
                    
                  >
                    Champion inclusivity and accessibility
                  </Typography>
                  <Typography fontSize="24px" color="#fff" >
                    Ensure our solutions are accessible to all, fostering an
                    inclusive digital landscape
                  </Typography>
                </Box>
                <img
                  style={{
                    width: "100%",
                    height: "288px",
                    borderRadius: "0 0 20px 20px",
                  }}
                  src={image2}
                  alt="Champion inclusivity and accessibility"
                />
              </Box>
            </Box>
            <Box
              bgcolor="#fff"
              minHeight="560px"
              width="100%"
              borderRadius="20px"
              border=".5px solid #A49D9D"
              sx={{boxShadow: '0px 0px 40px 10px rgba(0, 0, 0, 0.7)'}}
            >
              <Box
                width="100%"
                height="100%"
                bgcolor="rgba(30, 61, 68, 0.71)"
                borderRadius="20px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <img
                  style={{
                    width: "100%",
                    height: "288px",
                    borderRadius: "20px 20px 0 0",
                  }}
                  src={image3}
                  alt="Foster Economic Development"
                />
                <Box p="15px 20px">
                  <Typography
                    color="#fff"
                    fontSize="32px"
                    fontWeight={600}
                    
                  >
                    Foster Economic Development
                  </Typography>
                  <Typography fontSize="24px" color="#fff" >
                    Drive technological advancements that contribute to the
                    economic growth of the region.
                  </Typography>
                </Box>
                          </Box>
                          </Box>
                          
              <Box
                bgcolor="#fff"
                minHeight="560px"
                width="100%"
                borderRadius="20px"
                border=".5px solid #A49D9D"
                sx={{boxShadow: '0px 0px 40px 10px rgba(0, 0, 0, 0.7)'}}
              >
                <Box
                  width="100%"
                  height="100%"
                  bgcolor="rgba(30, 61, 68, 0.71)"
                  borderRadius="20px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box p="15px 20px">
                    <Typography
                      color="#fff"
                      fontSize="32px"
                      fontWeight={600}
                      
                    >
                      Digital innovation
                    </Typography>
                    <Typography
                      fontSize="24px"
                      color="#fff"
                      
                    >
                      Be the leading force in digital transformation across
                      Africa.
                    </Typography>
                  </Box>
                  <img
                    style={{
                      width: "100%",
                      height: "288px",
                      borderRadius: "0 0 20px 20px",
                    }}
                    src={image4}
                    alt="Digital innovation"
                  />
                </Box>
              </Box>
            </Box> 
          </Box>
      </MainLayout>
    </Box>
  );
}

export default OurVision
