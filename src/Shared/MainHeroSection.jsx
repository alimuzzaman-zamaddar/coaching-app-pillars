import React from "react";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import bannerImage from "../../src/assets/banner/banner.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <section className="relative h-[95vh] w-full rounded-[40px] overflow-hidden text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center sm:bg-[center_top] md:bg-[center] lg:bg-[center_60%] xl:bg-[center_50%] 2xl:bg-center z-0"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Main Content */}
        <div className="relative z-20 h-full grid items-end pb-[60px] sm:pb-[80px] md:pb-[100px] px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-8 w-full">
            {/* Left Text */}
            <div className="flex flex-col justify-end">
              <p className="mb-4 text-[#E9E9E9] text-xs sm:text-sm md:text-[22px] max-w-[90%] sm:max-w-[85%] lg:max-w-[100%]">
                With just a few minutes a day, track your nutrition, sleep,
                stress, and movement with your pillars coach. Receive daily
                (Monday–Friday) communication from your coach with results that
                last –– for just $99/mo.
              </p>
              <h1 className="leading-tight text-2xl sm:text-4xl md:text-5xl 2xl:text-[74px] font-medium">
                Turn Daily Check-Ins Into Lasting Change
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-start xl:justify-end items-start xl:items-end gap-4">
              {/* Google Play Button */}
              <Link
                to="/download/android"
                className="flex justify-center border hover:border-white  items-center gap-2 sm:gap-3 px-8 py-2 lg:px-12 lg:py-2 xl:px-14 xl:py-3 2xl:px-16 2xl:py-4 3xl:px-18 3xl:py-5  4xl:px-20 4xl:py-6 bg-white text-black rounded-[20px] shadow-md  transition text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px] hover:bg-black hover:text-white duration-800"
              >
                <FaGooglePlay className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]" />
                <span className="font-semibold">Google Play</span>
              </Link>

              {/* Apple Store Button */}
              <Link
                to="/download/ios"
                className="flex justify-center items-center gap-2 sm:gap-3 px-8 py-2 lg:px-12 lg:py-2 xl:px-14 xl:py-3 2xl:px-16 2xl:py-4 3xl:px-18 3xl:py-5 4xl:px-20 4xl:py-6 
             bg-gradient-to-r from-[#4e4e4e] to-[#2d2d2d] text-white rounded-[20px] shadow-md 
             hover:bg-white hover:from-white hover:to-white hover:text-black 
             transition duration-700 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]"
              >
                <FaApple className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] 4xl:text-[24px]" />
                <span className="font-semibold">Apple Store</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
