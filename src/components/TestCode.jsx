import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";
import './Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* ✅ Logo always left */}
        <Link to="/" className="text-lg font-bold">
          Arham Entertainment
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
    <Link to="/" className="hover:text-indigo-600">Home</Link>
    <Link to="/about" className="hover:text-indigo-600">About</Link>
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none">
        Services <ChevronDown size={16} />
      </button>
      <div className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md hidden group-hover:block group-focus-within:block">
        <Link to="/services/web" className="block px-4 py-2 hover:bg-indigo-50">Web Development</Link>
        <Link to="/services/app" className="block px-4 py-2 hover:bg-indigo-50">App Development</Link>
        <Link to="/services/marketing" className="block px-4 py-2 hover:bg-indigo-50">Digital Marketing</Link>
      </div>
    </div>
    <Link to="/portfolio" className="hover:text-indigo-600">Portfolio</Link>

    {/* ✅ Contact only on Desktop */}
    <Link
      to="/contact"
      className="hidden md:block px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:opacity-95"
    >
      Contact
    </Link>
  </nav>

        {/* ✅ Mobile Hamburger only */}
       <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="md:hidden z-50 relative"
  >
    {!mobileOpen ? (
      <Menu size={26} />
    ) : (
      <HiOutlineArrowUturnRight className="w-7 h-7 text-indigo-600" />
    )}
  </button>
</div>

      {/* ✅ Mobile Nav */}
{mobileOpen && (
  <div
  className="md:hidden bg-white px-6 pb-4 shadow-md fixed top-16 left-0 w-full z-40 animate-slideDown border-t border-gray-200"
>
  <Link
    to="/"
    className="block py-2 border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
  >
    Home
  </Link>

  <Link
    to="/about"
    className="block py-2 border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
  >
    About
  </Link>

  {/* Services collapsible */}
  <div className="border-b border-gray-200">
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="flex items-center justify-between w-full py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
    >
      Services
      <ChevronDown
        size={16}
        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`ml-4 overflow-hidden transition-all duration-300 ${
        servicesOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <Link
        to="/services/web"
        className="block py-2 border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
      >
        Web Development
      </Link>
      <Link
        to="/services/app"
        className="block py-2 border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
      >
        App Development
      </Link>
      <Link
        to="/services/marketing"
        className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
      >
        Digital Marketing
      </Link>
    </div>
  </div>

  <Link
    to="/portfolio"
    className="block py-2 border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
  >
    Portfolio
  </Link>

  {/* Contact button for mobile */}
  <Link
    to="/contact"
    className="block py-2 mt-3 bg-indigo-600 text-white text-center rounded-md shadow hover:bg-indigo-700 transition-colors"
  >
    Contact
  </Link>
</div>

)}
    </header>
  );
};

export default Navbar;
