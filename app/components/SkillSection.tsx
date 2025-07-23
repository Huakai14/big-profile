"use client";
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaTrello,
  FaPython,
  FaGithub
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiNodered,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiFastify,
  SiGit,
  SiPostman,
  SiJira
} from "react-icons/si";

const SkillSection = () => {
  const [category, setCategory] = useState("All");

  const frontendSkills = [
    { icon: <FaReact className="text-4xl sm:text-5xl mb-4 text-blue-600" />, name: "ReactJS" },
    { icon: <SiJavascript className="text-4xl sm:text-5xl mb-4 text-yellow-500" />, name: "JavaScript" },
    { icon: <SiNextdotjs className="text-4xl sm:text-5xl mb-4 text-white" />, name: "Next.js" },
    { icon: <SiCss3 className="text-4xl sm:text-5xl mb-4 text-blue-500" />, name: "CSS" },
    { icon: <FaBootstrap className="text-4xl sm:text-5xl mb-4 text-purple-600" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-4xl sm:text-5xl mb-4 text-blue-400" />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs className="text-4xl sm:text-5xl mb-4 text-green-600" />, name: "Node.js" },
    { icon: <SiNodered className="text-4xl sm:text-5xl mb-4 text-red-600" />, name: "Nodered" },
    { icon: <SiMongodb className="text-4xl sm:text-5xl mb-4 text-green-600" />, name: "MongoDB" },
    { icon: <SiMysql className="text-4xl sm:text-5xl mb-4 text-blue-600" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-4xl sm:text-5xl mb-4 text-blue-600" />, name: "PostgreSQL" },
    { icon: <SiPrisma className="text-4xl sm:text-5xl mb-4 text-white" />, name: "Prisma" },
    { icon: <SiFastify className="text-4xl sm:text-5xl mb-4 text-red-600" />, name: "Fastify" },
    { icon: <FaPython className="text-4xl sm:text-5xl mb-4 text-blue-500" />, name: "Python" },
  ];

  const toolsSkills = [
    { icon: <SiGit className="text-4xl sm:text-5xl mb-4 text-orange-500" />, name: "Git" },
    { icon: <SiPostman className="text-4xl sm:text-5xl mb-4 text-orange-400" />, name: "Postman" },
    { icon: <FaTrello className="text-4xl sm:text-5xl mb-4 text-blue-600" />, name: "Trello" },
    { icon: <SiJira className="text-4xl sm:text-5xl mb-4 text-blue-600" />, name: "Jira" },
    { icon: <FaGithub className="text-4xl sm:text-5xl mb-4 text-white" />, name: "GitHub" },
  ];

  const renderSkills = () => {
    switch (category) {
      case "Frontend":
        return frontendSkills;
      case "Backend":
        return backendSkills;
      case "Tools":
        return toolsSkills;
      default:
        return [...frontendSkills, ...backendSkills, ...toolsSkills];
    }
  };

  return (
    <section className="bg-gray-800 min-h-screen pt-20 pb-16 px-4" id="skills">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Skills</h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {["All", "Frontend", "Backend", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                ${category === cat
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white scale-105"
                  : "bg-gray-700 hover:bg-gray-600 text-white hover:scale-105"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {renderSkills().map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-gray-700/30 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 w-full max-w-[200px] hover:scale-105"
            >
              {skill.icon}
              <span className="text-base sm:text-lg font-medium text-gray-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;