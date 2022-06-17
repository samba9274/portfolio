export default function ProjectYaml({ name, description, lightMode }) {
  return (
    <div className="project-yaml">
      <table>
        <tbody>
          <tr>
            <td className={`yaml-seperator${lightMode ? " light" : ""}`}>-</td>
            <td className={`yaml-key${lightMode ? " light" : ""}`}> {name} </td>
            <td className={`yaml-seperator${lightMode ? " light" : ""}`}>:</td>
          </tr>
        </tbody>
      </table>

      <div className="project-description">
        {description.map((desc, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td className={`yaml-key${lightMode ? " light" : ""}`}>
                  {desc.key}
                </td>
                <td className={`yaml-seperator${lightMode ? " light" : ""}`}>
                  :
                </td>
                <td className={`yaml-value${lightMode ? " light" : ""}`}>
                  {desc.value.startsWith("http") ? (
                    <a
                      target="_blank"
                      href={desc.value}
                      rel="noreferrer"
                      className={`${lightMode ? " light" : ""}`}
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
}
