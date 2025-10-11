import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 
        w-[90%] bg-gray-50 backdrop-blur-md rounded-xl 
        transition-all duration-500 ease-in-out py-3 px-6
        ${isScrolled ? "top-0 shadow-black/40 shadow-xl bg-white" : "top-3 shadow-none"}`}
    >
      <div className="flex justify-between items-center  sm:px-0 lg:px-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2  cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="Logo" className="w-14" />
          <span className="flex flex-col font-bold leading-tight">
          <span className="text-lg bg-gradient-to-r from-[#03447a] via-[#1574c4] to-[#33abe7] text-transparent bg-clip-text tracking-wide">
          HappyFix
          </span>
          <span className="text-sm font-medium text-blue-950">We Fix, You Smile.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }
            >
              FAQ's
            </NavLink>
          </li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4 items-center">


          <button
  onClick={() => navigate("/contact")}
  className="cursor-pointer px-4 py-2 bg-gradient-to-r from-[#03447a] via-[#1574c4] to-[#33abe7] text-white rounded-md text-sm md:text-base hover:scale-102 transition-all ease-in-out duration-200 hover:shadow-lg hover:shadow-black/60 focus:outline-none active:scale-95"
  aria-label="Book Appointment"
>
  Book Appointment
</button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-md p-4 space-y-3 text-gray-700">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            About Us
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            FAQ's
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </NavLink>
          <button
            onClick={() => {
              navigate("/book");
              setMenuOpen(false);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
