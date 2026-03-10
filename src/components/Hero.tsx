export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e8f3ed] via-[#f8faf8] to-[#d4e7dd] dark:from-[#0d1912] dark:via-[#1a3329] dark:to-[#0f1f18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0">
            <img 
              src="images/xavierleffler.png" 
              alt="Xavier Leffler" 
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#4a8570] dark:border-[#7a9d8f] shadow-2xl shadow-[#4a8570]/30"
            />
          </div>
          
          {/* Content - Right Side */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-[#4a8570] to-[#7a9d8f] rounded-full"></div>
              <h1 className="relative text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5f4d] via-[#4a8570] to-[#7a9d8f] dark:from-[#7a9d8f] dark:via-[#a8c5b8] dark:to-[#7a9d8f]">
                  Xavier Leffler
                </span>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#2d5f4d] dark:text-[#b8d4c6] mb-6 font-medium">
              Software Engineer Student
            </p>
            <p className="text-lg text-[#4a6b5c] dark:text-[#8fb5a3] mb-8 leading-relaxed">
              Passionate about building innovative solutions and learning new technologies. 
              Currently seeking opportunities to grow and contribute.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://github.com/xavmer"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/50 dark:bg-[#0d1912]/50 border border-[#d4e7dd] dark:border-[#2d5f4d] hover:border-[#4a8570] dark:hover:border-[#7a9d8f] transition-all duration-200 hover:shadow-lg"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-[#4a6b5c] dark:text-[#8fb5a3] group-hover:text-[#2d5f4d] dark:group-hover:text-[#b8d4c6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/xavierleffler"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/50 dark:bg-[#0d1912]/50 border border-[#d4e7dd] dark:border-[#2d5f4d] hover:border-[#4a8570] dark:hover:border-[#7a9d8f] transition-all duration-200 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-[#4a6b5c] dark:text-[#8fb5a3] group-hover:text-[#2d5f4d] dark:group-hover:text-[#b8d4c6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:xavier@lefflers.com"
                className="group p-3 rounded-full bg-white/50 dark:bg-[#0d1912]/50 border border-[#d4e7dd] dark:border-[#2d5f4d] hover:border-[#4a8570] dark:hover:border-[#7a9d8f] transition-all duration-200 hover:shadow-lg"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-[#4a6b5c] dark:text-[#8fb5a3] group-hover:text-[#2d5f4d] dark:group-hover:text-[#b8d4c6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
        </div>
      </div>
    </section>
  );
}
