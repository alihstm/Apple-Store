import { motion } from "framer-motion";
import vector1 from "../assets/Material/AppleVisionPro2.svg";
import vector2 from "../assets/Material/AppleVisionPro3.svg";
import applelogo from "../assets/Material/AppleSign.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between sm:w-full sm:h-[50rem] h-[40rem] sm:pt-32 pt-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-400 opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-8 w-full h-[35%] text-center">
        <motion.h1
          className="flex flex-row items-center justify-between text-6xl font-bold tracking-tight custom-offer-font"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vision Pro
          <img src={applelogo} className="w-10 ml-2" />
        </motion.h1>

        <motion.p
          className="text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          اولین نفری باشید که ویژن پرو میخرید
        </motion.p>

        <button className="px-10 py-2 text-lg font-medium rounded-xl transition duration-150 ease-in-out hover:opacity-80 hover:cursor-pointer active:scale-95 custom-orange-bg custom-whiteLess-color shadow-lg shadow-[#ff510c]/50">
          خرید کنید
        </button>
      </div>

      <div className="flex items-center justify-between sm:w-full w-[90%] h-[65%] custom-appleVisionPro-bg">
        <img src={vector2} className="sm:block hidden" />
        <img src={vector1} className="sm:block hidden" />
      </div>

      <div className="flex flex-row items-center justify-between w-[6rem]">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className="w-[1rem] h-[1rem] rounded-[50%] custom-gray-bg"
          ></span>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
