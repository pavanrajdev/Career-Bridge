import React from "react";
import "../Contact.css";
import Navbar from "../Components/Navbar";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Navbar />
    <div className="cb-contact-page">
      <section className="cb-contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We would love to hear from you.</p>
      </section>

      {/* Main Content Layout */}
      <div className="cb-contact-container">
        {/* Contact Info Panel */}
        <div className="cb-contact-info">
          <h2>Get in Touch</h2>
          <p>
            Fill out the form or reach out to us directly through any of the
            channels below.
          </p>

          <div className="cb-contact-details">
            <div className="cb-contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>support@careerbridge.com</p>
              </div>
            </div>

            <div className="cb-contact-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 9391199762</p>
              </div>
            </div>

            <div className="cb-contact-item">
              <span>📍</span>
              <div>
                <strong>Office</strong>
                <p>XYZ Steet Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="cb-contact-form" onSubmit={handleSubmit}>
          <div className="cb-contact-field">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="cb-contact-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="cb-contact-field">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="cb-contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="cb-contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;