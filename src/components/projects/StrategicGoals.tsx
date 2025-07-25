import Image from "next/image";

export default function StrategicGoals() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Strategic Goals (2025–2030)</h2>
        <p className="text-gray-700">
          The Ministry of Women Affairs and Social Justice is committed to advancing the rights, welfare, and empowerment of women, children, and vulnerable groups in Imo State. Our strategic goals for 2025–2030 include:
        </p>
        <div className="text-gray-700 space-y-3">
          <p><b>Empower Women and Girls:</b> Expand access to education, skills training, and economic opportunities for women and girls across all communities.</p>
          <p><b>Promote Gender Equality:</b> Advocate for equal rights, representation, and participation of women in leadership, governance, and decision-making processes.</p>
          <p><b>Protect Vulnerable Groups:</b> Strengthen social welfare programs and legal protections for children, widows, persons with disabilities, and survivors of gender-based violence.</p>
          <p><b>Enhance Advocacy and Awareness:</b> Lead campaigns to end harmful practices such as gender-based violence, child marriage, and female genital mutilation.</p>
          <p><b>Foster Partnerships:</b> Collaborate with local and international organizations to implement impactful programs and policies for sustainable social change.</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/initiatives.png" alt="Strategic Goals" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 