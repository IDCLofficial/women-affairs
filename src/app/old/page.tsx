import { Suspense } from "react";
import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Empowering Imo&apos;s Women, Children, and Communities for a Just and Inclusive Imo" titleLabel="News" />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <Suspense fallback={<div className="w-full md:w-64 flex-shrink-0">Loading...</div>}>
          <NewsSidebar />
        </Suspense>
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
