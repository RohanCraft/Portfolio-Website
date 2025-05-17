import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Password Manager",
      description:
        "Securely store and manage your passwords using encryption and a user-friendly UI.",
      link: "#",
    },
    {
      title: "Notes App",
      description:
        "Organize your thoughts and to-dos into categorized notes with a clean interface.",
      link: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "Track your income and expenses, and view financial summaries with charts.",
      link: "#",
    },
    {
      title: "Student Data Store",
      description:
        "Manage student records with full CRUD functionality and MongoDB integration.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Demo →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
