import React from 'react'
import { motion } from "framer-motion";


const About = () => {
  return (
  <>
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Our Agency
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        We are a creative advertising agency passionate about building strong
        brands. Our team combines innovation, design, and technology to craft
        campaigns that resonate with your audience.
      </motion.p>
    </div>

</>
  )
}

export default About