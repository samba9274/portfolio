import React from "react";
import { AppContext } from "./App";
import { constants } from "../data";

export const Header = () => {
  const [state, setState] = React.useContext(AppContext);
  return (
    <header id="MenuBar">
      <i
        onClick={() => {
          setState({ ...state, currentEditor: constants.pages.home.title });
          if (!state.openEditors.includes(constants.pages.home.title))
            state.openEditors.push(constants.pages.home.title);
        }}
        id="Logo"
        className="fas fa-code"
      ></i>
      <ul>
        {constants.headerTitles.map((headerTitle, index) => (
          <li key={index}>{headerTitle}</li>
        ))}
      </ul>
    </header>
  );
};
