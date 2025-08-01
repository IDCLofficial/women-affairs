import Image from "next/image";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsList = [
  {
    title: "Minister, First Lady, and UN Women Lead GBV Training for Community Leaders",
    description: "The Ministry, alongside Imo First Lady and UN Women, conducted a 3‑day zonal training for President‑Generals in Owerri, Orlu and Okigwe on preventing Gender‑Based Violence at the grassroots level.",
    date: "10th July 2025",
    image: "/images/firstladymain.jpg",
  }
];

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsList.map((item, idx) => (
        <Link
          key={idx}
          href={`/news/${slugify(item.title)}`}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">Top News</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.description}</p>
            <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
} 