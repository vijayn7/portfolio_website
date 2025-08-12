// import React from 'react';
// import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/vijayn7', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/vijayn7', label: 'LinkedIn' },
    { icon: faEnvelope, url: 'mailto:vijaynannapuraju@gmail.com', label: 'Email' },
    { icon: faInstagram, url: 'https://instagram.com/vijay_n7_', label: 'Instagram' }
  ];

  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-link"
            >
              <FontAwesomeIcon icon={social.icon} className="social-icon" />
            </a>
          ))}
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} Vijay Raju Nannapuraju. All rights reserved.
        </p>
        
        <p className="made-with">
          Made with <span className="heart">♥</span> and React
        </p>
      </div>
    </footer>
  );
}

export default Footer;