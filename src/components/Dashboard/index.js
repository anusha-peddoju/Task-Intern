import React from "react";
import "./index.css";
import { FaArrowCircleLeft } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="nav-bottom-container-1">
      <div className="nav-card-1">
        <h1 className="nav-card-heading">
          CUSTOM PRODUCT
          <br />
          AND
          <br />
          SOFTWARE DEVELOPMENT
        </h1>
        <p className="nav-card-description">
          A Safe Path For Innovation 
          <br /> To Follow
        </p>
      </div>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.r-VNXvB-4_-WkPJSlzZOZgHaE0&pid=Api&P=0&h=180"
        alt="background"
        className="girl-image"
      />
      <div className="nav-card-2">
        <button type="button" className="request-button">
          <FaArrowCircleLeft size={30} />
          Demo 1
        </button>
        <button type="button" className="request-button">
          <FaArrowCircleLeft size={30} />
          Demo2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
