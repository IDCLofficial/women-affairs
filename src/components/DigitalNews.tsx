import Image from "next/image";

export default function StrategicGoalsSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Ministry of Women Affairs and Social Justice</h2>
        <p className="text-gray-700">
          Empowering women, protecting children, and promoting social welfare through advocacy, education, and community-driven initiatives, fostering a society where every individual can thrive and reach their full potential.
        </p>
        <div className="text-gray-700 space-y-3">
          <p><b>Vision Statement:</b> A society where women are empowered to lead, children are safe and nurtured, and communities are resilient and prosperous, where every individual has the opportunity to grow, contribute, and flourish.</p>
          <p><b>Policy Priorities / Strategic Goals:</b></p>
          <ul className="list-disc ml-6">
            <li>Protecting vulnerable groups</li>
            <li>Child welfare</li>
            <li>Promoting gender equality</li>
            <li>Collaboration and cooperation</li>
          </ul>
          <p><b>Ongoing Flagship Projects / Initiatives:</b></p>
          <ul className="list-disc ml-6">
            <li>The just concluded zonal training for Imo State President Generals on gender based violence.</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/commissioner2.png" alt="Women Affairs Initiatives" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 