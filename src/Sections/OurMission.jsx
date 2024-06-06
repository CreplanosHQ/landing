import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout'

const OurMission = () => {
  return (
    <Box pt="40px" pb="80px" bgcolor="#191D1F">
      <MainLayout sx={{ px: "80px" }}>
        <Box>
          <Typography
            fontSize="48px"
            color="#fff"
            fontWeight={700}
            mb="40px"
            textAlign="center"
            
          >
            Our Mission
          </Typography>
          <Typography
            fontSize="28px"
            color="#fff"
            fontWeight={400}
            textAlign="center"
            
            mb="42px"
          >
            Our Mission is to build bridges and create new digital
            infrastructures tailored specifically to the dynamic and vibrant
            ecosystem of Africa. We are not just following trends, we’re leading
            technological disruption and fostering innovation in Africa tech.
          </Typography>
        </Box>
      </MainLayout>
    </Box>
  );
}

export default OurMission
