import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Rehabilitation of Social Welfare Centers",
    description: "Upgrading infrastructure and utilities within designated welfare centers to attract support and serve vulnerable groups.",
    status: "active",
  },
  {
    title: "Empowerment Programs for Women",
    description: "Establishing designated programs for safe, regulated empowerment operations to reduce social challenges.",
    status: "active",
  },
  {
    title: "Ban on Gender-Based Discrimination",
    description: "Enforcement of a total ban on gender-based discrimination, coupled with remediation of the Imo ecosystem damaged by social exclusion.",
    status: "active",
  },
  {
    title: "Development of Social Parks",
    description: "Creation of social parks across the three senatorial zones, with provision of roads, power, and water to catalyze social activity.",
    status: "closed",
  },
  {
    title: "Digital Welfare Management Partnership with IIRS",
    description: "Collaboration with the Imo Internal Revenue Service (IIRS) to digitize welfare program delivery and enhance transparency in the social welfare sector.",
    status: "active",
  },
  {
    title: "Stakeholder Engagement for Sector Regularization",
    description: "Continuous dialogue with host communities, women, support groups, and regulatory agencies to streamline operations and promote legal compliance.",
    status: "closed",
  },
];

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === "active");
  const closedProjects = projects.filter(p => p.status === "closed");

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full md:w-[90vw] flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6">Projects & Initiatives</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-sm">
                  <h3 className="font-semibold text-lg text-green-800 mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Closed Projects</h2>
            <div className="space-y-4">
              {closedProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Images Side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:w-[20%] gap-6 py-4">
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/women8.jpg" alt="Projects 1" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/women7.jpg" alt="Projects 2" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/women6.jpg" alt="Projects 3" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 