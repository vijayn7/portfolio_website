import React from 'react';
import './Footer.css'; // Optional: Add styles for the footer

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>
            Follow me on{' '}
            <a href="https://yourprofilelink.com" target="_blank" rel="noopener noreferrer">Your Profile</a>
        </p>
    </footer>
  );
}

export default Footer;