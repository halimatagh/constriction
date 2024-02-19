import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Contactwith from "../image/contact.jpg";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { User_email, message } = form.current.elements;
    emailjs
      .send(
        "service_sq3d44g",
        "template_wpxzcs7",
        {
          to_email: "tirga.taghouni22@gmail.com", // Replace with your email address
          from_name: User_email.value,
          message: message.value,
        },
        "Owc1_5gCgXOaRAbkP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset the form after sending the email
    form.current.reset();
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Contactwith})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" onSubmit={sendEmail} ref={form}>
          <label htmlFor="name">Full Name</label>
          <input
            name="User_name"
            placeholder="Enter full name..."
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input name="User_email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
