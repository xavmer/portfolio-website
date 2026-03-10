const projects = [
  {
    title: "AuToDo - AI-Powered Task Manager",
    description: "An AI-powered task management application that helps users and companies organize and prioritize their daily tasks efficiently.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    title: "Brightly Lights - Outdoor Lighting iOS App",
    description: "An iOS app that allows users to control their outdoor lighting systems remotely, providing convenience and energy efficiency.",
    technologies: ["Typescript", "React", "Node.js", "AWS Lambdas", "Xcode", "Ionic"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  },
  {
    title: "College Football Alignment Tool",
    description: "With conferences realigning and new ones being created, this tool helps fans and analysts visualize potential future alignments of college football teams based on various criteria.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
  },
  {
    title: "CPU Pipeline Emulator - C CPU Simulation",
    description: "Class project emulating a real CPU, simulating instruction execution, pipelining, and hazards to demonstrate understanding of computer architecture concepts.",
    technologies: ["C", "Assembly", "CPU Architecture"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
  },
  {
    title: "Mount Olympus Visualization",
    description: "Creative project for classic mythology class, visualizing Mount Olympus and its inhabitants.",
    technologies: ["TypeScript", "Three.js", "React"],
    githubUrl: "https://github.com/xavmer/Mt-Olympus",
    liveUrl: "https://mt-olympus.vercel.app/",
    image: "images/mtolympuszoomed.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#f8faf8] to-[#e8f3ed] dark:from-[#1a3329] dark:to-[#0d1912]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#4a8570]/20 transition-all duration-300 border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50 hover:border-[#4a8570]/50 dark:hover:border-[#7a9d8f]/50 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a8570]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#1a3329] dark:text-[#e8f3ed]">
                  {project.title}
                </h3>
                <p className="text-[#4a6b5c] dark:text-[#8fb5a3] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#e8f3ed] dark:bg-[#2d5f4d] text-[#2d5f4d] dark:text-[#b8d4c6] rounded-full text-sm font-medium border border-[#d4e7dd] dark:border-[#4a8570]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="text-[#4a8570] hover:text-[#2d5f4d] dark:text-[#7a9d8f] dark:hover:text-[#b8d4c6] font-medium transition-colors duration-200"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.liveUrl}
                    className="text-[#4a8570] hover:text-[#2d5f4d] dark:text-[#7a9d8f] dark:hover:text-[#b8d4c6] font-medium transition-colors duration-200"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
