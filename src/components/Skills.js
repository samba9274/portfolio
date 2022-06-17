import SkillCss from "./SkillCss";

export default function Skills({ lightMode, skills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <SkillCss
          key={index}
          lightMode={lightMode}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </div>
  );
}
