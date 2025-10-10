import React, { useRef } from "react";
import "./testing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const teamMembers = [
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Olivia Brown",
    role: "This service is absolutely wonderful. Highly recommended!",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "David Miller",
    role: "Superb customer support and great user experience overall.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=634&q=80",
  },
   {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Olivia Brown",
    role: "This service is absolutely wonderful. Highly recommended!",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "David Miller",
    role: "Superb customer support and great user experience overall.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "David Miller",
    role: "Superb customer support and great user experience overall.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=634&q=80",
  },
];

const Testing = () => {
  const swiperRef = useRef(null);

  return (
    <div className="testing-container">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#193568] mb-5"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Clients Testimonials
      </motion.h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: -40,
          depth: 220,
          modifier: 1.3,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // store ref
        className="mySwiper testing"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              className="team-card"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              onTouchStart={() => swiperRef.current?.autoplay.stop()}
              onTouchEnd={() => swiperRef.current?.autoplay.start()}
            >
              <img src={member.img} alt={member.name} className="team-image" />
              <div className="team-text mb-5">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testing;
