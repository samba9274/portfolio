import React from "react";
import { AppContext } from "./App";
import { EditorTabProps } from "../interfaces";
import { constants } from "../data";

export const EditorTab = ({ editor }: EditorTabProps) => {
  const [state, setState] = React.useContext(AppContext);
  const onEditorChange = (e: string) =>
    setState({
      ...state,
      currentEditor: state.openEditors.includes(e) ? e : state.currentEditor,
    });
  const onEditorDelete = (e: string) => {
    const i = state.openEditors.indexOf(e);
    state.openEditors.splice(i, 1);
    state.currentEditor =
      e === state.currentEditor
        ? state.openEditors[i - 1]
        : state.currentEditor;
  };
  return (
    <div
      className={`editorTab ${
        state.currentEditor !== editor && "notSelectedEditorTab"
      }`}
      onClick={() => onEditorChange(editor)}
    >
      {editor}.
      {(editor === constants.pages.home.title &&
        constants.pages.home.extension) ||
        (editor === constants.pages.about.title &&
          constants.pages.about.extension) ||
        (editor === constants.pages.projects.title &&
          constants.pages.projects.extension) ||
        (editor === constants.pages.skills.title &&
          constants.pages.skills.extension) ||
        (editor === constants.pages.contact.title &&
          constants.pages.contact.extension)}
      {editor !== constants.pages.home.title && (
        <i
          onClick={() => onEditorDelete(editor)}
          className="closeButton fas fa-times"
        ></i>
      )}
    </div>
  );
};
