export default function SkillCss({
  language,
  version,
  frameworks,
  proficiency,
  lightMode,
}) {
  return (
    <div className="skill-css">
      <span className={`css-selector${lightMode ? " light" : ""}`}>
        .{language}
      </span>
      {" {"}
      <div className={`css-body${lightMode ? " light" : ""}`}>
        {version && (
          <table>
            <tr>
              <td className={`css-key${lightMode ? " light" : ""}`}>Version</td>
              <td> : </td>
              <td className={`css-value${lightMode ? " light" : ""}`}>
                {version}
              </td>
              <td>;</td>
            </tr>
          </table>
        )}
        {frameworks && (
          <table>
            <tr>
              <td className={`css-key${lightMode ? " light" : ""}`}>
                Frameworks
              </td>
              <td> : </td>
              <td className={`css-value${lightMode ? " light" : ""}`}>
                {frameworks.join(", ")}
              </td>
              <td>;</td>
            </tr>
          </table>
        )}
        {proficiency && (
          <table>
            <tr>
              <td className={`css-key${lightMode ? " light" : ""}`}>
                Proficiency
              </td>
              <td> : </td>
              <td className={`css-value${lightMode ? " light" : ""}`}>
                {proficiency}
              </td>
              <td>;</td>
            </tr>
          </table>
        )}
      </div>
      {"}"}
    </div>
  );
}
