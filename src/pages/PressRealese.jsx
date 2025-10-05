import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pressRelease from "../Data/pressReleases.js";
import React from "react";

const PressRealese = () => {
  
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
    
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">Press Release</h1>
      </div>
    </section>

  
<div classNameName="container mx-auto p-4 py-10">
   <div className="mx-auto sm:w-[90%] md:w-3/3 lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-10">
      {pressRelease.map((press) => (
        <div
          key={press.id}
          className="flex flex-col p-6 bg-white rounded-lg"
          style={{ boxShadow: "-1px -4px 9px #2a4e9f61" }} // Blue shadow
        >
          <div className="img-press mb-4">
            <img src={press.image} alt="press release" className="w-full h-auto rounded" />
          </div>

          <div className="flex items-center gap-x-4 text-xs mb-2">
            <time className="text-[#193568] font-bold">{press.date}</time>
            <p className="z-10 rounded-full font-medium text-[#1000ff] flex items-center">
              {press.category}
            </p>
          </div>

          <div className="grow">
            <h3 className="mt-3 text-lg font-semibold text-[#193568] hover:text-[#1000ff]">
              <Link to="#">{press.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-black line-clamp-3">{press.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
   
   </>
  )
}

export default PressRealese