import React from "react";
import "@fontsource/outfit";
import { Box, Button, Container, Typography } from "@mui/material";

const Navbar = () => {
  const navItems = ["About Us", "Mission", "Vision", "Contact Us"];
  return (
    <Container maxWidth="xl" disableGutters>
      <Box p="20px 80px" display="flex" alignItems="center" zIndex={9999}>
        <Typography
          sx={{
            fontFamily: "outfit",
            fontWeight: 800,
            fontSize: "24px",
            color: "#fff",
            cursor: "pointer",
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
          {navItems.map((navItem, i) => (
            <Typography
              key={i}
              fontSize="16px"
              color="#E6E4E4"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                  fontWeight: 700,
                },
              }}
            >
              {navItem}
            </Typography>
          ))}
        </Box>
        
      </Box>
    </Container>
  );
};

export default Navbar;
