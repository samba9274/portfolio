import JsonPair from "./JsonPair";

export default function AboutMe({ lightMode }) {
  return (
    <div>
      <span className={`json-seperator${lightMode ? " light" : ""}`}>
        {"{"}
      </span>
      <div className="json-pair">
        <span className={`json-key${lightMode ? " light" : ""}`}>
          "About Me"
        </span>
        <span className={`json-seperator${lightMode ? " light" : ""}`}>
          {" "}
          :{" "}
        </span>
        <span className={`json-seperator${lightMode ? " light" : ""}`}>
          {"{"}
        </span>
        <JsonPair
          JsonKey="Name"
          JsonValue="Yash Eksambekar"
          comma={true}
          lightMode={lightMode}
        />
        <JsonPair
          JsonKey="Date Of Birth"
          JsonValue="16th July, 2001"
          comma={true}
          lightMode={lightMode}
        />
        <JsonPair
          JsonKey="Description"
          JsonValue="I am a Second Year Computer Engineering student at AISSMS College of Engineering, Pune. Core team member of Google DSC chapter at my college. Skilled in Java technologies like Spring Boot and AndroidSDK. I have worked on projects in Fullstack(MERN) and Android domains. I'm skilled at Cloud by Amazon Web Services and am currently learning Data Science domain. Get in touch with me through Contact page."
          comma={true}
          lightMode={lightMode}
        />
        <JsonPair
          JsonKey="Education"
          JsonValue="Persuing Bachelor's in Engineering in Compter Engineering"
          comma={false}
          lightMode={lightMode}
        />
        <span className={`json-seperator${lightMode ? " light" : ""}`}>
          {"}"}
        </span>
      </div>
      <span className={`json-seperator${lightMode ? " light" : ""}`}>
        {"}"}
      </span>
    </div>
  );
}
