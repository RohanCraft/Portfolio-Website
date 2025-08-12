import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hi, I'm <strong>Rohan Kumar Sahoo</strong> — a passionate{" "}
          <strong>MERN Stack Developer</strong> with a love for building clean,
          scalable, and user-friendly web applications.
        </p>

        <div className="about-highlights">
          <div className="about-item">
            <h3>🎓 Education</h3>
            <p>
              Pursuing my{" "}
              <strong>Master's in Computer Applications (MCA)</strong> at Indira
              Gandhi Institute of Technology. Completed my Bachelor's in
              Computer Science.
            </p>
          </div>

          <div className="about-item">
            <h3>💻 What I Do</h3>
            <p>
              Develop responsive and dynamic websites using MongoDB, Express.js,
              React, and Node.js. Focused on creating seamless user experiences.
            </p>
          </div>

          <div className="about-item">
            <h3>🚀 Passion</h3>
            <p>
              Always exploring new technologies, solving complex problems, and
              contributing to impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
