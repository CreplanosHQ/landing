import { Box } from '@mui/material'
import React from 'react'
import bg from '../assets/Images/images.jpeg'

const Hero = () => {
  return (
    <Box width="100vw" height="100dvh" position='relative' sx={{background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgcolor="#1A2727D9"
      ></Box>
    </Box>
  );
}

export default Hero
