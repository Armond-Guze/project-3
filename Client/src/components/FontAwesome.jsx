import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      {" "}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {" "}
        <FontAwesomeIcon
          icon={faPlane}
          className="text-white text-2xl lg:text-3xl"
        />{" "}
        <span className="text-white font-bold text-xl lg:text-2xl ml-2">
          YourLogo
        </span>{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;
