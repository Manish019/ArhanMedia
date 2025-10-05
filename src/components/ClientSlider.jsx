import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const ClientSlider = () => {
  return (
    <>
    <Swiper
      slidesPerView={8} // default for large screens
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper clients"
       breakpoints={{
    320: {
      slidesPerView: 3, // 📱 Mobile
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3, // Small tablets
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4, // Tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8, // Desktops
      spaceBetween: 30,
    },
  }}
      >
        <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className="img-box">
            <img alt="Arham Entertainment Logo" class="h-50 md:h-35 w-auto mb-2" src="/Follow-logo.png"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ClientSlider