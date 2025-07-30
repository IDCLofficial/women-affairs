import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Women Affairs and Social Justice</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              Empowering women, protecting children, and promoting social welfare through advocacy, education, and community-driven initiatives, fostering a society where every individual can thrive and reach their full potential.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
              A society where women are empowered to lead, children are safe and nurtured, and communities are resilient and prosperous, where every individual has the opportunity to grow, contribute, and flourish.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 