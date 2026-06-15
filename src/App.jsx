


import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import { CgErase } from "react-icons/cg";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Navbar setShowAbout={setShowAbout} />

      <Home />
      <Skills />

      {/* Sliding About Overlay */}
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
      <Certifications />
      <Experience />
      <Projects />
      
      <Contact />
      
    </>
  );
}

export default App;
