import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const news = [
  {
    title: "Nigerian Girl Guides Association Pays Courtesy Visit to Ministry, Presents New Executives",
    description: "Last week, the Ministry received a delegation from the Nigerian Girl Guides Association, Imo State Chapter, who paid a courtesy visit to formally introduce the newly elected executive members of the association.Speaking during the visit, the newly elected State Commissioner, Ambassador Okoroigwe Chinonso, stated that their visit was to officially notify the Ministry of the emergence of the new leadership.",
     date: "1st August, 2025",
    image: "/images/women1.png",
  },
 {
    title: "Ministry Holds Strategic Meeting with Orphanage Operators in Imo State",
    description:
      "Yesterday, a crucial meeting was held with operators of orphanage homes at the ministry’s hall, where the Commissioner emphasized the introduction of stringent measures to curb sharp practices in the sector. The homes were cautioned to operate strictly within the legal framework guiding orphanage activities in the state.",
    date: "30th July, 2025",
    image: "/images/women2.png"
  },
  {
    title: "Imo First Lady Urges Women to Join 'Every Home A Garden' Competition",
    description:
      "In alignment with the First Lady of Nigeria, Senator Oluremi Tinubu’s Renewed Hope Initiative – Plant A-Garden program, the First Lady of Imo State, Chief (Dr) Chioma Uzodimma, is calling on all Imo women to participate in the 'Every Home A Garden' competition. This initiative is part of her commitment to promoting food security and women empowerment across the state.",
    date: "29th July, 2025",
    image: "/images/rhi.png"
  },


];

export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <AnimatedSection>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
              </AnimatedSection>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 