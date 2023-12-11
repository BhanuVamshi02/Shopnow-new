import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import "./components/css/Detail.css";
import { useCartContext } from "./context/cartcontext";
import Header from "./components/Header";

const API = "https://fakestoreapi.com/products";

const Detail = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { addToCart } = useCartContext();

  const { id } = useParams();

  // State to keep track of the quantity
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading || !singleProduct.title) {
    return (
      <div
        style={{
          paddingTop: "200px",
          paddingBottom: "100px",
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

  const handleIncrement = () => {
    // Increment the quantity, but not exceeding any maximum limit
    setQuantity((prevQuantity) =>
      Math.min(prevQuantity + 1 /* your maximum limit */)
    );
  };

  const handleDecrement = () => {
    // Decrement the quantity, but not going below 0
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <>
      {" "}
      <Header />
      <div style={{ color: "white" }} className="detail-container">
        <div className="detail-left">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="detail-right">
          <p
            style={{
              color: "#5b81b6",
              textTransform: "uppercase",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            {singleProduct.category}
          </p>
          <h2 style={{ color: "#2b84ff" }}>{singleProduct.title}</h2>
          <p>{singleProduct.description}</p>
          <div className="detail-price-rate">
            <span className="price">
              Price:{" "}
              <span style={{ color: "#2b84ff" }}> ${singleProduct.price}</span>
            </span>
            <span className="rating">
              Rating:{" "}
              <span style={{ color: "#2bff39" }}>
                {singleProduct.rating.rate}
              </span>
            </span>
          </div>
          <div className="detail-cart">
            <img src="/minus-icon.svg" alt="" onClick={handleDecrement} />
            {quantity}
            <img src="/plus-icon.svg" alt="" onClick={handleIncrement} />
          </div>
          <Link
            className="addtocart-button"
            to="/cart"
            onClick={() => addToCart(singleProduct.id, quantity, singleProduct)}
          >
            <button>Add to Cart</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
