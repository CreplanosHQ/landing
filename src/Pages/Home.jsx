import React from "react";
import Hero from "../Sections/Hero";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box width='100%'>
      <Box position="fixed" width='100%' right={0} zIndex={999} >
        <Navbar />
      </Box>
      <Hero />
    </Box>
  );
};

export default Home;
