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
  // SiVisualstudiocode,
  SiFastify,
  SiGit,
  SiPostman,
  SiJira
} from "react-icons/si";

const SkillSection = () => {
  const [category, setCategory] = useState("All");

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

  const frontendSkills = [
    { icon: <FaReact className="text-5xl mb-4 text-blue-600" />, name: "ReactJS" },
    { icon: <SiJavascript className="text-5xl mb-4 text-yellow-500" />, name: "JavaScript" },
    { icon: <SiNextdotjs className="text-5xl mb-4 text-black" />, name: "Next.js" },
    { icon: <SiCss3 className="text-5xl mb-4 text-blue-500" />, name: "CSS" },
    { icon: <FaBootstrap className="text-5xl mb-4 text-purple-600" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-5xl mb-4 text-blue-400" />, name: "Tailwind CSS" },
    // { icon: <SiAngular className="text-5xl mb-4 text-red-600" />, name: "Angular" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs className="text-5xl mb-4 text-green-600" />, name: "Node.js" },
    { icon: <SiNodered className="text-5xl mb-4 text-red-600" />, name: "Nodered" },
    { icon: <SiMongodb className="text-5xl mb-4 text-green-600" />, name: "MongoDB" },
    { icon: <SiMysql className="text-5xl mb-4 text-blue-600" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-5xl mb-4 text-blue-600" />, name: "PostgreSQL" },
    { icon: <SiPrisma className="text-5xl mb-4 text-blue-600" />, name: "Prisma" },
    { icon: <SiFastify className="text-5xl mb-4 text-red-600" />, name: "fastify" },
    { icon: <FaPython className="text-5xl mb-4 text-gray-400" />, name: "Python" },
  ];

  const toolsSkills = [
    // { icon: <SiVisualstudiocode className="text-5xl mb-4 text-blue-400" />, name: "VS Code" },
    { icon: <SiGit className="text-5xl mb-4 text-orange-500" />, name: "Git" },
    { icon: <SiPostman className="text-5xl mb-4 text-orange-400" />, name: "Postman" },
    { icon: <FaTrello className="text-5xl mb-4 text-blue-600" />, name: "Trello" },
    { icon: <SiJira className="text-5xl mb-4 text-blue-600" />, name: "Jira" },
    { icon: <FaGithub className="text-5xl mb-4 text-purple-600" />, name: "GitHub" },
  ];

  return (
    <section className="bg-gray-800 py-16" id="skills">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Frontend", "Backend", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition 
                ${category === cat
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {renderSkills().map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
