import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
export default function Editor({ lightMode, currentEditor }) {
  const [projects, setProjects] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  React.useEffect(() => {
    getDocs(collection(db, "projects")).then((querySnapshot) =>
      setProjects(querySnapshot.docs.map((doc) => doc.data()))
    );
    getDocs(collection(db, "skills")).then((querySnapshot) =>
      setSkills(querySnapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div id="Editor" className={`${lightMode ? "light" : ""}`}>
      {currentEditor === "AboutMe" ? (
        <AboutMe lightMode={lightMode} />
      ) : currentEditor === "Skills" ? (
        <Skills lightMode={lightMode} skills={skills} />
      ) : currentEditor === "Projects" ? (
        <Projects lightMode={lightMode} projects={projects} />
      ) : currentEditor === "Contact" ? (
        <Contact lightMode={lightMode} />
      ) : (
        <Home lightMode={lightMode} />
      )}
    </div>
  );
}
