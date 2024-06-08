import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout'

const OurMission = () => {
  return (
    <Box
      id='our-mission'
      pt={{ xs: "30px", sm: "40px" }}
      pb={{ xs: "30px", sm: "80px" }}
      bgcolor="#191D1F"
    >
      <MainLayout sx={{ px: { xs: "16px", sm: "20px", lg: "80px" } }}>
        <Box>
          <Typography
            fontSize={{ xs: "36px", sm: "48px" }}
            color="#fff"
            fontWeight={700}
            mb={{ xs: "20px", sm: "40px" }}
            textAlign="center"
          >
            Our Mission
          </Typography>
          <Typography
            fontSize={{ xs: "14px", sm: "28px" }}
            color="#fff"
            fontWeight={400}
            textAlign="center"
            mb={{ xs: "20px", sm: "42px" }}
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
