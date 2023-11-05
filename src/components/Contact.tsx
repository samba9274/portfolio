import React from "react";
import { Components } from ".";
export const Contact = () => {
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
      <span className={`xml-tag`}>{"<contact>"}</span>
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
      <span className={`xml-tag`}>{"</contact>"}</span>
      <br />
      <div>
        <button
          id="ContactSubmit"
          ref={contactSubmitElement}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onKeyDown}
          onMouseUp={onKeyUp}
        >
          <i className={`fas fa-paper-plane`}></i>
        </button>
      </div>
    </div>
  );
};
