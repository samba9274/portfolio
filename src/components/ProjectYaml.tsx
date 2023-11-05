import React from "react";
import { AppContext } from "./App";
import { Project } from "../interfaces";
import { constants } from "../data";

export const ProjectYaml = ({ name, description }: Project) => {
  const [state] = React.useContext(AppContext);
  return (
    <div className="project-yaml">
      <table>
        <tbody>
          <tr>
            <td className={`yaml-seperator ${state.lightMode && "light"}`}>
              {constants.hyphen}
            </td>
            <td className={`yaml-key ${state.lightMode && "light"}`}>
              {constants.singleBlankSpace}
              {name}
              {constants.singleBlankSpace}
            </td>
            <td className={`yaml-seperator ${state.lightMode && "light"}`}>
              {constants.colon}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="project-description">
        {description.map((desc, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td className={`yaml-key ${state.lightMode && "light"}`}>
                  {desc.key}
                </td>
                <td className={`yaml-seperator ${state.lightMode && "light"}`}>
                  {constants.colon}
                </td>
                <td className={`yaml-value ${state.lightMode && "light"}`}>
                  {desc.value.startsWith("http") ? (
                    <a
                      target="_blank"
                      href={desc.value}
                      rel="noreferrer"
                      className={state.lightMode && "light"}
                    >
                      <u>{desc.value}</u>
                    </a>
                  ) : (
                    desc.value
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};
