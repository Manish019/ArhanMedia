import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { HiOutlineArrowUturnRight } from "react-icons/hi2";

import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Arhan-logo.svg"
            alt="Arham Entertainment Logo"
            className="h-13 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[18px] text-[#3b3e50]">
          <Link
            to="/"
            className="hover:text-indigo-600 font-bold uppercase"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none uppercase font-semibold"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div
                className="absolute left-0 mt-2 w-44 bg-white shadow-md"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <Link
                  to="/services/web"
                  className="text-[20px] border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Press Release
                </Link>
                <Link
                  to="/services/app"
                  className="text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Awards
                </Link>
              </div>
            )}
          </div>

          {/* Work Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-indigo-600 focus:outline-none uppercase font-semibold"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              Work <ChevronDown size={16} />
            </button>
            {workOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white shadow-md"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => setWorkOpen(false)}
              >
                <Link
                  to="/services/web"
                  className="border-b border-gray-500 text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Creative Direction
                </Link>
                <Link
                  to="/services/app"
                  className="border-b border-gray-500 text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Branding
                </Link>
                <Link
                  to="/services/marketing"
                  className="border-b border-gray-500 text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Social Media
                </Link>
                <Link
                  to="/services/marketing"
                  className="border-b border-gray-500 text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  Videos
                </Link>
                <Link
                  to="/services/marketing"
                  className="border-b border-gray-500 text-[20px] block px-4 py-2 hover:bg-indigo-600 hover:text-white"
                >
                  AI Studio
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/portfolio"
            className="hover:text-indigo-600 uppercase font-semibold"
          >
            Client
          </Link>

          <Link
            to="/contact"
            className="hidden md:block px-4 py-2 bg-indigo-600 text-white rounded-full shadow hover:opacity-95 uppercase font-semibold"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-6 pb-4 shadow-md fixed border-t border-gray-200 top-22 left-0 w-full z-40 mobile-menu ${
          mobileOpen ? "show" : ""
        }`}
      >
        {mobileOpen && (
          <>
            <Link
              to="/"
              className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Home
            </Link>

            {/* About Us collapsible */}
            <div className="border-b border-gray-500">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                About Us
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ${
                  aboutOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <Link
                  to="/services/creative-direction"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-light"
                >
                  Press Release
                </Link>
                <Link
                  to="/services/branding"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Awards
                </Link>
              </div>
            </div>

            {/* Work collapsible */}
            <div className="border-b border-gray-500">
              <button
                onClick={() => setWorkOpen(!workOpen)}
                className="flex items-center justify-between w-full py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                Work
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    workOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`ml-4 overflow-hidden transition-all duration-300 ${
                  workOpen ? "max-h-50" : "max-h-0"
                }`}
              >
                <Link
                  to="/services/creative-direction"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Creative Direction
                </Link>
                <Link
                  to="/services/branding"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Branding
                </Link>
                <Link
                  to="/services/social-media"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  Social Media
                </Link>
                <Link
                  to="/services/videos"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  Videos
                </Link>
                <Link
                  to="/services/ai-studio"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  AI Studio
                </Link>
              </div>
            </div>

            <Link
              to="/portfolio"
              className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Connect Us
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
