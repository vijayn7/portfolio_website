import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const navItems = useMemo(() => ['home', 'stack', 'experience', 'projects', 'education'], []);
  const observerRef = useRef(null);

  // Set up intersection observer for section highlighting
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Set up observer options
    const options = {
      root: null, // use viewport
      rootMargin: "-20% 0px -50% 0px", // Top margin smaller to catch home section earlier
      threshold: 0.1
    };

    // Update active section based on which one is in the viewport
    const callback = (entries) => {
      // Handle the case when at the very top of the page
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    // Create new observer
    observerRef.current = new IntersectionObserver(callback, options);

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    // Add scroll listener for top of page detection
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <motion.nav 
      className="Navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <motion.li 
            key={`nav-${item}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={activeSection === item ? 'active' : ''}
          >
            <a href={`#${item}`}>{item === 'home' ? 'About' : item === 'stack' ? 'Skills' : item === 'experience' ? 'Experience' : item === 'projects' ? 'Projects' : item === 'education' ? 'Education' : item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;