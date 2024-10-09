/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./s-high-resolution-logo.png";
import "./Component.css";

const Header = ({ Change, toggle }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".navbar")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <nav className={`navbar ${Change}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
          {toggle}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>

        <div className={`nav-links ${isOpen ? "show" : ""} ${Change}`}>
          <Link to="/Home">
            <span>Home</span>
          </Link>
          <Link to="/About">
            <span>About</span>
          </Link>
          <Link to="/Projects">
            <span>Projects</span>
          </Link>
          <Link to="/Skills">
            <span>Skills</span>
          </Link>
          <Link to="/Contact">
            <span>Contact</span>
          </Link>
          <Link to="/Resume">
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
