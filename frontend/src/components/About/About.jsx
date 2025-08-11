import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm <strong>Rohan Kumar Sahoo</strong>, currently pursuing my
          Master's in Computer Applications (MCA) at Indira Gandhi Institute of
          Technology. I hold a Bachelor's degree in Computer Science, which has
          provided me a solid foundation in software development.
        </p>
        <p className="about-text">
          I specialize in the MERN stack — MongoDB, Express.js, React, and
          Node.js — with a passion for building efficient, scalable, and
          user-friendly web applications.
        </p>
        <p className="about-text">
          I enjoy learning new technologies and sharpening my skills daily.
          Motivated by solving complex problems, I strive to create impactful
          digital experiences. I'm eager to contribute to innovative projects
          and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
