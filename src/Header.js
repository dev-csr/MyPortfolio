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
  }, [isOpen]);

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
          <Link to="/home">
            <span>About</span>
          </Link>
          <Link to="/recommended">
            <span>Education</span>
          </Link>
          <Link to="/Manga/AllManga">
            <span>Projects</span>
          </Link>
          <Link to="/figurine">
            <span>Skills</span>
          </Link>
          <Link to="/accessories">
            <span>Contact</span>
          </Link>
          <Link to="/apparels">
            <span>Resume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
