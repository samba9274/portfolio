import React from "react";
import { AppContext } from "./App";
import { ContactFormFieldProps } from "../interfaces";

export const ContactFormField = ({ field, refObj }: ContactFormFieldProps) => {
  const [state] = React.useContext(AppContext);
  return (
    <div className="contact-form-field">
      <span
        className={`xml-tag ${state.lightMode && "light"}`}
      >{`<${field}>`}</span>
      <span
        role="textbox"
        ref={refObj}
        contentEditable="true"
        className={`form_field textarea-${field} ${state.lightMode && "light"}`}
      />
      <span className={`xml-tag ${state.lightMode && "light"}`}>
        {`</${field}>`}
      </span>
    </div>
  );
};
