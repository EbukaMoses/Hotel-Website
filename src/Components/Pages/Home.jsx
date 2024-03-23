import React from "react";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import DestinationHome from "../HomeSection/Destination/DestinationHome";
import MostPopular from "../HomeSection/Popular/MostPopular";


const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
    </>
  );
};

export default Home;
