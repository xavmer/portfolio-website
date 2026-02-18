export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a3329] to-[#0d1912] text-white py-12 border-t border-[#2d5f4d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[#b8d4c6]">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-[#7a9d8f] mt-2 text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
