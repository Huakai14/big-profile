"use client";

import { FC } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
// import Confetti from "react-confetti";

const Home: FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent text-white z-50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition">About</a></li>
            <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
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
