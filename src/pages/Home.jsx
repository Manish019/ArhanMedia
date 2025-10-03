import React from 'react'
import About from './About'
import ComingSoon from './ComingSoon'
import HomeSlider from '../components/HomeSlider'
import aboutUsImg1 from "../assets/Image/about-img.jpg";
import Button from '@mui/material/Button';
import { LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ClientSlider from '../components/ClientSlider';
import Services from '../components/Services';
import { motion } from "framer-motion";



const Home = () => {
  return (
   <>
   <section className='home-page'>
     <div className="slider-section ">
      <HomeSlider />
    </div>
   </section>
   <section className="w-full py-10">
<div className="container mx-auto m-w-full px-4 ">
  <div className="max-w-6xl  flex flex-col md:flex-row gap-6 mb-2">
    
    {/* Left Section */}
    <div className="md:w-3/5 bg-white shadow-lg rounded-xl p-6 mb-4">
      <motion.h2 className="text-[55px] font-bold text-[#193568] leading-tight mb-5"
      initial={{ x: -100, opacity: 0 }}       // Start left (outside viewport)
  whileInView={{ x: 0, opacity: 1 }}      // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}  // Animate every time scroll into view
      
      >We Are Increasing Business Success With Technology</motion.h2>
      <motion.p className='text-black'
      
      initial={{ x: 100, opacity: 0 }}       // Start right (outside viewport)
  whileInView={{ x: 0, opacity: 1 }}     // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} // Animate every time scroll into view
      
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque maiores corrupti laborum minima recusandae necessitatibus iusto fugit, ab, error mollitia quo neque accusamus. Labore magnam perspiciatis rerum ipsam velit?</motion.p>
      <motion.p className='text-black'
      
      initial={{ x: 100, opacity: 0 }}       // Start right (outside viewport)
  whileInView={{ x: 0, opacity: 1 }}     // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} // Animate every time scroll into view
      
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque maiores corrupti laborum minima recusandae necessitatibus iusto fugit, ab, error mollitia quo neque accusamus. Labore magnam perspiciatis rerum ipsam velit?</motion.p>
 <motion.div className="button mt-5"
 initial={{ y: 50, opacity: 0 }}          // Start below
  whileInView={{ y: 0, opacity: 1 }}       // Animate up to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}  // Animate every time scroll into view
>
  <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
    <Link to="/about">Learn More</Link>
  </div>
</motion.div>

     
    </div>

    {/* Right Section */}
    <motion.div className="md:w-2/5 shadow-lg rounded-xl p-6"
    initial={{ x: 100, opacity: 0 }}       // Start right (outside viewport)
  whileInView={{ x: 0, opacity: 1 }}     // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} // Animate every time scroll into view
    
    >
      <img src={aboutUsImg1}  alt="About Us" className="w-full h-[400px] rounded-lg" />
    </motion.div>

  </div>
   <motion.div className="mt-12"
   initial={{ x: -100, opacity: 0 }}       // Start left (outside viewport)
  whileInView={{ x: 0, opacity: 1 }}      // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} 
   
   >
      <h2 className="text-[55px] font-bold text-[#193568] mb-2 leading-tight text-center md:text-left">
        What We Do
      </h2>
      <Services />
    </motion.div>

<motion.div className='clients px-2 pb-5'
  initial={{ y: -50, opacity: 0 }}          // Start 50px above
  whileInView={{ y: 0, opacity: 1 }}        // Slide down to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}   // Animate every time scroll into view
>

  <h2 className='text-[40px] text-[#193568] font-bold pb-5'>Clients</h2>
  <ClientSlider />

</motion.div>
  </div>
</section>


   {/* <ComingSoon /> */}
   </>
  )
}

export default Home