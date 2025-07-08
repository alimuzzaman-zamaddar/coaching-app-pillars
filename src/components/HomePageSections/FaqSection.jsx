import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How do the daily check-ins work?",
    answer:
      "You will check in on all aspects of wellness every single day in the Pillars app with nutrition, sleep, stress, and movement. Your pillars coach will be able to view your daily check-ins to provide daily feedback and guidance!",
  },
  {
    question: "What kind of coaching is included?",
    answer:
      "Yes! There is a one week free trial with our premium version, and after the trial, you will be billed $99 per month. You may also use the free version of the app which only has the ability for pillars tracking and analytics. The free version does not include (1) daily coach check-ins, (2) daily wellness lessons, (3) resources database, (4) optional zoom check-in calls covered by insurance.",
  },
  {
    question: "What kind of coaching is included?",
    answer:
      "You will have the ability to receive daily check-in messaging from your pillars coach, receive daily content lessons on the pillars of health, join a group community of like-minded individuals, and track your wellness daily!",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Yes! You will have the ability to set goals with your coach and track your progress over time by marking those goals as complete and viewing the analytics area of the app.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:py-[250px]">
      {/* Left Side */}
      <div className="flex flex-col justify-between">
        <h2 className="text-3xl lg:text-[30px] xl:text-[56px] font-semibold mb-10">
          Everything You Need to Know <br /> to Get Started
        </h2>
        <div>
          <button className="bg-[#5080BE] hover:bg-transparent border border-[#5080BE] hover:border-[#5080BE] cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-2 text-base font-semibold hover:text-[#5080BE]  duration-700">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Side: FAQ Accordion */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-[32px] bg-[#F1F5F9] text-[#0D1C2E] transition-all duration-2000"
            >
              <button
                className="w-full cursor-pointer text-left p-6 flex items-center ease-in-out justify-between font-semibold text-base lg:text-[28px]"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {faq.question}
                {isOpen ? (
                  <ChevronDown className="w-5 h-5 transition-transform transform rotate-180" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform transform rotate-0" />
                )}
              </button>
              <div
                className={`transition-all duration-[2000ms] ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  transitionProperty: "max-height, opacity",
                }}
              >
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{
                    transitionProperty: "max-height, opacity",
                  }}
                >
                  <div className="px-6 pb-6 pt-0 text-sm xl:text-[22px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
