import React, { useState } from 'react'
import { motion } from "framer-motion";
// import { EmailJSResponseStatus } from 'emailjs-com';

const Form = () => {

   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d43f7cc1-e01b-4366-9808-eb2e489b061f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
<>
 <motion.div className="flex-1 bg-[#193568] text-white p-6 rounded-lg shadow-lg"
    
     initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    
    >
       <form  className="max-w-sm mx-auto" onSubmit={onSubmit}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Enter Your Name
        </label>
        <input
          type="text"
          name="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Enter Your Email
        </label>
        <input
          type="email"
          name="email"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Your Phone Number
        </label>
        <input
          type="text"
          name="phone"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter Number"
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white">
          Your Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer mb-3"
      >
        Submit
      </button>
    </form>
    <span className='mt-5 px-5'>{result}</span>
    </motion.div>

</>

  )
}

export default Form