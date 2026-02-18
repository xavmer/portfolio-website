const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, State",
    period: "2020 - 2024",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems",
      "Member of Computer Science Club",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    location: "City, State",
    period: "2016 - 2020",
    gpa: "3.9/4.0",
    achievements: [
      "Valedictorian",
      "National Honor Society",
      "AP Computer Science A - Score: 5",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0d1912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#f8faf8] to-[#e8f3ed] dark:from-[#1a3329] dark:to-[#0d1912] rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:shadow-[#4a8570]/20 transition-all duration-300 border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50 hover:border-[#4a8570]/50 dark:hover:border-[#7a9d8f]/50"
            >
              <div className="absolute top-8 left-0 w-1 h-16 bg-gradient-to-b from-[#4a8570] to-[#7a9d8f] rounded-r-full"></div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a3329] dark:text-[#e8f3ed] mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-[#4a8570] dark:text-[#7a9d8f] font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-[#4a6b5c] dark:text-[#8fb5a3]">
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-left md:text-right">
                    <span className="inline-block px-4 py-2 bg-[#4a8570] dark:bg-[#2d5f4d] text-white dark:text-[#e8f3ed] rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                    <p className="mt-2 text-[#4a6b5c] dark:text-[#8fb5a3] font-semibold">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mt-6">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start text-[#4a6b5c] dark:text-[#8fb5a3]"
                    >
                      <span className="inline-block w-2 h-2 bg-[#4a8570] dark:bg-[#7a9d8f] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
