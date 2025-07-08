import React, { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import img1 from "../../assets/coaches/attractive-athletic-girl-stands-wall-simulators-gym-healthy-lifestyle.png";
import img2 from "../../assets/coaches/medium-shot-athletic-man-posing.png";
import img3 from "../../assets/coaches/medium-shot-smiley-man-gym.png";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const coaches = [
  {
    id: 1,
    name: "Jordan Mitchell",
    match: "95%",
    image: img1,
    roles: ["Holistic Health Mentor", "Behavior Change Specialist"],
    location: "Denver, Colorado, USA",
    bio: `Jordan brings over 7 years of experience in holistic health coaching, with a background in behavioral psychology and certified training in plant-based nutrition. They specialize in helping busy professionals and parents build sustainable habits around food, movement, and mindset. Known for compassionate listening and powerful goal-mapping, Jordan helps clients move from “overwhelmed” to “in control.`,
    coachingStyle: [
      "Gentle encouragement",
      "Sleep and energy optimization",
      "Behavior change focused",
    ],
    experience: [
      "Strength & conditioning",
      "Habit formation",
      "Post injury fitness",
    ],
    loves: [
      "Hiking trails & nature",
      "Playing acoustic guitar",
      "Cooking plant-based meals",
    ],
  },
  {
    id: 2,
    name: "Maya Thompson",
    match: "95%",
    image: img2,
    roles: ["Motivational Strategist", "Certified Fitness & Mindset Coach"],
    location: "San Diego, California, USA",
    bio: `Maya combines fitness with mindset coaching to empower clients to reach their physical and mental peak. With a background in sports psychology, she integrates motivational strategies into her sessions.`,
    coachingStyle: [
      "Empowering challenges",
      "Mindset training",
      "Holistic goal setting",
    ],
    experience: [
      "Athlete mental coaching",
      "HIIT program design",
      "Client transformation tracking",
    ],
    loves: ["Surfing at dawn", "Journaling goals", "Green smoothies"],
  },
  {
    id: 3,
    name: "Elias Romero",
    match: "95%",
    image: img3,
    roles: [
      "Certified Sleep & Stress Management Coach",
      "Calm Energy Specialist",
    ],
    location: "Austin, Texas, USA",
    bio: `Elias helps busy professionals reduce stress and improve sleep through practical daily habits and calming routines. His approach is structured yet soothing.`,
    coachingStyle: [
      "Calm routine creation",
      "Sleep-first mindset",
      "Gentle habit tracking",
    ],
    experience: [
      "Sleep coaching",
      "Guided breathwork",
      "Stress response therapy",
    ],
    loves: ["Evening meditations", "Herbal teas", "Journaling reflections"],
  },
];

const CoachSectionAboutPage = () => {
  const [selectedCoachId, setSelectedCoachId] = useState(null);

  const selectedCoach = coaches.find((coach) => coach.id === selectedCoachId);

  const handleOpenModal = (id) => setSelectedCoachId(id);
  const handleCloseModal = () => setSelectedCoachId(null);

  useEffect(() => {
    if (selectedCoachId !== null) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [selectedCoachId]);

  return (
    <section className="px-4 py-10 xl:py-30">
      <div className="flex flex-col lg:flex-row  justify-between items-center mb-10 xl:mb-30">
        <h2 className="text-3xl lg:text-[30px] xl:text-[56px] font-semibold text-center lg:text-left mt-4 lg:mt-0">
          Meet Your Pillars Coach
        </h2>
        <p className="mt-2 text-lg  xl:text-[22px] text-gray-600 max-w-3xl text-center lg:text-left">
          Work one on one with a certified expert who checks in daily and helps
          you build lasting, healthy habits.
        </p>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className=" rounded-[40px] overflow-hidden">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-full rounded-[40px]"
            />
            <div className="p-5 border border-[#E6E6E6] rounded-[40px] mt-5">
              <div className="flex justify-between items-center mb-2 lg:mb-6">
                <h3 className="font-semibold text-xl xl:text-[24px]">{coach.name}</h3>
                <span className="text-xs xl:text-[22px] text-gray-500">
                  {coach.match} Match
                </span>
              </div>
              <ul className="text-sm xl:text-[22px] text-gray-600 mb-3">
                {coach.roles?.slice(0, 2).map((role, i) => (
                  <li className="" key={i}>• {role}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(coach.id)}
                  className="text-sm font-medium xl:text-[18px] bg-white cursor-pointer text-black duration-700 border hover:bg-black hover:text-white py-2 px-4 rounded-full"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal Section */}
      {selectedCoach && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 py-10 overflow-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-[30px] w-full max-w-5xl mx-auto p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left: Image */}
              <div className="w-full lg:w-[35%] shrink-0">
                <img
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  className="w-full h-[200px] sm:h-[240px] object-cover object-[top_center] rounded-[20px]"
                />
              </div>

              {/* Right: Info */}
              <div className="flex-1">
                <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {selectedCoach.name}
                </h2>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  {selectedCoach.bio ||
                    "This coach helps clients build healthy habits and unlock their full potential through personalized strategies."}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 ">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {/* Coaching Style */}
                  <div>
                    <h4 className="text-sm lg:text-[20px] text-black font-semibold   mb-2 tracking-wide">
                      Coaching Style
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(selectedCoach.coachingStyle || []).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="text-sm lg:text-[20px] text-black font-semibold  mb-2  tracking-wide">
                      Experience
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(selectedCoach.experience || []).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Loves */}
                  <div>
                    <h4 className="text-sm lg:text-[20px] text-black font-semibold mb-2  tracking-wide">
                      Loves
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(selectedCoach.loves || []).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 xl:mt-[100px]">
                  <div className="flex items-center gap-2 text-sm text-gray-800 font-semibold">
                    <FaLocationDot />{" "}
                    {selectedCoach.location || "Location not provided"}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCoachId(null);
                      Swal.fire({
                        icon: "success",
                        title: "Redirecting...",
                        text: "You’ll be redirected to the app store.",
                        showConfirmButton: false,
                        timer: 1800,
                        timerProgressBar: true,
                      });
                    }}
                    className="bg-[#5080BE] border cursor-pointer border-[#5080BE] hover:bg-white hover:text-[#5080BE] text-white lg:px-20 px-6 py-2.5 text-sm rounded-full duration-700"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Link to="/coach" className="flex justify-center mt-30">
        <button className="bg-[#5080BE] text-sm xl:text-[20px] cursor-pointer hover:bg-transparent border border-[#5080BE] hover:border-[#5080BE] duration-700 hover:text-[#5080BE] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0 transition">
          View All coaches
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </section>
  );
};

export default CoachSectionAboutPage;
