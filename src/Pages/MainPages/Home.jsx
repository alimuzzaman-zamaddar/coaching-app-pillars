import AboutUsSection from "@/components/HomePageSections/AboutUsSection";
import BlogSection from "@/components/HomePageSections/BlogSection";
import FaqSection from "@/components/HomePageSections/FaqSection";
import WellnessSection from "@/components/HomePageSections/WellnessSection";
import HeroSection from "@/Shared/MainHeroSection";


const Home = () => {

    return (
        <div>
            <div className="my-5"><HeroSection /></div>
            <AboutUsSection/>
            <WellnessSection/>
            <FaqSection/>
            <BlogSection/>
        </div>
    );
};

export default Home;