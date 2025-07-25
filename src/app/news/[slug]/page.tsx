import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "IMO STATE MINISTRY OF WOMEN AFFAIRS LAUNCHES WOMEN EMPOWERMENT PROGRAM",
    date: "MAY 15, 2025",
    img: "/images/women1.jpg",
  },
  {
    title: "GENDER EQUALITY CAMPAIGN KICKS OFF IN IMO STATE",
    date: "APRIL 28, 2025",
    img: "/images/women2.jpg",
  },
  {
    title: "SUPPORT INITIATIVE FOR ABUSED WOMEN AND GIRLS ANNOUNCED",
    date: "APRIL 10, 2025",
    img: "/images/women3.jpg",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]"> {/* pb-[180px] ensures body does not overlap next section */}
        <NewsHeroSection/>
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image src={'/images/women1.jpg'} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Ministry of Women Affairs Champions Empowerment and Gender Equality</h1>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Imo State Ministry of Women Affairs is at the forefront of promoting the rights, welfare, and empowerment of women and girls across the state. Through innovative programs and advocacy, the ministry is creating opportunities for women to thrive, lead, and contribute meaningfully to society.
            </p>
            <p className="text-gray-700 mb-6">
              Under the leadership of the Hon. Commissioner, the Ministry has launched several initiatives focused on economic empowerment, gender equality, and protection of vulnerable groups. These efforts include skills acquisition programs, support for women entrepreneurs, and campaigns to end gender-based violence in Imo State.
            </p>
            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image src="/images/women2.jpg" alt="Empowerment Initiative" width={600} height={300} className="object-cover w-full h-64" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Achievements and Focus Areas:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Launch of the Women’s Empowerment Program benefiting over 5,000 women and girls.</li>
                  <li>Establishment of the Transit Home for Abused Women and Girls, providing shelter and support.</li>
                  <li>Implementation of gender equality campaigns and community sensitization workshops.</li>
                  <li>Support for women-owned businesses through grants and training.</li>
                  <li>Collaboration with local and international partners to advance women’s rights and social inclusion.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">“Empowering women and girls is the foundation for a just and prosperous society. The Ministry of Women Affairs is committed to building a future where every woman and girl in Imo State can achieve her full potential.”</span>
                </blockquote>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              The Ministry works closely with stakeholders to ensure that policies and programs are inclusive, sustainable, and impactful. By fostering partnerships and promoting advocacy, Imo State is setting a standard for women’s advancement and gender equity in Nigeria.
            </p>
            <p className="text-gray-700 mt-2">
              The Ministry remains dedicated to protecting the rights of women and girls, supporting survivors of abuse, and creating pathways for economic and social empowerment.
            </p>
            <p className="text-gray-700 mt-2">
              Together, we are building a brighter, more equitable future for all women and girls in Imo State.
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
      {/* Section 3: Footer */}
    </div>
  );
} 