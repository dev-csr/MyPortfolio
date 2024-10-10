/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
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
          <a className="Headeras" href="#Home">
            <span>Home</span>
          </a>
          <a className="Headeras" href="#about">
            <span>About</span>
          </a>
          <a className="Headeras" href="#projects">
            <span>Projects</span>
          </a>
          <a className="Headeras" href="#skills">
            <span>Skills</span>
          </a>
          <a className="Headeras" href="#contact">
            <span>Contact</span>
          </a>
          <a
            className="Headeras"
            href="https://drive.google.com/file/d/1BS_DiyzoRmacvATWexvsDyoebU8inWBq/view?usp=drive_link"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
