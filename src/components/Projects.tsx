import { Project } from "../interfaces";
import { constants } from "../data";
import { Components } from ".";
import useFirestore from "../hooks/useFirestore";

export const Projects = () => {
  const projects = useFirestore<Project>("projects");
  return (
    <div>
      <span className={`yaml-key`}>{constants.pages.projects.title}</span>
      <span className={`yaml-seperator`}>{constants.colon}</span>
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
