"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    name: "Imo Women Empowerment Summit",
    image: "/images/commisioner.png",
    description:
      "A statewide summit focused on empowering women through skills acquisition, entrepreneurship grants, and community leadership training. Featured panelists include women leaders, NGOs, and development partners."
  },
  {
    name: "Girl-Child Education & Safety Forum",
    image: "/images/womenfirst.jpg",
    description: "A forum held in collaboration with education partners to promote girl-child rights, safe learning spaces, and the importance of education for every Imo girl."
  },
  {
    name: "Widows and Vulnerable Women Outreach",
    image: "/images/firstladymain.jpg",
    description: "An outreach program distributing relief materials, offering legal aid, and connecting widows and vulnerable women to support services in rural communities across Imo State."
  },
  {
    name: "Gender-Based Violence Awareness Walk",
    image: "/images/women6.jpg",
    description: "A solidarity walk and sensitization campaign against gender-based violence, hosted in Owerri and key LGAs, involving CSOs, students, and security agencies."
  },
  {
    name: "Women in Governance Dialogue Series",
    image: "/images/women5",
    description: "A series of townhall-style dialogues encouraging women’s participation in politics, policymaking, and public service, organized by the Ministry and civil society partners."
  },
];


export default function EventsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = events[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {events.map((event, idx) => (
            <li key={event.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {event.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 