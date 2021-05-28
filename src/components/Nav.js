import NavLink from "./NavLink";

export default function Nav({
  lightMode,
  setCurrentEditor,
  openEditors,
  contactDropDown,
  toggleLightMode,
  settingsDropDown,
}) {
  return (
    <nav id="Nav" className={`${lightMode ? "light" : ""}`}>
      <ul>
        <NavLink
          to="Home"
          openEditors={openEditors}
          setCurrentEditor={setCurrentEditor}
          className="fas fa-home"
        />
        <NavLink
          to="AboutMe"
          openEditors={openEditors}
          setCurrentEditor={setCurrentEditor}
          className="far fa-user"
        />
        <NavLink
          to="Skills"
          openEditors={openEditors}
          setCurrentEditor={setCurrentEditor}
          className="far fa-star"
        />
        <NavLink
          to="Projects"
          openEditors={openEditors}
          setCurrentEditor={setCurrentEditor}
          className="far fa-lightbulb"
        />
        <NavLink
          to="Contact"
          openEditors={openEditors}
          setCurrentEditor={setCurrentEditor}
          className="far fa-envelope"
        />
      </ul>
      <ul id="NavBottom">
        <li>
          <div className="Contact-Dropdown">
            <div
              id="Contact-Dropdown-Content"
              className="Contact-Dropdown-Content"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/yash-eksambekar-958a1a1a9/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/samba9274"
              >
                Github
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/samba.9274/"
              >
                Instagram
              </a>
            </div>
            <i
              onClick={contactDropDown}
              className="Contact-Dropdown-Button icon far fa-user-circle"
            ></i>
          </div>
        </li>
        <li>
          <div className="Settings-Dropdown">
            <div
              id="Settings-Dropdown-Content"
              className="Settings-Dropdown-Content"
            >
              <div>
                <span className="switch-text">Light Mode</span>
                <label className="switch">
                  <input
                    className="switch-inside"
                    type="checkbox"
                    onClick={toggleLightMode}
                    defaultChecked={lightMode}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <i
              onClick={settingsDropDown}
              className="Settings-Dropdown-Button icon fas fa-cog"
            ></i>
          </div>
        </li>
      </ul>
    </nav>
  );
}
