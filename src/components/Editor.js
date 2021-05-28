import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
export default function Editor({ lightMode, currentEditor }) {
  return (
    <div id="Editor" className={`${lightMode ? "light" : ""}`}>
      {currentEditor === "AboutMe" ? (
        <AboutMe lightMode={lightMode} />
      ) : currentEditor === "Skills" ? (
        <Skills lightMode={lightMode} />
      ) : currentEditor === "Projects" ? (
        <Projects lightMode={lightMode} />
      ) : currentEditor === "Contact" ? (
        <Contact lightMode={lightMode} />
      ) : (
        <Home lightMode={lightMode} />
      )}
    </div>
  );
}
