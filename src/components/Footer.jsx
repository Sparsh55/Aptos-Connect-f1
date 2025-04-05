import React from 'react';
import './footer.css'; // Import the CSS file
import footerLogo from '../assets/Frame 707.png'; // Adjust path to your image

const Footer = () => {
  return (
    <footer className="footer">
      <img 
        src={footerLogo} 
        alt="Company Logo" 
        className="footer-image"
      />
    </footer>
  );
};

export default Footer;