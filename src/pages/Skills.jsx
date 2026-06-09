



import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiBootstrap,
  SiC,
  SiPython,
  SiOpenjdk,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Node", icon: <SiNodedotjs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#ffffff" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
 
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-[#0f1022] via-[#191b3a] to-[#0f1022]
      text-white px-10 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full bottom-[-150px] right-[-150px] animate-pulse"></div>

      <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-fadeDown">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 z-10 perspective">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center 
            p-6 rounded-2xl 
            bg-white/5 backdrop-blur-lg border border-white/10
            hover:border-purple-500
            hover:shadow-purple-500/40
            transition-all duration-500 
            animate-fadeUp"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            <div className="text-5xl mb-4 animate-float group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            <p className="text-lg font-semibold text-gray-200 group-hover:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-fadeDown {
          animation: fadeDown 0.8s ease forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;


// import React from "react";
// import {
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
//   SiJavascript,
//   SiReact,
//   SiMysql,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiGit,
//   SiGithub,
//   SiPostgresql,
//   SiBootstrap,
//   SiC,
//   SiPython,
//   SiOpenjdk,
// } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
//   { name: "CSS", icon: <SiCss3 color="#1572B6" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
//   { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
//   { name: "React", icon: <SiReact color="#61DAFB" /> },
//   { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
//   { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
//   { name: "Node", icon: <SiNodedotjs color="#339933" /> },
//   { name: "Express", icon: <SiExpress color="#ffffff" /> },
//   { name: "Git", icon: <SiGit color="#F05032" /> },
//   { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
//   { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },

// ];

// // Split into 3 rows
// const row1 = skills.slice(0, 6);
// const row2 = skills.slice(6, 12);
// const row3 = skills.slice(12, 16);

// const SkillRow = ({ data, direction }) => (
//   <div className="overflow-hidden w-full py-6">
//     <div
//       className={`flex gap-10 whitespace-nowrap ${
//         direction === "left" ? "animate-slideLeft" : "animate-slideRight"
//       }`}
//     >
//       {[...data, ...data].map((skill, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center 
//           min-w-[140px] p-6 rounded-2xl 
//           bg-white/5 backdrop-blur-lg border border-white/10
//           hover:scale-110 hover:border-purple-500
//           transition-all duration-500"
//         >
//           <div className="text-5xl mb-4 animate-float">
//             {skill.icon}
//           </div>
//           <p className="text-lg font-semibold text-gray-200">
//             {skill.name}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen flex flex-col justify-center items-center
//       bg-gradient-to-br from-[#0f1022] via-[#191b3a] to-[#0f1022]
//       text-white px-10 relative overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full top-[-150px] left-[-150px]"></div>
//       <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[150px] rounded-full bottom-[-150px] right-[-150px]"></div>

//       <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-400 to-pink-500 mt-10 bg-clip-text text-transparent">
//         My Skills
//       </h2>

//       <div className="w-full space-y-8">
//         <SkillRow data={row1} direction="left" />
//         <SkillRow data={row2} direction="right" />
//         <SkillRow data={row3} direction="left" />
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes slideLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         @keyframes slideRight {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }

//         .animate-slideLeft {
//           animation: slideLeft 20s linear infinite;
//         }

//         .animate-slideRight {
//           animation: slideRight 20s linear infinite;
//         }

//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-6px); }
//           100% { transform: translateY(0px); }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;
