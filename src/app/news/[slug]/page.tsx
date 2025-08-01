import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";
import Footer from "@/components/Footer";

const latestNews = [
  {
    title: "Minister, First Lady, and UN Women Lead GBV Training for Community Leaders",
    date: "MAY 15, 2025",
    img: "/images/women1.jpg",
  },
 
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/firstladymain.jpg"
                alt="First Lady GBV Training"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Minister, First Lady, and UN Women Lead GBV Training for Community Leaders
            </h1>
            <p className="text-gray-500 text-sm">10th July 2025</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Ministry of Women Affairs, in collaboration with the Imo State First Lady and UN Women, recently organized a 3-day zonal training on Gender-Based Violence (GBV) prevention for community leaders across the state.
            </p>
            <p className="text-gray-700 mb-6">
              The training brought together President-Generals from Owerri, Orlu, and Okigwe zones to empower them with knowledge and strategies for addressing GBV at the grassroots level. The initiative is part of ongoing efforts to strengthen community-based solutions for women&apos;s safety and inclusion.
            </p>
            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/women3.jpg"
                  alt="Training Session"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Training Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Capacity building for over 100 community leaders across three zones.</li>
                  <li>Workshops on identifying, reporting, and supporting GBV survivors.</li>
                  <li>Collaborative sessions with legal, health, and social welfare professionals.</li>
                  <li>Commitment from leaders to drive anti-GBV policies in their communities.</li>
                  <li>Distribution of resource materials and awareness tools to participants.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;Empowering grassroots leaders to tackle GBV is a crucial step in safeguarding the rights of women and girls in Imo State.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              This initiative reflects the Ministry&apos;s commitment to inclusive governance, community engagement, and long-term strategies for eradicating violence against women and girls.
            </p>
            <p className="text-gray-700 mt-2">
              The First Lady emphasized the need for continued collaboration with traditional institutions and civil society to build safe, informed, and supportive communities.
            </p>
            <p className="text-gray-700 mt-2">
              Together with UN Women and state actors, the Ministry of Women Affairs is leading the charge for a safer and more just Imo State.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Footer*/}
      <Footer/>
    </div>
  );
}
