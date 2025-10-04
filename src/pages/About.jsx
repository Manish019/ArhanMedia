import React from 'react'
import { motion } from "framer-motion";
import aboutImg from '../assets/about-us.jpg';
import aboutUsImg1 from "../assets/Image/about-img.jpg";
import Accourdian from '../components/Accourdian';
import Services from '../components/Services';
import { Link } from 'react-router-dom';




const About = () => {
  return (
  <>
  <section
   className="relative bg-cover bg-center bg-no-repeat h-[200px] flex items-center"
   style={{
     backgroundImage: `url(${aboutImg})`,
   }}
 >
   <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
 
     <div className="w-full max-w-6xl mx-auto py-10 px-4">
 
     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Us</h1>
   </div>
 </section>

<section className="w-full py-10 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Top Section: About */}
    <div className="max-w-6xl flex flex-col md:flex-row gap-6 mb-2">
      
      {/* Left Section */}
      <div className="w-full md:w-3/5 bg-white shadow-lg rounded-xl p-6 mb-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We Are Increasing Business Success With Technology
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-black mb-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque maiores corrupti laborum minima recusandae necessitatibus iusto fugit, ab, error mollitia quo neque accusamus.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-black"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Labore magnam perspiciatis rerum ipsam velit? Quisquam distinctio, dolorem pariatur repellendus laboriosam.
        </motion.p>

        <motion.div
          className="button mt-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
            <Link to="/about">Learn More</Link>
          </div>
        </motion.div>
      </div>
  
      {/* Right Section */}
      <motion.div
        className="w-full md:w-2/5 shadow-lg rounded-xl p-4 flex items-center justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src={aboutUsImg1}
          alt="About Us"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
        />
      </motion.div>
    </div>

    {/* What We Do Section */}
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] mb-6 leading-tight text-center md:text-left">
        What We Do
      </h2>
      <Services />
    </div>

    {/* Accordion Section */}
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] mb-6 leading-tight text-center md:text-left">
        Faq's
      </h2>
      <Accourdian />
    </div>
  </div>
</section>




</>
  )
}

export default About