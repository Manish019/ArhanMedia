import BrandSection from "../components/BrandSection";
import { workData } from "../Data/WorkPage";
import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
const Aistudio = () => {
  // const aistudioData = workData.filter(
  //   (item) => item.category === "Aistudio"
  // );

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

     <div className="w-[50%] mx-auto py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Left Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[110px] cursor-pointer">
      <Link to="/work/ai-motion">
      <h2 className="text-2xl text-white font-bold mb-4">Motion</h2>

      <p className="text-white">
       Video Creation | Motion Design | VFX and Transitions | Storyboarding | Video Production
      </p>
      </Link>
    </div>

    {/* Right Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[100px] cursor-pointer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">
     <Link to="/work/ai-skill">
      <h2 className="text-2xl text-white font-bold mb-4">Skills</h2>

      <p className="text-white">
        Key Visual Development | Product and Environment Creation | Retouching

      </p>
      </Link>
    </div>

  </div>
</div>

    </div>
    </>
  );
};

export default Aistudio;