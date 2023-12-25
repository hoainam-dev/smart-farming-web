import React from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";
import Control from "../../../assets/images/control.png";
import News from "../../../assets/images/news.png";
import Plant from "../../../assets/images/plant.png";
import Device from "../../../assets/images/device.png";

// This is a placeholder component for icons
// Replace with actual SVG or image components for your icons
const Icon = ({ label }) => <span>{label}</span>;

const Header = () => {
  return (
    <div className="header">
      <div></div>
      <div className="menu">
        <div className="icon-container">
          <img src={Control} alt="" className="icon" />
          <span className="icon-content">Control</span>
        </div>
        <div className="icon-container">
          <img src={News} alt="" className="icon" />
          <span className="icon-content">News</span>
        </div>
        <div className="icon-container">
          <img src={Plant} alt="" className="icon" />
          <span className="icon-content">Plants</span>
        </div>
        <div className="icon-container">
          <img src={Device} alt="" className="icon" />
          <span className="icon-content">Device</span>
        </div>
      </div>
      <div className="right-menu">
        <div className="icon-menu">
          <FiAlignJustify />
        </div>
      </div>
    </div>
  );
};

export default Header;
