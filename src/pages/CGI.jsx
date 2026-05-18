import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


const CGI = () => {
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
    
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">CGI</h1>
      </div>
    </section>

  
<div classNameName="container mx-auto p-4 py-10">
   <div className="mx-auto sm:w-[90%] md:w-3/3 lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4 py-10">
      <LiteYouTubeEmbed
      id="cufPND78eXQ"
      title="Rick Astley - Never Gonna Give You Up"
    />

    <LiteYouTubeEmbed
      id="Tv62xVwGFus"
      title="Rick Astley - Never Gonna Give You Up"
    />
    <LiteYouTubeEmbed
      id="gOpcgggBvUs"
      title="Rick Astley - Never Gonna Give You Up"
    />
     <LiteYouTubeEmbed
      id="_Si0B4jjPDA"
      title="Rick Astley - Never Gonna Give You Up"
    />
     <LiteYouTubeEmbed
      id="cufPND78eXQ"
      title="Rick Astley - Never Gonna Give You Up"
    />
    

    </div>
    
  </div>
   
   </>
  )
}
export default CGI