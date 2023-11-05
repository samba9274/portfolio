import { ContactFormFieldProps } from "../interfaces";

export const ContactFormField = ({ field, refObj }: ContactFormFieldProps) => (
  <div className="contact-form-field">
    <span className={`xml-tag`}>{`<${field}>`}</span>
    <span
      role="textbox"
      ref={refObj}
      contentEditable="true"
      className={`form_field textarea-${field}`}
    />
    <span className={`xml-tag`}>{`</${field}>`}</span>
  </div>
);
