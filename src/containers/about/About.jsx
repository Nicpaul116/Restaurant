import React from "react";
import "./about.css";
import icon1 from "../../assets/tray.png";
import icon2 from "../../assets/room-service.png";
import icon3 from "../../assets/cooking.png";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="container_about-all">
      <div className="container_about" id="About">
        <div className="container_about-sec1">
          <motion.div
            className="img1"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.div
            className="img2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        <motion.div
          className="container_about-sec2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Mhaka Restaurant</h2>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <h5>Mon - Fri</h5>
          <h4>8 AM - 11 PM</h4>
          <h1>+48 508 599 364</h1>
        </motion.div>
      </div>
      <div className="container_about-sec3">
        <div className="sec3_content">
          <h1>20</h1>
          <p> Years of Experience</p>
        </div>
        <div className="sec3_content">
          <h1>100</h1>
          <p>Menus</p>
        </div>
        <div className="sec3_content">
          <h1>500</h1>
          <p>Staffs</p>
        </div>
        <div className="sec3_content">
          <h1>100,000</h1>
          <p>Happy customers</p>
        </div>
        <div className="sec3_para">
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
      <div className="container_about-sec4">
        <div className="about_sec4-all">
          <div className="about-catering">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              catering services
            </motion.h1>
          </div>
          <motion.div
            className="about_info"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
          >
            <div className="catering_info">
              <img src={icon1} alt="#" />
              <h3>Wedding</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="catering_info">
              <img src={icon2} alt="#" />
              <h3>Hotel services</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="catering_info">
              <img src={icon3} alt="#" />
              <h3>Elite chefs</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
