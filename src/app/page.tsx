import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundImage="/images/Homehero.jpg"
        overlayText="Imo State Ministry of Women Affairs and Social Welfare"
        heading="Empowering Women. "
        subheading="Promoting Social Welfare."
        description="Empowering women, advancing social welfare, and supporting Imo citizens — through inclusive policies, advocacy, and community programs."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Women Affairs and Social Welfare"
        description="Welcome to the Imo State Ministry of Women Affairs and Social Welfare
As a key driver of social transformation, our Ministry plays a critical role in positioning Imo State as a hub for women empowerment and social welfare. In a time of post-oil diversification, we are committed to fostering sustainable development, attracting investment, and creating opportunities through a robust policy framework and forward-thinking leadership.

Established through the restructuring of former women affairs, social welfare, and community development departments, this Ministry brings focus to the vast opportunities in Imo’s social landscape—empowerment, protection, and more.
"
        buttonText="Discover More"
        image1="/images/womenfirst.jpg"
        image2="/images/women7.jpg"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.png"
        imageAlt="Honourable Lady Nkechinyere Ugwu, Minister of Women Affairs and Social Welfare in Imo State"
        title="About The Commissioner"
        bio="Honourable Lady Nkechinyere Ugwu hails from Ideato South Local Government Area of Imo State, Nigeria, and is a distinguished figure in the realm of public service, particularly in areas concerning gender equality and social justice. With years of dedicated service, she has established herself as a powerful advocate for women’s empowerment, child protection, and the upliftment of vulnerable populations across the state. Her work spans grassroots initiatives aimed at equipping women with vocational skills, creating access to financial support, and advocating for their rightful inclusion in political and economic spaces."
        details="Hon. Ugwu also plays a pivotal role in shaping and implementing state-level gender and social welfare policies, collaborating with local communities, NGOs, and international development partners to deliver sustainable impact. Beyond her accomplishments in social welfare, she has courageously tackled complex and often contentious issues surrounding public asset management, where she has called for transparency, accountability, and responsible governance. Her leadership reflects a commitment not only to equity and empowerment but also to ensuring that government resources are managed efficiently for the benefit of all citizens—especially the marginalized."
        
      />
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
        heading="Join Us in Empowering Women and Promoting Social Justice"
        subtext="Be part of our mission to create an inclusive, equitable, and supportive Imo State for all women, children, and vulnerable groups."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
