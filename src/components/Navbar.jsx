


import React, { useState } from "react";
import { Home, User, Code2, Mail, Briefcase, FolderGit2 } from "lucide-react";

const Navbar = ({ setShowAbout }) => {
  const [active, setActive] = useState("home");

  const menuItem = (id, label, Icon) => (
    <li
      onClick={() => {
        setActive(id);

        if (id === "about") {
          setShowAbout(true);   // open sliding about
        } else {
          setShowAbout(false);  // close if open
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`relative flex items-center gap-2 cursor-pointer transition-all duration-300
        ${active === id ? "text-purple-400" : "text-white hover:text-purple-400"}`}
    >
      <Icon
        size={19}
        className={`${active === id ? "text-purple-400" : "text-white"} transition`}
      />

      <span className="font-medium">{label}</span>

      {active === id && (
        <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
      )}
    </li>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0b0c1e] via-[#121433] to-[#0b0c1e] backdrop-blur-xl">
      <div className="w-full px-14 py-5 mt-3 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          MARISELVAM M
        </h1>

        <ul className="hidden md:flex items-center gap-12 font-medium">
          {menuItem("home", "Home", Home)}
          {menuItem("about", "About", User)}
          {menuItem("skills", "Skills", Code2)}
          {menuItem("experience", "Experience", Briefcase)}
          {menuItem("projects", "Projects", FolderGit2)}
          {menuItem("contact", "Contact", Mail)}
        </ul>
      </div>

      <div className="w-full h-[1.5px] mt-4 bg-gradient-to-r from-purple-500 via-purple-500 to-purple-500 opacity-90"></div>
    </nav>
  );
};

export default Navbar;
