// components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logo/pillars.svg";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full z-[999] px-14 py-18 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-12 md:w-14 cursor-pointer" />
      </Link>

      {/* Menu */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-[#D9D9D94D] px-[15px] lg:px-[29px] py-[10px] lg:py-[20px] rounded-2xl cursor-pointer z-999"
        >
          <RiMenu2Line className="text-2xl text-white" />
        </button>

        {/* Normal Dropdown */}
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md border shadow-md">
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-black font-semibold  rounded-md hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              to="/coach"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-black font-semibold rounded-md hover:bg-gray-100"
            >
              Coach
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
