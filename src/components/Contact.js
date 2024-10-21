// Daniela Castorena 2024
// Portfolio - Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_vdcsnc7', 'template_6kaz03w', formData, 'uv8l_c79a5YmVrop7')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
      });
  };

  return (
    <div id="contact" className="contact-container"> 
      <h2>Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
