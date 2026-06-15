import React from "react";
import { ExternalLink, Award, Calendar, Building2 } from "lucide-react";

import cert1 from "../assets/projects/fsd.png";
import cert2 from "../assets/projects/node.png";
import cert3 from "../assets/projects/react.png";

const certifications = [
  {
    title: "Full Stack Development",
    organization: "GUVI",
    date: "Issued: 2025",
    description:
      "Completed Full Stack Development program covering frontend, backend, database management, and deployment.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    certificateLink: "https://drive.google.com/file/d/1CNZFXnApxe9rsTc6YDsmbYVZb0ug_nAf/view?usp=sharing",
    image: cert1,
  },
  {
    title: "MongoDB Certification",
    organization: "MongoDB University",
    date: "Issued: 2025",
    description:
      "Learned MongoDB fundamentals including CRUD operations, aggregation pipelines, indexing, and database design.",
    skills: ["MongoDB", "Database Design", "CRUD", "Aggregation"],
    certificateLink: "https://drive.google.com/file/d/1RMCLLUL6W_qCSk_riiMNFylJvc0Kfwbv/view?usp=sharing",
    image: cert2,
  },
  {
    title: "React Development",
    organization: "GUVI",
    date: "Issued: 2025",
    description:
      "Built responsive web applications using React, Hooks, Components, Routing, and API integration.",
    skills: ["React", "Hooks", "Routing", "REST API"],
    certificateLink: "https://drive.google.com/file/d/1N5algRwmyo4n70AESlrKVK0-Z1kxU4Eo/view?usp=sharing",
    image: cert3,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-yellow-400" size={20} />
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Building2 size={16} />
                  <span>{cert.organization}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;