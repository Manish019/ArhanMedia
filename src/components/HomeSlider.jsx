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
import { Autoplay, Pagination} from 'swiper/modules';
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
    buttonText: "Download Portfolio",
    buttonLink: "/",
  },
  {
    id: 2,
    image: "/n-slider.png",
    subtitle: "CREATIVE STUDIO",
    title1: "That Cares About Every Tiny Little Detail.",
    description:
      "We craft visually appealing experiences that connect emotionally and drive results.",
    buttonText: "Explore Work",
    buttonLink: "/portfolio",
  },
  {
    id: 3,
   image: "/n-slider.png",
    subtitle: "DIGITAL EXPERTS",
    title1: "That Cares About Every Tiny Little Detail.",

    description:
      "From concept to launch — we create meaningful digital experiences that inspire action.",
    buttonText: "Learn More",
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
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen homeslider"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title1}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0"></div>

              {/* Content */}
              <div
  className="
    absolute inset-0 flex flex-col justify-center items-start  /* 👈 default = left */
    sm:items-start
    px-5 sm:px-10 md:px-16 lg:px-24 text-white z-10
    text-left sm:text-left sm:justify-center gap-3
  "
>
  <motion.div
    initial={{ y: -40, opacity: 0, scale: 0.95 }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="
      w-full sm:w-[90%] md:w-[700px] lg:w-[700px]
      mx-auto sm:mx-0 lg:mt-5 inner-section
      text-left  
    "
  >
    {/* Subtitle */}
    <h3 className="text-[12px] sm:text-sm md:text-[16px] lg:text-[30px] tracking-wide mb-2 sm:mb-3">
      {slide.subtitle}
    </h3>

    {/* Titles */}
    <h1 className="text-[26px] sm:text-[34px] md:text-[65px]  leading-tight md:leading-tight mb-2 ">
      {slide.title1}
    </h1>

    {/* Paragraph */}
    <p className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[28px] leading-light mb-5 sm:mb-6 text-gray-200">
      {slide.description}
    </p>

    {/* Button */}
    <Link
      to={slide.buttonLink}
      className="inline-flex items-center gap-1 sm:gap-2 border border-indigo-100 hover:bg-indigo-700 
      transition px-3 py-2 sm:px-5 sm:py-3 rounded-md sm:rounded-lg font-medium 
      text-[12px] sm:text-[14px] md:text-[15px] lg:text-[20px] text-white"
    >
      {slide.buttonText}
      <GoArrowUpRight className="text-sm sm:text-base md:text-lg lg:text-xl" />
    </Link>
  </motion.div>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Down Arrow */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center z-20">
        <Link to="/about">
          <FaAnglesDown className="text-2xl sm:text-3xl md:text-4xl animate-bounce text-white drop-shadow-lg" />
        </Link>
      </div>
    </section>
 
   
  </>
    
  );
};

export default HomeSlider;
