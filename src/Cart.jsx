import React from "react";
import "./components/css/Cart.css";
import { useCartContext } from "../src/context/cartcontext";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    deleteItemFromCart,
    clearCart,
    totalPrice,
    totalPayableAmount,
    shippingFee,
  } = useCartContext();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleIncrement = (productId) => {
    const item = cart.find((cartItem) => cartItem.productId === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const handleDecrement = (productId) => {
    const item = cart.find((cartItem) => cartItem.productId === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="main-cart-container">
        {cart.length === 0 ? (
          <div>
            <h2
              style={{ textAlign: "center", padding: "0", marginTop: "50px" }}
            >
              Your Cart is Empty
            </h2>
          </div>
        ) : (
          <div>
            <h2>Your Cart</h2>

            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.productId}>
                    <td>
                      <div className="cart-info">
                        <img src={item.singleProduct.image} alt="" />
                        <div className="details-part">
                          <p>{item.singleProduct.category}</p>
                          <small>Price: ${item.singleProduct.price}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => handleDecrement(item.productId)}>
                        -
                      </button>
                      {item.quantity}
                      <button onClick={() => handleIncrement(item.productId)}>
                        +
                      </button>
                    </td>
                    <td>${item.singleProduct.price * item.quantity}</td>
                    <td>
                      <img
                        src="/delete-icon.svg"
                        alt=""
                        style={{ width: "25px", cursor: "pointer" }}
                        onClick={() => deleteItemFromCart(item.productId)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr style={{ width: "80%" }} />
            <div className="cart-bottom-btns">
              <NavLink to="/products">Continue Shopping</NavLink>
              <button onClick={clearCart}>clear cart</button>
            </div>
            <div className="total-container">
              <div className="total">
                <p>
                  Total Price : <span>${totalPrice}</span>
                </p>
                <p>
                  Shipping Fee : <span>${shippingFee}</span>
                </p>
                <hr />
                <h3>
                  Total Payable Amount : <span>${totalPayableAmount}</span>
                </h3>
              </div>
              <button onClick={handleOrder}>
                {orderPlaced ? (
                  <div className="orderplaced">
                    <span>Order placed</span>
                    <img src="/order-placed.svg" alt="" />
                  </div>
                ) : (
                  "Place Order"
                )}
              </button>

              <div>
                {orderPlaced ? (
                  <>
                    {" "}
                    <h1 style={{ color: "#020423", textAlign: "center" }}>
                      Thank you..!
                    </h1>
                    <h4 style={{ color: "#2bff39" }}>
                      Shortly! Our Team will contact you.
                    </h4>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
