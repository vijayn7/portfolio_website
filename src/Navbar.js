import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#me">Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#store">Store</a></li>
        <li><a href="#stack">Stack</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;