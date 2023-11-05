import React from "react";
import { AppContext } from "./App";
import { NavLinkProps } from "../interfaces";

export const NavLink = ({ to, className }: NavLinkProps) => {
  const [state, setState] = React.useContext(AppContext);
  return (
    <li>
      <i
        onClick={() => {
          setState({ ...state, currentEditor: to });
          if (!state.openEditors.includes(to)) state.openEditors.push(to);
        }}
        className={`icon ${className}`}
      ></i>
    </li>
  );
};
