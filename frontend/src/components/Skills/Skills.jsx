import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiC, SiCplusplus } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const Skills = () => {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      category: "Programming Languages",
      description: "Core languages that power my logic and problem-solving.",
      skills: [
        { name: "C", icon: <SiC className="skill-icon" /> },
        { name: "C++", icon: <SiCplusplus className="skill-icon" /> },
        { name: "Java", icon: <FaJava className="skill-icon" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="skill-icon" /> },
      ],
    },
    {
      category: "Frontend Development",
      description: "Modern UI creation with style, speed, and interactivity.",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
        { name: "CSS", icon: <FaCss3 className="skill-icon" /> },
        { name: "React", icon: <FaReact className="skill-icon" /> },
        { name: "Next.js", icon: <RiNextjsFill className="skill-icon" /> },
        { name: "Tailwind CSS", icon: <TbBrandTailwind className="skill-icon" /> },
      ],
    },
    {
      category: "Backend Development",
      description: "Building robust, scalable, and secure server logic.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
        { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
      ],
    },
    {
      category: "Databases",
      description: "Efficient and scalable data storage solutions.",
      skills: [{ name: "MongoDB", icon: <SiMongodb className="skill-icon" /> }],
    },
  ];

  return (
    <AnimatedSection id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <p className="category-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon-wrapper">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
