import "./css/Services.css";

import React from "react";
function Services() {
  return (
    <div className="container">
      <div className="one">
        <img src="/truck-icon.svg" alt="" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="two">
        <div className="two-top">
          <img src="/shield-icon.svg" alt="" />
          <p>Non-contact Shipping</p>
        </div>
        <div className="two-bottom">
          <img src="/coins-icon.svg" alt="" />
          <p>Money-back Guaranteed</p>
        </div>
      </div>
      <div className="three">
        <img src="/secure-icon.svg" alt="" />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
}

export default Services;
