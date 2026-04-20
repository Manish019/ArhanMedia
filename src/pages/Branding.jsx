import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

 const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1020/600/400",
];

const Branding = () => {
  const [popupImage, setPopupImage] = useState(null);

  return (
    <>
    <section
          className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
          style={{
            backgroundImage: `url(${aboutImg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
            <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">Branding</h1>
          </div>
        </section>
    <div className=' bg-[#516ee5]' >
     <div className="container mx-auto p-4 branding">
      <h1 className='text-white text-[35px] text-center py-4'>Backbay</h1>
      <p className='text-white textt-xl'>Welcome to the Branding page! Here you can find all the information about our brand, including our mission, vision, and values. We are committed to providing high-quality products and services that meet the needs of our customers. Stay tuned for updates and news about our brand!</p>
    
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
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => setPopupImage(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup */}
      {popupImage && (
        <div
  onClick={() => setPopupImage(null)}
  className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
>
  <img
    src={popupImage}
    className="max-w-[90%] max-h-[90%]"
  />
</div>
      )}
    
    </div>
     </div>
     
    </>
   
  );
};

export default Branding;