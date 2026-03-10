import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const goals = [
  {
    category: "Career",
    color: "from-[#4a8570] to-[#7a9d8f]",
    items: [
      "Become a senior software engineer at a leading tech company",
      "Contribute to open-source projects that impact millions of users",
      "Mentor aspiring developers and give back to the community",
      "Build and launch a successful startup or product",
    ],
  },
  {
    category: "Personal",
    color: "from-[#2d5f4d] to-[#4a8570]",
    items: [
      "Get Married",
      "Start a family??",
    ],
  },
  {
    category: "Financial",
    color: "from-[#7a9d8f] to-[#a8c5b8]",
    items: [
      "Achieve financial independence by age 35",
      "Build a diverse investment portfolio",
      "Create passive income streams",
      "Support charitable causes and community initiatives",
    ],
  },
  {
    category: "Education",
    color: "from-[#4a8570] to-[#2d5f4d]",
    items: [
      "Complete my Computer Science degree with honors",
      "Pursue advanced certifications in cloud computing and AI",
      "Never stop learning - commit to lifelong education",
      "Attend and speak at tech conferences",
    ],
  },
  {
    category: "Health & Wellness",
    color: "from-[#a8c5b8] to-[#4a8570]",
    items: [
      "Maintain consistent fitness routine",
      "Climb Mt. Kilimanjaro",
      "Complete a marathon and triathlon",
      "Ski a Double Black",
    ],
  },
  {
    category: "Impact",
    color: "from-[#2d5f4d] to-[#7a9d8f]",
    items: [
      "Create technology that solves real-world problems",
      "Volunteer time and skills to help underserved communities",
      "Inspire the next generation of technologists",
      "Leave a positive legacy for future generations",
    ],
  },
];

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e8f3ed] via-[#f8faf8] to-[#d4e7dd] dark:from-[#0d1912] dark:via-[#1a3329] dark:to-[#0f1f18]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
            Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5f4d] via-[#4a8570] to-[#7a9d8f] dark:from-[#7a9d8f] dark:via-[#a8c5b8] dark:to-[#7a9d8f]">Goals</span>
          </h1>
          <p className="text-xl text-[#4a6b5c] dark:text-[#8fb5a3] max-w-3xl mx-auto leading-relaxed">
            A roadmap of aspirations and milestones I'm working towards. 
            These goals guide my daily actions and long-term decisions.
          </p>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#4a8570]/20 transition-all duration-300 border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50 hover:border-[#4a8570]/50 dark:hover:border-[#7a9d8f]/50 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${goal.color}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#1a3329] dark:text-[#e8f3ed]">
                    {goal.category}
                  </h3>
                  <ul className="space-y-3">
                    {goal.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-[#4a6b5c] dark:text-[#8fb5a3]"
                      >
                        <svg
                          className="w-5 h-5 text-[#4a8570] dark:text-[#7a9d8f] mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#4a8570] to-[#2d5f4d] dark:from-[#2d5f4d] dark:to-[#4a8570] rounded-2xl shadow-2xl p-12 text-center">
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-white/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl sm:text-3xl font-medium text-white mb-6 relative z-10">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="text-lg text-white/80 relative z-10">— Eleanor Roosevelt</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
