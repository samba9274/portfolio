import React from "react";
import "../styles/style.css";
import { StateInterface } from "../interfaces";
import { constants } from "../data";
import { Components } from ".";

export const AppContext = React.createContext<any>(null);

export const App = () => {
  const [state, setState] = React.useState<StateInterface>({
    openEditors: [constants.pages.home.title],
    lightMode: false,
    currentEditor: constants.pages.home.title,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      <main id="Container">
        <Components.Layout.Header />
        <Components.Layout.Nav />
        <Components.Layout.EditorGroups />
        <Components.Layout.Editor />
        <Components.Layout.Footer />
      </main>
    </AppContext.Provider>
  );
};
export default App;
