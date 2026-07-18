import BrandSection from "../components/BrandSection";
import { workData } from "../Data/WorkPage";
import aboutImg from '../assets/about-us.jpg';
import { Link } from "react-router-dom";
const Reanders = () => {
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
                Reanders (3D)
              </h1>
            </div>
          </section>
    <div className="bg-[#516ee5] py-12">

     <div className="w-[50%] mx-auto py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Left Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[110px] cursor-pointer text-center bg-[#05051fa6]">
      <Link to="/work/ai-motion">
      <h2 className="text-2xl text-white font-bold mb-4">Video</h2>

      <p className="text-white">
       Projects | Flats | Exterior | Interior | Road Map | Facility  | 360 • (degree symbol)
      </p>
      </Link>
    </div>

    {/* Right Section */}
    <div className="rounded-2xl p-8 shadow-lg min-h-[100px] cursor-pointer text-center bg-[#05051fa6]">
     <Link to="/work/ai-skill">
      <h2 className="text-2xl text-white font-bold mb-4">Stills</h2>

      <p className="text-white">
Interior | Exterior | Amenities | Flats | View | Building 
      </p>
      </Link>
    </div>

  </div>
</div>

    </div>
    </>
  );
};

export default Reanders;