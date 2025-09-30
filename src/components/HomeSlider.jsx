import { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

const HomeSlider = () => {


  return (
   <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
        className="mySwiper"
      >
      <section className="slider-section h-[650px]">
      <SwiperSlide>
        <div className="slider h-[450px]">
          <img
            src="/slider3.jpg"
            alt="Home Banner"
            className="w-full h-full shadow-lg object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider h-[450px]">
          <img
            src="/slider2.jpg"
            alt="Home Banner"
            className="w-full h-full shadow-lg object-cover"
          />
        </div>
      </SwiperSlide>
      </section>
    </Swiper>
    
  );
};

export default HomeSlider;
