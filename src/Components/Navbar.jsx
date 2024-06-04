import React from "react";
import "@fontsource/outfit";
import { Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  const navItems = ["Services", "Creatives", "Subscription", "Contact"];
  return (
    <Container maxWidth='xl' disableGutters>
      <Box p="20px 40px" display="flex" alignItems="center" zIndex={9999}>
        <Typography
          sx={{
            fontFamily: "outfit",
            fontWeight: 800,
            fontSize: "24px",
                      color: "#fff",
            cursor: "pointer"
          }}
        >
          Creplanos
        </Typography>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="30px"
        >
          {navItems.map((navItem) => (
            <Typography
              fontSize="20px"
              color="#fff"
                  sx={{
                      cursor: "pointer", '&:hover': {
                          textDecoration: 'underline',
                          fontWeight: 700
              } }}
            >
              {navItem}
            </Typography>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "191px",
            height: "50px",
            borderRadius: "16px",
            textTransform: "none",
            fontSize: "20px",
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Navbar;
