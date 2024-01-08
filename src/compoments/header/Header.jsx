import React from "react";
import "./Header.css";
import { FiAlignJustify } from "react-icons/fi";
import Control from "../../assets/images/control.png";
import News from "../../assets/images/news.png";
import Plant from "../../assets/images/plant.png";
import Device from "../../assets/images/device.png";
import Login from "../../assets/images/login.svg";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";

const Header = ({userName}) => {

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-4 py-3 text-black">
      <div></div>
      <div className="flex space-x-6 rounded-lg justify-between p-3 menu">
        {/* Menu */}
        <HeaderItem title="Control" imgUrl={Control} />
        <HeaderItem title="News" imgUrl={News} />
        <HeaderItem title="Plants" imgUrl={Plant} />
        <HeaderItem title="Device" imgUrl={Device} />
        {userName?
        <button onClick={logout} className="flex p-1 flex-row items-center cursor-pointer hover:bg-white hover:text-black hover:rounded-lg hover:p-1">
          <img src={Login} className="w-6 h-6 pr-2" />
          Logout
        </button>
        :<HeaderItem title="Login" imgUrl={Login} />}
      </div>
      {/* Right side */}
      <div className="flex items-center  p-4 rounded-3xl bg-[#ada496a1] cursor-pointer hover:bg-white hover:text-black">
        <FiAlignJustify className="hidden md:flex space-x-6" />
      </div>
    </div>
  );
};


export default Header;