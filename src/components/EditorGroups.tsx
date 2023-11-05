import React from "react";
import { AppContext } from "./App";
import { Components } from ".";

export const EditorGroups = () => {
  const [state] = React.useContext(AppContext);
  return (
    <div id="EditorGroups" className={state.lightMode && "light"}>
      {state.openEditors.map((editor: string, index: number) => (
        <Components.Layout.EditorTab key={index} editor={editor} />
      ))}
    </div>
  );
};
