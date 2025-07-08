import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import img1 from "../../assets/coaches/attractive-athletic-girl-stands-wall-simulators-gym-healthy-lifestyle.png";
import img2 from "../../assets/coaches/medium-shot-athletic-man-posing.png";
import img3 from "../../assets/coaches/medium-shot-smiley-man-gym.png";
import img4 from "../../assets/coaches/side-view-smiley-man-gym.png";
import img5 from "../../assets/coaches/young-adult-doing-indoor-sport-gym.png";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

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
  {
    id: 4,
    name: "Emilino Mark",
    match: "95%",
    image: img4,
    roles: ["Resilience Coach", "Men's Health Strategist"],
    location: "Chicago, Illinois, USA",
    bio: `With a focus on discipline and emotional strength, Emilino coaches men through lifestyle transformations and building resilience in high-stress environments.`,
    coachingStyle: [
      "Direct feedback",
      "Mind-body awareness",
      "Challenge-driven results",
    ],
    experience: [
      "Men's hormone balance",
      "Resilience training",
      "Post-burnout coaching",
    ],
    loves: ["Strength training", "Solo hiking", "Reading stoic philosophy"],
  },
  {
    id: 5,
    name: "Micale Clark",
    match: "95%",
    image: img5,
    roles: ["Mindfulness Mentor", "Habit-Building Expert"],
    location: "Seattle, Washington, USA",
    bio: `Micale helps clients center themselves through mindfulness while gradually building consistent life habits. She blends meditation with habit-stacking techniques.`,
    coachingStyle: [
      "Compassion-first",
      "Slow habit layering",
      "Reflective awareness",
    ],
    experience: [
      "Mindful eating guidance",
      "Habit anchor setup",
      "Meditation facilitation",
    ],
    loves: [
      "Minimalist living",
      "Yoga and breathwork",
      "Teaching mindfulness to kids",
    ],
  },
  {
    id: 1,
    name: "Jordan Mitchell",
    match: "95%",
    image: img1,
    roles: ["Holistic Health Mentor", "Behavior Change Specialist"],
    location: "Denver, Colorado, USA",
    bio: `Jordan brings over 7 years of experience in holistic health coaching, with a background in behavioral psychology and certified training in plant-based nutrition. He helps clients build sustainable habits around food, movement, and mindset.`,
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
  {
    id: 4,
    name: "Emilino Mark",
    match: "95%",
    image: img4,
    roles: ["Resilience Coach", "Men's Health Strategist"],
    location: "Chicago, Illinois, USA",
    bio: `With a focus on discipline and emotional strength, Emilino coaches men through lifestyle transformations and building resilience in high-stress environments.`,
    coachingStyle: [
      "Direct feedback",
      "Mind-body awareness",
      "Challenge-driven results",
    ],
    experience: [
      "Men's hormone balance",
      "Resilience training",
      "Post-burnout coaching",
    ],
    loves: ["Strength training", "Solo hiking", "Reading stoic philosophy"],
  },
  {
    id: 5,
    name: "Micale Clark",
    match: "95%",
    image: img5,
    roles: ["Mindfulness Mentor", "Habit-Building Expert"],
    location: "Seattle, Washington, USA",
    bio: `Micale helps clients center themselves through mindfulness while gradually building consistent life habits. She blends meditation with habit-stacking techniques.`,
    coachingStyle: [
      "Compassion-first",
      "Slow habit layering",
      "Reflective awareness",
    ],
    experience: [
      "Mindful eating guidance",
      "Habit anchor setup",
      "Meditation facilitation",
    ],
    loves: [
      "Minimalist living",
      "Yoga and breathwork",
      "Teaching mindfulness to kids",
    ],
  },
  {
    id: 1,
    name: "Jordan Mitchell",
    match: "95%",
    image: img1,
    roles: ["Holistic Health Mentor", "Behavior Change Specialist"],
    location: "Denver, Colorado, USA",
    bio: `Jordan brings over 7 years of experience in holistic health coaching, with a background in behavioral psychology and certified training in plant-based nutrition. He helps clients build sustainable habits around food, movement, and mindset.`,
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
  {
    id: 4,
    name: "Emilino Mark",
    match: "95%",
    image: img4,
    roles: ["Resilience Coach", "Men's Health Strategist"],
    location: "Chicago, Illinois, USA",
    bio: `With a focus on discipline and emotional strength, Emilino coaches men through lifestyle transformations and building resilience in high-stress environments.`,
    coachingStyle: [
      "Direct feedback",
      "Mind-body awareness",
      "Challenge-driven results",
    ],
    experience: [
      "Men's hormone balance",
      "Resilience training",
      "Post-burnout coaching",
    ],
    loves: ["Strength training", "Solo hiking", "Reading stoic philosophy"],
  },
  {
    id: 5,
    name: "Micale Clark",
    match: "95%",
    image: img5,
    roles: ["Mindfulness Mentor", "Habit-Building Expert"],
    location: "Seattle, Washington, USA",
    bio: `Micale helps clients center themselves through mindfulness while gradually building consistent life habits. She blends meditation with habit-stacking techniques.`,
    coachingStyle: [
      "Compassion-first",
      "Slow habit layering",
      "Reflective awareness",
    ],
    experience: [
      "Mindful eating guidance",
      "Habit anchor setup",
      "Meditation facilitation",
    ],
    loves: [
      "Minimalist living",
      "Yoga and breathwork",
      "Teaching mindfulness to kids",
    ],
  },
  {
    id: 1,
    name: "Jordan Mitchell",
    match: "95%",
    image: img1,
    roles: ["Holistic Health Mentor", "Behavior Change Specialist"],
    location: "Denver, Colorado, USA",
    bio: `Jordan brings over 7 years of experience in holistic health coaching, with a background in behavioral psychology and certified training in plant-based nutrition. He helps clients build sustainable habits around food, movement, and mindset.`,
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
  {
    id: 4,
    name: "Emilino Mark",
    match: "95%",
    image: img4,
    roles: ["Resilience Coach", "Men's Health Strategist"],
    location: "Chicago, Illinois, USA",
    bio: `With a focus on discipline and emotional strength, Emilino coaches men through lifestyle transformations and building resilience in high-stress environments.`,
    coachingStyle: [
      "Direct feedback",
      "Mind-body awareness",
      "Challenge-driven results",
    ],
    experience: [
      "Men's hormone balance",
      "Resilience training",
      "Post-burnout coaching",
    ],
    loves: ["Strength training", "Solo hiking", "Reading stoic philosophy"],
  },
  {
    id: 5,
    name: "Micale Clark",
    match: "95%",
    image: img5,
    roles: ["Mindfulness Mentor", "Habit-Building Expert"],
    location: "Seattle, Washington, USA",
    bio: `Micale helps clients center themselves through mindfulness while gradually building consistent life habits. She blends meditation with habit-stacking techniques.`,
    coachingStyle: [
      "Compassion-first",
      "Slow habit layering",
      "Reflective awareness",
    ],
    experience: [
      "Mindful eating guidance",
      "Habit anchor setup",
      "Meditation facilitation",
    ],
    loves: [
      "Minimalist living",
      "Yoga and breathwork",
      "Teaching mindfulness to kids",
    ],
  },
  {
    id: 1,
    name: "Jordan Mitchell",
    match: "95%",
    image: img1,
    roles: ["Holistic Health Mentor", "Behavior Change Specialist"],
    location: "Denver, Colorado, USA",
    bio: `Jordan brings over 7 years of experience in holistic health coaching, with a background in behavioral psychology and certified training in plant-based nutrition. He helps clients build sustainable habits around food, movement, and mindset.`,
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
  {
    id: 4,
    name: "Emilino Mark",
    match: "95%",
    image: img4,
    roles: ["Resilience Coach", "Men's Health Strategist"],
    location: "Chicago, Illinois, USA",
    bio: `With a focus on discipline and emotional strength, Emilino coaches men through lifestyle transformations and building resilience in high-stress environments.`,
    coachingStyle: [
      "Direct feedback",
      "Mind-body awareness",
      "Challenge-driven results",
    ],
    experience: [
      "Men's hormone balance",
      "Resilience training",
      "Post-burnout coaching",
    ],
    loves: ["Strength training", "Solo hiking", "Reading stoic philosophy"],
  },
  {
    id: 5,
    name: "Micale Clark",
    match: "95%",
    image: img5,
    roles: ["Mindfulness Mentor", "Habit-Building Expert"],
    location: "Seattle, Washington, USA",
    bio: `Micale helps clients center themselves through mindfulness while gradually building consistent life habits. She blends meditation with habit-stacking techniques.`,
    coachingStyle: [
      "Compassion-first",
      "Slow habit layering",
      "Reflective awareness",
    ],
    experience: [
      "Mindful eating guidance",
      "Habit anchor setup",
      "Meditation facilitation",
    ],
    loves: [
      "Minimalist living",
      "Yoga and breathwork",
      "Teaching mindfulness to kids",
    ],
  },
];

const CoachSection = () => {
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
    <section className="px-4 py-10">
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className=" rounded-[40px] overflow-hidden">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-full rounded-[40px]"
            />
            <div className="p-5 border border-[#E6E6E6] rounded-[40px] mt-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold xl:text-[24px]">{coach.name}</h3>
                <span className="text-xs xl:text-[18px] text-gray-500">
                  {coach.match} Match
                </span>
              </div>
              <ul className="text-sm xl:text-[18px] text-gray-600 mb-3">
                {coach.roles?.slice(0, 2).map((role, i) => (
                  <li key={i}>• {role}</li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button
                  onClick={() => handleOpenModal(coach.id)}
                  className="text-sm xl:text-[17.7px] font-medium bg-white cursor-pointer text-black duration-700 border hover:bg-black hover:text-white py-2 px-4 rounded-full"
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
        <div onClick={handleCloseModal}  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 py-10 overflow-auto">
          <div  onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-[30px] w-full max-w-5xl mx-auto p-6 sm:p-8">
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

                <p className="text-gray-700 text-sm sm:text-base xl:text-[18px] leading-relaxed mb-4">
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
                    <ul className="text-sm xl:text-[18px] text-gray-600 space-y-1">
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
                    <ul className="text-sm xl:text-[18px] text-gray-600 space-y-1">
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
                    <ul className="text-sm xl:text-[18px] text-gray-600 space-y-1">
                      {(selectedCoach.loves || []).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 xl:mt-[100px]">
                  <div className="flex items-center gap-2 text-sm xl:text-[20px] text-[#7E7E7E] font-semibold">
                    <FaLocationDot className="text-black" />{" "}
                    {selectedCoach.location || "Location not provided"}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCoachId(null)
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
    </section>
  );
};

export default CoachSection;
