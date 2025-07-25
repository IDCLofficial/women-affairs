import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Empowering Imo’s Industry, Mines, and Solid Minerals"
      />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
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
