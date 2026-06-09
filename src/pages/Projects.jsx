import React from "react";
import { Github, ExternalLink } from "lucide-react";

import Hostel from "../assets/projects/Hostel.png";
import Recipe from "../assets/projects/Recipe.png";
import url from "../assets/projects/url.png";

const projects = [
  {
    title: "Hostel-core  | MERN Stack",
    description:
      "A comprehensive hostel management system built with the MERN stack, featuring secure authentication, role-based access control, and efficient management of hostel operations.",
    tech: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "Groq API",
      "Brevo API",
    ],

    githubsource :
      "https://github.com/smpmariselvam/Hostel-Core.git",
    githubBackend:
      "https://hostel-management-system-five-eta.vercel.app/",

    live: "https://hostel-management-system-5ah7.vercel.app/",
    image: Hostel,
  },

  {
    title: "Recipe — MERN Social Platform",
    description:
      "A MERN stack social platform for sharing and discovering recipes, featuring user authentication, recipe management, and real-time chat functionality.",

    tech: ["React", "Node", "Express", "MongoDB", "Socket.IO"],

    githubsource :
      "https://github.com/smpmariselvam/Recipes-App.git",
    githubBackend:
      "https://github.com/smpmariselvam/Recipes-App.git",

    live: "https://sage-kataifi-2d46ab.netlify.app/",
    image: Recipe,
  },

  {
    title: "url-shortener | MERN Stack",
    description:
      "A full-stack url shortening web application built with the MERN stack, featuring secure authentication, url management, and seamless user experience.",

    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],

    githubsource :
      "https://github.com/smpmariselvam/url.git",
    githubBackend:
      "https://url-backend-ip4f.onrender.com",

    live: "https://url-shortener-frontend.vercel.app/",
    image: url,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-[#0b0c1e] via-[#121433] to-[#0b0c1e] text-white px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">

                  {/* source  */}
                  {project.githubsource  && (
                    <a
                      href={project.githubsource }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
                    >
                      <Github size={16} />
                      source 
                    </a>
                  )}

                  {/* Backend */}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition"
                    >
                      <Github size={16} />
                      Backend
                    </a>
                  )}

                  {/* Live */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        <p className="text-center text-gray-400 mt-16 text-sm">
          More projects available on GitHub
        </p>

      </div>
    </section>
  );
};

export default Projects;