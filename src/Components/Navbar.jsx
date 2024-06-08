import React from "react";
import "@fontsource/outfit";
import { Box, Button, Container, Typography } from "@mui/material";
import MenuIcon from "../assets/Icons/MenuIcon";

const Navbar = () => {
  const navItems = [{title: "About Us", hash: 'about-us'}, {title: "Mission", hash: 'our-mission'}, {title: "Vision", hash: 'our-vision'}, {title: "Contact Us", hash: 'contact-us'}];
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        p={{ xs: "12px 16px", sm: "20px", lg: "20px 80px" }}
        display="flex"
        alignItems="center"
        zIndex={9999}
      >
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
          display={{ xs: "none", sm: "flex" }}
          alignItems="center"
          justifyContent="center"
          gap="30px"
        >
          <>
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
                onClick={() => (window.location.hash = navItem.hash)}
              >
                {navItem.title}
              </Typography>
            ))}
          </>
        </Box>
        <Box
          flex={1}
          display={{ xs: "flex", sm: "none" }}
          alignItems="center"
          justifyContent="flex-end"
          gap="30px"
        >
          <MenuIcon />
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
