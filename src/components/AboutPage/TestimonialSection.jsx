import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    role: "Marketing Director",
    text: "This app changed how I look at self care. The check ins keep me grounded, and the coaching keeps me moving forward literally and mentally!",
    name: "Jenna Lee",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5.0,
  },
  {
    role: "Software Engineer",
    text: "As a busy parent, finding time for myself was hard. Now I feel supported daily without feeling overwhelmed.",
    name: "David Nguyen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5.0,
  },
  {
    role: "Yoga Instructor",
    text: "The small, daily habits really added up. My coach helped me stay accountable, and I feel more energized than ever.",
    name: "Priya S",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5.0,
  },
  {
    role: "Yoga Instructor",
    text: "The small, daily habits really added up. My coach helped me stay accountable, and I feel more energized than ever.",
    name: "Priya S",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5.0,
  },
  {
    role: "Yoga Instructor",
    text: "The small, daily habits really added up. My coach helped me stay accountable, and I feel more energized than ever.",
    name: "Priya S",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5.0,
  },
  {
    role: "Yoga Instructor",
    text: "The small, daily habits really added up. My coach helped me stay accountable, and I feel more energized than ever.",
    name: "Priya S",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5.0,
  },
];

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    // Trigger re-render once refs are available
    setNavigationReady(true);
  }, []);

  return (
    <section className="bg-[#0A1B35] text-white px-5 pt-2 pb-[150px] my-10 xl:my-[100px]">
      <div className=" mx-auto relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:my-[100px] mb-10">
          <p className="text-gray-300 max-w-2xl text-sm xl:text-[24px] ">
            Real stories from real people who have transformed their wellness through daily check-ins, personalized coaching, and our Pillars curriculum.
          </p>
          <h2 className="md:text-3xl text-xl xl:text-[56px] font-medium mt-4 md:mt-0 text-right">
            Wellness Wins Shared by<br />Real People
          </h2>
        </div>

        {navigationReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1B324A] rounded-[20px] p-6 flex flex-col justify-between min-h-[340px] h-full">
                  <div>
                    <span className="bg-[#112D4E] text-white text-xs xl:text-[24px] px-4 py-1 rounded-full font-medium inline-block mb-4">
                      {t.role}
                    </span>
                    <p className="text-white text-sm xl:text-[32px] xl:pt-[100px] mb-6">{t.text}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className=" ">
                      <img src={t.image} alt={t.name} className="w-[106px] h-[106px] mb-3 gap-3 rounded-[20px] object-cover" />
                      <p className="text-sm font-semibold">{t.name}</p>
                    </div>
                    <div className="text-sm flex items-center gap-1">
                      <span className="text-white">★</span>
                      <span className="text-white">{t.rating.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Bottom-left navigation buttons */}
        <div className="flex gap-4 mt-8 absolute -bottom-20 left-20 z-10">
          <button
            ref={prevRef}
            className="w-20 h-10 rounded-full  xl:text-[22px]  border border-white flex items-center justify-center duration-500 text-white hover:bg-white hover:text-black transition"
          >
            <FaArrowLeftLong/>
          </button>
          <button
            ref={nextRef}
            className="w-20 h-10 rounded-full xl:text-[22px] bg-[#5080BE] text-white flex items-center justify-center hover:bg-[#3a4f69] duration-500 transition"
          >
            <FaArrowRightLong/>
          </button>
        </div>
      </div>
    </section>
  );
}
