import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { SiFacebookgaming } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <FaFacebook className="logo" />
        <div className="input-icon">
          <AiOutlineSearch className="icon" />
          <input type="text" className="search" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="middle">
        <AiFillHome className="middle-icon active" />
        <MdOutlineOndemandVideo className="middle-icon" />
        <BsFillHouseFill className="middle-icon" />
        <IoIosPeople className="middle-icon" />
        <SiFacebookgaming className="middle-icon" />
      </div>

      <div className="right">
        <div className="avatar">
          <div className="background">
            <BsPersonFill className="avatar-logo" />
          </div>
          <span>XYZ</span>
        </div>
        <div className="background">
          <CgMenuGridO className="menu-icons" />
        </div>
        <div className="background">
          <FaFacebookMessenger className="menu-icons" />
        </div>
        <div className="background">
          <FaBell className="menu-icons" />
        </div>
        <div className="background">
          <AiFillCaretDown className="menu-icons" />
        </div>
      </div>
    </div>
  );
};

export default Header;
