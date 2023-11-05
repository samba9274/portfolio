import React from "react";

export interface description {
  key: string;
  value: string;
}

export interface SkillCSSProps {
  name: string;
  description: description[];
}

export interface Skill {
  name: string;
  description: description[];
}

export interface Project {
  name: string;
  description: description[];
}

export interface SkillsProps {
  skills: Skill[];
}

export interface LazyLoadElement {
  default: React.FunctionComponent;
}

export interface StateInterface {
  openEditors: string[];
  currentEditor: string;
}

export interface EditorTabProps {
  editor: string;
}

export interface JsonPairProps {
  JsonKey: string;
  JsonValue: string;
  comma: boolean;
}

export interface ProjectsProps {
  projects: Project[];
}

export interface NavLinkProps {
  to: string;
  className: string;
}

export interface ContactFormFieldProps {
  field: string;
  refObj: React.RefObject<HTMLSpanElement>;
}

interface AppContextState {
  openEditors: string[];
  currentEditor: string;
}

export type AppContextType = [state: AppContextState, setState: Function];

export type useLightModeReturn = [
  lightMode: boolean,
  toggleLightMode: Function
];
