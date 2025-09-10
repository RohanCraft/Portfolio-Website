import './HeroSection.css';
import profilePic from '../../assets/profilePic2.jpg';
import { FaDownload } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <img
        src={profilePic}
        alt="Rohan Kumar Sahoo"
        className="hero-profile-pic"
      />
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span>Rohan Kumar Sahoo</span>
        </h1>
        <p className="hero-subtitle">
          Crafting sleek, responsive, and high-performance web applications with
          a focus on clean design and exceptional user experience. Always ready
          to bring ideas to life through code.
        </p>
        <div className="hero-buttons">
          <a
            href="/Rohan_Kumar_Sahoo_Resume.pdf"
            download="Rohan_Kumar_Sahoo_Resume.pdf"
            className="hero-button primary"
          >
            <FaDownload style={{ marginRight: "8px" }} />
            Download Resume
          </a>
          <a href="#contact" className="hero-button secondary">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
