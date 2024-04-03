import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
        <a href="/" className="text-white font-bold text-xl lg:text-2xl">Trip Junkie</a>

      
        <ul className="flex space-x-6">
          <li><a href="/" className="text-white hover:text-gray-300 text-lg">Home</a></li>
          <li><a href="/travel" className="text-white hover:text-gray-300 text-lg">Travel</a></li>
          <li><a href="/weather" className="text-white hover:text-gray-300 text-lg">Weather</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300 text-lg">Contact</a></li>
        </ul>

       
      </div>
    </nav>
  );
};

export default Navbar;
