import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <div className="flex items-center">
          <a href="#" className="text-white mr-4 hover:text-gray-200">Home</a>
          <a href="#" className="text-white mr-4 hover:text-gray-200">About</a>
          <a href="#" className="text-white mr-4 hover:text-gray-200">Services</a>
          <a href="#" className="text-white mr-4 hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
