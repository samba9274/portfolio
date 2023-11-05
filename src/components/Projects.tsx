import React from "react";
import { AppContext } from "./App";
import { Project } from "../interfaces";
import { constants } from "../data";
import { Components } from ".";
import useFirestore from "../hooks/useFirestore";

export const Projects = () => {
  const [state] = React.useContext(AppContext);
  const projects = useFirestore<Project>("projects");
  return (
    <div>
      <span className={`yaml-key ${state.lightMode && "light"}`}>
        {constants.pages.projects.title}
      </span>
      <span className={`yaml-seperator ${state.lightMode && "light"}`}>
        {constants.colon}
      </span>
      {projects?.map((project, index) => (
        <Components.Pages.Projects.ProjectYaml
          key={index}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
};
