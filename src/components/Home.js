import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export default function Home({ lightMode }) {
  return (
    <div id="Home">
      <h1>
        <span className={`md${lightMode ? " light" : ""}`}># Hello!</span>
      </h1>
      <hr />
      <br />
      <h2>
        <span className={`md${lightMode ? " light" : ""}`}>
          ## I am Yash Eksambekar
        </span>
      </h2>
      <br />
      <ul>
        <li>
          <span className={`md${lightMode ? " light" : ""}`}>-</span> Fullstack
          Developer
        </li>
        <li>
          <span className={`md${lightMode ? " light" : ""}`}>-</span> Cloud
          Architect
        </li>
        <li>
          <span className={`md${lightMode ? " light" : ""}`}>-</span> Machine
          Learning Enthusiast
        </li>
      </ul>
      <br />[
      <a
        target="_blank"
        href="/Resume.pdf"
        className={`md-link${lightMode ? " light" : ""}`}
        onClick={() => logEvent(analytics, "resume_downloaded")}
      >
        Download Resume
      </a>
      ](Resume.pdf)
    </div>
  );
}
