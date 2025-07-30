import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import { StructuresSection } from "@/app/about/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";

export default function AboutUs() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Women Affairs and Social Welfare"
                titleLabel="About Us"
            />
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Women Affairs and Social Welfare in Imo State serves as a vital engine for social transformation, especially as the state seeks to promote gender equality and social inclusion. While there's still room for growth and reform, the ministry represents a key opportunity for empowerment and sustainable development in Imo State.\nThe Ministry of Women Affairs and Social Welfare in Imo State is a government agency responsible for promoting women empowerment and regulating social welfare programs within the state. It is a strategic part of the state's development plan, especially considering Imo's diverse population.\nThe ministry was likely formed from a merger or restructuring of previous departments such as the Ministry of Women Affairs and sections of Social Welfare units.\nOver the years, successive governments in Imo State have recognized the importance of harnessing local resources and empowering women, children, and vulnerable groups, which are abundant in the region."
                imgSrc="/images/women8.jpg"
                altText="Our Story - Imo State Ministry of Women Affairs and Social Welfare conference event"
            />
            {/* Commissioner Section */}
           
            <MissionVisionCard />
            <TeamPage />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
            />
            {/* CTASection */}
            <CTASection
                heading="Join our mission to empower women and promote social justice in Imo State"
                buttonLabel="See Our Initiatives"
                buttonHref="/projects"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}