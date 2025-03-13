import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lofticore-logo.png";
import SearchOverlay from "./SearchOverlay";
import Navbar from "./HeaderNavbar";
import CartNavbar from "./CartNavbar";


const Header = () => {
  // State to determine if the header should shrink
  const [isScrolled, setIsScrolled] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  // shrink header
  useEffect(() => {
    // Handler to update the header state based on the scroll position
    const handleScroll = () => {
      // Change the threshold (e.g., 100) to trigger the shrink effect sooner/later
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler to open the search overlay
  const openSearch = () => {
    setIsSearchOpen(true);
  };

  // Handler to close the search overlay
  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  // Toggle function
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Toggle function
  const toggleCartMenu = () => {
    setIsCartMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/*  The header is fixed at the top using fixed positioning. The transition classes create a smooth shrinking effect. */}
      <header
        className={`
        fixed top-0 left-0 w-full z-50 bg-[#485D56] flex justify-between items-center 
        px-20 transition-all duration-300 ${
          isScrolled ? "py-2 shadow-md" : "py-4"
        }
      `}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Lofticore Logo"
            className={`
            transition-all duration-300 ${
              isScrolled ? "w-[80px]" : "w-[110.888px]"
            }
          `}
          />
        </Link>

        {/* Icon Section */}
        <div className="flex gap-20">
          {/* Cart icon */}
          <div className="relative group" onClick={toggleCartMenu}>
            {/* <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white transition-colors duration-300 hover:border-transparent"> */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-[#FFFFFF] hover:text-[#E3B873] border-[#FFFFFF] hover:border-[#E3B873] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="10" cy="19" r="1.5" />
                  <circle cx="17" cy="19" r="1.5" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 4h2l3.504 11H17"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-1.5 py-0.5">
              3
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
              Cart
            </div>
          </div>
          {/* Render the cart navbar component and pass isMenuOpen and toggleMenu */}
          <CartNavbar isOpen={isCartMenuOpen} toggleMenu={toggleCartMenu} />

          {/* Cart Icon */}
          {/* <div className="relative group">
            <Link
              to="/cart"
              className="font-light text-[#FFFFFF] hover:text-[#E3B873]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FFFFFF] hover:border-[#E3B873] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="10" cy="19" r="1.5" />
                    <circle cx="17" cy="19" r="1.5" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.5 4h2l3.504 11H17"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"
                    />
                  </g>
                </svg>
              </div>
            </Link>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-1.5 py-0.5">
              3
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
              Cart
            </div>
          </div> */}

          {/* Favorite Icon */}
          <div className="relative group">
            <Link
              to="/favourite"
              className="font-light text-[#FFFFFF] hover:text-[#E3B873]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FFFFFF] hover:border-[#E3B873] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M40.77 11.333a10.23 10.23 0 0 1 0 14.438L25 41.667L9.23 25.77a10.229 10.229 0 0 1 7.166-17.438a10.2 10.2 0 0 1 7.166 3A9.3 9.3 0 0 1 25 13.167a9.3 9.3 0 0 1 1.438-1.834a10.06 10.06 0 0 1 14.333 0"
                  />
                </svg>
              </div>
            </Link>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-1.5 py-0.5">
              5
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
              Favorites
            </div>
          </div>

          {/* Search Icon */}
          {/* Instead of a Link, we use an onClick to open the search overlay */}
          <div className="relative group" onClick={openSearch}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white hover:border-[#E3B873] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                className="fill-current text-white group-hover:text-[#E3B873] transition-colors duration-300"
                stroke="currentColor"
              >
                <path
                  d="M10.397 3a7.397 7.397 0 1 0 0 14.795a7.397 7.397 0 0 0 0-14.795m-6.41 7.397a6.411 6.411 0 1 1 12.821 0a6.411 6.411 0 0 1-12.822 0"
                  strokeWidth="0.5"
                />
                <path
                  d="M16.838 15.792a.74.74 0 1 0-1.046 1.046l3.945 3.945a.74.74 0 1 0 1.046-1.046z"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
              Search
            </div>
          </div>

          {/* navbar icon */}
          <div className="relative group" onClick={toggleMenu}>
            {/* <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white transition-colors duration-300 hover:border-transparent"> */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white group-hover:text-[#E3B873] transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded">
              Menu
            </div>
          </div>

          {/* Render the Menu component and pass isMenuOpen and toggleMenu */}
          <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </header>
      {/* Render the full-screen SearchOverlay if isSearchOpen is true */}
      {isSearchOpen && <SearchOverlay onClose={closeSearch} />}
    </>
  );
};

export default Header;
