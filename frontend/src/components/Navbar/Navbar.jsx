import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-section">
          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <AiOutlineClose /> : <TiThMenu />}
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button
              aria-label="Toggle menu"
              className="menu-btn"
              onClick={toggleMenu}
            >
              {menuOpen ? <AiOutlineClose /> : <TiThMenu />}
            </button>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="right-section">
          <a href="#portfolio" className="portfolio-link">
            Portfolio
          </a>
          <button
            className="toggle-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
