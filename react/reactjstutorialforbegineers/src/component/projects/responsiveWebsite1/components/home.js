import React from "react";
import top11 from "../media/images/top11.png";
import mern from "../media/images/mern.jpeg";
// import { NavLink } from "react-router-dom";
import HomeAndAbout from "./commonComponent/homeAndAbout";

function Home() {
  return (
    <>
      <HomeAndAbout
        headline="Grow Your Business with "
        productName="DevZone"
        paragraphLine="We are the team of highly taanted developer"
        navLinkBButtonText="Get Started"
        imageName={mern}
        classNamePFor="home"
      />
    </>
  );
}

export default Home;
