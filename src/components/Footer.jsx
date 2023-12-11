import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="getstarted">
        <div className="getstarted-inner">
          <div className="getstarted-1">
            <p>Ready to get started?</p>
            <p>Talk to us Today</p>
          </div>
          <a href="/products">
            <button className="getstarted-2">GET STARTED</button>
          </a>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="col-1">
            <p>ShopNow</p>
            <p>Welcome to our online shopping paradise!</p>
          </div>
          <div className="col-1">
            <p>Subscribe to get important updates</p>
            <form action="#">
              <input type="text" name="Email" placeholder="Your E-mail" />
              <input type="submit" />
            </form>
          </div>
          <div className="col-1 col-3">
            <p>follow us</p>
            <div className="socialmedia">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-discord"></i>
            </div>
          </div>

          <div className="col-1 col-4">
            <p>Call us</p>
            <p>+91 1234567890</p>
          </div>
        </div>
        <div className="copy-right">
          <hr style={{ width: "100%" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>@{new Date().getFullYear()}ShopNow. All Rights Reserved</p>
            <div
              style={{ display: "flex", flexDirection: "column", padding: 0 }}
            >
              <p style={{ marginBottom: 0 }}>PRIVACY POLICY</p>
              <p style={{ marginTop: 0 }}>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
