import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['home', 'me', 'portfolio', 'store', 'stack', 'blog'];

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    
    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="Navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="desktop-nav">
        <ul className="desktop-nav-links">
          {navItems.map((item, index) => (
            <motion.li 
              key={`desktop-${item}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${item}`}>{item === 'home' ? 'Home' : item === 'me' ? 'Me' : item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </motion.li>
          ))}
        </ul>
        <motion.div 
          key="desktop-hire-me"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: navItems.length * 0.05, duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hire-me-button-container"
        >
          <a href="#contact" className="hire-me-button">Hire Me</a>
        </motion.div>
      </div>
      
      <div className="mobile-nav">
        <div className="nav-brand">
          <h1 className="name">Vijay Raju Nannapuraju</h1>
        </div>
        
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      <motion.ul 
        className={`mobile-menu-links ${mobileMenuOpen ? 'active' : ''}`}
        animate={{ 
          x: mobileMenuOpen ? 0 : '-100%'
        }}
        transition={{ 
          duration: 0.3,
          ease: "linear"
        }}
      >
        <div className="mobile-menu-header">
          <h2 className="mobile-name">Vijay Raju Nannapuraju</h2>
          <button 
            className="close-menu"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        {navItems.map((item, index) => (
          <motion.li 
            key={`mobile-${item}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2, ease: "linear" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`} onClick={closeMobileMenu}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;