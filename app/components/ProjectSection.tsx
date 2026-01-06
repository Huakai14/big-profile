import React from "react";

const ProjectSection = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="projects">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        Projects
      </h2>
      <p className="text-gray-400 text-center mb-8 text-sm">
        These projects are under NDA, so only descriptions and unrelated images can be shown.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div
            className="h-48 bg-cover rounded-t-lg"
            style={{
              backgroundImage: 'url("/overpass.webp")',
            }}
          ></div>
          <h3 className="text-xl font-semibold text-white mt-4">
            E-Commerce Platform
          </h3>
          <p className="text-gray-300 mt-2">
            A full-featured e-commerce web application with secure payment gateway integration. It includes user authentication (login/logout), product browsing and search, shopping cart, order management, and real-time stock control for buying and selling products.
          </p>
          {/* <a href="#" className="text-yellow-500 mt-4 inline-block">
            View Project
          </a> */}
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div
            className="h-48 bg-cover rounded-t-lg"
            style={{
              backgroundImage: 'url("/dust2.webp")',
            }}
          ></div>
          <h3 className="text-xl font-semibold text-white mt-4">
            Doctor Queue via LINE Application
          </h3>
          <p className="text-gray-300 mt-2">
            A doctor appointment booking system via LINE CRM with an admin dashboard, LINE notifications, and CSV/Excel data import and export support.
          </p>
          {/* <a href="#" className="text-yellow-500 mt-4 inline-block">
            View Project
          </a> */}
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default ProjectSection;
