import React from 'react'
import aboutImg from '../assets/about-us.jpg';
import TeamsOrbite from '../components/TeamsOrbite';


const Team = () => {

  return (
   <>
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center h-[300px]"
      style={{
        backgroundImage: `url(${aboutImg})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
    
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
    
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Team</h1>
      </div>
      
    </section>

   <TeamsOrbite />




   
   </>
  )
}

export default Team