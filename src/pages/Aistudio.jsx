import BrandSection from "../components/BrandSection";
import { workData } from "../data/workpage";
import aboutImg from '../assets/about-us.jpg';

git 
const Aistudio = () => {

  return (
    <>
    <section
            className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center"
            style={{ backgroundImage: `url(${aboutImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/20"></div>
            <div className="w-full max-w-6xl mx-auto py-10 px-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                AI Studio
              </h1>
            </div>
          </section>
    <div className="bg-[#516ee5] py-12">

      <div className="max-w-7xl mx-auto px-4">

        {workData.map((item, index) => (
          <BrandSection
            key={index}
            title={item.title}
            images={item.images}
          />
        ))}

      </div>

    </div>
    </>
  );
};

export default Aistudio;