import React from "react";
import aboutImg from '../assets/about-us.jpg';
import ClientSlider from "../components/ClientSlider";
import GridColumn from "../components/GridColumn";




function Client() {

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
       
           <h1 className="text-4xl md:text-3xl font-bold mb-4 text-white"> Client</h1>
         </div>
       </section>


 <section className="w-full py-10 ">
      <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 uppercase text-gray-800">
      Clients
    </h2>

    <ClientSlider />
  </div>
</section>
     {/* <GridColumn /> */}
   </>
  );
}

export default Client;
