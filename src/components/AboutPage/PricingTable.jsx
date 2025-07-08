import { useState } from "react";

export default function PricingTable() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Daily self check ins And journaling",
      content:
        "Check-in daily on each of the pillars (from a scale from 1-100). For each check-in, you have the opportunity to journal on that particular pillar. Journal your food, movement, sleep, and stress using text or photos.",
    },
    {
      title: "Advance Analytics",
      content: "Detailed insights into your health trends and habits.",
    },
    {
      title: "Pillars Curriculum",
      content:
        "Guided learning modules to strengthen your wellness foundation.",
    },
    {
      title: "Daily coach check and In messaging",
      content: "Chat with a wellness coach for daily motivation.",
    },
    {
      title: "Resource database",
      content: "Exclusive access to curated articles, videos, and tools.",
    },
    {
      title: "Face to face calling",
      content: "One-on-one video calls with your personal coach.",
    },
    {
      title: "Community",
      content: "Connect with others on the same wellness journey.",
    },
  ];

  return (
    <div className=" text-black py-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-center  max-w-6xl mx-auto text-xl xl:text-[56px] font-medium mb-10">
        Start building better habits 7 days on us
      </h2>
      <p className="text-center max-w-6xl mx-auto text-lg text-[#7E7E7E] xl:text-[24px] mb-10 xl:mb-20">
        Real stories from real people who have transformed their wellness
        through daily check-ins, personalized coaching, and our Pillars
        curriculum.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-[1480px] mx-auto">
        {/* Free Plan */}
        <div className="bg-[#F4F4F4] text-black rounded-[20px] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl xl:text-[74px] font-medium mb-2">Free</h3>
            <p className="text-gray-600 xl:text-[32px]  font-medium mb-4">
              Starter
            </p>
            <p className="text-sm text-gray-500 xl:text-[18px] mb-6">
              For the self-starter who wants to begin building better habits
              with foundational tools.
            </p>
            <ul className="space-y-4">
              <li className="bg-[#EFEFEF] rounded-lg px-4 py-2 text-sm xl:text-[24px]">
                Daily journal tracking for all four pillars
              </li>
              <li className="bg-[#EFEFEF] rounded-lg px-4 py-2 text-sm xl:text-[24px]">
                Access to your basic wellness history
              </li>
              <li className="bg-[#EFEFEF] rounded-lg px-4 py-2 text-sm xl:text-[24px]">
                Daily journal tracking for all four pillars
              </li>
            </ul>
          </div>
          <button className="mt-8 border border-black px-6 py-2 rounded-full text-sm xl:text-[20px] duration-500 cursor-pointer font-medium hover:bg-black hover:text-white transition">
            Start the Free Program
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-[#08233E] text-white rounded-[20px] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl xl:text-[74px] font-medium mb-2">$99/mo</h3>
            <p className="text-white xl:text-[32px] font-medium mb-4">
              Premium Membership
            </p>
            <p className="text-sm xl:text-[18px] text-gray-400 mb-6">
              For those ready to take control of their health with full coaching
              support and professional accountability. Includes Everything in
              Free.
            </p>

            {/* Accordion Features */}
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-3">
                <button
                  className={`w-full text-left ease-in-out px-4 py-3 bg-[#1B324A] font-medium text-sm xl:text-[24px] flex justify-between items-center
                    ${openIndex === index ? " rounded-t-lg" : "rounded-lg"}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                {openIndex === index && (
                  <div className="text-sm xl:text-[18px] bg-[#1B324A] ease-in-out rounded-b-lg text-gray-300 py-2 px-4">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="mt-8 bg-[#5080BE] px-6 py-2 rounded-full text-sm cursor-pointer xl:text-[20px] font-medium hover:bg-white duration-500 hover:text-black transition">
            Start Your 7 Day Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
