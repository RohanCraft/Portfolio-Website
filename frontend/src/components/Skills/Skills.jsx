import './Skills.css'
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa'
import { TbBrandTailwind } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="skill-icon" /> },
    { name: 'CSS', icon: <FaCss3 className="skill-icon" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript className="skill-icon" /> },
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'Tailwind CSS', icon: <TbBrandTailwind className="skill-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon" /> },
    { name: 'Express.js', icon: <SiExpress className="skill-icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="skill-icon" /> },
    { name: 'Next.js', icon: <RiNextjsFill className="skill-icon" /> }
  ]

  return (
    <section id="skills" className="skills-section animated-fade">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
