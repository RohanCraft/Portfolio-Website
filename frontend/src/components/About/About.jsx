import React from "react";
import "./About.css";
// import profilePic from '/profilePic2.jpg'; // Using placeholder for now if not needed or reuse
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AnimatedSection id="about" className="section about-section">
      <div className="container about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
             {/* Placeholder for profile image or abstract design */}
             <div className="about-image-placeholder">
                <span>About Me</span>
             </div>
        </motion.div>

        <div className="about-content">
          <h2 className="section-title left-align">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-intro">
              I'm <strong>Rohan Kumar Sahoo</strong>, a passionate Full Stack Developer based in India.
              I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            </p>
            <p className="about-description">
              With a strong foundation in the MERN stack, I have worked on various projects ranging from
              simple landing pages to complex web applications. I am always eager to learn new technologies
              and improve my skills.
            </p>
          </motion.div>

          <div className="about-highlights">
            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <div className="highlight-text">
                <h3>Education</h3>
                <p>MCA at Indira Gandhi Institute of Technology</p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="highlight-icon">
                <FaCode />
              </div>
              <div className="highlight-text">
                <h3>Development</h3>
                <p>MERN Stack, Modern Web Tech</p>
              </div>
            </motion.div>

            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="highlight-icon">
                <FaLightbulb />
              </div>
              <div className="highlight-text">
                <h3>Problem Solving</h3>
                <p>Creative approaches to complex logic</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
