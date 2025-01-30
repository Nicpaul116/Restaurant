import React from "react";
import "./blog.css";
import { MdOutlineMessage } from "react-icons/md";
import image1 from "../../assets/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg";
import image2 from "../../assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg";
import image3 from "../../assets/nate-johnston-ozHMc88WgcI-unsplash.jpg";
import {motion} from 'framer-motion'

const Blog = () => {
  return (
    <div id="Blog">
      <div className="container_blog-sec1">
        <div className="sec1_wrap">
          <h1>Make Reservation</h1>
          <form action="">
            <div className="form_input1">
              <div className="form_input">
                <div className="form">
                  <h4>Name</h4>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form">
                  <h4>Email</h4>
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
              <div className="form_input">
                <div className="form">
                  <h4>Phone</h4>
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="form">
                  <h4>Date</h4>
                  <input type="date" placeholder="Date" />
                </div>
              </div>
              <div className="form_input">
                <div className="form">
                  <h4>Time</h4>
                  <input type="time" placeholder="Time" />
                </div>
                <div className="form">
                  <h4>Person</h4>
                  <input type="text" placeholder="Person" />
                </div>
              </div>
            </div>
          </form>
          <div className="sec1_button">
            <button>Make a Reservation</button>
          </div>
        </div>
      </div>
      <div className="container_blog-sec2">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Recent Posts
        </motion.h1>
        <div className="sec2_posts">
          <motion.div
            className="post"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={image1} alt="#" />
            <div className="post_info">
              <p>July 20, 2023</p>
              <h6>Taste the delicious foods</h6>
              <div className="sec2_icon">
                <p>Read more</p>
                <div className="icon">
                  <MdOutlineMessage />
                  <p>3</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="post"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={image2} alt="#" />
            <div className="post_info">
              <p>July 20, 2023</p>
              <h6>Relaxing Areas</h6>
              <div className="sec2_icon">
                <p>Read more</p>
                <div className="icon">
                  <MdOutlineMessage />
                  <p>15</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="post"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src={image3} alt="#" />
            <div className="post_info">
              <p>July 20, 2023</p>
              <h6>What food critics are saying</h6>
              <div className="sec2_icon">
                <p>Read more</p>
                <div className="icon">
                  <MdOutlineMessage />
                  <p>10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
