import React from "react";
import HomeAndAbout from "./commonComponent/homeAndAbout";
import top11 from "../media/images/top11.png";

function About() {
  return (
    <>
      <>
        <HomeAndAbout
          headline="About Us"
          productName=""
          paragraphLine="We are a bunch of dedicated professionals who value your time and money. Our employees are always there for you after the completion of the project. We believe as much in the strength of our relations as you would in the efficacy of our solutions. We as App Developers, proficiently utilize the technological tools and apply language programs. Our team and tech stack - 'LARAVEL, NODEJS, PYTHON, ANGULAR, REACT, FLUTTER, IONIC, ANDROID, JAVA & KOTLIN, SWIFT etc to develop the best version of applications. Our database is developed in MYSQL, POSTGRES, MONGO-DB, SQLITE and we use efficient Photoshop and AdobeXD apps to work out our designs."
          navLinkBButtonText="View Our Services"
          imageName={top11}
          classNamePFor=""
        />
      </>
    </>
  );
}

export default About;
