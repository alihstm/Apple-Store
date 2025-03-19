import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import macBookAir from "../assets/Material/MacBookM2.svg";
import ipad from "../assets/Material/IpadM2.svg";
import appleWatch from "../assets/Material/AppleWatch.svg";
import airpod from "../assets/Material/AirPodMax.svg";

const BestSeller = () => {
  const bestSells = [
    {
      name: "مک بوک ایر ۱۳.۶ اینچ M2 ظرفیت 8/256 گیگ مدل 2022",
      color: ["#303030", "#828282", "#ffda79"],
      price: "۷۵/۰۰۰/۰۰۰",
      img: macBookAir,
    },
    {
      name: "آیپد پرو M2 ظرفیت 128 گیگ",
      color: ["#303030", "#828282"],
      price: "۴۵/۰۰۰/۰۰۰",
      img: ipad,
    },
    {
      name: "اپل واچ اولترا تیتانیومی با بند لوپ اورنج آیپاین",
      color: ["#e24c21"],
      price: "۴۱/۲۰۰/۰۰۰",
      img: appleWatch,
    },
    {
      name: "ایرپاد مکس هدفون بلوتوثی",
      color: ["#828282"],
      price: "۲۷/۳۰۰/۰۰۰",
      img: airpod,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bestSells.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (item) => {
    console.log(`${item.name} added to cart!`);
  };

  return (
    <section className="flex flex-col items-center justify-between sm:pt-52 pt-44 h-[60rem]">
      <h1 className="sm:text-4xl text-3xl font-bold custom-offer-font mb-6">
        پرفروش ترین محصولات
      </h1>

      <div className="relative w-[95%] h-[90%] flex justify-center items-center overflow-hidden">
        {bestSells.map((item, index) => {
          const isActive = index === currentIndex;
          const isPrevious =
            index === (currentIndex - 1 + bestSells.length) % bestSells.length;
          const isNext = index === (currentIndex + 1) % bestSells.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform 
                ${
                  isActive
                    ? "opacity-100 scale-100 z-20 translate-x-0"
                    : isPrevious
                    ? "opacity-50 scale-90 z-10 -translate-x-[100%]"
                    : isNext
                    ? "opacity-50 scale-90 z-10 translate-x-[100%]"
                    : "opacity-0 scale-75 z-0 translate-x-[200%]"
                }`}
            >
              <div className="flex flex-col items-center justify-between px-6 py-6 w-[25rem] h-[40rem] rounded-xl custom-lightGray-bg shadow-lg">
                <div className="flex flex-col items-center justify-between px-12 py-10 rounded-xl w-full h-[55%] custom-whiteLess-bg">
                  <div className="flex flex-row items-center justify-between w-auto mb-4">
                    {item.color.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>

                  <img
                    src={item.img}
                    className="h-[80%] transition-transform duration-150 ease-in-out hover:scale-110 hover:cursor-pointer"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center leading-10 w-[85%]">
                  {item.name}
                </h2>
                <p className="text-2xl font-bold custom-darkGray-color">
                  {item.price} تومان
                </p>
                <div
                  onClick={() => handleAddToCart(item)}
                  className="flex items-end justify-end w-full"
                >
                  <button className="text-3xl text-white py-3 px-3 rounded-xl transition duration-300 hover:opacity-80 active:scale-90 hover:cursor-pointer flex items-center justify-center custom-orange-bg">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSeller;
