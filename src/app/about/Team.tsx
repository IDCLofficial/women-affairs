import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Hon. Commissioner Lady Nkechi Ugwu',
    role: 'Hon. Commissioner',
    image: '/images/commisioner.png',
    bio: 'Provides visionary leadership and strategic direction for the Ministry of Women Affairs in Imo State.'
  },
  {
    name: 'Mr. Godson Okeoma',
    role: 'Permanent Secretary',
    image: '/images/white.png',
    bio: 'Oversees administrative operations and ensures effective policy implementation.'
  },

  
];

export default function TeamPage() {
  return (
    <section className="w-full min-h-screen bg-[#f4f8f9] py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-[280px] border-2 border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-green-600"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-xl text-center font-semibold text-gray-900 mb-1">{member.name}</h2>
            <p className="text-green-700 font-medium mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm mb-2 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="px-7 py-3 bg-green-600 text-white rounded text-sm font-semibold shadow hover:bg-green-700 transition">
        <button>Back to Home</button>
      </Link>
    </section>
  );
} 