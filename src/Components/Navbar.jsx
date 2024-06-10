import React, { useState } from "react";
import "@fontsource/outfit";
import { Backdrop, Box, Button, Container, Typography } from "@mui/material";
import MenuIcon from "../assets/Icons/MenuIcon";
import CloseIcon from "../assets/Icons/CloseIcon";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedNav, setSelectedNav] = useState('')
  const navigate = useNavigate()
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
            zIndex: 9999,
          }}
          onClick={() => {
            navigate("/");
            window.scroll(0, 0);
            setSelectedNav("");
            setOpenMenu(false)
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
                  textDecoration:
                    selectedNav === navItem.hash ? "underline" : "none",
                  fontWeight: selectedNav === navItem.hash ? 700 : 400,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                    fontWeight: 700,
                  },
                }}
                onClick={() => {
                  window.location.hash = navItem.hash;
                  setSelectedNav(navItem.hash);
                }}
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
          sx={{ zIndex: 9999 }}
          gap="30px"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <CloseIcon sx={{color: '#fff'}} /> : <MenuIcon />}
        </Box>
        <Box
          p="20px"
          position="absolute"
          display={{ xs: openMenu ? "flex" : "none", sm: "none" }}
          flexDirection="column"
          alignItems="flex-end"
          gap="30px"
          top="100%"
          left={0}
          zIndex={9999}
          right={0}
          sx={{
            background:
              "linear-gradient(to right, #191D1F, #202A30, #1F262C, #1F2228, #111B15, #202F33, #1E3D44)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {navItems.map((navItem, i) => (
            <Typography
              key={i}
              fontSize="24px"
              color="#E6E4E4"
              textAlign="right"
              sx={{
                textDecoration:
                  selectedNav === navItem.hash ? "underline" : "none",
                fontWeight: selectedNav === navItem.hash ? 700 : 400,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                  fontWeight: 500,
                },
              }}
              onClick={() => {
                window.location.hash = navItem.hash;
                setSelectedNav(navItem.hash);
                setOpenMenu(false);
              }}
            >
              {navItem.title}
            </Typography>
          ))}
        </Box>
        <Backdrop open={openMenu} sx={{display: {xs: 'block', sm: 'none'}}} />
      </Box>
    </Container>
  );
};

export default Navbar;
