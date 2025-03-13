import React from "react";
import logo from "../assets/lofticore-logo.png";
import { Link } from "react-router-dom";


const SearchOverlay = ({ onClose }) => {
  return (
    <div className="pt-24 fixed top-0 left-0 w-full h-full bg-[#485D56] bg-opacity-90 backdrop-blur-sm z-50 flex flex-col items-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-9 left-28 text-white cursor-pointer hover:text-gray-300 transition-colors duration-200 focus:outline-none"
        aria-label="Close Search"
      >
        <div className="flex space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFFFFF"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
              strokeWidth={0.5}
              stroke="#FFFFFF"
            ></path>
          </svg>
          <p>Close</p>
        </div>
      </button>

      <Link to="/">
        <img src={logo} alt="Lofticore Logo" className="-mt-16 w-[60.888px]" />
      </Link>

      {/* Search Input and Heading */}
      <div className="mt-10 text-center w-full max-w-xl px-4">
        {/* <h2 className="text-4xl font-bold text-white mb-8">Search</h2> */}

        <div className="relative">
          <input
            type="text"
            placeholder="Type your search..."
            className="w-full px-6 py-2 text-lg bg-[#74847E] bg-opacity-10  rounded-4xl text-white placeholder-gray-300 focus:outline-none  focus:ring-1 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
          />
          {/* Search Icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-6 top-1/2 transform -translate-y-1/2 text-white opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-6 top-1/2 transform -translate-y-1/2 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        <hr className="mt-10 text-gray-300" />
      </div>
    </div>
  );
};

export default SearchOverlay;
