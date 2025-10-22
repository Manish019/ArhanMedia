import { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowUpRight } from "react-icons/go";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAnglesDown } from "react-icons/fa6";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './Homeslider.css'

const slidesData = [
  {
    id: 1,
    image: "/n-slider.png",
    subtitle: "DESIGN TEAM",
    title1: "That Cares About Every Tiny Little Detail.",
    description:
      "We don't just make it look good — we make it make sense. Every pixel enhances your brand.",
    buttonText: "Explore Design",
    buttonLink: "/",
  },
  {
    id: 2,
    image: "/n-slider.png",
    subtitle: "CREATIVE STUDIO",
    title1: "That Cares About Every Tiny Little Detail.",
    description:
      "We craft visually appealing experiences that connect emotionally and drive results.",
    buttonText: "Explore Campaign",
    buttonLink: "/",
  },
  {
    id: 3,
   image: "/n-slider.png",
    subtitle: "DIGITAL EXPERTS",
    title1: "That Cares About Every Tiny Little Detail.",

    description:
      "From concept to launch — we create meaningful digital experiences that inspire action.",
    buttonText: "Explore Portfolio",
    buttonLink: "/about",
  },
];
const HomeSlider = () => {


  return (
  <>
  <section className="slider-section relative w-full overflow-hidden">
     <Swiper
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 10000, disableOnInteraction: false }}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
  }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  modules={[Autoplay, Pagination, Navigation]}
  className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen homeslider relative"
>
{slidesData.map((slide, index) => (
  <SwiperSlide key={slide.id}>
    {({ isActive }) => (
      <div className="relative w-full h-full">
        {/* Background */}
        <motion.img
          key={isActive ? 'active' : 'inactive'} // Add this line
          src={slide.image}
          alt={slide.title1}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

      
        {/* <div className="absolute inset-0 bg-black/1"></div> */}

        {/* Content */}
       <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center px-5 sm:px-10 md:px-16 lg:px-24 z-10 text-white gap-5">
  {/* Left Column - Text */}
  <motion.div
    initial={{ y: -40, opacity: 0, scale: 0.95 }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="w-full md:w-1/2 flex flex-col justify-center items-start text-left"
  >
    <h3 className="text-[12px] sm:text-sm md:text-[16px] lg:text-[20px] tracking-wide mb-2 sm:mb-3">
      {slide.subtitle}
    </h3>

    <h1 className="text-[26px] sm:text-[34px] md:text-[65px] leading-tight mb-2">
      {slide.title1}
    </h1>

    <p className="text-[12px] sm:text-[14px] md:text-[20px] leading-light mb-5 sm:mb-6 text-gray-200">
      {slide.description}
    </p>

    <Link
      to={slide.buttonLink}
      className="inline-flex items-center gap-1 sm:gap-2 border border-indigo-100 hover:bg-indigo-700 
      transition px-3 py-2 sm:px-5 sm:py-3 rounded-md sm:rounded-lg font-medium 
      text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-white"
    >
      {slide.buttonText}
      <GoArrowUpRight className="text-sm sm:text-base md:text-lg lg:text-xl" />
    </Link>
  </motion.div>

  {/* Right Column - Image (Hidden on mobile) */}
  <motion.div
  className="w-full md:w-1/2 flex justify-center md:justify-center hidden md:flex"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <motion.img
    src="./bottel.png"
    alt="bottel"
    className="w-full max-w-[400px] md:max-w-[400px] object-cover rounded-lg origin-center"
    initial={{ rotate: 0 }}
    animate={{ rotate: 25, rotateX: 5, rotateY: 5 }}
    transition={{ duration: 5, ease: "easeInOut" }}
  />
</motion.div>



</div>


      </div>
      )}
    </SwiperSlide>
  ))}

  <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6 text-white z-20 ">
  <button className="custom-prev text-sm sm:text-base font-semibold tracking-widest hover:text-indigo-400 transition-all flex items-center gap-2">
    PREV
        <span className="block w-20 h-[1px] bg-gray-300"></span> {/* small line before PREV */}

  </button>

  {/* Pagination dots */}
  <div className="custom-pagination flex items-center gap-3"></div>

  <button className="custom-next text-sm sm:text-base font-semibold tracking-widest hover:text-indigo-400 transition-all flex items-center gap-2">
        <span className="block w-20 h-[1px] bg-gray-300"></span> {/* small line after NEXT */}
    NEXT
  </button>
</div>

</Swiper>

      {/* Down Arrow */}
      {/* <div className="absolute bottom-6 inset-x-0 flex justify-center z-20">
        <Link to="/about">
          <FaAnglesDown className="text-2xl sm:text-3xl md:text-4xl animate-bounce text-white drop-shadow-lg" />
        </Link>
      </div> */}
    </section>
 
   
  </>
    
  );
};

export default HomeSlider;
