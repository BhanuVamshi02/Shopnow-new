import React from "react";
import "./css/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const name = myData.name;
  const description = myData.description;
  const img = myData.img;
  return (
    <div className="row">
      <div className="left">
        <span>{name}</span> <h1>ShopNow</h1>
        <p className="herosection-p">{description}</p>
        <Link to="/products">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
