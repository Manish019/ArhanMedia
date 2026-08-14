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
               The Journey
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-black mb-4"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Arham Entertainment is a dynamic production house and advertising agency initiated in 2022 with a vision to create impactful, innovative, and engaging visual content. Backed by the founder’s extensive experience of more than 10 years in creative production and direction, the company brings together creative thinking, strong storytelling, and professional execution to deliver memorable content across platforms.
              </motion.p>

              

              <motion.div
                className="button mt-5"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="mt-4 inline-block bg-[#193568] hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow hover:opacity-95 uppercase font-semibold text-center">
                  <Link to="/about">Our Journey</Link>
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
            <div className="w-full md:w-2/1 p-4 md:p-6">
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
                  Arham Entertainment is an integrated advertising agency and production house, initiated in 2022 with a vision to bring creative thinking, strategic brand solutions and seamless production under one roof. With the founder bringing over 10 years of experience in creative production and direction, Arham Entertainment combines strong creative vision with robust execution capabilities to create work that is distinctive, engaging and built around the needs of modern brands. From advertising and branded films to digital content and complete communication solutions, we partner with brands to turn ideas into impactful experiences.

                </p>
                <p className="mt-2 text-[16px]">
                  Our capabilities span the entire creative and production ecosystem—from creative direction, ideation, concept development, scripting and storyboarding to pre-production, location scouting and finalisation, casting, celebrity selection and endorsements, production design, photography production, shoot execution and complete post-production. We also specialise in content creation, branded content, social and digital campaigns, performance marketing and integrated marketing solutions across sectors. Our 24-member in-house team brings together expertise in creative direction, production, client servicing and execution, supported by professionals with experience at leading advertising agencies including Ogilvy and other reputed agencies. This allows us to seamlessly manage projects from the first idea through to final delivery.

                </p>
                <p className="mt-2 text-[16px]">
                  At Arham Entertainment, we constantly evolve with the changing landscape of communication and technology. Alongside traditional production, we embrace 3D rendering, CGI, visualisation and Ai studio with making videos and images emerging production technologies to create innovative and efficient visual experiences for brands. Whether it is a large-scale advertising film, a celebrity-led campaign, a product photography shoot, a digital-first content series, a performance-driven marketing campaign or a technology-led visual experience, we bring strategy, creativity, production and execution together. Our aim is simple,to take complete ownership of every project and deliver work that not only meets expectations but creates a lasting impact for our clients and their audiences.
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
            {/* <motion.div
              className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-[ -1px_-4px_9px_#2a4e9f61]"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="relative w-full pt-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                {/* <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="About Video"
                ></iframe>
              </div>
            </motion.div> */}
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
        {/* <Testing /> */}
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
