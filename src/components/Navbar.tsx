"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-[#0d1912]/70 backdrop-blur-md z-50 shadow-sm border-b border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-[#4a8570] dark:border-[#7a9d8f]"
            />
            <span className="text-xl font-bold text-[#2d5f4d] dark:text-[#b8d4c6]">Portfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection("education")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              Education
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-[#4a6b5c] dark:text-[#8fb5a3] hover:text-[#2d5f4d] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0d1912]/95 backdrop-blur-md border-t border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-[#4a6b5c] dark:text-[#8fb5a3] hover:bg-[#e8f3ed] dark:hover:bg-[#1a3329] rounded-lg transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
