

import React from "react";
import { Download, Linkedin, Github, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0f172a] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* TITLE */}
        <p className="text-lg md:text-xl font-semibold text-purple-300 mb-3 tracking-wide">
          Hi, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          MARISELVAM M
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          I'm a{" "}
          <span className="animated-text font-extrabold">
            Full Stack Developer
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          I build modern, scalable, and high-performance web applications with clean UI,
          strong backend architecture, and seamless user experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
         

          <a
            href="https://www.linkedin.com/in/m-mari-selvam-24904024a"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/smpmariselvam"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Github size={20} />
          </a>

          <a
            href="mailto:smpmariselvam199@gmail.com"
            className="p-3 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition"
          >
            <Mail size={20} />
          </a>

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animated-text {
          background: linear-gradient(
            270deg,
            #a855f7,
            #ec4899,
            #22d3ee,
            #22c55e,
            #facc15,
            #a855f7
          );
          background-size: 1200% 1200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Home;