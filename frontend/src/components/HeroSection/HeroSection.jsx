import './HeroSection.css';
import profilePic from '../../assets/profilePic.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <img src={profilePic} alt="Rohan Kumar Sahoo" className="hero-profile-pic" />
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Rohan Kumar Sahoo</span></h1>
        <p className="hero-subtitle">
          A passionate Frontend Developer who builds modern, responsive, and accessible web applications.
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/RohanCraft" className="hero-button primary">View Projects</a>
          <a href="#contact" className="hero-button secondary">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
