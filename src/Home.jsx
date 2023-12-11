import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
import Header from "./components/Header";

const Home = () => {
  const data = {
    name: "WELCOME TO",
    description:
      "Welcome to our online shopping paradise! Here, we've crafted a diverse collection of products that cater to your every need and desire. From fashion to electronics, and everything in between, we strive to provide quality and convenience, all just a click away. Discover the best deals, exclusive offers, and a seamless shopping experience that's tailored to you. Happy shopping!",
    img: "/fashion4.jpg",
  };
  return (
    <>
      <Header />

      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
