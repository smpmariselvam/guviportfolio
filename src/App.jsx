


import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Navbar setShowAbout={setShowAbout} />

      <Home />
      <Skills />

      {/* Sliding About Overlay */}
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
