import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          onBlur={() => {
            if (form.name === "") {
              document.getElementById("name-notice").style.display = "block";
            } else {
              document.getElementById("name-notice").style.display = "none";
            }
          }}
        />
        <p className="notice" id="name-notice">Name cannot be empty!</p>
        <hr />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <p className="notice" id="email-notice">Email cannot be empty!</p>
        <hr />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
        />
        <p className="notice" id="message-notice">Message cannot be empty!</p>
        <hr />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
