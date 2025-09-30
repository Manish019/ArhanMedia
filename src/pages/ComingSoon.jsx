import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const ComingSoon = () => {
 // Set launch date here
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 10); // आज से 7 दिन बाद

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Coming Soon
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        "Our new digital experience is coming soon" Stay tuned for our launch!
      </motion.p>

      {/* Dynamic Countdown */}
      <motion.div
        className="mt-8 flex space-x-6 text-center text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div>
          <span className="block text-5xl">{timeLeft.days}</span>
          Days
        </div>
        <div>
          <span className="block text-5xl">{timeLeft.hours}</span>
          Hours
        </div>
        <div>
          <span className="block text-5xl">{timeLeft.minutes}</span>
          Minutes
        </div>
        <div>
          <span className="block text-5xl">{timeLeft.seconds}</span>
          Seconds
        </div>
      </motion.div>

      {/* Email Notify Form */}
      <motion.form
        className="mt-10 flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Notify Me
        </button>
      </motion.form>
    </div>

  );
}

export default ComingSoon