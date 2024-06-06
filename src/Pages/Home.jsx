import React from "react";
import Hero from "../Sections/Hero";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";
import BestEdit from '../Sections/AboutUs'
import AboutUs from "../Sections/AboutUs";
import OurVision from "../Sections/OurVision";
import OurMission from "../Sections/OurMission";
import ContactUs from "../Sections/ContactUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Box width="100%">
      <Box
        position="fixed"
        width="100%"
        right={0}
        zIndex={999}
        bgcolor="#1A2727"
      >
        <Navbar />
      </Box>
      <Hero />
      <AboutUs />
      <OurVision />
      <OurMission />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default Home;
