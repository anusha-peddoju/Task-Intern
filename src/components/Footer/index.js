import React from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyright,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-background-container">
      <div className="footer-top-details">
      <div className="footer-top-1 footer-4">
          <h1 className="footer-heading">Innovative Solutions</h1>
          <p className="footer-description">Get in touch with our team.</p>
          
          <p className="footer-description">
            2nd floor charminar block high-way hyderabad India
          </p>
          <div className="social-media-icons">
            <AiFillLinkedin className="social-media-icons" />
            <AiOutlineTwitter className="social-media-icons" />
            <AiFillYoutube className="social-media-icons" />
            <AiOutlineInstagram className="social-media-icons" />
          </div>
        </div>

        <div className="footer-top-1 footer-1">

          <h1 className="footer-heading">Get the Latest Insights</h1>
          <p className="footer-description">
            Sign up for weekly curated sustainability news.
          </p>
          <input type="email" placeholder="Email" className="email-input" />
          <button type="button" className="subscribe-button">
            Subscribe
          </button>
        </div>

        
        <div className="footer-top-1 footer-2">
          <h1 className="footer-heading">About Innovative Solutions</h1>
          <p className="footer-description">A safe path for innnovation to follow</p>
        </div>
        <div className="footer-top-1 footer-3">
          <h1 className="footer-heading">Quiuck Links</h1>
          <p className="footer-description">
         
          <a href="#Home">Home</a>
          <br/>
        <a href="#About">About</a>
        <br/>
        <a href="#products">Products</a>
        <br/>
        <a href="#contact us">contact us</a>
        <br/>
        </p>
        </div>
        
      </div>

    

      <div className="element">
        <hr className="horizontal-line" />
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom-1">
          <AiOutlineCopyright className="copy-right-icon" />
          <p className="copy-right-des">2024 Innovative solutions All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-1 footer-bottom-2">
          <p className="copy-right-des terms">Terms of Use</p>
          <p className="copy-right-des terms">Privacy Statement</p>
          <p className="copy-right-des terms">Cookie Polocy</p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
