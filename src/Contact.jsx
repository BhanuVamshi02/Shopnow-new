import React from "react";
import "./components/css/Contact.css";
import Header from "./components/Header";

const Contact = () => {
  return (
    <div>
      <Header />

      <h2
        style={{
          color: "white",
          marginLeft: "80px",
          marginTop: "50px",
          color: "#fff",
        }}
      >
        Feel Free To Contact Us
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.599778566319!2d78.34373405518457!3d17.41729221065567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb959b1b0554b1%3A0x7635fcdf39e920db!2sWaverock%20Building!5e0!3m2!1sen!2sin!4v1699452074049!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-container">
        <div className="contact-form">
          <form action="https://formspree.io/f/moqobbgy" method="POST">
            <input
              type="text"
              placeholder="Username"
              name="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              required
            ></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
