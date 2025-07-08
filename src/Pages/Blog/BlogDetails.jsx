import React from "react";
import { useParams } from "react-router-dom";
import BlogSlider from "./BlogSlider";
import PillarsNewsletter from "@/components/Reusable/PillarsNewsletter";

const BlogDetails = () => {
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
      coverImage: "https://i.ibb.co/DgTCv9Y7/Frame-2147227683-2.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
      coverImage: "https://i.ibb.co/1JQMh47K/Frame-2147227683-3.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
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
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
        },
      ],
    },
    {
      id: 8,
      title: "Healthy Habits Start Here Learn, Reflect, Evolve",
      date: "23 May, 2024",
      description:
        "At the heart of our app is a simple idea when you show up for yourself every day...",
      link: "#",
      image:
        "https://i.ibb.co/TMHp4Sk4/african-american-sports-woman-sportswear-running-treadmill-fit-caucasian-man-cycling-bike.png",
        coverImage:  "https://i.ibb.co/dwLxNZcX/Frame-2147227683-4.png",
      sections: [
        {
          heading: "",
          content:
            "Wellness isn’t a destination it’s a daily decision. Whether you're just starting out or refining your routine, embracing a consistent, holistic approach to your well-being can bring long-term change. In this post, we explore real user stories, proven science, and expert strategies that align with the four foundational pillars: nutrition, movement, sleep, and mental well-being.",
        },
        {
          heading: "The Power of Small Daily Actions",
          content:
            "Science shows that consistency not intensity is the key to sustainable progress. Making small improvements across your wellness pillars every day leads to compounding results. For example, walking 20 minutes daily can reduce heart disease risk significantly over time.",
        },
        {
          heading: "Real People. Real Results",
          content:
            "Take Maya, for example after struggling with sleep and stress, she began using the Pillars check in feature nightly. Just reflecting on my day made me more aware of my habits. I started sleeping better within two weeks.Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.",
        },
        {
          heading: "Four Pillars, One Approach",
          content:
            "Or James, who thought nutrition was his weakness but discovered that poor sleep was sabotaging his energy. Once he prioritized sleep hygiene, his afternoon cravings faded.Movement: You don’t need a gym. Gentle stretching, dancing, or walking can be just as powerful when practiced regularly",
        },
        {
          heading: "Tools That Work With You",
          content:
            "The Pillars app supports your wellness path with customizable check-ins, coach messaging, guided lessons, and progress analytics. Track your data, get feedback from certified coaches, and see what’s working (and what’s not).",
        },
        {
          heading: "You Don’t Have to Do It Alone",
          content:
            "Wellness is personal but you don’t have to go it alone. By combining science, real stories, and accessible tools, you can create a lifestyle that truly supports who you want to become.",
        },
      ],
    },
  ];
  const { id } = useParams(); 

  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="p-10 text-red-500">Blog post not found.</div>;
  }

  return (
    <>
    <div className="text-black font-sans">
      {/* Hero Image and Title */}
      <div className="relative mx-5 mt-5 rounded-[30px] h-[75vh] center center overflow-hidden">
        {/* Background Image */}
        <img
          src={blog.coverImage}
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover center center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Text Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="pl-10 pt-auto sm:pl-16 md:pl-24 md:max-w-[70%] mb-10">
            <h1 className="text-white text-xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>
      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        {blog.sections.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                {section.heading}
              </h2>
            )}
            <p className="text-gray-500 whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="">
          <BlogSlider/>
        <div className="my-5">
        <PillarsNewsletter/>
        </div>
    </div>
    </>
  );
};

export default BlogDetails;
