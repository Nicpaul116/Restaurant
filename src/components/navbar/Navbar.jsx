import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { Login } from "../../containers";
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showlogin, setshowlogin] = useState(false);

  return (
    <motion.div
      className="component_navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay:0.2, duration:2}}
    >
      <Login logvisibility={showlogin} setLogin={() => setshowlogin(false)} />
      <div className="component-navbar_header">
        <h1>Mhaka's Dine</h1>
      </div>
      <div className="navbar_menu">
        <p className="navbar_1">
          <a href="#Home">Home</a>
        </p>
        <p className="navbar_1">
          <a href="#About">About</a>
        </p>
        <p className="navbar_1">
          <a href="#Menu">Menu</a>
        </p>
        <p className="navbar_1">
          <a href="#Blog">Blog</a>
        </p>
        <p className="navbar_1">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="component_navbar-signin">
        <div className="navbar_button-login">
          <button
            className="navbar_button"
            onClick={() => {
              setshowlogin(true);
            }}
          >
            Sign in
          </button>
        </div>
      </div>

      <div>{toggleMenu}</div>

      <div className="component_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <GiHamburgerMenu
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar_menu-container">
            <div className="navbar_menu-container-links">
              <p className="navbar_1">
                <a href="#home">Home</a>
              </p>
              <p className="navbar_1">
                <a href="#About">About</a>
              </p>
              <p className="navbar_1">
                <a href="#Menu">Menu</a>
              </p>
              <p className="navbar_1">
                <a href="#Blog">Blog</a>
              </p>
              <p className="navbar_1">
                <a href="#contact">Contact</a>
              </p>
              <div className="component_navbar-signin-links">
                <div className="navbar_button-login">
                  <button
                    className="navbar_button"
                    onClick={() => {
                      setshowlogin(true);
                    }}
                  >
                    sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
