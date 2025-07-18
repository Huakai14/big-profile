import React from "react";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";  // React, NodeJS, Bootstrap
import { SiNextdotjs, SiMongodb, SiAngular, SiCss3, SiJavascript } from "react-icons/si";  // Next.js, MongoDB, Angular, CSS, JS

const SkillSection = () => {
  return (
    <section className="bg-gray-800 py-16" id="skills">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        {/* Frontend Skills */}
        <h3 className="text-xl font-bold mb-4">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {/* React */}
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl mb-4 text-blue-600" />
            <span className="text-lg">ReactJS</span>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <SiJavascript className="text-5xl mb-4 text-yellow-500" />
            <span className="text-lg">JavaScript</span>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-5xl mb-4 text-black" />
            <span className="text-lg">Next.js</span>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center">
            <SiCss3 className="text-5xl mb-4 text-blue-500" />
            <span className="text-lg">CSS</span>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <FaBootstrap className="text-5xl mb-4 text-purple-600" />
            <span className="text-lg">Bootstrap</span>
          </div>
          {/* Angular */}
          <div className="flex flex-col items-center">
            <SiAngular className="text-5xl mb-4 text-red-600" />
            <span className="text-lg">Angular</span>
          </div>
        </div>

        {/* Backend Skills */}
        <h3 className="text-xl font-bold mt-12 mb-4">Backend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
          {/* Node.js */}
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl mb-4 text-green-600" />
            <span className="text-lg">Node.js</span>
          </div>
          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <SiMongodb className="text-5xl mb-4 text-green-600" />
            <span className="text-lg">MongoDB</span>
          </div>
          {/* Rails */}
          {/* <div className="flex flex-col items-center">
            <img src="/rails-logo.png" alt="Rails" className="text-5xl mb-4" />
            <span className="text-lg">Rails</span>
          </div> */}
          {/* C++ */}
          {/* <div className="flex flex-col items-center">
            <img
              src="/cplusplus-logo.png"
              alt="C++"
              className="text-5xl mb-4"
            />
            <span className="text-lg">C++</span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
