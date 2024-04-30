/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../Context/Context";
import pfp from "../assets/pfp.jpg";
import { IoChevronDown } from "react-icons/io5";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <BsFillGrid1X2Fill className="toggle" onClick={openSidebar} />
      </div>
      <div className="navbar-right">
        {/* Notification Icon */}
        <div className="notification">
          <CiBellOn className="dot" />
        </div>

        {/* User Profile */}
        <img src={pfp} alt="pfp" className="pfp" />
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-role">[Admin]</div>
        </div>

        {/* Dropdown Arrow */}
        <IoChevronDown className="chevron_btn" />
      </div>
    </nav>
  );
};

export default Navbar;
