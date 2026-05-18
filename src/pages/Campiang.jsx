import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import "./Branding.css";


const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1020/600/400",
];



const Campiang = () => {
  const [popupIndex, setPopupIndex] = useState(null);
  
    return (
      <>
        <section
          className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
          <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Campaing
            </h1>
          </div>
        </section>
  
        <div className="bg-[#516ee5]">
          <div className="container mx-auto p-4 branding py-12">
            {/* <h1 className="text-white text-[35px] text-center py-4">
              Branding
            </h1> */}
  
            {/* Main Slider */}
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={20}
              slidesPerView={3}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt="slide"
                    className="w-full cursor-pointer"
                    onClick={() => setPopupIndex(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
  
            {/* 🔥 Popup Slider */}
            {popupIndex !== null && (
              <div
                onClick={() => setPopupIndex(null)}
              className="fixed inset-0 bg-[#516ee5] flex items-center justify-center z-[9999]"
              >
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupIndex(null);
                  }}
                  className="absolute top-5 right-5 text-white text-3xl z-[10000]"
                >
                  ✕
                </button>
  
                {/* Slider Container */}
                <div
                  className="w-[90%] max-w-4xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    initialSlide={popupIndex}
                    spaceBetween={20}
                    slidesPerView={1}
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          className="w-full max-h-[80vh] object-contain rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

export default Campiang