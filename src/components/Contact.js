import emailjs from "emailjs-com";
import ContactFormField from "./ContactFormField";
import React, { useState } from "react";
export default function Contact({ lightMode }) {
  const [message, setMessage] = useState(
    "     ^\n    / \\\n     |\n     ---- Send me a message!"
  );
  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById("name").textContent === "") {
      alert("Please enter your name.");
      return;
    }
    if (document.getElementById("email").textContent === "") {
      alert("Please enter your name.");
      return;
    }
    if (document.getElementById("message").textContent === "") {
      alert("Please enter message.");
      return;
    }
    emailjs
      .sendForm(
        "service_mbfbi6u",
        "template_7q1zggs",
        e.target,
        "user_cRIfPj32pfTytzGtHv1g6"
      )
      .then(
        (result) => {
          setMessage("Thanks for the message. I will get back to you soon!");
        },
        (error) => {
          alert("There seems to be an error. Please try again later.");
        }
      );
    document.getElementById("name").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("message").textContent = "";
  };
  const onSubmit = (e) => {
    e.preventDefault();
    document.getElementById(
      "ContactForm"
    ).innerHTML = `<input type="hidden" name="name" value="${
      document.getElementById("name").textContent
    }" /><input type="hidden" name="email" value="${
      document.getElementById("email").textContent
    }" /><input type="hidden" name="message" value="${
      document.getElementById("message").textContent
    }" /><input class="hidden" type="submit" id="ContactFormSubmit" />`;
    document.getElementById("ContactFormSubmit").click();
  };
  const onKeyDown = () => {
    onMouseLeave();
    document.getElementById("ContactSubmit").classList.add("pressed");
  };
  const onKeyUp = () => {
    onMouseEnter();
    document.getElementById("ContactSubmit").classList.remove("pressed");
  };
  const onMouseEnter = () => {
    document.getElementById("ContactSubmit").classList.add("hover");
  };
  const onMouseLeave = () => {
    document.getElementById("ContactSubmit").classList.remove("hover");
  };
  return (
    <div onSubmit={onSubmit}>
      <span className={`xml-tag${lightMode ? " light" : ""}`}>
        {"<contact>"}
      </span>
      <ContactFormField field="name" lightMode={lightMode} />
      <ContactFormField field="email" lightMode={lightMode} />
      <ContactFormField field="message" lightMode={lightMode} />
      <span className={`xml-tag${lightMode ? " light" : ""}`}>
        {"</contact>"}
      </span>
      <br />
      <div>
        <button
          id="ContactSubmit"
          className={`${lightMode ? "light" : ""}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onKeyDown}
          onMouseUp={onKeyUp}
          onClick={onSubmit}
        >
          <i className={`fas fa-paper-plane${lightMode ? " light" : ""}`}></i>
        </button>
        <pre>{message}</pre>
      </div>
      <form id="ContactForm" onSubmit={sendEmail} />
    </div>
  );
}
