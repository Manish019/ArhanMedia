import { motion } from "framer-motion";
import aditiyabirla from "../assets/partnerlogo/l1.jpg";
import aditiyabirla2 from "../assets/partnerlogo/l2.JPG";
import aditiyabirla3 from "../assets/partnerlogo/l3.png";
import aditiyabirla4 from "../assets/partnerlogo/l4.jpg";
import aditiyabirla5 from "../assets/partnerlogo/l5.jpg";
import aditiyabirla6 from "../assets/partnerlogo/l6.jpg";
import aditiyabirla7 from "../assets/partnerlogo/l7.jpg";
import aditiyabirla8 from "../assets/partnerlogo/l8.jpg";
import aditiyabirla9 from "../assets/partnerlogo/l9.png";
import aditiyabirla10 from "../assets/partnerlogo/l10.jpg";
import aditiyabirla11 from "../assets/partnerlogo/l11.png";
import aditiyabirla12 from "../assets/partnerlogo/l12.png";
import aditiyabirla13 from "../assets/partnerlogo/l13.png";
import aditiyabirla14 from "../assets/partnerlogo/l14.jpg";
import aditiyabirla15 from "../assets/partnerlogo/l15.jpg";
import aditiyabirla16 from "../assets/partnerlogo/l16.jpg";
import aditiyabirla17 from "../assets/partnerlogo/l17.png";
import aditiyabirla18 from "../assets/partnerlogo/l18.jpg";
import aditiyabirla19 from "../assets/partnerlogo/l19.jpg";
import aditiyabirla20 from "../assets/partnerlogo/l20.png";
import aditiyabirla21 from "../assets/partnerlogo/l21.JPG";
import aditiyabirla22 from "../assets/partnerlogo/l22.JPG";
import aditiyabirla23 from "../assets/partnerlogo/l23.JPG";
import aditiyabirla24 from "../assets/partnerlogo/l24.png";
import aditiyabirla25 from "../assets/partnerlogo/l25.jpg";

import "./OurPartner.css";


const logos = [
  { id: 1, src: aditiyabirla, alt: "Aditiya Birla" },
  { id: 2, src: aditiyabirla2, alt: "Aditiya Birla 2" },
  { id: 3, src: aditiyabirla3, alt: "Aditiya Birla 3" },
  { id: 4, src: aditiyabirla4, alt: "Aditiya Birla 4" },
  { id: 5, src: aditiyabirla5, alt: "Aditiya Birla 5" },
  { id: 6, src: aditiyabirla6, alt: "Aditiya Birla 6" },
  { id: 7, src: aditiyabirla7, alt: "Aditiya Birla 7" },
  { id: 8, src: aditiyabirla8, alt: "Aditiya Birla 8" },
  { id: 9, src: aditiyabirla9, alt: "Aditiya Birla 9" },
  { id: 10, src: aditiyabirla10, alt: "Aditiya Birla 10" },
  { id: 11, src: aditiyabirla11, alt: "Aditiya Birla 11" },
  { id: 12, src: aditiyabirla12, alt: "Aditiya Birla 12" },
  { id: 13, src: aditiyabirla13, alt: "Aditiya Birla 13" },
  { id: 14, src: aditiyabirla14, alt: "Aditiya Birla 14" },
  { id: 15, src: aditiyabirla15, alt: "Aditiya Birla 15" },
  { id: 16, src: aditiyabirla16, alt: "Aditiya Birla 16" },
  { id: 17, src: aditiyabirla17, alt: "Aditiya Birla 17" },
  { id: 18, src: aditiyabirla18, alt: "Aditiya Birla 18" },
  { id: 19, src: aditiyabirla19, alt: "Aditiya Birla 19" },
  { id: 20, src: aditiyabirla20, alt: "Aditiya Birla 20" },
  { id: 21, src: aditiyabirla21, alt: "Aditiya Birla 21" },
  { id: 22, src: aditiyabirla22, alt: "Aditiya Birla 22" },
  { id: 23, src: aditiyabirla23, alt: "Aditiya Birla 23" },
  { id: 24, src: aditiyabirla24, alt: "Aditiya Birla 24" },
  { id: 25, src: aditiyabirla25, alt: "Aditiya Birla 25" },
];

const OurPartner = () => {
  return (
  <section className="our-partner py-12 bg-[#193568]">
  <div className="max-w-8xl mx-auto px-4">
    <div className="grid grid-cols-5 gap-6">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="partner-item w-full h-[140px] flex"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-[180px] h-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default OurPartner;
