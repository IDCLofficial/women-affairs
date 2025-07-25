import Image from "next/image";
import Link from 'next/link';

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
      {/* Left: Green Card */}
      <div className="w-[90%] md:w-[40%] flex items-stretch">
        <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
          <Image src="/images/3r.jpeg" alt="Imo Women" fill className="object-cover rounded" />
        </div>
      </div>
      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Strategic Roadmap for Inclusive Empowerment and Social Justice
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-[700px]">
        Strategic Goal:
To build a resilient and inclusive Imo State where women, children, and vulnerable groups are protected, empowered, and given equal opportunities to thrive. The Ministry is committed to advancing gender equality, eradicating gender-based violence, and promoting comprehensive social welfare through sustainable policy reforms, grassroots engagement, and cross-sector collaboration. By harnessing the power of advocacy, education, and strategic partnerships—with institutions like UN Women, UNICEF, NAPTIP, and FAO—the Ministry aims to drive impactful programs that protect human dignity, support widows and persons with disabilities, and create a safe, equitable society where no one is left behind.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <Link href="/about" passHref>
            <button style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[150px]">See More</button>
          </Link>
          <Link href="/contact-us" passHref>
            <button style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[180px]">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
} 