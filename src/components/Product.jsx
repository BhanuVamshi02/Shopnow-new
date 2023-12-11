import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Product.css";

const Product = (val) => {
  const { id, title, image, category, price } = val;

  return (
    <Link to={`/details/${id}`} className="product-container">
      <img src={image} alt="" className="feature-img" />
      <div className="product-detail-container">
        <p style={{ width: "180px" }}>{title}</p>
        <p className="price">${price}</p>
      </div>
    </Link>
  );
};

export default Product;
