const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Company Name",
    period: "Summer 2025",
    description: [
      "Developed and maintained web applications using modern frameworks",
      "Collaborated with cross-functional teams to deliver features",
      "Participated in code reviews and improved code quality",
    ],
  },
  {
    title: "Research Assistant",
    company: "University Name",
    period: "2024 - Present",
    description: [
      "Conducted research on machine learning algorithms",
      "Published findings in academic journals",
      "Presented research at conferences",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - 2024",
    description: [
      "Built custom web solutions for clients",
      "Managed project timelines and client communications",
      "Delivered high-quality code on schedule",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#f8faf8] to-[#e8f3ed] dark:from-[#1a3329] dark:to-[#0d1912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#4a8570]/20 transition-all duration-300 border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50 hover:border-[#4a8570]/50 dark:hover:border-[#7a9d8f]/50"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#4a8570] to-[#7a9d8f] group-hover:h-full rounded-r-full transition-all duration-300"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a3329] dark:text-[#e8f3ed] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-[#4a8570] dark:text-[#7a9d8f] font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-[#4a6b5c] dark:text-[#8fb5a3] mt-2 sm:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 ml-2">
                {exp.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-[#2d5f4d] dark:text-[#b8d4c6]"
                  >
                    <span className="text-[#4a8570] dark:text-[#7a9d8f] mr-3 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
