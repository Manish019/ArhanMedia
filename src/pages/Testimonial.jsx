import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonialdata from "../Data/Client-Testimonial.js";
import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

const Testimonial = () => {
  return (
    <section className="w-full py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#193568] leading-tight mb-10"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Clients Testimonials
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // 📱 Mobile
            768: { slidesPerView: 1, spaceBetween: 20 }, // Tablet
            1024: { slidesPerView: 2, spaceBetween: 30 }, // 💻 Desktop
          }}
        >
          {Testimonialdata.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="flex flex-col md:flex-row items-center h-auto md:items-start gap-5 bg-white shadow-lg p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {item.designation} — {item.location}
                  </p>
                  {/* ⭐ Rating */}
                  <Rating name="size-medium" defaultValue={4} />

                  <p className="text-gray-600 italic leading-relaxed">
                    “{item.message}”
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
