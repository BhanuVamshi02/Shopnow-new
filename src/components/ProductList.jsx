import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./css/ProductList.css";

const ProductList = ({ products, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
