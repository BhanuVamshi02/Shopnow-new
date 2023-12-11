import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

const About = () => {
  const data = {
    name: "ABOUT",
    description:
      "Uncover the heart and soul of our platform, from our humble beginnings to our unwavering dedication to your satisfaction. Dive deeper into our values, vision, and the extraordinary team that makes it all possible. Explore what drives us to provide an exceptional shopping experience.",
    img: "herosection-image2.png",
  };
  return (
    <div>
      <Header />

      <HeroSection myData={data} />
    </div>
  );
};

export default About;
