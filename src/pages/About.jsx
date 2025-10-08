import React from 'react'
import { motion } from "framer-motion";
import aboutImg from '../assets/about-us.jpg';
import aboutUsImg1 from "../assets/Image/about-img.jpg";
import Accourdian from '../components/Accourdian';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
// import TestimonialSlider from '../components/TestimonialSlider';




const About = () => {
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
 
     <h1 className="text-4xl md:text-3xl font-bold mb-4 text-white">About Us</h1>
   </div>
 </section>

<section className="w-full py-10 bg-gray-50 overflow-hidden">
  
<div className="container mx-auto p-4">

   <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Text Column (60%) */}
     
     {/* Image Column (40%) */}
      <motion.div
  className="w-full md:w-3/5 rounded-xl overflow-hidden shadow-[ -1px_-4px_9px_#2a4e9f61] p-0"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: false, amount: 0.3 }}
>
  {/* ✅ Responsive Aspect Ratio Wrapper */}
  <div className="relative w-full pt-[56.25%]"> {/* 16:9 ratio → (9/16 * 100)% = 56.25% */}
    <iframe
      src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="About Arham Entertainment"
    ></iframe>
  </div>
</motion.div>
  
  
      <div className="p-6 w-full md:w-2/5">
        <motion.h2
       className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] leading-tight mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
         About <br></br>Arham Entertainment
        </motion.h2>
  
        <motion.p
          className="text-sm sm:text-base md:text-lg text-black mb-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque
          maiores corrupti laborum minima recusandae necessitatibus iusto fugit,
          ab, error mollitia quo neque accusamus.
        </motion.p>
  
        <motion.div
          className="button mt-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
            <Link to="/about">Learn More</Link>
          </div>
        </motion.div>
      </div>
  
      
    </div>

  <div className="flex flex-col-reverse md:flex-row gap-4">
    
    {/* Text Column (60%) */}
    <div className="p-6 w-full md:w-3/5">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We Are Increasing Business Success With Technology
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-black mb-4"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque
        maiores corrupti laborum minima recusandae necessitatibus iusto fugit,
        ab, error mollitia quo neque accusamus.
      </motion.p>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-black"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Labore magnam perspiciatis rerum ipsam velit? Quisquam distinctio,
        dolorem pariatur repellendus laboriosam.
      </motion.p>

      <motion.div
        className="button mt-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
          <Link to="/about">Learn More</Link>
        </div>
      </motion.div>
    </div>

    {/* Image Column (40%) */}
    <motion.div
      className="md:w-2/5 shadow-lg rounded-xl p-6"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <img
        src={aboutUsImg1}
        alt="About Us"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
      />
    </motion.div>
  </div>
</div>
  <Services />
  
</section>
<Testimonial />





</>
  )
}

export default About