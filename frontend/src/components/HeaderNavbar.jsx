import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0"
          onClick={toggleMenu}
        ></div>
      )} */}
      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={toggleMenu}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)", // for Safari
          }}
        ></div>
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="pt-20 fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-10 z-50"
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <X size={20} className="mt-7 mr-10 cursor-pointer" />
        </button>
        <ul className="mt-10 space-y-4 text-lg">
          <li className="group">
            <Link
              to="/profile"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-2xl"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Profile
            </Link>
          </li>
          <li className="group">
            <Link
              to="/wishlist"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-2xl"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Wishlist
            </Link>
          </li>
          <li className="group">
            <Link
              to="/orders"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-2xl"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Orders
            </Link>
          </li>
          <li className="group">
            <Link
              to="/wallet"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-2xl"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Wallet
            </Link>
          </li>
        </ul>

        <hr className="mt-28 text-gray-400" />

        <ul className="mt-10 space-y-4 text-lg">
          <li className="group">
            <Link
              to="/"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-lg"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              to="/about"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-lg"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              About us
            </Link>
          </li>
          <li className="group">
            <Link
              to="/contacts"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-lg"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Contacts
            </Link>
          </li>
          <li className="group">
            <Link
              to="/privacy-policy"
              onClick={toggleMenu}
              className="flex items-center cursor-pointer font-serif text-lg"
            >
              <span className="mr-3 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                •
              </span>
              Privacy & policy
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
