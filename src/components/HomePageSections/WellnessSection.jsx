import React from "react";
import coachingImg from "../../assets/WellnessSection/buying.png";
import busyImg from "../../assets/WellnessSection/coach.png";
import CountUp from "react-countup";

const WellnessCards = () => {
  return (
    <section className="bg-[#0D1C2E] text-white px-6  py-20">
      <div className=" mx-auto grid gap-6">
        {/* === Row 1 === */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Card 1 - Image with overlay */}
          <div
            className="relative rounded-[32px] overflow-hidden h-[450px]"
            style={{
              backgroundImage: `url(${coachingImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div className="bg-[rgba(139,139,139,0.4)] backdrop-blur-[21.7px] rounded-[30px] p-6 lg:w-[70%]">
                <h3 className="text-xl lg:text-[24px] font-medium mb-2">
                  Personal Wellness Coaching
                </h3>
                <p className="text-sm lg:text-[22px] text-gray-200 z-99">
                  Sustainable change starts with consistent effort and
                  personalized 1:1 support. You do not have to embark on your
                  wellness journey alone! Our experienced coaches are here to
                  guide, support, and motivate you with tailored advice that
                  fits your lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Happy Clients */}
          <div className="bg-[#16283f] rounded-[32px] p-6 flex flex-col justify-between lx:h-[450px]">
            <div className="">
              <button className="inline-block  bg-[#0D1C2E] text-white text-sm font-medium px-4 py-2 rounded-full mb-3">
                Happy Clients
              </button>
            </div>

            <div className="">
              <CountUp
                end={900}
                duration={3}
                suffix="+"
                className="text-[64px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[180px] leading-none font-normal mb-3"
              />

              <p className="text-sm lg:text-[22px] text-gray-300">
                The number of individuals that have transformed their health and
                wellness with our personalized approach. With the right tools
                and support, lasting wellness and sustainable change is possible
                for everyone.
              </p>
            </div>
          </div>
        </div>

        {/* === Row 2 === */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Left Column - Two stacked cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3 - Experience */}
            <div className="bg-[#16283f] rounded-[32px] p-6 flex flex-col">
              <div className="">
                <button className="inline-block  bg-[#0D1C2E] text-white text-sm font-medium px-4 py-2 rounded-full mb-3">
                  Experience
                </button>
              </div>

              <div className="mt-[80px]">
                <CountUp
                  end={5}
                  duration={3}
                  suffix="+"
                  className="text-[64px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[180px] leading-none font-normalmb-3"
                />
                <p className="text-sm lg:text-[22px] text-gray-300">
                  The minimum number of years of education that each of our
                  coaches must have to become a Pillars coach. Your coach is an
                  experienced and knowledgeable individual who is committed to
                  your success.
                </p>
              </div>
            </div>

            {/* Card 4 - Total Coaches */}
            <div className="bg-[#16283f] rounded-[32px] p-6 flex flex-col ">
              <div className="">
                <button className="inline-block bg-[#0D1C2E]  text-white text-sm font-medium px-4 py-2 rounded-full mb-3">
                  Total Coaches
                </button>
              </div>
              <div className="mt-[80px]">
                <div className="">
                  <CountUp
                    end={70}
                    duration={3}
                    suffix="+"
                    className="text-[64px] sm:text-[96px] md:text-[120px] lg:text-[150px] xl:text-[180px] leading-none font-normal mb-3"
                  />
                </div>
                <p className="text-sm lg:text-[22px] text-gray-300">
                  We have a wide number of coaches to choose from that are
                  committed to your health and wellness success.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Full height image */}
          <div
            className="relative rounded-[32px] overflow-hidden h-[100%] min-h-[450px]"
            style={{
              backgroundImage: `url(${busyImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <div className="bg-[rgba(139,139,139,0.4)] backdrop-blur-[21.7px] rounded-[30px] p-6 lg:w-[70%]">
                <h3 className="text-xl lg:text-[24px] font-medium mb-2">
                  Built for Busy People
                </h3>
                <p className="text-sm lg:text-[22px] text-gray-200 z-99">
                  Whether you're juggling work, family, or life stress, Pillars
                  helps you stay consistent with quick check-ins, daily
                  curriculum, and personalized support — one small step at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessCards;
