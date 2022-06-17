export default function SkillCss({ name, description, lightMode }) {
  return (
    <div className="skill-css">
      <span className={`css-selector${lightMode ? " light" : ""}`}>
        .{name}
      </span>
      {" {"}
      <div className={`css-body${lightMode ? " light" : ""}`}>
        {description.map((desc, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td className={`css-key${lightMode ? " light" : ""}`}>
                  {desc.key}
                </td>
                <td> : </td>
                <td className={`css-value${lightMode ? " light" : ""}`}>
                  {desc.value}
                </td>
                <td>;</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      {"}"}
    </div>
  );
}
