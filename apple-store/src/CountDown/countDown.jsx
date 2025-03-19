import React, { useState, useEffect } from "react";

const Countdown = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="flex gap-2 text-center">
      <div className="sm:w-16 w-12 sm:h-16 h-12 flex flex-col items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-md">
        <span>{timeLeft.days}</span>
        <span className="text-sm font-normal">روز</span>
      </div>

      <div className="sm:w-16 w-12 sm:h-16 h-12 flex flex-col items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-md">
        <span>{timeLeft.hours}</span>
        <span className="text-sm font-normal">ساعت</span>
      </div>

      <div className="sm:w-16 w-12 sm:h-16 h-12 flex flex-col items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-md">
        <span>{timeLeft.minutes}</span>
        <span className="text-sm font-normal">دقیقه</span>
      </div>

      <div className="sm:w-16 w-12 sm:h-16 h-12 flex flex-col items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-md">
        <span>{timeLeft.seconds}</span>
        <span className="text-sm font-normal">ثانیه</span>
      </div>
    </div>
  );
};
export default Countdown;
