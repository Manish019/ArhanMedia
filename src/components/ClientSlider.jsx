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
        slidesPerView={8}
         spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper clients"
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