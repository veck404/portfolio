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
import ClickSpark from "./components/reactbits/ClickSpark/ClickSpark";
import { useReducedMotion } from "framer-motion";
// import { Analytics } from "@vercel/analytics/react";

function App() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ClickSpark
      sparkColor="#60a5fa"
      sparkSize={11}
      sparkRadius={20}
      sparkCount={8}
      duration={420}
      extraScale={1.1}
      disabled={prefersReducedMotion}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10"></div>

        <CustomCursor />
        <Navbar />
        {/* <SplashCursor /> */}
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
    </ClickSpark>
  );
}

export default App;
