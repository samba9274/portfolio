import React from "react";
import { AppContext } from "./App";
import { Components } from ".";
export const Contact = () => {
  const [state] = React.useContext(AppContext);
  const nameElement = React.useRef<HTMLSpanElement>(null);
  const emailElement = React.useRef<HTMLSpanElement>(null);
  const messageElement = React.useRef<HTMLSpanElement>(null);
  const contactSubmitElement = React.useRef<HTMLButtonElement>(null);
  const onKeyDown = () => {
    onMouseLeave();
    contactSubmitElement.current?.classList.add("pressed");
  };
  const onKeyUp = () => {
    onMouseEnter();
    contactSubmitElement.current?.classList.remove("pressed");
  };
  const onMouseEnter = () => {
    contactSubmitElement.current?.classList.add("hover");
  };
  const onMouseLeave = () => {
    contactSubmitElement.current?.classList.remove("hover");
  };
  return (
    <div>
      <span className={`xml-tag ${state.lightMode && "light"}`}>
        {"<contact>"}
      </span>
      <Components.Pages.Contact.ContactFormField
        refObj={nameElement}
        field="name"
      />
      <Components.Pages.Contact.ContactFormField
        refObj={emailElement}
        field="email"
      />
      <Components.Pages.Contact.ContactFormField
        refObj={messageElement}
        field="message"
      />
      <span className={`xml-tag ${state.lightMode && "light"}`}>
        {"</contact>"}
      </span>
      <br />
      <div>
        <button
          id="ContactSubmit"
          ref={contactSubmitElement}
          className={state.lightMode && "light"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onKeyDown}
          onMouseUp={onKeyUp}
        >
          <i className={`fas fa-paper-plane ${state.lightMode && "light"}`}></i>
        </button>
      </div>
    </div>
  );
};
