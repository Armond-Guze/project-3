import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#3b82f6',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    position: 'relative',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1rem',
    marginRight: '1rem',
    fontWeight: 'bold', 
  };

  return (
    <footer style={footerStyle}>
      <div>
        <span>&copy; {new Date().getFullYear()} Trip Junkie</span>
        <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        <a href="/terms-of-service" style={linkStyle}>Terms of Service</a>
        <a href="/contact-us" style={linkStyle}>Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;