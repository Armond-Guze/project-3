import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-500 p-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <FontAwesomeIcon icon={faPlane} className="text-white text-4xl md:text-5xl mr-2" />
          <div className="text-white font-bold text-xl md:text-3xl">Trip Junkie</div>
        </Link>
        <div className="hidden md:flex items-center justify-center flex-1 text-lg md:text-xl">
          <Link to="/" className="text-white mr-6 hover:text-gray-200">Home</Link>
          <Link to="/favorites" className="text-white mr-6 hover:text-gray-200">Favorites</Link>
          <Link to="/login" className="text-white mr-6 hover:text-gray-200">Login</Link>
        </div>
        <div className="md:flex items-center justify-end">
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out text-white py-2 px-4 rounded-md font-bold text-lg md:text-xl"
          >
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
          {showMenu && (
            <div className="absolute top-16 right-0 bg-blue-500 text-white rounded-lg shadow-md p-2">
              <Link to="/" className="block py-1 hover:text-gray-200">Home</Link>
              <Link to="/favorites" className="block py-1 hover:text-gray-200">Favorites</Link>
              <Link to="/login" className="block py-1 hover:text-gray-200">Login</Link>
              <Link to="/signup" className="block py-1 hover:text-gray-200">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
