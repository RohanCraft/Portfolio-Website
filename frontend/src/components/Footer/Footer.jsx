import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Rohan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
