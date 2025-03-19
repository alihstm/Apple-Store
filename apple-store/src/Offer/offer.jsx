import Countdown from "../CountDown/countDown";
import iphone14Pro from "../assets/Material/IphoneBg.svg";
import { FaArrowLeft } from "react-icons/fa6";

const Offer = () => {
  const targetTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  return (
    <section className="flex flex-col items-center justify-between pt-32 sm:w-full sm:h-[40rem] h-[65rem]">
      <div className="flex flex-row items-center justify-between sm:w-full w-[22rem] sm:pr-[40rem] sm:pl-20">
        <h1 className="sm:text-3xl text-xl sm:w-[40%] w-[35%] font-semibold custom-offer-font custom-orange-color">
          پیشنهاد شگفت انگیز
        </h1>
        <Countdown targetTime={targetTime} />
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-between sm:pr-32 sm:pl-80 w-full h-[85%]">
        <div className="relative flex items-center justify-center sm:w-[35%] w-full sm:h-[100%] rounded-2xl custom-darkGray-bg shadow-lg">
          <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center text-3xl text-center font-bold text-white backdrop-blur-lg bg-black/30 rounded-2xl transition-all hover:scale-105 hover:cursor-pointer">
            iPhone <br /> 14
          </div>
          <img
            className="w-[20rem] h-full object-contain"
            src={iphone14Pro}
            alt="iPhone 14 Pro"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:items-start items-center justify-between pt-16 pb-14 sm:w-[62%] w-[95%] sm:h-[100%] h-[50%]">
          <div className="flex flex-col sm:items-start items-center justify-between w-full h-[60%]">
            <h1 className="sm:text-4xl text-2xl font-bold">
              خرید آیفون ۱۴ پرومکس ۲۵۶ گیگ
            </h1>

            <div className="flex flex-row items-center justify-between pr-8 sm:w-[80%] w-[100%]">
              <span className="text-2xl w-[50%] opacity-40 custom-logo-font custom-darkGray-color line-through">
                قیمت: ۶۲/۰۰۰/۰۰۰
              </span>

              <span className="text-2xl w-[50%] custom-logo-font custom-orange-color">
                قیمت: ۶۰/۵۰۰/۰۰۰
              </span>
            </div>

            <div className="flex justify-between w-20">
              <div className="w-6 h-6 rounded-full bg-purple-600"></div>
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-gray-800"></div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between sm:pr-8 sm:w-[85%] w-[95%]">
            <p className="text-xl sm:text-balance text-center custom-orange-color">
              با گارانتی الماس پایتخت همانند گارانتی اپل
            </p>
            <button className="flex flex-row items-center justify-between sm:w-40 w-32 sm:text-2xl text-sm font-bold px-4 py-4 rounded-md transition duration-150 ease-in-out hover:opacity-80 hover:cursor-pointer active:scale-95 custom-orange-bg custom-whiteLess-color">
              خرید کنید
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offer;
