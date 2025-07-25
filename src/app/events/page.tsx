import SecondTopHero from "@/components/SecondTopHero";
import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Events & Innovation for Empowering Women, Children, and Communities"
      />
      <EventsListSection />
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
