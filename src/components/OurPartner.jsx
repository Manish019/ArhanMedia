
import { motion } from "framer-motion";


const logos = [
  { id: 1, src: "/Arhan-logo.png", alt: "Phoenix Palladium" },
  { id: 2, src: "/Arhan-logo.png", alt: "Birla Estates" },
  { id: 3, src: "/Arhan-logo.png", alt: "Bobbi Brown" },
  { id: 4, src: "/Arhan-logo.png", alt: "Tira" },
  { id: 5, src: "/Arhan-logo.png", alt: "Loreal" },
  { id: 6, src: "/Arhan-logo.png", alt: "Nivea" },
  { id: 7, src: "/Arhan-logo.png", alt: "Dove" },
  { id: 8, src: "/Arhan-logo.png", alt: "HSBC" },


  // add more logos here
];

const OurPartner = () => {
  return (
      <section className="our-partner section-padding py-10">
        <div className="container"> 
          <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4
">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="
    relative h-30 w-3xs mt-5
    flex items-center justify-center
    overflow-hidden   

    border-b border-r border-yellow-600

    after:content-['']
    after:absolute
    after:bottom-0
    after:right-0
    after:w-[2px]
    after:h-[2px]
    after:bg-yellow-400

    before:content-['']
    before:absolute
    before:bottom-0
    before:right-0
    before:w-[6px]
    before:h-[2px]
    before:bg-yellow-400
  "
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-150 max-w-[130px object-contain"
                    animate={{
                      rotate: [0, 360, 360],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 8,            // slow overall
                      times: [0, 0.75, 1],    // hide happens clearly at end
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 1,         // ⏸️ 1 sec hidden gap
                    }}

                  />
                </div>
              ))}
          </div>
            </div>
          </div>
      </section>
  );
}


export default OurPartner;