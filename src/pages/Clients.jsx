import React from "react";
import aboutImg from '../assets/about-us.jpg';
import ClientSlider from "../components/ClientSlider";
import GridColumn from "../components/GridColumn";
import Testimonial from './Testimonial';
import { motion } from "framer-motion";
import Testing from "../components/Testing";





function Client() {

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
       
           <h1 className="text-4xl md:text-3xl font-bold mb-4 text-white"> Client</h1>
         </div>
       </section>


 <section className="w-full py-10 ">
      <div className="max-w-6xl mx-auto px-4">
    <motion.h2 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-[45px] font-bold text-[#193568]  mb-5"
     initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
    
    >
     Our Partner
    </motion.h2>
    <ClientSlider />
  </div>

  {/* <Testimonial /> */}
  
 <Testing />
</section>
 

     {/* <GridColumn /> */}
   </>
  );
}

export default Client;
