import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Imo Commissioner For Women Affairs and Social Welfare, Ibejiako, Vows To Reform Social Sector",
    description: "Rt.Hon. Barr. Ernest Ibejiako, the Imo State Commissioner for Women Affairs and Social Welfare, has pledged to restore sanity and tackle the challenges facing the social sector. He made this commitment during a maiden stakeholders’ meeting with women and social workers in Imo State over the weekend.",
    date: "30th May 2025",
    image: "/images/commisioner.png",
  },
  {
    title: "The Imo State House of Assembly has pledged its support to the Ministry of Women Affairs and Social Welfare to put an end to social challenges in the state.",
    description: "It also promised to help strengthen the sector and enhance its proficiency through legislative support. The commitment was made when the Assembly’s Committee on Women Affairs and Social Welfare interfaced with officials of the Ministry of Women Affairs and Social Welfare, led by the commissioner of the ministry, Ernest Ibejiako.",
    date: "30th May 2025",
    image: "/images/firstladymain.jpg",
  },
  {
    title: "IIRS AND MINISTRY OF WOMEN AFFAIRS AND SOCIAL WELFARE UNITE TO BOOST SOCIAL PROGRAMS",
    description: "The Chairman of the Imo State Internal Revenue Service (IIRS), Mr. Justice Okoye, and his team visited the Commissioner for Women Affairs and Social Welfare, Rt. Hon. Chief Ibejiako Ifeanyi Ernest on Tuesday 12th November 2024.",
    date: "30th May 2025",
    image: "/images/IMSG-Logo.svg"
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
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 