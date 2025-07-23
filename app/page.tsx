"use client";

import { FC, useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
// import Confetti from "react-confetti";

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Website</h1>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <ul className="hidden lg:flex space-x-8 text-lg">
              <li><a href="#hero" className="hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition duration-300">About</a></li>
              <li><a href="#skills" className="hover:text-green-400 transition duration-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <ul className="flex flex-col space-y-4">
              <li><a href="#hero" onClick={toggleMenu} className="block hover:text-yellow-400 transition duration-300">Home</a></li>
              <li><a href="#about" onClick={toggleMenu} className="block hover:text-pink-400 transition duration-300">About</a></li>
              <li><a href="#skills" onClick={toggleMenu} className="block hover:text-green-400 transition duration-300">Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="block hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="block hover:text-purple-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
