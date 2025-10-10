import React from 'react';
import './Testing.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import required modules
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

const teamMembers = [
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "John Smith",
    role: "We have been using this product for the last one year, and it has transformed the way we do business.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a138cf8acd85036bd292d7f10074e79&auto=format&fit=crop&w=634&q=80",
  },
];

const Testing = () => {
  return (
    <div className="testing-container">
      <h1 className="heading">Clients Testimonials</h1>

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
          stretch: -10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className="mySwiper testing"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img src={member.img} alt={member.name} className="team-image" />
              <div className="overlay">
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
