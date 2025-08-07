import AnimatedSection from "../../components/AnimatedSection";

export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Women's Empowerment & Leadership",
            description: "Promote the active participation and leadership of women and girls in all spheres of life through education, mentorship, and capacity-building programs."
        },
        {
            title: "Gender Equality & Social Inclusion",
            description: "Advance gender equality and ensure the inclusion of women, children, and vulnerable groups in policy-making, economic opportunities, and social programs."
        },
        {
            title: "Protection of Rights & Social Justice",
            description: "Safeguard the rights of women, children, and persons with disabilities, and advocate for justice, safety, and dignity for all."
        },
        {
            title: "Community Engagement & Advocacy",
            description: "Foster grassroots engagement, raise awareness, and mobilize communities to support gender-based initiatives and social reforms."
        },
        {
            title: "Support Services & Welfare",
            description: "Provide access to essential services, psychosocial support, and economic empowerment for women, widows, and vulnerable groups."
        },
        {
            title: "Partnership & Collaboration",
            description: "Work with local and international partners to drive impactful programs and policies for sustainable social change."
        }
    ];

    const coreValues = [
        "Empowerment",
        "Equity",
        "Compassion",
        "Integrity",
        "Collaboration",
        "Service Excellence"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Women Affairs and Social Welfare Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Women Affairs and Social Welfare objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <AnimatedSection key={index} delay={0.2}>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 