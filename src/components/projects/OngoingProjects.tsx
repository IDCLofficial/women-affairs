import Image from "next/image";

export default function OngoingProjects() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Ongoing Projects: Ministry of Women Affairs and Social Welfare</h2>
        <p className="text-gray-700">The Ministry of Women Affairs and Social Welfare (MWASW) is actively implementing impactful projects to empower women, protect children, and support vulnerable groups across Imo State. These initiatives are designed to foster social justice, gender equality, and community well-being.</p>
        <div className="text-gray-700 space-y-3">
          <p><b>Women Empowerment Initiatives:</b> Ongoing training and entrepreneurship programs for women and girls, providing access to skills, micro-grants, and mentorship to boost economic independence.</p>
          <p><b>Child Protection Programs:</b> Campaigns and interventions to prevent child abuse, support orphans and vulnerable children, and promote child rights and welfare.</p>
          <p><b>Social Welfare Outreach:</b> Rehabilitation and support services for widows, the elderly, and persons with disabilities, including access to healthcare, shelter, and psychosocial support.</p>
          <p><b>Advocacy Against Gender-Based Violence:</b> Community sensitization, legal aid, and survivor support services to combat gender-based violence, female genital mutilation, and harmful traditional practices.</p>
          <p><b>Community Engagement:</b> Partnership with local leaders and organizations to drive awareness, policy advocacy, and sustainable development for women and children.</p>
          <p><b>Flagship Project:</b> The just concluded zonal training for Imo State President Generals on gender-based violence, equipping community leaders to identify, prevent, and respond to cases of abuse.</p>
        </div>
        <div className="flex gap-6 mt-6">
          <Image src="/images/Homehero.jpg" alt="Empowerment Project" width={120} height={80} className="rounded" />
          <Image src="/images/ocda.jpeg" alt="Community Initiative" width={120} height={80} className="rounded" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/commisioner.png" alt="Ongoing Projects" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 