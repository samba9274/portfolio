import React from "react";
import { constants } from "../data";
import { Components } from ".";
import useLightMode from "../hooks/useLightMode";

export const Nav = () => {
  const contactDropDown = React.useRef<HTMLDivElement>(null);
  const settingsDropDown = React.useRef<HTMLDivElement>(null);
  const [isContactDropDown, toggleContactDropDown] = React.useState(false);
  const [isSettingsDropDown, toggleSettingsDropDown] = React.useState(false);
  const [lightMode, toggleLightMode] = useLightMode();
  window.onclick = (event) => {
    if (
      isContactDropDown &&
      !(contactDropDown.current as HTMLDivElement)?.contains(
        event.target as HTMLElement
      )
    )
      toggleContactDropDown(!isContactDropDown);
    if (
      isSettingsDropDown &&
      !(settingsDropDown.current as HTMLDivElement)?.contains(
        event.target as HTMLElement
      )
    )
      toggleSettingsDropDown(!isSettingsDropDown);
  };
  return (
    <nav id="Nav">
      <ul>
        {Object.values(constants.pages).map((value, index) => (
          <Components.Layout.NavLink
            key={index}
            to={value.title}
            className={value.className}
          />
        ))}
      </ul>
      <ul id="NavBottom">
        <li>
          <div ref={contactDropDown} className="Contact-Dropdown">
            <div
              id="Contact-Dropdown-Content"
              className={`Contact-Dropdown-Content ${
                isContactDropDown && "show"
              }`}
            >
              {constants.socials.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={social.link}
                >
                  {social.name}
                </a>
              ))}
            </div>
            <i
              onClick={() => toggleContactDropDown(!isContactDropDown)}
              className="Contact-Dropdown-Button icon far fa-user-circle"
            />
          </div>
        </li>
        <li>
          <div ref={settingsDropDown} className="Settings-Dropdown">
            <div
              id="Settings-Dropdown-Content"
              className={`Settings-Dropdown-Content ${
                isSettingsDropDown && "show"
              }`}
            >
              <div>
                <span className="switch-text">{constants.lightModeText}</span>
                <label className="switch">
                  <input
                    className="switch-inside"
                    type="checkbox"
                    onClick={(e) =>
                      toggleLightMode((e.target as HTMLInputElement).checked)
                    }
                    defaultChecked={lightMode}
                  />
                  <span className="slider round" />
                </label>
              </div>
            </div>
            <i
              onClick={() => toggleSettingsDropDown(!isSettingsDropDown)}
              className="Settings-Dropdown-Button icon fas fa-cog"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};
