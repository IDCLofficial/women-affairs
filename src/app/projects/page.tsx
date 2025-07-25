import CTASection from "@/components/CTASection";
import DigitalAgendaSection from "@/components/DigitalNews";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* SecondTop Hero */}
            <SecondTopHero headingText="Empowering Women, Children, and Communities for a Just and Inclusive Imo" />
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