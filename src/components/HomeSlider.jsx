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
    title1: "That Care About",
    title2: "Every Tiny Little",
    title3: "Detail.",
    description:
      "We don't just make it look good — we make it make sense. Every pixel enhances your brand.",
    buttonText: "Download Portfolio",
    buttonLink: "/",
  },
  {
    id: 2,
    image: "/slider2.jpg",
    subtitle: "CREATIVE STUDIO",
    title1: "Turning Ideas",
    title2: "Into Stunning",
    title3: "Reality.",
    description:
      "We craft visually appealing experiences that connect emotionally and drive results.",
    buttonText: "Explore Work",
    buttonLink: "/portfolio",
  },
  {
    id: 3,
    image: "/slider3.jpg",
    subtitle: "DIGITAL EXPERTS",
    title1: "Design. Build.",
    title2: "Deliver.",
    title3: "Delight.",
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
        className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen"
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
              <div className="absolute inset-0 bg-black/5"></div>

              {/* Content */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center sm:items-start
                px-5 sm:px-10 md:px-16 lg:px-24 text-white z-10
                text-center sm:text-left sm:justify-center gap-3"
              >
                <motion.div
                  initial={{ y: -40, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full sm:w-[90%] md:w-[80%] lg:max-w-2xl mx-auto sm:mx-0 lg:mt-5"
                >
                  {/* Subtitle */}
                  <h3 className="text-[12px] sm:text-sm md:text-[16px] lg:text-lg font-semibold tracking-wide mb-2 sm:mb-3">
                    {slide.subtitle}
                  </h3>

                  {/* Titles */}
                  <h1 className="text-[26px] sm:text-[34px] md:text-[50px] lg:text-[60px] font-bold leading-tight">
                    {slide.title1}
                  </h1>
                  <h2 className="text-[22px] sm:text-[30px] md:text-[44px] lg:text-[50px] text-white font-semibold leading-tight">
                    {slide.title2}
                  </h2>
                  <h3 className="text-[20px] sm:text-[26px] md:text-[40px] lg:text-[45px] text-white font-semibold mb-4 sm:mb-6">
                    {slide.title3}
                  </h3>

                  {/* Paragraph */}
                  <p className="text-[12px] sm:text-[14px] md:text-[17px] lg:text-[20px] leading-relaxed mb-5 sm:mb-6 text-gray-200">
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
