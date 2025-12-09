import React from "react";
import About from "./About";
import ComingSoon from "./ComingSoon";
import HomeSlider from "../components/HomeSlider";
import aboutUsImg1 from "../assets/about-pic1.jpg";
// import Button from "@mui/material/Button";
// import { LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import ClientSlider from "../components/ClientSlider";
// import Services from "../components/Services";
import { motion } from "framer-motion";
import Testing from "../components/Testing";

const Home = () => {
  return (
    <>
      <section className="home-page">
        <div className="slider-section ">
          <HomeSlider />
        </div>
      </section>
      <section className="w-full py-10 bg-gray-10 overflow-hidden">
        {/* About us */}
        <div className="container mx-auto p-4">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Text Column (60%) */}
            <div className="p-6 w-full md:w-3/5">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                We Are Increasing Business Success With Technology
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-black mb-4"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                doloremque maiores corrupti laborum minima recusandae
                necessitatibus iusto fugit, ab, error mollitia quo neque
                accusamus.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-black"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Labore magnam perspiciatis rerum ipsam velit? Quisquam
                distinctio, dolorem pariatur repellendus laboriosam.
              </motion.p>

              <motion.div
                className="button mt-5"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
                  <Link to="/about">Learn More</Link>
                </div>
              </motion.div>
            </div>

            {/* Image Column (40%) Zoom + Move Slightly Up (Parallax feel) */}
            <motion.div
              className="md:w-2/5 shadow-lg rounded-xl p-4 overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={aboutUsImg1}
                alt="About Us"
                className="w-full h-[250px] sm:h-[300px] md:h-[600px] object-cover rounded-lg transition-transform duration-700 ease-in-out hover:scale-110 hover:-translate-y-2"
              />
            </motion.div>
          </div>

          {/* End About */}
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* 📝 Text Column (Left on desktop, bottom on mobile) */}
            <div className="w-full md:w-3/5 p-4 md:p-6">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] leading-tight mb-5 text-center md:text-left"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Arham Entertainment
              </motion.h2>
              <motion.div
                className="text-sm sm:text-base md:text-[15px] mb-2 text-center md:text-left space-y-4 text-blue-900"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="mt-2 text-[16px]">
                  We are an brand partners offering integrated advertising, high
                  end content production and 360 degree marketing and branding
                  solutions tailored to niche markets.
                </p>
                <p className="mt-2 text-[16px]">
                  Blending classic strategy with contemporary creativity, we
                  specialise in end 2 end brand building though content
                  creation, identity design, and Digital campaigns to media
                  planning, experiential marketing and performance analytics.
                </p>
                <p className="mt-2 text-[16px]">
                  Our in-house production capabilities and cross platform
                  expertise ensure seamless execution and storytelling as our
                  strength lies in crafting cohesive brand stories,ensuring
                  consistency,impact and connection across every touch point-
                </p>
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start mt-5"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Link
                  to="/about"
                  className="inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg uppercase font-semibold transition-all duration-300"
                >
                  Our Journey
                </Link>
              </motion.div>
            </div>

            {/* 🎥 Video Column */}
            <motion.div
              className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-[ -1px_-4px_9px_#2a4e9f61]"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative w-full pt-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="About Video"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
        {/* services */}

        {/* <div class="container mx-auto p-4">
     <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          What We Do

        </motion.h2>
  <div class="flex flex-col sm:flex-col md:flex-row gap-4">
    <div class="flex-1 p-6">

    
    </div>
 

   
  </div>
  
  </div> */}
        {/* <Services /> */}
        <Testing />
         {/* <ClientSlider /> */}
        {/* <div className="container mx-auto w-full px-10 overflow-hidden">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-[#193568] leading-tight mb-5"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
   Clients
  </motion.h2>

  <ClientSlider />
</div> */}
      </section>

      {/* <ComingSoon /> */}
    </>
  );
};

export default Home;
