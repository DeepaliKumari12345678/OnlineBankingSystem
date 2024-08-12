import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the template params for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send the email
    emailjs.send(
      'service_0go10hc',       
      'template_eon7vdn',       
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      'aXRVFNV4DCy39frWd'            
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for contacting us!');
      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

