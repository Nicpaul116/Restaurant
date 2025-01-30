import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar";
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <section className="container_header-section">
      <Navbar />
      <motion.div
        className="container_header"
        id="Home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
      >
        <div className="container_header_title">
          <div className="header_content">
            <h1>Savory & Delicious!</h1>
            <p>Best day calls for the Best food</p>
          </div>
          <button className="header_button">
            <a href="#Menu">Place Order</a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
