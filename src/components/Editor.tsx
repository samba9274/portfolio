import React from "react";
import { AppContext } from "./App";
import { constants } from "../data";
export const Editor = () => {
  const [state] = React.useContext(AppContext);
  return (
    <div id="Editor">
      {Object.values(constants.pages).map(
        (value, index) =>
          state.currentEditor === value.title && <value.component key={index} />
      )}
    </div>
  );
};
