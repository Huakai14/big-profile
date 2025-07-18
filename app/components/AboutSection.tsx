import React from "react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="about">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          I’m a web developer passionate about building digital experiences that
          matter. With expertise in front-end and back-end development, I work
          to create seamless and efficient websites and applications.
        </p>
      </div>

      {/* About Me Image */}
      <div className="flex justify-center items-center mb-8">
        <img
          src="/s1mple.avif"
          alt="About Me"
          className="rounded-lg shadow-lg h-64 w-64 object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
