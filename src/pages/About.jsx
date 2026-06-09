
import React from "react";

const About = ({ showAbout }) => {
  return (
    <div
      className={`fixed top-[110px] right-0 w-full h-[calc(100vh-110px)] z-40
      transform transition-transform duration-600 ease-in-out
      ${showAbout ? "translate-x-0" : "translate-x-full"}`}
    >
      <section
        id="about"
        className="min-h-full w-full flex items-center justify-center 
        bg-gradient-to-br from-[#0b0c1e] via-[#121433] to-[#0b0c1e] 
        text-white px-10 overflow-y-auto"
      >
        <div className="w-full max-w-4xl flex flex-col justify-center items-center text-center mt-10">
          
          {/* CONTENT */}
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
            I am a passionate Full Stack Web Developer with strong foundation in both 
            frontend and backend technologies. I enjoy building complete web applications 
            from designing responsive UI interfaces to developing secure backend APIs.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-xl">
            My stack includes React, Node.js, Express, and MongoDB. I focus on writing 
            clean, scalable code and creating seamless user experiences that feel modern and smooth.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I’m eager to learn, improve my skills, and contribute to 
            innovative projects that create real-world impact.
          </p>

        </div>
      </section>
    </div>
  );
};

export default About;