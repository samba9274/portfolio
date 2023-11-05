import React from "react";
import { AppContext } from "./App";
import { SkillCSSProps } from "../interfaces";
import { constants } from "../data";

export const SkillCss = ({ name, description }: SkillCSSProps) => {
  const [state] = React.useContext(AppContext);
  return (
    <div className="skill-css">
      <span className={`css-selector ${state.lightMode && "light"}`}>
        {constants.dot}
        {name}
      </span>
      {constants.singleBlankSpace}
      {constants.curlyBraceOpen}
      <div className={`css-body ${state.lightMode && "light"}`}>
        {description.map((desc, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td className={`css-key ${state.lightMode && "light"}`}>
                  {desc.key}
                </td>
                <td>
                  {constants.singleBlankSpace}
                  {constants.colon}
                  {constants.singleBlankSpace}
                </td>
                <td className={`css-value ${state.lightMode && "light"}`}>
                  {desc.value}
                </td>
                <td>{constants.semiColon}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      {constants.curlyBraceClose}
    </div>
  );
};
