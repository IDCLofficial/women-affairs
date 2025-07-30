import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "OCTOBER 29, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "Community Leaders Zonal GBV Training",
    description: "A 3‑day zonal training for President‑Generals and community leaders on preventing gender-based violence at the grassroots level.",
    img: "/images/commisioner.png",
    details: `Led by the Ministry alongside the Imo First Lady and UN Women, this workshop equipped community leaders in Owerri, Orlu, and Okigwe with tools to prevent GBV. It included interactive sessions, role-plays, and community action planning.`,
    dateString: "2025-10-29T09:00:00",
  },
  {
    date: "JUNE 15, 2025",
    location: "ROCKVIEW HOTEL, OWERRI",
    title: "Stakeholders’ Meeting on Social Services Improvement",
    description: "Engagement for women’s groups, NGOs, and ministry officials to discuss strategies for improving social welfare delivery.",
    img: "/images/womenfirst.jpg",
    details: `The Permanent Secretary led the meeting, discussing reforms, accountability, and collaboration with NGOs. Participants agreed on follow-up actions to support vulnerable women and children in rural areas.`,
    dateString: "2025-06-15T10:00:00",
  },
  {
    date: "MAY 27, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "Children’s Day Celebration & Welfare Advocacy",
    description: "A Children’s Day event hosted by the Ministry featuring family reunification drives and child protection advocacy.",
    img: "/images/firstladymain.jpg",
    details: `Commissioner and the First Lady led a celebration themed “Protect the Innocent.” The ministry reunited abandoned children with their families and held sessions on child rights and welfare.`,
    dateString: "2025-05-27T14:00:00",
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const now = new Date();
const upcomingEvents = events.filter(e => new Date(e.dateString) >= now);
const pastEvents = events.filter(e => new Date(e.dateString) < now);

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Upcoming Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="flex flex-col gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
                <div className="flex justify-end md:justify-center">
                  <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic mb-16">No upcoming events at this time.</div>
      )}
      {/* Past Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Events</h2>
      {pastEvents.length > 0 ? (
        <div className="flex flex-col gap-8">
          {pastEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0 opacity-70">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
                <div className="flex justify-end md:justify-center">
                  <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic">No past events yet.</div>
      )}
    </section>
  );
} 