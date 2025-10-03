import { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAnglesDown } from "react-icons/fa6";


// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const HomeSlider = () => {


  return (
  <>
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
     <section className="slider-section relative h-[650px]">
  <SwiperSlide>
   <div className="slider h-[450px] relative">
  <img
    src="/slider3.jpg"
    alt="Home Banner"
    className="w-full h-full shadow-lg object-cover"
  />
  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

<motion.h2
  className="text-[55px] font-bold text-white mb-4 leading-tight text-center mx-auto "
  initial={{ y: -50, opacity: 0, scale: 0.95 }}   // Start above + slightly smaller
  whileInView={{ y: 0, opacity: 1, scale: 1 }}    // Animate to normal position
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}          // Animate every time it enters viewport
>
  We Are Increasing Business Success With Technology
</motion.h2>

    <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
      Your creative partner for branding, video, and more.
    </p>
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
      Get Started
    </button>
  </div>
</div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="slider h-[450px] relative">
  <img
    src="/slider2.jpg"
    alt="Home Banner"
    className="w-full h-full shadow-lg object-cover"
  />
  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <motion.h2
  className="text-[55px] font-bold text-white mb-4 leading-tight text-center md:text-left"
  initial={{ y: -60, opacity: 0, scale: 0.95 }}   // Start above + slightly smaller
  whileInView={{ y: 0, opacity: 1, scale: 1 }}    // Animate to normal position
  transition={{ duration: 1.5, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}          // 👈 animate every time scroll into view
>
  Welcome To Arhan Entertainment
</motion.h2>

    <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
      Your creative partner for branding, video, and more.
    </p>
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
      Get Started
    </button>
  </div>
</div>
  </SwiperSlide>
 {/* Arrow Icon on top of slider */}
  
</section>
<div className="absolute bottom-10 inset-x-0 flex justify-center z-[100]">
   <Link to='/about'>
     <FaAnglesDown className="text-3xl animate-bounce text-white drop-shadow-lg" />
   </Link>
  </div>
    </Swiper>
   
  </>
    
  );
};

export default HomeSlider;
