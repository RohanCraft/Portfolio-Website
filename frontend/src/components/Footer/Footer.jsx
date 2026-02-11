import React from 'react';
import './Footer.css';

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Rohan Kumar Sahoo. All rights reserved.
        </p>
        <p className="footer-subtext">
          Built with React & Passion.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
