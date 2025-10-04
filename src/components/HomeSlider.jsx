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
import './Homeslider.css'


const HomeSlider = () => {


  return (
  <>
  <section className="slider-section relative w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/slider3.jpg"
              alt="Home Banner"
              className="w-full h-full object-cover shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
               className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-white mb-4 leading-snug sm:leading-tight"
                initial={{ y: -50, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                We Are Increasing Business Success With Technology
              </motion.h2>
<p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 drop-shadow max-w-[90%] sm:max-w-xl">

                Your creative partner for branding, video, and more.
              </p>
              <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium sm:font-semibold shadow hover:bg-indigo-700 transition">

                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/slider2.jpg"
              alt="Home Banner"
              className="w-full h-full object-cover shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-bold text-white mb-4 leading-snug sm:leading-tight"

                initial={{ y: -60, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Welcome To Arhan Entertainment
              </motion.h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 drop-shadow max-w-[90%] sm:max-w-xl">

                Your creative partner for branding, video, and more.
              </p>
              <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium sm:font-semibold shadow hover:bg-indigo-700 transition">

                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Down Arrow */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center z-[100]">
        <Link to="/about">
          <FaAnglesDown className="text-xl sm:text-4xl md:text-3xl animate-bounce text-white drop-shadow-lg" />
        </Link>
      </div>
    </section>
   
  </>
    
  );
};

export default HomeSlider;
