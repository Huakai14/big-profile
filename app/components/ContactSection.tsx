"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";

const ContactSection = () => {
  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    // Trigger confetti on click
    confetti({
      particleCount: 100,
      angle: 90,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
    });
  };
  return (
    <section className="min-h-[90vh] bg-gray-900 text-white pt-20 pb-8 px-4" id="contact">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 transform hover:scale-[1.02] transition-all">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-[#ADB7BE] mb-6 text-lg">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll
              try my best to get back to you!
            </p>
            
            {/* Email with hover effect */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Email</h3>
              <a 
                href="mailto:Thanawat14b@gmail.com"
                className="text-[#ADB7BE] hover:text-white transition-colors text-lg"
              >
                Thanawat14b@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Huakai14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/thanawat-burapatanin-86299828a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Download CV */}
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 transform hover:scale-[1.02] transition-all flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Download CV
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Get a copy of my CV to learn more about my experience and skills.
            </p>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
