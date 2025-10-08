// src/components/TeamsOrbite.jsx
import React from "react";
import t1 from "../assets/teams/t1.png";
import "./TeamOrbite.css";
import { motion } from "framer-motion";

const TeamsOrbite = () => {
  const innerOrbit = ["https://randomuser.me/api/portraits/men/32.jpg"];
  const middleOrbit = [
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg",
  ];
  const outerOrbit = [
    "https://randomuser.me/api/portraits/women/72.jpg",
    "https://randomuser.me/api/portraits/men/62.jpg",
    "https://randomuser.me/api/portraits/women/58.jpg",
    "https://randomuser.me/api/portraits/men/74.jpg",
    "https://randomuser.me/api/portraits/women/18.jpg",
  ];

  const renderOrbit = (images, radius) =>
    images.map((img, i) => {
      const angle = (i / images.length) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const size = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
      const fadeDelay = i === 0 ? 0 : Math.random() * 5;
      const pulseDelay = Math.random() * 4;

      return (
        <div
          key={i}
          className="absolute"
          style={{
            top: `calc(50% + ${y}px - ${size / 2}px)`,
            left: `calc(50% + ${x}px - ${size / 2}px)`,
            animationDelay: `${fadeDelay}s, ${pulseDelay}s`,
          }}
        >
          <img
            src={img}
            alt="orbit"
            className="rounded-full border-2 border-white shadow-md orbit-fade"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      );
    });

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] leading-tight mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Team
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-black"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloremque
            maiores corrupti laborum minima recusandae necessitatibus iusto fugit,
            ab, error mollitia quo neque accusamus.
          </motion.p>
        </div>

        {/* Right Orbit Section */}
        <div className="w-full md:w-[55%] flex justify-center overflow-hidden py-10">
          <motion.div
            className="relative aspect-square w-[260px] sm:w-[320px] md:w-[420px] lg:w-[500px] flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Center Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={t1}
                alt="center"
                className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border-4 border-white shadow-lg z-10"
              />
            </div>

           {/* Inner Orbit */}
<div className="orbit orbit-slow absolute inset-0 flex items-center justify-center">
  <div className="orbit-circle inner-orbit relative aspect-square">
    {renderOrbit(innerOrbit, 60)}
    <div className="orbit-border absolute inset-0 border border-gray-400 rounded-full opacity-40"></div>
  </div>
</div>

{/* Middle Orbit */}
<div className="orbit orbit-medium absolute inset-0 flex items-center justify-center">
  <div className="orbit-circle middle-orbit relative aspect-square">
    {renderOrbit(middleOrbit, 100)}
    <div className="orbit-border absolute inset-0 border border-gray-400 rounded-full opacity-40"></div>
  </div>
</div>

{/* Outer Orbit */}
<div className="orbit orbit-fast absolute inset-0 flex items-center justify-center">
  <div className="orbit-circle outer-orbit relative aspect-square">
    {renderOrbit(outerOrbit, 200)}
    <div className="orbit-border absolute inset-0 border border-gray-400 rounded-full opacity-40"></div>
  </div>
</div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamsOrbite;
