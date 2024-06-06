import { Container } from '@mui/material'
import React from 'react'

const MainLayout = ({children, ...props}) => {
  return (
    <Container maxWidth='xl' disableGutters {...props}>
      {children}
    </Container>
  )
}

export default MainLayout
