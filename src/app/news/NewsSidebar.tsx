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
    title: "3-Day GBV Prevention Training Led by Ministry in Collaboration with First Lady",
    date: "3rd July 2025",
    img: "/images/firstladymain.jpg",
    category: "Latest Updates",
  },
];

const categories = [
  { name: "Latest Updates" },
  { name: "Policies" },
];

const popularNews = newsList;

export default function NewsSidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4">CATEGORIES</h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => {
            const count = newsList.filter(news => news.category === cat.name).length;
            return (
              <li key={idx} className="flex justify-between text-gray-700 text-sm">
                <Link href={`/news/category/${slugify(cat.name)}`} className="flex justify-between w-full hover:text-green-700 transition-colors">
                  <span>{cat.name}</span>
                  <span>{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4">POPULAR NEWS</h3>
        <ul className="space-y-4">
          {popularNews.map((news, idx) => (
            <li key={idx}>
              <Link href={`/news/${slugify(news.title)}`} className="flex gap-3 items-center group hover:text-green-700 transition-colors w-full">
                <div className="w-14 h-14 relative rounded overflow-hidden">
                  <Image src={news.img} alt={news.title} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-xs font-semibold leading-tight line-clamp-2 group-hover:text-green-700">{news.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 