import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout';

const Footer = () => {
  return (
    <Box py={{xs: '60px', sm: "135px"}} bgcolor="#202F33">
      <MainLayout sx={{ px: {xs: '16px', sm: '20px', lg: "80px"} }}>
        <Box display="flex" flexDirection={{xs: 'column', sm: 'row'}} alignItems={{xs: 'flex-start', sm: "center"}} justifyContent="space-between" flexWrap='wrap' gap='30px'>
          <Typography
            fontSize={{xs: '40px', sm: "64px"}}
            color="#fff"
            fontWeight={800}
            fontFamily="outfit"
            textAlign={{xs: 'center', sm: 'left'}}
          >
            Creplanos
          </Typography>
          <Box display="flex" flexDirection="column" gap={{xs: '16px', sm: "37px"}}>
            <Typography
              fontSize="36px"
              color="#fff"
              fontWeight={500}
              
            >
              About
            </Typography>
            <Typography
              fontSize={{xs: '28px', sm: "32px"}}
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Vision
            </Typography>
            <Typography
              fontSize={{xs: '28px', sm: "32px"}}
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Mission
            </Typography>
            <Typography
              fontSize={{xs: '28px', sm: "32px"}}
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Contact
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="37px" alignSelf='flex-start'>
            <Typography
              fontSize={{xs: '28px', sm:"36px"}}
              color="#fff"
              fontWeight={500}
              
            >
              Information
            </Typography>
          </Box>
        </Box>
      </MainLayout>
    </Box>
  );
}

export default Footer
