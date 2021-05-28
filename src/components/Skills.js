import SkillCss from "./SkillCss";

export default function Skills({ lightMode }) {
  return (
    <div>
      <SkillCss
        language="Java"
        version="SE8"
        frameworks={["Spring Boot", "Hibernate", "Android SDK"]}
        proficiency="Advanced"
        lightMode={lightMode}
      />
      <SkillCss
        language="C++"
        version="98"
        proficiency="Advanced"
        lightMode={lightMode}
      />
      <SkillCss
        language="Python"
        version="3.7"
        frameworks={["Flask", "Django", "Tkinter"]}
        proficiency="Intermediate"
        lightMode={lightMode}
      />
      <SkillCss
        language="Javascript"
        version="ES6"
        frameworks={["ReactJS", "ExpressJS", "Angular", "React Native"]}
        proficiency="Intermediate"
        lightMode={lightMode}
      />
    </div>
  );
}
