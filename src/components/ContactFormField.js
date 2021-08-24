export default function ContactFormField({ field, lightMode }) {
  return (
    <div className="contact-form-field">
      <span
        className={`xml-tag${lightMode ? " light" : ""}`}
      >{`<${field}>`}</span>
      <span
        role="textbox"
        id={`${field}`}
        contentEditable="true"
        className={`form_field textarea-${field}${lightMode ? " light" : ""}`}
      />
      <span className={`xml-tag${lightMode ? " light" : ""}`}>
        {`</${field}>`}
      </span>
    </div>
  );
}
