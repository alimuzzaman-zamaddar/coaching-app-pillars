import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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

const BlogSlider = () => {
  return (
    <section className="px-6 py-20 max-w-[1920px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-xl lg:text-[30px] xl:text-[56px] font-semibold text-center lg:text-left mt-4 lg:mt-0">
          More popular blogs
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white relative shadow-lg overflow-hidden rounded-[50px] flex flex-col h-full">
              <img
                src={post.image}
                alt="Blog"
                className="w-full object-cover rounded-t-lg h-[500px] md:h-[500px] lg:h-[600px]"
              />
              <div className="p-6 absolute left-4 bottom-4 2xl:left-7 2xl:bottom-7 bg-white rounded-[40px] flex flex-col justify-between w-[90%] mx-auto h-[300px]">
                <div>
                  <h3 className="text-lg 2xl:text-[28px] font-semibold truncate text-gray-800 mb-4">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogSlider;
