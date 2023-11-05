import { Project } from "../interfaces";
import { constants } from "../data";

export const ProjectYaml = ({ name, description }: Project) => (
  <div className="project-yaml">
    <table>
      <tbody>
        <tr>
          <td className={`yaml-seperator`}>{constants.hyphen}</td>
          <td className={`yaml-key`}>
            {constants.singleBlankSpace}
            {name}
            {constants.singleBlankSpace}
          </td>
          <td className={`yaml-seperator`}>{constants.colon}</td>
        </tr>
      </tbody>
    </table>

    <div className="project-description">
      {description.map((desc, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td className={`yaml-key`}>{desc.key}</td>
              <td className={`yaml-seperator`}>{constants.colon}</td>
              <td className={`yaml-value`}>
                {desc.value.startsWith("http") ? (
                  <a target="_blank" href={desc.value} rel="noreferrer">
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
