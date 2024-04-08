import React from 'react';


function Footer() {
  const footerStyle = {
    backgroundColor: '#3b82f6', // Blue color
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    width: '100%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <span>Follow me on GitHub:</span>
        <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
