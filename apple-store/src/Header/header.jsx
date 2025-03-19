import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Material/AppStore.svg";
import hamburger from "../assets/Icon/hamburgerMenu.svg";
import search from "../assets/Icon/Search.svg";
import cart from "../assets/Icon/Cart.svg";
import fav from "../assets/Icon/Favs.svg";
import charger from "../assets/Material/MagSafePowerAdapter.svg";
import homepod from "../assets/Material/HomePodMini.svg";
import appletv from "../assets/Material/AppleTVHD.svg";
import applewatch from "../assets/Material/AppleWatch7Front.svg";
import airpod from "../assets/Material/AirPodsPro.svg";
import ipad from "../assets/Material/iPadProBack.svg";
import iphone from "../assets/Material/iPhone13ProBack.svg";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = [
    { product: "شارژر مگ سیف", img: charger },
    { product: "هوم پاد", img: homepod },
    { product: "اپل تی وی", img: appletv },
    { product: "اپل واچ", img: applewatch },
    { product: "ایرپاد", img: airpod },
    { product: "آیپد", img: ipad },
    { product: "آیفون", img: iphone },
  ];

  return (
    <header className="flex flex-col items-center justify-between sm:w-[96rem] w-[100%] sm:h-[25rem] h-[100%]">
      <div className="flex items-center justify-center sm:w-full w-[27rem] h-[5rem] sm:text-[1.2rem] text-[1rem] font-bold custom-whiteLess-color custom-orange-bg">
        تا ۷۰٪ درصد تخفیف برای لوازم جانبی اورجینال آیفون
      </div>

      <div className="flex flex-row items-center justify-between sm:w-[80rem] w-[85%] h-[8rem] border-b border-gray-200 relative">
        <div className="flex flex-row items-center justify-between sm:w-[16%] w-[35%] sm:h-full">
          <img src={logo} />
          <h2 className="sm:text-3xl text-2xl sm:w-[70%] w-[50%] font-[700] custom-orange-color custom-offer-font">
            اپل استور
          </h2>
        </div>

        <div className="flex flex-row items-center justify-between sm:w-[40%] sm:h-full relative">
          <div className="relative">
            <button
              className="flex flex-row items-center justify-between px-6 py-2 sm:w-[10rem] rounded-3xl transition duration-150 ease-in-out hover:opacity-80 hover:cursor-pointer active:scale-90 custom-orange-bg custom-whiteLess-color"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img src={hamburger} />
              <p className="sm:block hidden text-[1.2rem] font-[500]">
                محصولات
              </p>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-14 sm:w-[12rem] w-[10rem] bg-white shadow-lg rounded-xl overflow-hidden"
                >
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 hover:bg-gray-200 hover:cursor-pointer transition duration-150"
                    >
                      <img src={item.img} className="w-6 h-6" />
                      <p className="text-sm font-medium">{item.product}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="sm:flex hidden flex-row items-center relative w-[65%]">
            <input
              type="text"
              placeholder="جستجو کنید"
              className="w-full px-4 py-2 pl-12 text-right rounded-3xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-500 transition duration-150 ease-in-out text-base custom-darkGray-color custom-white3-bg"
              dir="rtl"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity duration-150">
              <img src={search} className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between sm:w-[10%] w-[25%] sm:h-full">
          <div className="relative group">
            <button className="flex items-center justify-center hover:cursor-pointer active:scale-90 transition duration-150">
              <img src={cart} />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 w-[4.5rem] px-2 py-1 text-sm text-white bg-gray-800 rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100">
              سبد خرید
            </span>
          </div>

          <div className="relative group">
            <button className="flex items-center justify-center hover:cursor-pointer active:scale-90 transition duration-150">
              <img src={fav} />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 w-auto px-2 py-1 text-sm text-white bg-gray-800 rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100">
              علاقه‌مندی‌ها
            </span>
          </div>
        </div>
      </div>

      <div className="sm:flex grid grid-cols-4 gap-4 sm:flex-row sm:items-center sm:justify-between sm:w-[65rem] w-[22rem] sm:h-[8rem] h-[15rem]">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 hover:cursor-pointer"
          >
            <img
              src={item.img}
              className="w-12 h-12 transition duration-150 ease-in-out hover:scale-110"
            />
            <p className="sm:text-sm text-xs font-medium custom-darkGray-color">
              {item.product}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
