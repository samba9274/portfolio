import React from "react";
import { AppContext } from "./App";
import { JsonPairProps } from "../interfaces";
import { constants } from "../data";

export const JsonPair = ({ JsonKey, JsonValue, comma }: JsonPairProps) => {
  const [state] = React.useContext(AppContext);
  return (
    <table className="json-pair">
      <tbody>
        <tr>
          <td className={`json-key`}>
            {constants.quote}
            {JsonKey}
            {constants.quote}
          </td>
          <td className={`json-seperator`}>
            {constants.singleBlankSpace}:{constants.singleBlankSpace}
          </td>
          <td className={`json-value`}>
            {constants.quote}
            {JsonValue}
            {constants.quote}
            {comma && (
              <span className={`json-seperator`}>{constants.comma}</span>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
