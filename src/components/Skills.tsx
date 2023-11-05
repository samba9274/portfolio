import { Skill } from "../interfaces";
import React from "react";
import { Components } from ".";
import useFirestore from "../hooks/useFirestore";

export const Skills = () => {
  const skills = useFirestore<Skill>("skills");
  return (
    <React.Fragment>
      {skills?.map((skill, index) => (
        <Components.Pages.Skills.SkillCss
          key={index}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </React.Fragment>
  );
};
