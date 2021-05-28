export default function JsonPair({ JsonKey, JsonValue, comma, lightMode }) {
  return (
    <table className="json-pair">
      <tr>
        <td className={`json-key${lightMode ? " light" : ""}`}>"{JsonKey}"</td>
        <td className={`json-seperator${lightMode ? " light" : ""}`}> : </td>
        <td className={`json-value${lightMode ? " light" : ""}`}>
          "{JsonValue}"
          {comma && (
            <span className={`json-seperator${lightMode ? " light" : ""}`}>
              ,
            </span>
          )}
        </td>
      </tr>
    </table>
  );
}
