import React, { useState } from 'react'
import { motion } from "framer-motion";
import aboutImg from '../assets/about-us.jpg';
import c1 from "../assets/serv-img/c1.jpg";

import CreativeData from "../Data/CreativeData.js";


const CreativeDesign = () => {
 const [visibleCount, setVisibleCount] = useState(2);

  const handleToggle = () => {
    setVisibleCount((prev) =>
      prev >= CreativeData.length ? 2 : CreativeData.length
    );
  };
  
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
 
     <h1 className="text-4xl md:text-3xl font-bold mb-4 text-white">Creaative Direction</h1>
   </div>
 </section>

<section className="w-full py-10 bg-gray-50 overflow-hidden">
  
      <div className="container mx-auto px-4 space-y-10 sm:space-y-12 md:space-y-16">

  {CreativeData.slice(0, visibleCount).map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse md:flex-row gap-4 sm:gap-6 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Column */}
            <div className="p-4 sm:p-6 w-full md:w-3/5">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] leading-tight mb-4"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {item.title}
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-black mb-3"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {item.description}
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-black"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {item.extra}
              </motion.p>
            </div>

            {/* Media Column */}
            <motion.div
              className="w-full md:w-2/5 shadow-lg rounded-xl p-3 sm:p-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {item.type === "video" ? (
                <div className="relative w-full overflow-hidden rounded-lg aspect-video">
                  <iframe
                    src={item.src}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
                />
              )}
            </motion.div>
          </div>
        ))}

        {/* Read More / Show Less Button */}
        <div className="text-center mt-6 sm:mt-10">
          <motion.button
            onClick={handleToggle}
            className="px-8 py-3 bg-[#193568] hover:bg-blue-800 text-white font-semibold rounded-full shadow-md transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {visibleCount >= CreativeData.length ? "Show Less" : "Read More"}
          </motion.button>
        </div>
</div>  
</section>


   
   </>
  )
}

export default CreativeDesign