import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import forigenLocating from "../Data/Forigen-Locating.js";
import UpCommingLocation from "../components/UpCommingLocation";
import aboutImg from '../assets/about-us.jpg';
import { motion } from "framer-motion";




const Contact = ({ cities }) => {
  const [activeCity, setActiveCity] = useState(null);

  return (

<>
   <section
  className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
  style={{
    backgroundImage: `url(${aboutImg})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>

    <div className="w-full max-w-6xl mx-auto py-10 px-4">

    <h1 className="text-4xl md:text-3xl font-bold mb-4 text-white">Connect Us</h1>
  </div>
</section>
<motion.div className="container mx-auto px-4 py-10"
initial={{ y: -50, opacity: 0 }}   // 👈 upar se aayega
  whileInView={{ y: 0, opacity: 1 }} // final position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}>


    <h2 className="flex text-3xl font-bold mb-6 items-center justify-center text-[#193568] ">India Location</h2>
  {/* Cities Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
     
     >
  {cities.map((city) => (
    <div
      key={city.name}
      onClick={() =>
        setActiveCity(activeCity === city.name ? null : city.name)
      }
      className={`cursor-pointer flex flex-col items-center justify-center p-6 border rounded-lg transition bg-[#193568] ${
        activeCity === city.name
          ? "bg-[#0000ff] border-white"
          : "border-bg-indigo-600 hover:bg-indigo-600"
      }`}
    >
      <div className="text-3xl mb-2">
        <img src={city.icon} alt={city.name} className="w-25 h-25" />
      </div>
      <p className="font-semibold text-white">{city.name}</p>
      <div className="icons mt-4 text-2xl animate-bounce duration-500 text-white">
        <FaAnglesDown />
      </div>

      {/* 👇 Mobile/Tablet me wahi card ke andar detail box show hoga */}
      {activeCity === city.name && (
        <div className="mt-4 bg-[#193568] p-3 rounded-lg w-full text-white block md:hidden">
          <h2 className="text-xl font-bold mb-2">{city.name}</h2>
         <p className="mb-2 flex items-center gap-2">
  <CiLocationOn className="text-[20px] shrink-0" />
  <span>{cities.find((c) => c.name === activeCity)?.address}</span>
</p>
          <ul className="space-y-1">
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="text-xl" />
              <a
                href={`tel:${city.phone}`}
                className="text-white hover:underline"
              >
                {city.phone}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <MdOutlineEmail className="text-xl" />
              <a
                href={`mailto:${city.email}`}
                className="text-white hover:underline"
              >
                {city.email}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

{/* 👇 Desktop me alag se detail box show hoga */}
{activeCity && (
  <motion.div className="hidden md:block mt-6 bg-[#193568] p-3 rounded-lg w-full text-white border-t-2 
  border-[#fff]" 
  initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
  
  >
    <h2 className="text-2xl font-bold mb-4">{activeCity}</h2>
    <p className="mb-2 flex gap-2">
      <CiLocationOn className="text-xl" />
      {cities.find((c) => c.name === activeCity)?.address}
    </p>
    <ul className="space-y-1">
      <li className="flex gap-2 items-center">
        <FaPhoneAlt className="text-xl" />
        <a
          href={`tel:${cities.find((c) => c.name === activeCity)?.phone}`}
          className="text-white hover:underline"
        >
          {cities.find((c) => c.name === activeCity)?.phone}
        </a>
      </li>
      <li className="flex gap-2 items-center">
        <MdOutlineEmail className="text-xl" />
        <a
          href={`mailto:${cities.find((c) => c.name === activeCity)?.email}`}
          className="text-white hover:underline"
        >
          {cities.find((c) => c.name === activeCity)?.email}
        </a>
      </li>
    </ul>
  </motion.div>
)}

</motion.div>

<UpCommingLocation forigenLocating={forigenLocating} />

{/* <div className="conatainer">
  <h2>Get In Touch</h2>
</div> */}

 <div className="container mx-auto w-full px-10 overflow-hidden">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[35px] font-bold text-[#193568] leading-tight mb-5"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
   Leave us your details and a member of our team will get back to you as soon as possible.


  </motion.h2>




</div>

 <div className="container mx-auto p-4 overflow-hidden">
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* Left Column - Form */}
    <motion.div className="flex-1 bg-[#193568] text-white p-6 rounded-lg shadow-lg"
    
     initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    
    >
       <form  className="max-w-sm mx-auto">
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Enter Your Name
        </label>
        <input
          type="text"
          name="user_name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Enter Your Email
        </label>
        <input
          type="email"
          name="user_email"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Your Phone Number
        </label>
        <input
          type="text"
          name="user_phone"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Number"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Your Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
      >
        Submit
      </button>
    </form>
    </motion.div>

    {/* Right Column - Map */}
    <motion.div className="flex-1 p-6 rounded-lg shadow-lg"
     initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60318.26429471261!2d72.81990028440067!3d19.112414419314913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7c97dbe16800d%3A0x216c8f5250867f51!2s7th%20Floor%2C%20Building%20No.11%2C%20Innov8%20%7C%20Coworking%20Space%20in%20Solitaire%20Corporate%20Park%2C%20Andheri%20East%2C%20Mumbai%2C%20Solitaire%20corporate%20park%2C%20Solitaire%20Corporate%20Park%201%2C%20Chakala%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!3m2!1d19.1123379!2d72.86110029999999!4m5!1s0x3be7c97dbe16800d%3A0x216c8f5250867f51!2s7th%20Floor%2C%20Building%20No.11%2C%20Solitaire%20corporate%20park%2C%20Chakala%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!3m2!1d19.1123379!2d72.86110029999999!5e0!3m2!1sen!2sin!4v1759597934284!5m2!1sen!2sin"
        className="w-full h-[450px] rounded-lg border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>

  </div>
</div>



</>

  
  );
}

export default Contact