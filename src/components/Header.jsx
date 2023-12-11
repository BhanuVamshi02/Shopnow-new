import React from "react";
import "./css/Header.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../context/cartcontext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCartContext();
  // Calculate total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="nav-container">
      {menuOpen ? (
        <img
          src="/close-icon.svg"
          alt=""
          className="menu-icon"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      ) : (
        <img
          className="menu-icon"
          src="/menu-icon.svg"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      )}
      <div className="nav-left">
        <img src="/cart-icon.svg" alt="" />
        <h2>ShopNow </h2>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <Link to="/cart" className="cart">
          <img src="/cart-icon.svg" alt="" />
          <span>{totalQuantity}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
