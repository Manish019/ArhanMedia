import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import services from "../Data/service.js";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const ServiceSlider = () => {
  return (
    
    <Swiper
      slidesPerView={3} // 3 cards per view
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      className="mySwiper clients"
      breakpoints={{
    320: {
      slidesPerView: 1, // 📱 Mobile
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1, // Small tablets
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2, // Tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // Desktops
      spaceBetween: 30,
    },
  }}

    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <Link
            to={`/services/${service.id}`}
            className="group relative rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-0 flex flex-col items-center text-center h-full border border-gray-200 overflow-hidden"
          >
            {/* Image Container with Overlay */}
            <div className="relative w-[380px] h-[260px] rounded-t-2xl overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#193568]/40 to-transparent group-hover:from-black/70 group-hover:via-[#193568]/60 transition duration-300"></div>

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
