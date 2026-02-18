export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#f8faf8] dark:from-[#0d1912] dark:to-[#1a3329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a8570] to-[#7a9d8f] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50">
              <p className="text-lg text-[#2d5f4d] dark:text-[#b8d4c6] mb-6 leading-relaxed">
                I&apos;m a passionate software engineering student with a strong foundation in 
                computer science and a drive to create impactful solutions. I enjoy working 
                on challenging projects that push my boundaries and help me grow as a developer.
              </p>
              <p className="text-lg text-[#2d5f4d] dark:text-[#b8d4c6] mb-6 leading-relaxed">
                My journey in software development has been fueled by curiosity and a constant 
                desire to learn. I believe in writing clean, maintainable code and following 
                best practices to deliver quality software.
              </p>
              <p className="text-lg text-[#2d5f4d] dark:text-[#b8d4c6] leading-relaxed">
                Currently, I&apos;m seeking opportunities to apply my skills in a professional 
                setting and contribute to meaningful projects while continuing to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
