import React from 'react';
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Finance Manager",
      description:
        "Developed a secure full-stack web app for managing personal finances. Implemented user authentication and CRUD operations for income/expenses. Built real-time dashboards and Chart.js visualizations.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Chart.js"],
      link: "https://finance-app-frontend-y8qk.onrender.com",
      github: "https://github.com/RohanCraft/Finance-App",
      image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Finance+Manager"
    },
    {
      title: "EduSubmit",
      description:
        "Created a web-based platform for student detail submissions. Designed an admin panel to manage, review, and remove unselected entries. Implemented CRUD operations with secure database integration.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://edusubmit-frontend-35lm.onrender.com/",
      github: "https://github.com/RohanCraft/EduSubmit",
      image: "https://placehold.co/600x400/059669/FFFFFF?text=EduSubmit"
    },
    {
      title: "NoteSphere",
      description:
        "Built a notes management app with category support using React.js. Integrated Firebase Authentication for secure login and Firestore for cloud-based data storage.",
      techStack: ["React", "Firebase Auth", "Firestore"],
      link: "https://note-sphere-9bmj.vercel.app/",
      github: "https://github.com/RohanCraft/NoteSphere",
      image: "https://placehold.co/600x400/7C3AED/FFFFFF?text=NoteSphere"
    },
    {
      title: "YouTube Clone",
      description:
        "A responsive video streaming platform featuring video playback, search functionality, and personalized recommendations using the YouTube Data API.",
      techStack: ["React", "YouTube API", "Tailwind CSS"],
      link: "https://youtube-clone-lilac-gamma.vercel.app/",
      github: "https://github.com/RohanCraft/YouTube-Clone",
      image: "https://placehold.co/600x400/2563EB/FFFFFF?text=YouTube+Clone"
    },
  ];

  return (
    <AnimatedSection id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub Repo">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.techStack.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-text">
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-text">
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
