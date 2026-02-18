"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#f8faf8] dark:from-[#0d1912] dark:to-[#1a3329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#1a3329] dark:text-[#e8f3ed] tracking-tight">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4a8570] to-[#7a9d8f] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/80 dark:bg-[#1a3329]/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-[#d4e7dd]/50 dark:border-[#2d5f4d]/50">
              <p className="text-center text-[#4a6b5c] dark:text-[#8fb5a3] mb-8 text-lg leading-relaxed">
                I&apos;m always open to discussing new opportunities, projects, or just 
                having a chat about technology. Feel free to reach out!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#2d5f4d] dark:text-[#b8d4c6] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d4e7dd] dark:border-[#2d5f4d] rounded-xl focus:ring-2 focus:ring-[#4a8570] focus:border-transparent dark:bg-[#0d1912] dark:text-[#e8f3ed] bg-white/50 dark:bg-[#0d1912]/50 backdrop-blur-sm transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2d5f4d] dark:text-[#b8d4c6] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d4e7dd] dark:border-[#2d5f4d] rounded-xl focus:ring-2 focus:ring-[#4a8570] focus:border-transparent dark:bg-[#0d1912] dark:text-[#e8f3ed] bg-white/50 dark:bg-[#0d1912]/50 backdrop-blur-sm transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2d5f4d] dark:text-[#b8d4c6] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#d4e7dd] dark:border-[#2d5f4d] rounded-xl focus:ring-2 focus:ring-[#4a8570] focus:border-transparent dark:bg-[#0d1912] dark:text-[#e8f3ed] bg-white/50 dark:bg-[#0d1912]/50 backdrop-blur-sm resize-none transition-all duration-200"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#2d5f4d] to-[#4a8570] text-white rounded-xl hover:shadow-lg hover:shadow-[#4a8570]/50 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
              </form>

              <div className="mt-8 pt-8 border-t border-[#d4e7dd] dark:border-[#2d5f4d]">
                <div className="flex justify-center space-x-8">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a6b5c] hover:text-[#2d5f4d] dark:text-[#8fb5a3] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a6b5c] hover:text-[#2d5f4d] dark:text-[#8fb5a3] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-[#4a6b5c] hover:text-[#2d5f4d] dark:text-[#8fb5a3] dark:hover:text-[#b8d4c6] transition-colors duration-200 font-medium"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
