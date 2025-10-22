import React from 'react'
import { Link, Links } from 'react-router-dom'
import { FaSquareFacebook, FaSquareWhatsapp , FaLinkedin, FaSquareInstagram, FaSquareXTwitter   } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <>
   <footer className="mt-12 border-t border-gray-200 bg-[#05051e]">
  <div className="mx-auto w-full max-w-screen-xl p-5 lg:p-8">
    {/* ✅ Responsive Grid */}
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    initial={{ y: 50, opacity: 0 }}         
  whileInView={{ y: 0, opacity: 1 }}       
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}  
    
    >
      {/* Column 1 - Logo + Social */}
      <div>
       
        <Link to="/" className="flex items-center gap-2">
          <img
                  src="/w-logo.png"
            alt="Arham Entertainment Logo"
            className="h-15 md:h-20 w-auto"
          />
        </Link>
        <div className="social-icons flex space-x-2 mt-4 text-3xl">
           <Link to='https://www.behance.net/7f9823c5' target='_blank'>
    <img
      src="/Follow-logo.png"
      alt="Arham Entertainment Logo"
      className="h-5 md:h-7 w-auto mb-2 rounded"
    />
  </Link>
          <Link to="#" target="_blank">
            <FaSquareXTwitter className="text-white hover:text-[#1DA1F2] text-3xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaSquareFacebook className="text-[#1877F2] hover:text-[#0c5b9a] text-3xl" />
          </Link>
          <Link to="#" target="_blank">
            <FaLinkedin className="text-[#0077B5] hover:text-[#005582] text-3xl" />
          </Link>
          <Link to="https://www.instagram.com/arham_ent/?igsh=MXFnbGkxNTl5ZjhkNA%3D%3D&utm_source=qr#" target="_blank">
            <FaSquareInstagram className="text-[#C13584] hover:text-[#a32b6d] text-3xl" />
          </Link>
          <div className="flex items-center gap-2">
  <a
    href="https://wa.me/917483410586"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaSquareWhatsapp className="text-green-500 text-3xl hover:text-indigo-500 mt-[-6px]" />
  </a>
  {/* <span className="text-white">WhatsApp</span> */}
</div>

          {/* <li className="flex gap-2 items-center">
      <FaWhatsapp className="text-green-500 text-lg" />
      <a
        href="https://wa.me/917483410586"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-indigo-500"
      >
      
      </a>
    </li> */}
        </div>
      </div>

      {/* Column 2 - Work (Blue Box) */}
      {/* Column 2 - Work (Blue Box) */}
<div className="bg-[#4f39f600] p-4 rounded-xl shadow-sm relative">
  <div className="absolute top-0 left-0 w-16 h-1 bg-white rounded-tr-xl rounded-bl-xl"></div>
  <h2 className="mt-3 mb-4 text-md font-semibold text-white uppercase">
    Work
  </h2>
  <ul className="text-white text-sm space-y-2">
    {[
      "Creative Direction",
      "Branding",
      "Social Media",
      "Videos",
      "Ai Studio",
    ].map((item) => (
      <li key={item}>
        <Link
          to="#"
          className="hover:underline flex items-center gap-2 hover:text-indigo-500"
        >
          <MdKeyboardArrowRight /> {item}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* Column 3 - Contact (Green Box) */}
<div className="bg-[#4f39f600] p-4 rounded-xl shadow-sm relative">
  <div className="absolute top-0 left-0 w-16 h-1 bg-green-500 rounded-tr-xl rounded-bl-xl"></div>
  <h2 className="mt-3 mb-4 text-md font-semibold text-white uppercase">
    Head Office
  </h2>
  
  <ul className="text-white space-y-3 text-sm">
    <li className="flex gap-2">
      <ImLocation2 className="text-lg flex-shrink-0 mt-1" />
      <span>
        24, Innov8, Solitaire Corporate Park, Chakala, Andheri East,
        Mumbai, Maharashtra 400093
      </span>
    </li>
    <li className="flex gap-2 items-center">
      <FaPhoneAlt className="text-sm" />
      <Link
        to="tel:+919999466688"
        className="hover:underline hover:text-indigo-500"
      >
        +91-9999466688
      </Link>
    </li>
    <li className="flex gap-2 items-center">
      <FaWhatsapp className="text-green-500 text-lg" />
      <a
        href="https://wa.me/917483410586"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline hover:text-indigo-500"
      >
        +91-7483410586
      </a>
    </li>
    <li className="flex gap-2 items-center">
      <MdOutlineEmail className="text-sm" />
      <Link
        to="mailto:bd@arhamentertainment.com"
        className="hover:underline hover:text-indigo-500"
      >
        bd@arhamentertainment.com
      </Link>
    </li>
  </ul>
</div>

    </motion.div>

    {/* Divider */}
    <hr className="my-6 border-gray-300 lg:my-8" />

    {/* Bottom Bar */}
    <div className="flex flex-row flex-wrap items-center justify-center sm:justify-between text-white text-sm">
      <span className="mb-2 sm:mb-0 text-center sm:text-left">
        © 2025{" "}
        <Link to="https://arhamentertainment.com/" className="hover:underline">
          Arham Entertainment
        </Link>
        . All Rights Reserved.
      </span>

      <ul className="flex space-x-5">
        <li>
          <Link to="#" className="hover:underline hover:text-indigo-500">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline hover:text-indigo-500">
            Terms &amp; Conditions
          </Link>
        </li>
      </ul>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer