import React from "react";
import { motion } from "framer-motion";


import ServiceSlider from "./ServiceSlider.jsx";
const Services = () => {
  return (
    <>



<div className="container mx-auto w-full px-10 overflow-hidden">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    What We Do
  </motion.h2>

  <ServiceSlider />
</div>

</>


  );
};

export default Services;
