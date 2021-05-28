import { useState } from "react";
import "../styles/style.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Editor from "./Editor";
import EditorGroups from "./EditorGroups";
export default function App() {
  const [openEditors, setOpenEditors] = useState(["Home"]);
  const [currentEditor, setCurrentEditor] = useState("Home");
  const [update, setUpdate] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const onEditorDelete = (e) => {
    const i = openEditors.indexOf(e);
    openEditors.splice(i, 1);
    if (e === currentEditor) setCurrentEditor(openEditors[i - 1]);
    setOpenEditors(openEditors);
    setUpdate(!update);
  };
  const onEditorChange = (e) => {
    if (openEditors.includes(e)) setCurrentEditor(e);
    setUpdate(!update);
  };
  const contactDropDown = () => {
    document
      .getElementById("Contact-Dropdown-Content")
      .classList.toggle("show");
  };
  const settingsDropDown = () => {
    document
      .getElementById("Settings-Dropdown-Content")
      .classList.toggle("show");
  };
  const toggleLightMode = (event) => {
    setLightMode(event.target.checked);
  };
  window.onclick = (event) => {
    if (
      !event.target.matches(".Contact-Dropdown-Button") &&
      !event.target.matches(".Settings-Dropdown-Button") &&
      !(
        event.target.matches(".switch") ||
        event.target.matches(".switch-inside") ||
        event.target.matches(".slider") ||
        event.target.matches(".round") ||
        event.target.matches(".switch-text")
      )
    ) {
      let dropdowns = document.getElementsByClassName(
        "Contact-Dropdown-Content"
      );
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
      dropdowns = document.getElementsByClassName("Settings-Dropdown-Content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <main id="Container">
      <Header
        lightMode={lightMode}
        setCurrentEditor={setCurrentEditor}
        openEditors={openEditors}
      />
      <Nav
        lightMode={lightMode}
        setCurrentEditor={setCurrentEditor}
        openEditors={openEditors}
        contactDropDown={contactDropDown}
        toggleLightMode={toggleLightMode}
        settingsDropDown={settingsDropDown}
      />
      <EditorGroups
        lightMode={lightMode}
        openEditors={openEditors}
        onEditorDelete={onEditorDelete}
        currentEditor={currentEditor}
        onEditorChange={onEditorChange}
      />
      <Editor lightMode={lightMode} currentEditor={currentEditor} />
      <Footer />
    </main>
  );
}
