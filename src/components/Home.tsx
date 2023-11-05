import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
import { constants } from "../data";

export const Home = () => (
  <div id="Home">
    <h1>
      <span className={`md`}>{constants.pages.home.topLine}</span>
    </h1>
    <hr />
    <br />
    <h2>
      <span className={`md`}>{constants.pages.home.subLine}</span>
    </h2>
    <br />
    <ul>
      {constants.pages.home.devs.map((dev, index) => (
        <li key={index}>
          <span className={`md`}> - </span>
          {dev}
        </li>
      ))}
    </ul>
    <br />[
    <a
      target="_blank"
      href="/Resume.pdf"
      className={`md-link`}
      onClick={() => logEvent(analytics, "resume_downloaded")}
    >
      {constants.pages.home.downloadResumeLinkText}
    </a>
    ]({constants.pages.home.resumeName})
  </div>
);
