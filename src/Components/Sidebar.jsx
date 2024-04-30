/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import { menuItems } from "../data/data";
import logo from "../assets/bizpay_logo.svg";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!document.querySelector(".sidebar").contains(e.target)) {
        closeSidebar();
      }
    };
    isSidebarOpen
      ? document.addEventListener("mousedown", handleOutsideClick)
      : null;
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen, closeSidebar]);

  const handleToggleSidebar = () => {
    isSidebarOpen ? closeSidebar() : openSidebar();
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Bizpay Logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => {
            const { icon, text } = item;
            return (
              <li key={index}>
                <a href="#">
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="sidebar-toggle" onClick={handleToggleSidebar}>
          <FaBars />
          <span>Toggle Sidebar</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;