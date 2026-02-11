import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Rohan<span>.</span>
        </a>

        {/* Mobile Menu Overlay */}
        <div
          className={`nav-overlay ${menuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
          {/* Close Button */}
          <button
            className="menu-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>

          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta">
            Hire Me
          </a>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <AiOutlineClose /> : <TiThMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
