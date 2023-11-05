import { SkillCSSProps } from "../interfaces";
import { constants } from "../data";

export const SkillCss = ({ name, description }: SkillCSSProps) => (
  <div className="skill-css">
    <span className={`css-selector`}>
      {constants.dot}
      {name}
    </span>
    {constants.singleBlankSpace}
    {constants.curlyBraceOpen}
    <div className={`css-body`}>
      {description.map((desc, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td className={`css-key`}>{desc.key}</td>
              <td>
                {constants.singleBlankSpace}
                {constants.colon}
                {constants.singleBlankSpace}
              </td>
              <td className={`css-value`}>{desc.value}</td>
              <td>{constants.semiColon}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
    {constants.curlyBraceClose}
  </div>
);
