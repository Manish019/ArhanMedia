import React from 'react'
import aboutImg from '../assets/about-us.jpg';


const Team = ({teamMembers}) => {
  return (
   <>
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${aboutImg})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
    
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
    
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Team</h1>
      </div>
    </section>

  <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase">Our Team</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div className="innerbox border-1 border-gray-50">
            <div
            key={index}
                className="w-64 h-64 bg-white hover:bg-[#193568] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full border-4 border-gray-200 flex flex-col items-center justify-center text-center mx-auto"

          >
            <img
              src={member.img}
              alt={member.name}
              className="w-50 h-65 object-cover mb-4"
            />
           <div className="textinner bg-[#193568] px-5 py-2 text-center rounded-md">
  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
  <p className="text-white">{member.role}</p>
</div>

          </div>
          </div>
        ))}
      </div>
    </div>

   
   </>
  )
}

export default Team