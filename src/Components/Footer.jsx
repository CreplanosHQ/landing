import { Box, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../Layout/MainLayout';

const Footer = () => {
  return (
    <Box py="135px" bgcolor="#202F33">
      <MainLayout sx={{ px: "80px" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            fontSize="64px"
            color="#fff"
            fontWeight={800}
            fontFamily="outfit"
          >
            Creplanos
          </Typography>
          <Box display="flex" flexDirection="column" gap="37px">
            <Typography
              fontSize="36px"
              color="#fff"
              fontWeight={500}
              
            >
              About
            </Typography>
            <Typography
              fontSize="32px"
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Vision
            </Typography>
            <Typography
              fontSize="32px"
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Mission
            </Typography>
            <Typography
              fontSize="32px"
              color="#fff"
              fontWeight={500}
              
              sx={{ textDecoration: "underline" }}
            >
              Contact
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap="37px" alignSelf='flex-start'>
            <Typography
              fontSize="36px"
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
