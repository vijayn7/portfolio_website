import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; // Optional: Add styles for the footer

function Footer() {
  return (
    <motion.footer 
      className="Footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.p
        whileHover={{ scale: 1.05 }}
      >
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Follow me on{' '}
        <motion.a 
          href="https://yourprofilelink.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: '#FF6347' }}
          whileTap={{ scale: 0.95 }}
        >
          Your Profile
        </motion.a>
      </motion.p>
    </motion.footer>
  );
}

export default Footer;