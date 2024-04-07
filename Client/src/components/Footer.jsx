import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const footerStyle = {
    backgroundColor: "#3b82f6",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    position: "relative",
    width: "100%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: location.pathname === "/" ? "block" : "none", // Show only on homepage
  };

  return (
    <footer style={footerStyle}>
      <div>
        <span>Follow me on GitHub:</span>
      </div>
    </footer>
  );
}

export default Footer;
