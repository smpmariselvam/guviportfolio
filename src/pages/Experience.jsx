



import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: "Quality Assurance Department",
      company: "Fleetguard Flitrum India Pvt Ltd",
      period: "06/2023 – 01/2024",
      location: "Hosur, Tamil Nadu",
      short:
        "Worked as a Quality Assurance worker at Fleetguard Flitrum India Pvt Ltd, ensuring product quality and compliance with industry standards.",
      full: `Developed automation scripts and internal tools to optimize workflows and reduce manual effort.
Collaborated with cross-functional teams to identify and resolve quality issues, improving overall product reliability.
Conducted thorough testing and quality checks to ensure products met stringent standards and customer expectations.`,
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2025 – Present",
      location: "Remote",
      short:
        "Building full stack applications using React, Node.js and MongoDB.",
      full: `Designed and developed full stack web applications using React, Node.js, Express and MongoDB.
Implemented authentication systems, REST APIs, and responsive UI components.
Focused on performance optimization, clean architecture, and scalable backend logic.`,
    },
    {
      title: "Frontend Developer",
      company: "UI & Portfolio Projects",
      period: "2025 – Present",
      location: "Self Driven",
      short:
        "Created modern UI designs and interactive portfolio applications.",
      full: `Developed responsive and modern user interfaces using React and Tailwind CSS.
Built animated portfolio sections, reusable components and dynamic layouts.
Improved UI/UX consistency and design aesthetics across multiple projects.`,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-gradient-to-br from-[#0b0c1e] via-[#121433] to-[#0b0c1e] text-white px-10 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-10 relative border-l border-purple-500 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">

                {/* Icon Circle */}
                <div
                  onClick={() => setActiveIndex(index)}
                  className="absolute -left-[38px] top-1 w-8 h-8 flex items-center justify-center 
                  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                  cursor-pointer shadow-lg hover:scale-110 transition"
                >
                  {activeIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">
                  {exp.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {exp.company}
                </p>

                <p className="text-gray-500 text-sm mb-2">
                  {exp.period} | {exp.location}
                </p>

                <p className="text-gray-300 text-sm">
                  {exp.short}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          {/* <div className="p-8 rounded-2xl bg-purple-500/10 backdrop-blur-xl shadow-2xl border border-purple-500/20"> */}
<div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 
backdrop-blur-xl border border-purple-400/30 
rounded-2xl p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">

            <h3 className="text-3xl font-bold mb-4 text-purple-400">
              {experiences[activeIndex].title}
            </h3>

            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {experiences[activeIndex].full}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;




