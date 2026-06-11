import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BrandSection = ({ title, images, media }) => {

  const [popupIndex, setPopupIndex] = useState(null);

  // Safety Check
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-white py-12">
        No images available
      </div>
    );
  }

  return (
    <div className="mt-16">

      {/* Heading */}
      <h2 className="text-center text-[40px] text-white mt-4 mb-8">
        {title}
      </h2>

      {/* Mobile Slider */}
      <div className="block lg:hidden relative">

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={1}
          className="mobileSwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt={title}
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
            alt={title}
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
                alt={title}
                onClick={() => setPopupIndex(index + 1)}
                className="w-full h-[352px] object-cover cursor-pointer hover:scale-105 duration-500"
              />

              {/* Last Arrow */}
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
              navigation
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
  );
};

export default BrandSection;