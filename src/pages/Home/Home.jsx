import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "./../../assets/left-banner.svg";
import banner2 from "./../../assets/right-banner2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="min-h-[calc(100vh-288px)]">
      <div className="grid grid-cols-2 h-full">
        {/* left side  */}
        <div className="p-16">
          <div>
            <img src={banner1} alt="banner2" />
          </div>
        </div>
        {/* right side  */}
        <div className="">
          <div className="bg-purple-500 p-10 space-y-4 rounded-md">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 font-mono mb-3">
                Form Elysium
              </h1>
              <p className="text-white text-xl font-light max-w-xl mx-auto">
                Craft Elegant and Customizable Forms with Ease – Empower Your
                Data Collection and Insights Gathering Efforts Seamlessly
              </p>
            </div>
            <div className="w-1/2 mx-auto py-5">
              <img
                src={banner2}
                data-aos="fade-left"
                data-aos-duration="2000"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <Link to="/build-form">
                <button className="my-btn">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
