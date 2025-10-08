import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
// import { HiOutlineArrowUturnRight } from "react-icons/hi2";
import { HiArrowUturnLeft } from "react-icons/hi2";


import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

useEffect(() => {
  const handleResize = () => {
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);





  return (
    <div className="relative w-full overflow-x-hidden">

   <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
  <div className="max-w-8xl mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
  <img
    src={isScrolled ? "/Arhan-logo.svg" : "/w-logo.png"}
    alt="Arham Entertainment Logo"
    className="h-13 md:h-16 w-auto transition-all duration-300"
  />
</Link>

        {/* Desktop Navigation */}
          <nav
          className={`hidden md:flex items-center gap-10 sm:text-lg md:text-[14px] lg:text-[18px] xl:text-[20px]  transition-colors duration-300 ${
            isScrolled ? "text-[#193568]" : "text-white" 
          }`}
        >
          <Link
            to="/"
            className=" uppercase"
          >
            Home
          </Link>

          {/* About Dropdown */}
         {/* About Dropdown */}
<div
  className="nav-item relative group"
  onClick={() => {
    if (isTablet) setAboutOpen(!aboutOpen);
  }}
>
  <button
    className="flex items-center gap-1  uppercase "
  >
    About Us <ChevronDown size={16} />
  </button>

  <div
    className={`submenu absolute left-0 mt-2 w-44 shadow-md transition-all duration-300 text-[16px]
      ${isScrolled ? "bg-white" : "bg-[#193568]"}
      ${
        isTablet
          ? aboutOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      }`}
  >
    <Link
      to="/about/press-release"
      className="block px-4 py-2 border-b border-gray-500 hover:bg-indigo-600 hover:text-white"
    >
      Press Release
    </Link>
    <Link
      to="/about/team"
      className="block px-4 py-2 border-b border-gray-500 hover:bg-indigo-600 hover:text-white"
    >
      Our Teams
    </Link>
    <Link
      to="/about/award"
      className="block px-4 py-2 hover:bg-indigo-600 hover:text-white"
    >
      Awards
    </Link>
  </div>
</div>



         {/* Work Dropdown */}
<div
  className="relative group"
  onClick={() => {
    if (isTablet) setWorkOpen(!workOpen);
  }}
>
  <button className="flex items-center gap-1  focus:outline-none uppercase">
    Work <ChevronDown size={16} />
  </button>

  <div
    className={`submenu absolute left-0 mt-2 w-[220px] shadow-md transition-all duration-300 text-[16px]
      ${isScrolled ? "bg-white" : "bg-[#193568]"}
      ${
        isTablet
          ? workOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
      }`}
  >
    <Link
      to="/work/creative-design"
      className="border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600  hover:text-white"
    >
      Creative Direction
    </Link>
    <Link
      to="/services/app"
      className="border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600 hover:text-white"
    >
      Branding
    </Link>
    <Link
      to="/services/marketing"
      className="border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600 hover:text-white"
    >
      Social Media
    </Link>
    <Link
      to="/services/videos"
      className="border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600 hover:text-white"
    >
      Videos
    </Link>
    <Link
      to="/services/ai-studio"
      className="border-b border-gray-500 block px-4 py-2 hover:bg-indigo-600 hover:text-white"
    >
      AI Studio
    </Link>
  </div>
</div>


          <Link
            to="/clients"
            className=" uppercase"
          >
            Client
          </Link>

          <Link
            to="/connect-us"
                        className="hover:text-indigo-600 uppercase"

          >
            Connect us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        {/* <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden z-50 relative ${
        isScrolled ? "text-black" : "text-white"
      }`}>
          {!mobileOpen ? (
            <Menu size={26} />
          ) : (
            <HiArrowUturnLeft className="w-9 h-9 text-indigo-600" />
          )}
            
        </button> */}
        <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className={`md:hidden z-50 relative transition-colors duration-300 ${
    isScrolled ? "text-indigo-600" : "text-white"
  }`}
>
  {!mobileOpen ? (
    <Menu size={26} />
  ) : (
    <HiArrowUturnLeft
      className={`w-9 h-9 transition-colors duration-300 ${
        isScrolled ? "text-indigo-600" : "text-white"
      }`}
    />
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
                className="flex items-center justify-between w-full py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors "
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
                  to="/about/press-release"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-light"
                >
                  Press Release
                </Link>
                 <Link
                  to="/about/team"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-light"
                >
                 Our Teams
                </Link>
                <Link
                  to="/about/awards"
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
                  to="/work/creative-design"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Creative Direction
                </Link>
                <Link
                  to="/work/branding"
                  className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  Branding
                </Link>
                <Link
                  to="/work/social-media"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  Social Media
                </Link>
                <Link
                  to="/work/videos"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  Videos
                </Link>
                <Link
                  to="/work/ai-studio"
                  className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-500"
                >
                  AI Studio
                </Link>
              </div>
            </div>

            <Link
              to="/clients"
              className="block py-2 border-b border-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Clients
            </Link>
            <Link
              to="/connect-us"
              className="block py-2 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              Connect Us
            </Link>
          </>
        )}
      </div>
    </header>
    </div>
  );
};

export default Navbar;
