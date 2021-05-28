export default function ProjectYaml({
  title,
  github,
  link,
  youtube,
  description,
  lightMode,
}) {
  return (
    <div className="project-yaml">
      <table>
        <tr>
          <td className={`yaml-seperator${lightMode ? " light" : ""}`}>-</td>
          <td className={`yaml-key${lightMode ? " light" : ""}`}> {title} </td>
          <td className={`yaml-seperator${lightMode ? " light" : ""}`}>:</td>
        </tr>
      </table>

      <div className="project-description">
        {github && (
          <table>
            <tr>
              <td className={`yaml-key${lightMode ? " light" : ""}`}>Github</td>
              <td className={`yaml-seperator${lightMode ? " light" : ""}`}>
                :
              </td>
              <td className={`yaml-value${lightMode ? " light" : ""}`}>
                <a
                  target="_blank"
                  href={github}
                  rel="noreferrer"
                  className={`${lightMode ? " light" : ""}`}
                >
                  <u>{github}</u>
                </a>
              </td>
            </tr>
          </table>
        )}
        {link && (
          <table>
            <tr>
              <td className={`yaml-key${lightMode ? " light" : ""}`}>Link</td>
              <td className={`yaml-seperator${lightMode ? " light" : ""}`}>
                :
              </td>
              <td className={`yaml-value${lightMode ? " light" : ""}`}>
                <a
                  target="_blank"
                  href={link}
                  rel="noreferrer"
                  className={`${lightMode ? " light" : ""}`}
                >
                  <u>{link}</u>
                </a>
              </td>
            </tr>
          </table>
        )}
        {youtube && (
          <table>
            <tr>
              <td className={`yaml-key${lightMode ? " light" : ""}`}>
                YouTube
              </td>
              <td className={`yaml-seperator${lightMode ? " light" : ""}`}>
                :
              </td>
              <td className={`yaml-value${lightMode ? " light" : ""}`}>
                <a
                  target="_blank"
                  href={youtube}
                  rel="noreferrer"
                  className={`${lightMode ? " light" : ""}`}
                >
                  <u>{youtube}</u>
                </a>
              </td>
            </tr>
          </table>
        )}
        {description && (
          <table>
            <tr>
              <td className={`yaml-key${lightMode ? " light" : ""}`}>
                Description
              </td>
              <td className={`yaml-seperator${lightMode ? " light" : ""}`}>
                :
              </td>
              <td className={`yaml-value${lightMode ? " light" : ""}`}>
                {description}
              </td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
}
