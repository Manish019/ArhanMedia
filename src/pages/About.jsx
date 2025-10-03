import React from 'react'
import { motion } from "framer-motion";
import aboutImg from '../assets/about-us.jpg';
import aboutUsImg1 from "../assets/Image/about-img.jpg";
import Accourdian from '../components/Accourdian';
import Services from '../components/Services';




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
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="md:w-3/5 bg-white shadow-lg rounded-xl p-6 mb-4">
        <h2 className="text-[55px] font-bold text-[#193568] mb-4 leading-tight">
          We Are Increasing Business Success With Technology
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque
          maiores corrupti laborum minima recusandae necessitatibus iusto fugit,
          ab, error mollitia quo neque accusamus. Labore magnam perspiciatis
          rerum ipsam velit?
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 shadow-lg rounded-xl p-6">
        <img
          src={aboutUsImg1}
          alt="About Us"
          className="w-full h-[400px] rounded-lg object-cover"
        />
      </div>
    </div>

    {/* What We Do Section */}
    <div className="mt-12">
      <h2 className="text-[55px] font-bold text-[#193568] mb-6 leading-tight text-center md:text-left">
        What We Do
      </h2>
      <Services />
    </div>

    {/* Accordion Section */}
 <div className="mt-12">
      <h2 className="text-[55px] font-bold text-[#193568] mb-6 leading-tight text-center md:text-left">
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