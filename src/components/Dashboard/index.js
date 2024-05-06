import React from "react";
import "./index.css";
import {  FaArrowCircleRight } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="nav-bottom-container-1">
      
      <div className="nav-card-2">
        <button type="button" className="request-button">
          <FaArrowCircleRight size={30} />
          User1
        </button>
        <button type="button" className="request-button">
          <FaArrowCircleRight size={30} />
          User2
        </button>
      </div>
      <div className="nav-card-1">
        <h1 className="nav-card-heading">
          CUSTOM PRODUCT 
       <br/>
       
          AND SOFTWARE DEVELOPMENT
        </h1>
        <p className="nav-card-description">
          --A Safe Path For Innovation To Follow
        </p>
      </div>
      <img
        src="https://wallpapercave.com/wp/qe1NBOZ.png"
        alt="background"
        className="girl-image"
      />
      
    </div>
  );
};

export default Dashboard;
