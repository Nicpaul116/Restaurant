import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar";

const Header = () => {
  return (
    <section className="container_header-section">
      <Navbar/>
      <div className="container_header" id="Home">
      <div className="container_header_title">
        <div className="header_content">
          <h1>Savory & Delicious!</h1>
          <p>Best day calls for the Best food</p>
        </div>
        <button className="header_button">
          <a href="#Menu">Place Order</a>
        </button>
      </div>
    </div>
    </section>
  );
};

export default Header;
