import React from "react";
import { useLightModeReturn } from "../interfaces";

function useLightMode(): useLightModeReturn {
  const [lightMode, toggleLightMode] = React.useState<boolean>(false);
  const recursiveAddLight = (root: Element) => {
    root.classList.add("light");
    Array.from(root.children).forEach((node) => recursiveAddLight(node));
  };
  const recursiveRemoveLight = (root: Element) => {
    root.classList.remove("light");
    Array.from(root.children).forEach((node) => recursiveRemoveLight(node));
  };
  React.useEffect(
    () =>
      lightMode
        ? recursiveAddLight(document.documentElement)
        : recursiveRemoveLight(document.documentElement),
    [lightMode]
  );
  return [lightMode, toggleLightMode];
}

export default useLightMode;
