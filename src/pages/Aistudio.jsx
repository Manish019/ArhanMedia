import aboutImg from "../assets/about-us.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import "./Branding.css";

const images = [
  "https://i.ibb.co/xKXWKhL9/Adidas.png",
  "https://i.ibb.co/xKXWKhL9/Adidas.png",
  "https://i.ibb.co/xKXWKhL9/Adidas.png",
  "https://i.ibb.co/xKXWKhL9/Adidas.png",
];

const Aistudio = () => {
  const [popupIndex, setPopupIndex] = useState(null);

  return (
    <>
      {/* Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            AI Studio
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <div className="bg-[#516ee5] py-12">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-center text-[40px] text-white mt-4 mb-8">
            Adidas
          </h2>

          {/* Mobile Slider */}
          <div className="block lg:hidden relative">

            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={15}
              slidesPerView={1}
              className="mobileSwiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt="gallery"
                      onClick={() => setPopupIndex(index)}
                      className="w-full h-[500px] object-cover cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Left Big Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={images[0]}
                alt="gallery"
                onClick={() => setPopupIndex(0)}
                className="w-full h-[720px] object-cover cursor-pointer hover:scale-105 duration-500"
              />
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-4">

              {images.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl relative"
                >
                  <img
                    src={img}
                    alt="gallery"
                    onClick={() => setPopupIndex(index + 1)}
                    className="w-full h-[352px] object-cover cursor-pointer hover:scale-105 duration-500"
                  />

                  {/* Arrow */}
                  {index === 2 && (
                    <button className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-5xl z-10">
                      ›
                    </button>
                  )}

                </div>
              ))}

            </div>
          </div>

          {/* Popup Slider */}
          {popupIndex !== null && (
            <div
              onClick={() => setPopupIndex(null)}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
            >

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPopupIndex(null);
                }}
                className="absolute top-5 right-5 text-white text-4xl z-[10000]"
              >
                ✕
              </button>

              {/* Popup Swiper */}
              <div
                className="w-[95%] lg:w-[80%]"
                onClick={(e) => e.stopPropagation()}
              >
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  initialSlide={popupIndex}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="popupSwiper"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt="popup"
                        className="w-full h-[85vh] object-contain rounded-xl"
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

export default Aistudio;