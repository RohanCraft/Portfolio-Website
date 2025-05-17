import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm <strong>Rohan Kumar Sahoo</strong>, currently pursuing my
          Master's in Computer Applications (MCA) at Indira Gandhi Institute of
          Technology. I completed my Bachelor's degree in Computer Science and
          have developed a strong foundation in software development.
        </p>
        <p className="about-text">
          I specialize in the MERN stack — MongoDB, Express.js, React, and
          Node.js — and have a passion for building efficient, scalable, and
          user-friendly web applications.
        </p>
        <p className="about-text">
          I enjoy learning new technologies and improving my skills every day.
          I'm motivated by solving complex problems and creating impactful
          digital experiences. I am excited to contribute to innovative projects
          and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
