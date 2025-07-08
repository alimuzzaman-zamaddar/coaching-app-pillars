import HeroSection from "@/components/Reusable/HeroSection"
import aboutbg from "../../assets/banner/aboutherobg.png"
import PillarsNewsletter from "@/components/Reusable/PillarsNewsletter"
import CoachSectionAboutPage from "@/components/AboutPage/CoachSectionAboutPage"
import PricingTable from "@/components/AboutPage/PricingTable"
import TestimonialSection from "@/components/AboutPage/TestimonialSection"



export const About = () => {

    return (
        <>

            <HeroSection img={aboutbg} title="Empowering Wellness, One Day at a Time" description="We believe that small, consistent actions can lead to extraordinary transformations. That’s why we created a wellness platform designed to support your physical, mental, and emotional well-being  with daily check-ins, expert coaching, and tools that fit into real life."    />
                <TestimonialSection/>
                <CoachSectionAboutPage/>
                <PricingTable/>
            <div className="my-5 mt-10">
                <PillarsNewsletter/>
            </div>

        
        
        
        </>
    )
}