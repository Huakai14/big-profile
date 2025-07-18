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
    <section className="bg-gray-900 text-white py-16" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          Feel free to reach out for collaboration, inquiries, or just to say
          hello!
        </p>
        <button
          onClick={handleDownloadCV}
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
