import AnimatedSection from "@/components/AnimatedSection2";
import React from "react";

const services = [
  {
    title: "Gender Equality & Women Empowerment",
    description:
      "Developing policies and programs to empower women economically and socially. Coordinating with NGOs, civil society, and the federal Women Affairs Ministry to promote women’s participation in leadership roles. Advocating and educating communities on affirmative action, national gender policy, and 35% women representation in governance.",
  },
  {
    title: "Social Welfare & Protection Services",
    description:
      "Supporting vulnerable groups: widows, orphans, the elderly, persons with disabilities. Providing counseling, mediation, and family support services for victims of domestic violence or marital conflict.",
    source: "msdgi.edostate.gov.ng",
  },
  {
    title: "Child Welfare & Rights",
    description:
      "Safeguarding children through foster care, adoption support, prevention of abuse, and promotion of the Child’s Rights Act. Collaborating with NGOs and orphanages to monitor welfare and capacity.",
    source: "genderaffairsteam.blogspot.com",
  },
  {
    title: "Capacity Building & Community Outreach",
    description:
      "Organizing training programs, workshops, and youth development initiatives on skills training, literacy, leadership, and gender mainstreaming (including linkages with RAAMP and UN‑1325 frameworks).",
  },
  {
    title: "Policy Advocacy & Legal Frameworks",
    description:
      "Advocating for passage and enforcement of laws protecting women, children, and the vulnerable. Supporting implementation of international agreements such as CEDAW, AU Protocols, and UN‑1325.",
  },
  {
    title: "Shelter & Referral Services",
    description:
      "Managing temporary shelters or referrals for victims of gender-based violence. Providing guidance and counseling services, as well as referrals for legal and medical assistance.",
  },
  {
    title: "Monitoring & Grants Administration",
    description:
      "Registering and supporting women‑focused NGOs and CSOs. Disbursing subventions or grants, providing technical assistance, and evaluating funded programs.",
  },
];

const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <AnimatedSection>
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
  </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}