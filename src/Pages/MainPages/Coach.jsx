import React from "react";
import coachimg from "../../assets/banner/coachherobg.png";
import HeroSection from "@/components/Reusable/HeroSection";
import PillarsNewsletter from "@/components/Reusable/PillarsNewsletter";
import CoachSection from "@/components/CoachPage/CoachSection";




const Coach = () => {

  return (
    <section>
      <HeroSection
        img={coachimg}
        title="The Experts Behind Your Transformation"
        description="Discover highly qualified wellness professionals who match your lifestyle, goals, and personality. Whether you're focused on weight loss, stress reduction, better sleep, or building strength — your ideal coach is just a few clicks away."
      />

      <div className="px-5 py-10 max-w-full bg-gray-50">
              <CoachSection />
      </div>
      <div className=" mb-5 ">
            <PillarsNewsletter />
            </div>
    </section>
  );
};

export default Coach;
