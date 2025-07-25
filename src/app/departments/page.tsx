import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
  ministryName="Departments Empowering Women, Children, and Communities"
  titleLabel="Departments"
/>
      <UnitsTabsSection />
    
      <CTASection
          heading="Join Us in Empowering Women and Promoting Social Justice"
          subtext="Be part of our mission to create an inclusive, equitable, and supportive Imo State for all women, children, and vulnerable groups."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
