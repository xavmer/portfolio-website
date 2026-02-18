const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-[#f8faf8] dark:from-[#0d1912] dark:to-[#1a3329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-[#f8faf8] dark:from-[#1a3329] dark:to-[#0f1f18] rounded-2xl p-8 shadow-lg border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50 hover:shadow-xl hover:border-[#4a8570]/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#2d5f4d] dark:text-[#b8d4c6] group-hover:text-[#4a8570] dark:group-hover:text-[#7a9d8f] transition-colors duration-200">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white dark:bg-[#0d1912] text-[#2d5f4d] dark:text-[#b8d4c6] rounded-lg border border-[#d4e7dd] dark:border-[#2d5f4d] hover:border-[#4a8570] dark:hover:border-[#7a9d8f] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] transition-all duration-200 font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
