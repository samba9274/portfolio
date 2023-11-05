import { constants } from "../data";
import { Components } from ".";
export const AboutMe = () => (
  <div>
    <span className={`json-seperator`}>{constants.curlyBraceOpen}</span>
    <div className="json-pair">
      <span className={`json-key`}>
        {Object.keys(constants.pages.about.aboutJson)[0]}
      </span>
      <span className={`json-seperator`}>
        {constants.singleBlankSpace}:{constants.singleBlankSpace}
      </span>
      <span className={`json-seperator`}>{constants.curlyBraceOpen}</span>
      {Object.entries(constants.pages.about.aboutJson["About Me"]).map(
        ([key, value], index) => (
          <Components.Pages.AboutMe.JsonPair
            key={index}
            JsonKey={key}
            JsonValue={value}
            comma={
              index !==
              Object.entries(constants.pages.about.aboutJson["About Me"])
                .length -
                1
            }
          />
        )
      )}
      <span className={`json-seperator`}>{constants.curlyBraceClose}</span>
    </div>
    <span className={`json-seperator`}>{constants.curlyBraceClose}</span>
  </div>
);
