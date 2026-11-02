import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
const Reanders = () => {
  // const aistudioData = workData.filter(
  //   (item) => item.category === "Aistudio"
  // );

  return (
    <>
    <section
            className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
            style={{ backgroundImage: `url(${aboutImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
            <div className="w-full max-w-6xl mx-auto py-10 px-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Renders (3D)
              </h1>
            </div>
          </section>
    <div className="bg-[#516ee5] py-12">

     <div className="w-[70%] mx-auto py-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {/* Left Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[110px] cursor-pointer text-center bg-[#05051fa6]">
      <Link to="/work/renders/interactive-videos">
      <h2 className="text-2xl text-white font-bold mb-4">360°</h2>

      <p className="text-white">
       Interactive Videos
      </p>
      </Link>
    </div>

    {/* Right Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[100px] cursor-pointer text-center bg-[#05051fa6]">
     <Link to="/work/renders/renders-stills">
      <h2 className="text-2xl text-white font-bold mb-4">Stills</h2>

      <p className="text-white">
        Renders and Isometric
      </p>
      </Link>
    </div>


     <div className="rounded-2xl p-8 shadow-lg min-h-[100px] cursor-pointer text-center bg-[#05051fa6]">
     <Link to="/work/renders/renders-walkthrough">
      <h2 className="text-2xl text-white font-bold mb-4">Walkthrough</h2>
      <p className="text-white">
        Videos and Renders
      </p>
      </Link>
    </div>
  </div>
</div>

    </div>
    </>
  );
};

export default Reanders;
