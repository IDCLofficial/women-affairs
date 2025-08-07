"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Women Affairs",
    image: "/images/depart1.png",
    description: "Focuses on promoting women's economic, social, and political empowerment through skills acquisition, entrepreneurship development, and advocacy."
  },
  {
    name: "Department of Social Welfare",
    image: "/images/depart2.png",
    description: "Provides support and services to vulnerable groups, including children, the aged, and persons with disabilities."
  },
  {
    name: "Department of Child Development",
    image: "/images/wom1.png",
    description: "Works to protect children's rights and promote their welfare, including handling cases of child abuse and neglect."
  },
  {
    name: "Department of Administration and Finance",
    image: "/images/depart3.png",
    description: "Handles administrative tasks, procurement, and financial management for the ministry."
  },
  {
    name: "Department of Planning, Research, and Statistics",
    image: "/images/women3.png",
    description: "Conducts research, planning, and data analysis to inform the ministry's programs and policies."
  },
  {
    name: "Department of Advocacy and Sensitization",
    image: "/images/women4.png",
    description: "Promotes awareness and advocacy on issues affecting women and children, such as gender-based violence, female genital mutilation, and widowhood practices."
  }
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
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