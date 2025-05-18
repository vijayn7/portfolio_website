import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav 
      className="Navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 10 }}
    >
      <ul className="nav-links">
        {['home', 'me', 'portfolio', 'store', 'stack', 'blog'].map((item, index) => (
          <motion.li 
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;