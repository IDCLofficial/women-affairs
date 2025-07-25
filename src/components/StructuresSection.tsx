import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
  row1: [
    {
      title: "Department of Women Affairs",
      description: "Focuses on promoting women's economic, social, and political empowerment through skills acquisition, entrepreneurship development, and advocacy."
    },
    {
      title: "Department of Social Welfare",
      description: "Provides support and services to vulnerable groups, including children, the aged, and persons with disabilities."
    },
    {
      title: "Department of Child Development",
      description: "Works to protect children's rights and promote their welfare, including handling cases of child abuse and neglect."
    },
  ],
  row2: [
    {
      title: "Department of Planning, Research, and Statistics",
      description: "Conducts research, planning, and data analysis to inform the ministry's programs and policies."
    },
    {
      title: "Department of Advocacy and Sensitization",
      description: "Promotes awareness and advocacy on issues affecting women and children, such as gender-based violence, female genital mutilation, and widowhood practices."
    },
  ]
};

    return (
      <section className="w-full bg-[#1D1D1D] py-20">
      <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
          {/* Header */}
          <h2 className="text-[43px] font-medium text-white">
              Our Structure
          </h2>
          <p className="text-white text-sm sm:text-base md:text-[1rem] mb-8 sm:mb-16 w-full sm:w-[80%] md:w-[70%] mx-auto">
  The Ministry of Women Affairs and Social Welfare is dedicated to empowering women, protecting children, and supporting vulnerable groups through advocacy, social welfare programs, and community-driven initiatives in Imo State.
</p>

          {/* Main Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
              <Image
                  src={imgSrc}
                  alt="Ministry Building"
                  fill
                  className="object-cover"
                  priority
              />
          </div>

          {/* Department Cards Grid */}
          <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-2 w-full justify-between">
                  {departments.row1.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
              <div className="flex flex-row w-full gap-2">
                  {departments.row2.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/departments"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors shadow-md"
            >
              See More
            </a>
          </div>
      </div>
  </section>
    );
}; 