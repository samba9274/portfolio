import React from "react";
function useFirestore() {
  const [lightMode, toggleLightMode] = React.useState<boolean>(false);
  const recursiveAddLight = (root: Element) => {
    root.classList.add("light");
    Array.from(root.children).forEach((node) => recursiveAddLight(node));
  };
  const recursiveRemoveLight = (root: HTMLElement) => {
    root.classList.remove("light");
    Array.from(root.children).forEach((node) => recursiveAddLight(node));
  };
  React.useEffect(() => {
    if (lightMode) recursiveAddLight(document.documentElement);
    else recursiveRemoveLight(document.documentElement);
  }, [lightMode]);
  return [lightMode, toggleLightMode];
}

export default useFirestore;
