import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold">Logo</div> <FontAwesomeIcon icon={faPlane} className="text-white text-2xl mr-2" />
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-white mr-4 hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white mr-4 hover:text-gray-200">About</Link>
          <Link to="/services" className="text-white mr-4 hover:text-gray-200">Services</Link>
          <Link to="/contact" className="text-white mr-4 hover:text-gray-200">Contact</Link>
          <Link to="/login" className="text-white mr-4 hover:text-gray-200">Login</Link>
          <Link to="/signup" className="text-white mr-4 hover:text-gray-200">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
