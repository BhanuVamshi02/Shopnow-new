import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

const Products = () => {
  const { products, getProducts } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (!products) {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        loading...
        <img src="/loader-icon.svg" alt="loading" />
      </div>
    );
  }

  return (
    <>
      <Header />

      <h1
        style={{
          marginLeft: "90px",
          color: "white",
        }}
      >
        Our Products
      </h1>
      <div
        style={{
          width: "100%",
          color: "white",
          margin: "auto",
          backgroundColor: "rgb(60, 64, 118)",
          paddingTop: "30px",
          paddingBottom: "30px",
          gap: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <label htmlFor="categoryDropdown">Select the Category:</label>
        <select
          id="categoryDropdown"
          onChange={handleCategoryChange}
          value={selectedCategory}
          style={{
            padding: "10px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          <option value="All">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "auto",
          width: "80%",
        }}
      >
        {/* Pass the selected category to the ProductList component */}
        <ProductList products={products} selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Products;
