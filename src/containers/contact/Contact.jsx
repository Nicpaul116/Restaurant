import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container_contact" id="contact">
      <div className="container_contact-wrap">
        <div className="contact_header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_wrap">
          <div className="contact_iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.4627839455734!2d18.00085927584109!3d53.13081779843882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313c799361019%3A0x453ca5d9a015564b!2sOld%20Town%20Sp.%20z%20o.o.!5e0!3m2!1sen!2spl!4v1691116285551!5m2!1sen!2spl"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="description"
            ></iframe>
          </div>
          <div className="contact_info">
            <div className="contact_form">
              <form action="" className="contact_form-input">
                <div className="form_input1">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form_input2">
                  <input type="text" placeholder="Your email" />
                </div>
              </form>
            </div>
            <div className="contact_input">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="contact_textarea">
              <textarea
                name="Message"
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="container_contact-button">
              <button className="contact_button">
                <span>send message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
