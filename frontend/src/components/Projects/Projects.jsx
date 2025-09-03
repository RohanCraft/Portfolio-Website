import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Clone",
      description:
        "A video streaming platform clone with features like video playback, search, recommendations, and responsive UI built using React and YouTube API.",
      link: "https://youtube-clone-lilac-gamma.vercel.app/",
    },
    {
      title: "NoteSphere",
      description:
        "Organize your thoughts and to-dos with categorized notes, search functionality, and a distraction-free interface.",
      link: "https://note-sphere-9bmj.vercel.app/",
    },
    {
      title: "EduSubmit",
      description:
        "Full CRUD system to manage student records, powered by MongoDB and a responsive React frontend.",
      link: "https://edusubmit-frontend-35lm.onrender.com/",
    },
    {
      title: "Expense Tracker",
      description:
        "Track income and expenses, generate insights with charts, and set monthly budget goals.",
      link: "https://finance-app-frontend-y8qk.onrender.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-intro">
          A selection of my recent work — combining clean design, performance,
          and usability.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Demo <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
