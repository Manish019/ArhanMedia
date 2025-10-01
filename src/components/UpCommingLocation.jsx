import React, { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";



const UpCommingLocation = ({forigenLocating}) => {
  const [activeCity, setActiveCity] = useState(null);
  
  return (
    <>
   <div className="container mx-auto px-4 py-10">
       <h2 className="flex text-3xl font-bold mb-6 items-center justify-center uppercase ">India Location</h2>
     {/* forigenLocating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {forigenLocating.map((city) => (
       <div
         key={city.name}
         onClick={() =>
           setActiveCity(activeCity === city.name ? null : city.name)
         }
         className={`cursor-pointer flex flex-col items-center justify-center p-6 border rounded-lg transition bg-[#2c2c4d] ${
           activeCity === city.name
             ? "bg-[#0000ff] border-white"
             : "border-bg-indigo-600 hover:bg-indigo-600"
         }`}
       >
         <div className="text-3xl mb-2">
           <img src={city.icon} alt={city.name} className="w-25 h-25" />
         </div>
         <p className="font-semibold text-white">{city.name}</p>
         <div className="icons mt-4 text-2xl animate-bounce duration-500 text-white">
           <FaAnglesDown />
         </div>
   
         {/* 👇 Mobile/Tablet me wahi card ke andar detail box show hoga */}
         {activeCity === city.name && (
           <div className="mt-4 bg-[#2c2c4d] p-3 rounded-lg w-full text-white block md:hidden">
             <h2 className="text-xl font-bold mb-2">{city.name}</h2>
             <p className="mb-2 flex gap-2">
               <CiLocationOn className="text-xl" />
               {city.address}
             </p>
             <ul className="space-y-1">
               <li className="flex gap-2 items-center">
                 <FaPhoneAlt className="text-xl" />
                 <a
                   href={`tel:${city.phone}`}
                   className="text-white hover:underline"
                 >
                   {city.phone}
                 </a>
               </li>
               <li className="flex gap-2 items-center">
                 <MdOutlineEmail className="text-xl" />
                 <a
                   href={`mailto:${city.email}`}
                   className="text-white hover:underline"
                 >
                   {city.email}
                 </a>
               </li>
             </ul>
           </div>
         )}
       </div>
     ))}
   </div>
   
   {/* 👇 Desktop me alag se detail box show hoga */}
   {activeCity && (
     <div className="hidden md:block mt-6 bg-[#2c2c4d] p-3 rounded-lg w-full text-white border-t-2 
     border-[#fff]">
       <h2 className="text-2xl font-bold mb-4">{activeCity}</h2>
       <p className="mb-2 flex gap-2">
         <CiLocationOn className="text-xl" />
         {forigenLocating.find((c) => c.name === activeCity)?.address}
       </p>
       <ul className="space-y-1">
         <li className="flex gap-2 items-center">
           <FaPhoneAlt className="text-xl" />
           <a
             href={`tel:${forigenLocating.find((c) => c.name === activeCity)?.phone}`}
             className="text-white hover:underline"
           >
             {forigenLocating.find((c) => c.name === activeCity)?.phone}
           </a>
         </li>
         <li className="flex gap-2 items-center">
           <MdOutlineEmail className="text-xl" />
           <a
             href={`mailto:${forigenLocating.find((c) => c.name === activeCity)?.email}`}
             className="text-white hover:underline"
           >
             {forigenLocating.find((c) => c.name === activeCity)?.email}
           </a>
         </li>
       </ul>
     </div>
   )}
   
   </div>
    </>
  )
}

export default UpCommingLocation