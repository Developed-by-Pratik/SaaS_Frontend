import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/290/290091.png"
        />
        <span>GoodWorks!</span>
      </div>

      <ul className="nav-links">
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
