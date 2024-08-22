'use client'
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message sent!');
  };

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 text-primary mb-4">Contact Us</h1>
          <p className="lead text-muted">
            We’d love to hear from you. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h2 className="text-primary mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-6">
          <h2 className="text-primary mb-4">Our Contact Information</h2>
          <ul className="list-unstyled">
            <li>
              <i className="bi bi-geo-alt-fill text-primary"></i> 1234 Address St, City, Country
            </li>
            <li>
              <i className="bi bi-envelope-fill text-primary"></i> contact@yourcompany.com
            </li>
            <li>
              <i className="bi bi-phone-fill text-primary"></i> (123) 456-7890
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2024 Your Test Anuchat. All rights reserved.</p>
      </footer>
    </div>
  );
}
