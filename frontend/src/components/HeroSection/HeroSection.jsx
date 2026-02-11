import React from 'react';
import './HeroSection.css';
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-accent"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <span>Available for Work</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm Rohan Kumar Sahoo
            <span className="hero-role">Full Stack Developer</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about crafting software that solves real-world problems.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="/Rohan_Kumar_Sahoo_Resume.pdf" download className="btn btn-outline">
              Download Resume <HiDownload />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="https://github.com/RohanCraft" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rohan-kumar-sahoo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
