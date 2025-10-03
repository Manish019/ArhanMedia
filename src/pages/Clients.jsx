import React from "react";
import aboutImg from '../assets/about-us.jpg';
import ClientSlider from "../components/ClientSlider";

// Replace these with real imported images if you have them locally
// import bosch from "../assets/clients/bosch.png";
// import kathmandu from "../assets/clients/kathmandu.png";
// import kfc from "../assets/clients/kfc.png";
// import loreal from "../assets/clients/loreal.png";
// import pizzahut from "../assets/clients/pizzahut.png";

function Client() {

  return (
   <>
   <section
         className="relative bg-cover bg-center bg-no-repeat h-[200px] flex items-center"
         style={{
           backgroundImage: `url(${aboutImg})`,
         }}
       >
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
       
           <div className="w-full max-w-6xl mx-auto py-10 px-4">
       
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white"> Client</h1>
         </div>
       </section>


<section className="w-full py-10 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 uppercase text-gray-800">
      Clients
    </h2>

    <ClientSlider />
  </div>
</section>

     

   </>
  );
}

export default Client;
