import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const contacts = [
  {
    icon: <MdEmail />,
    label: "Email",
    link: "mailto:rohankumar9969@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/rohan-kumar-sahoo/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/RohanCraft",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    link: "https://www.instagram.com/rohan_.sah._",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact section"
    >
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Feel free to reach out through any platform below. I’m always open to
          discussing projects, collaborations, or just a friendly hello!
        </p>
        <div className="cards-wrapper">
          {contacts.map(({ icon, label, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label={label}
              title={label}
            >
              <span className="icon">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
