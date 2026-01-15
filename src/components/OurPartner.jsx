import { motion } from "framer-motion";
import "./OurPartner.css";


const logos = [
  { id: 1, src: "/Arhan-logo.png", alt: "Phoenix Palladium" },
  { id: 2, src: "/Arhan-logo.png", alt: "Birla Estates" },
  { id: 3, src: "/Arhan-logo.png", alt: "Bobbi Brown" },
  { id: 4, src: "/Arhan-logo.png", alt: "Tira" },
  { id: 5, src: "/Arhan-logo.png", alt: "Loreal" },
  { id: 6, src: "/Arhan-logo.png", alt: "Nivea" },
  { id: 7, src: "/Arhan-logo.png", alt: "Dove" },
  { id: 8, src: "/Arhan-logo.png", alt: "HSBC" },
];

const OurPartner = () => {
  return (
    <section className="our-partner py-12 bg-[#f6a623]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.id} className="partner-item group">

              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="
    relative z-10
    max-w-[220px]
    object-contain
  "
                initial={{
                  y: -120,
                  scale: 0.5,
                  opacity: 0,
                }}
                animate={{
                  y: [-120, 0, 0, 0],
                  scale: [0.5, 1, 1.2, 0.5],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />


            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default OurPartner;
