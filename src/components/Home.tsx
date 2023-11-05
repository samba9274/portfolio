import React from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
import { AppContext } from "./App";
import { constants } from "../data";

export const Home = () => {
  const [state] = React.useContext(AppContext);
  return (
    <div id="Home">
      <h1>
        <span className={`md ${state.lightMode && "light"}`}>
          {constants.pages.home.topLine}
        </span>
      </h1>
      <hr />
      <br />
      <h2>
        <span className={`md ${state.lightMode && "light"}`}>
          {constants.pages.home.subLine}
        </span>
      </h2>
      <br />
      <ul>
        {constants.pages.home.devs.map((dev, index) => (
          <li key={index}>
            <span className={`md ${state.lightMode && "light"}`}> - </span>
            {dev}
          </li>
        ))}
      </ul>
      <br />[
      <a
        target="_blank"
        href="/Resume.pdf"
        className={`md-link ${state.lightMode && "light"}`}
        onClick={() => logEvent(analytics, "resume_downloaded")}
      >
        {constants.pages.home.downloadResumeLinkText}
      </a>
      ]({constants.pages.home.resumeName})
    </div>
  );
};
