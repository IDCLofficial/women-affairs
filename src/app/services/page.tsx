import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Services offered by the Ministry of Women Affairs & Social Welfare of the Imo State Government.",
  path: "/services",
});


export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="What we do"
                titleLabel="Services"
            />
            <ServiceCard />
            
            {/* CTASection */}
            <CTASection
                   heading="Join Us in Empowering Women and Promoting Social Justice"
                   subtext="Be part of our mission to create an inclusive, equitable, and supportive Imo State for all women, children, and vulnerable groups."
                   buttonLabel="Contact Us"
                   buttonHref="/contact-us"
                 />
            {/* Footer */}
            <Footer />
        </div>
    )
}