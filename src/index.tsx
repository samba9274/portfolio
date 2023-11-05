import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./styles/loader.css";
import { LazyLoadElement } from "./interfaces";

const App: React.LazyExoticComponent<React.FunctionComponent> = React.lazy(() =>
  import("./components/App").then((module): LazyLoadElement => {
    return { default: module.App };
  })
);
const renderLoader: Function = () => (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "8px solid #e0e0e0",
      borderRadius: "50%",
      borderTop: "8px solid #555",
      width: "50px",
      height: "50px",
      WebkitAnimation: "spin 1s linear infinite",
      MozAnimation: "spin 1s linear infinite",
      animation: "spin 1s linear infinite",
    }}
  />
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={renderLoader()}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
