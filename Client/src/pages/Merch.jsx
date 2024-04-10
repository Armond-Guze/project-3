import React from "react";
import logohoodietripjunkieImage from "../assets/logohoodietripjunkie.png";

const MerchPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:h-full md:w-96" // Adjusted height and width
              src={logohoodietripjunkieImage}
              alt="Trip Junkie Hoodie"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Merchandise
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              Trip Junkie Hoodie
            </h2>
            <p className="mt-2 text-gray-500">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
