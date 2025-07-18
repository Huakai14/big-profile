import React from "react";

const ProjectSection = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="projects">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div
            className="h-48 bg-cover rounded-t-lg"
            style={{ backgroundImage: 'url("/project1.jpg")' }}
          ></div>
          <h3 className="text-xl font-semibold text-white mt-4">
            Project Title
          </h3>
          <p className="text-gray-300 mt-2">
            A brief description of the project goes here.
          </p>
          <a href="#" className="text-yellow-500 mt-4 inline-block">
            View Project
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div
            className="h-48 bg-cover rounded-t-lg"
            style={{ backgroundImage: 'url("/project2.jpg")' }}
          ></div>
          <h3 className="text-xl font-semibold text-white mt-4">
            Project Title
          </h3>
          <p className="text-gray-300 mt-2">
            A brief description of the project goes here.
          </p>
          <a href="#" className="text-yellow-500 mt-4 inline-block">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
