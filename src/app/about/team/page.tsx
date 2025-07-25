import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Hon. Jane Doe',
    role: 'Hon. Commissioner',
    image: '/images/women1.jpg',
    bio: 'Provides visionary leadership and strategic direction for the Ministry of Women Affairs in Imo State.'
  },
  {
    name: 'Mrs. Mary Smith',
    role: 'Permanent Secretary',
    image: '/images/women2.jpg',
    bio: 'Oversees administrative operations and ensures effective policy implementation.'
  },
  {
    name: 'Dr. Aisha Bello',
    role: 'Director',
    image: '/images/women3.jpg',
    bio: 'Leads departmental initiatives to promote women’s empowerment and gender equality.'
  },
  {
    name: 'Mr. John Okoro',
    role: 'Head, Internal Audit Unit',
    image: '/images/women4.jpg',
    bio: 'Ensures transparency, accountability, and compliance within the ministry.'
  },
  {
    name: 'Transit Home Team',
    role: 'Transit Home for Abused Women/Girls Unit',
    image: '/images/women5.jpg',
    bio: 'Provides shelter, support, and rehabilitation for abused women and girls in Imo State.'
  }
];

export default function TeamPage() {
  return (
    <section className="w-full min-h-screen bg-[#f4f8f9] py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Our Team</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-[280px]">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h2>
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