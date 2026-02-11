import React, { useRef } from "react";
import "./Contact.css";
import { MdEmail, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const socialLinks = [
    { icon: <MdEmail />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=rohankumar9969@gmail.com", label: "Email" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rohan-kumar-sahoo/", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/RohanCraft", label: "GitHub" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/rohan_.sah._", label: "Instagram" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = "gmail_service";
    const TEMPLATE_ID = "template_qpl912j";
    const PUBLIC_KEY = "b3OFZb4sAGxDXO-c1";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-content-wrapper">
          <div className="contact-info">
            <h2 className="section-title left-align">Let's Connect</h2>
            <p className="contact-desc">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="social-links-container">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target={social.link.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <MdSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
