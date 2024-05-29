/*
  File name: Contact.js
  Student's Name: Eunseo Park
  Student ID: 301423139
  Date: May 28, 2024
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate('/');
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <o>Name: Eunseo Park</o>
        <p>Email: epark42@my.centennialcollege.ca</p>
        <p>Welcome to my portfolio!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
