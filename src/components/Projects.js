import ProjectYaml from "./ProjectYaml";

export default function Projects({ lightMode, projects }) {
  return (
    <div>
      <span className={`yaml-key${lightMode ? " light" : ""}`}>Projects </span>
      <span className={`yaml-seperator${lightMode ? " light" : ""}`}>:</span>
      {projects.map((skill, index) => (
        <ProjectYaml
          key={index}
          lightMode={lightMode}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </div>
  );
}
