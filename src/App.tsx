// import React from "react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "./components/Navbar";
// import SplashCursor from "./components/reactbits/SplashCursor/SplashCursor";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";
// import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10"></div>

      {/* Custom cursor and UI */}
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
