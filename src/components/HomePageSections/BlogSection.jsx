import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title:
      "Your Path to Daily Wellness: Stories, Science, and Strategies for a Better You",
    date: "16 March, 2025",
    description:
      "At the heart of our app is a simple idea when you show up for yourself every day...",
    link: "#",
    image: "https://i.ibb.co/5WP2rPhH/portrait-woman-sitting-tree.png",
    sections: [
      {
        heading: "",
        content: "Wellness isn’t a destination. It’s a daily decision...",
      },
      {
        heading: "The Power of Small Daily Actions",
        content: "Science shows that consistency, not intensity...",
      },
      {
        heading: "Real People. Real Results",
        content: "Take Maya, for example...",
      },
      {
        heading: "Four Pillars, One Approach",
        content:
          "**Nutrition:** Focus on balance, not perfection...\n\n**Sleep:** Establish a consistent bedtime...",
      },
      {
        heading: "Tools That Work With You",
        content: "The Pillars app supports your wellness path...",
      },
      {
        heading: "You Don’t Have to Do It Alone",
        content: "Wellness is personal, but you don’t have to go it alone...",
      },
    ],
  },
  {
    id: 2,
    title: "The Wellness Journal  Your Companion for Everyday Balance",
    date: "13 April, 2025",
    description:
      "Discover daily habits, deeper insights, and personal stories that guide you toward a healthier, more mindful life.",
    link: "#",
    image: "https://i.ibb.co/JF0tpwqF/portrait-young-woman-sitting-table.png",
    sections: [
      {
        heading: "",
        content: "Wellness isn’t a destination. It’s a daily decision...",
      },
      {
        heading: "The Power of Small Daily Actions",
        content: "Science shows that consistency, not intensity...",
      },
      {
        heading: "Real People. Real Results",
        content: "Take Maya, for example...",
      },
      {
        heading: "Four Pillars, One Approach",
        content:
          "**Nutrition:** Focus on balance, not perfection...\n\n**Sleep:** Establish a consistent bedtime...",
      },
      {
        heading: "Tools That Work With You",
        content: "The Pillars app supports your wellness path...",
      },
      {
        heading: "You Don’t Have to Do It Alone",
        content: "Wellness is personal, but you don’t have to go it alone...",
      },
    ],
  },
  {
    id: 3,
    title: "Healthy Habits Start Here Learn, Reflect, Evolve",
    date: "23 May, 2024",
    description:
      "At the heart of our app is a simple idea when you show up for yourself every day...",
    link: "#",
    image:
      "https://i.ibb.co/TMHp4Sk4/african-american-sports-woman-sportswear-running-treadmill-fit-caucasian-man-cycling-bike.png",
    sections: [
      {
        heading: "",
        content: "Wellness isn’t a destination. It’s a daily decision...",
      },
      {
        heading: "The Power of Small Daily Actions",
        content: "Science shows that consistency, not intensity...",
      },
      {
        heading: "Real People. Real Results",
        content: "Take Maya, for example...",
      },
      {
        heading: "Four Pillars, One Approach",
        content:
          "**Nutrition:** Focus on balance, not perfection...\n\n**Sleep:** Establish a consistent bedtime...",
      },
      {
        heading: "Tools That Work With You",
        content: "The Pillars app supports your wellness path...",
      },
      {
        heading: "You Don’t Have to Do It Alone",
        content: "Wellness is personal, but you don’t have to go it alone...",
      },
    ],
  },
];

const BlogSection = () => {
  return (
    <section className="px-6 py-20 max-w-[1920px] mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-10">
        <p className="mt-2 text-lg xl:text-[22px] text-gray-600 max-w-3xl text-center lg:text-left">
          Check Out Our Blog For Content From Our Expert Pillars Coaches--
          Master's Level Registered Dietitians And Certified Personal Trainers
          With Training In All Aspects Of Wellness.
        </p>
        <h2 className="text-3xl lg:text-[30px] xl:text-[56px] font-semibold text-center lg:text-left mt-4 lg:mt-0">
          Pillars Blog
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white relative shadow-lg overflow-hidden rounded-[50px] flex flex-col"
          >
            <img
              src={post.image}
              alt="Blog Image"
              className="w-full object-cover rounded-t-lg h-[450px] sm:h-[500px] lg:h-[650px]"
            />
            <div className="p-6 absolute left-4 bottom-4 2xl:left-7 2xl:bottom-7 bg-white rounded-[40px] flex flex-col justify-between 4xl:w-[88%] w-[90%] mx-auto h-[300px]">
              <div>
                <h3 className="text-lg 2xl:text-[28px] font-semibold 3xl:truncate text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-sm xl:text-[20px] text-gray-500 mb-4 truncate">
                  {post.description}
                </p>
              </div>

              <div className="flex justify-between items-center text-gray-400">
                <span className="text-sm xl:text-[20px]">{post.date}</span>
                <Link to={`/blog/${post.id}`}>
                  <button className="w-15 h-15 rounded-full border hover:bg-black hover:text-white duration-700 cursor-pointer flex justify-center items-center">
                    <FaArrowRightLong className="w-10" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[30px] 2xl:mt-[80px]">
        <Link to="#">
          <button className="py-1 px-3 2xl:py-2 2xl:px-10 text-base 2xl:text-2xl cursor-pointer font-semibold flex items-center justify-center gap-3 rounded-full border border-black hover:bg-black hover:text-white duration-700">
            Blog <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
