import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle the form submission, like sending the data to an API
    alert(`Form submitted! \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <section className="contact-details">
        <div className="contact-info">
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@ourhospital.com</p>
          <p><strong>Address:</strong> 123 Main Street, Anytown, Country</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
