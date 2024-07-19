// src/components/Contact.js
import React, { useEffect, useRef, useState } from "react";

import "../static/Contact.css";

const Contact = () => {
  const [isVisible1, setVisible1] = useState(false);

  const domRef1 = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible1(true);
          observer1.unobserve(entry.target);
        }
      });
    });

    observer1.observe(domRef1.current);

    // Cleanup function to disconnect observers
    return () => {
      observer1.disconnect();
    };
  }, []);

  return (
    <div className="main_contact_div">
      <div
        className={`contact fade-in-section ${isVisible1 ? "is-visible" : ""}`}
        ref={domRef1}
      >
        <h1>Get In Touch</h1>
        <p>How can we help your business succeed?</p>
        <form
          action="https://formspree.io/f/xkndyqww"
          method="POST"
          className="contact_form"
        >
          <label>
            <p>Full Name:</p>
            <input type="text" name="name" />
          </label>
          <label>
            <p>Business:</p>
            <input type="text" name="business" />
          </label>
          <label>
            <p>Email:</p>
            <input type="email" name="email" />
          </label>
          <label>
            <p>Phone:</p>
            <input type="text" name="email" />
          </label>
          <label>
            <p>Message:</p>
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
