import React from "react";
import aboutImage from "../../assets/about/about.png"; // replace with your actual path
import { ArrowRight } from "lucide-react"; // or any icon lib you use
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="px-4 sm:px-6 py-4 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full">
          <img
            src={aboutImage}
            alt="About"
            className="rounded-[20px] w-full xl:h-[90vh] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex flex-col justify-between ">
          <div className="">
            <p className="text-2xl  font-semibold text-black mb-2">
              • About Us
            </p>
          </div>
          <div className="">
            <h2 className="text-3xl sm:text-4xl xl:text-[56px] font-semibold mb-6 leading-snug text-black">
              We Believe Small Daily Actions Create Life-Changing Results
            </h2>
            <p className="text-gray-500 text-base sm:text-[22px] mb-8 mx-auto md:mx-0">
              At the heart of our app is a simple idea: when you show up for
              yourself every day, even in small ways, your entire life begins to
              change.
            </p>
            <Link to="/about">
            <button className="bg-[#5080BE] cursor-pointer hover:bg-transparent border border-[#5080BE] hover:border-[#5080BE] duration-700 hover:text-[#5080BE] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0 transition">
              Read More <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
