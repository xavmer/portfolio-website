export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8f3ed] via-[#f8faf8] to-[#d4e7dd] dark:from-[#0d1912] dark:via-[#1a3329] dark:to-[#0f1f18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
            alt="Xavier Leffler" 
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#4a8570] dark:border-[#7a9d8f] shadow-2xl shadow-[#4a8570]/30 mb-8"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-[#4a8570] to-[#7a9d8f] rounded-full"></div>
          <h1 className="relative text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5f4d] via-[#4a8570] to-[#7a9d8f] dark:from-[#7a9d8f] dark:via-[#a8c5b8] dark:to-[#7a9d8f]">
              Xavier Leffler
            </span>
          </h1>
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#2d5f4d] dark:text-[#b8d4c6] mb-8 font-medium">
          Software Engineer Student
        </p>
        <p className="text-lg text-[#4a6b5c] dark:text-[#8fb5a3] mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building innovative solutions and learning new technologies. 
          Currently seeking opportunities to grow and contribute.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-[#2d5f4d] to-[#4a8570] text-white rounded-xl hover:shadow-lg hover:shadow-[#4a8570]/50 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
          >
            View My Work
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm text-[#2d5f4d] dark:text-[#b8d4c6] border-2 border-[#a8c5b8] dark:border-[#4a8570] rounded-xl hover:border-[#4a8570] dark:hover:border-[#7a9d8f] hover:shadow-lg transition-all duration-300 font-medium transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
