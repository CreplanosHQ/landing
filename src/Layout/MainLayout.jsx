import { Container } from '@mui/material'
import React from 'react'

const MainLayout = ({children}) => {
  return (
    <Container maxWidth='xl' disableGutters sx={{p: 0, m: 0}}>
      {children}
    </Container>
  )
}

export default MainLayout
