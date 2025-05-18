import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: faInstagram, url: 'https://instagram.com/yourusername', label: 'Instagram' }
  ];

  return (
    <motion.footer 
      className="Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              <FontAwesomeIcon icon={social.icon} className="social-icon" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p
          whileHover={{ scale: 1.05 }}
        >
          &copy; {new Date().getFullYear()} Vijay Raju Nannapuraju. All rights reserved.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Made with <motion.span 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 0.5 }}
            style={{ color: '#ff6b6b', display: 'inline-block' }}
          >♥</motion.span> and React
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;