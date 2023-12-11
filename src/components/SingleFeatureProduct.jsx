import React, { useState, useEffect } from "react";
import "./css/SingleFeatureProduct.css";

const SingleFeatureProduct = (val) => {
  const { id, title, image, category, price } = val;

  return (
    <div className="product-container">
      <p
        style={{
          color: "#5b81b6",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {category}
      </p>
      <img src={image} alt="" className="feature-img" />
    </div>
  );
};

export default SingleFeatureProduct;
