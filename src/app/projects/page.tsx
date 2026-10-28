import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/app/projects/Projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Projects and programmes of the Ministry of Women Affairs and Social Welfare, Imo State Government.",
  path: "/projects",
});


export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero ministryName="Empowering Women, Children, and Communities for a Just and Inclusive Imo" titleLabel="Projects" />
          
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
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