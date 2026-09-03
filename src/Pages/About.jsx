import React from "react";
import "../About.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
   <>
    <Navbar />
  
    <div className="cb-about-page">
      <section className="cb-about-hero">
        <h1>About Career Bridge</h1>
        <p className="cb-about-subtitle">
          Connecting talented people with the right opportunities.
        </p>
        <p>
          Career Bridge is a modern job portal designed to make job searching
          easier, faster, and more accessible for everyone.
        </p>
      </section>

      <section className="cb-about-content">
        <div className="cb-about-text">
          <h2>What is Career Bridge?</h2>
          <p>
            Career Bridge is a platform that helps job seekers discover
            opportunities that match their skills, interests, and career goals.
          </p>
          <p>
            Our goal is to simplify the job search process by bringing
            job opportunities, companies, and talented professionals together in
            one place.
          </p>
        </div>

        <div className="cb-about-box">
          <h3>Our Goal</h3>
          <p>
            To build a bridge between talented individuals and the companies
            looking for their skills.
          </p>
        </div>
      </section>

      <section className="cb-about-features">
        <h2>Why Choose Career Bridge?</h2>
        <div className="cb-about-grid">
          <div className="cb-about-card">
            <h3>🔍 Find Opportunities</h3>
            <p>
              Explore job opportunities across different roles and categories.
            </p>
          </div>

          <div className="cb-about-card">
            <h3>🏢 Discover Companies</h3>
            <p>
              Learn about companies and discover organizations that match
              your career interests.
            </p>
          </div>

          <div className="cb-about-card">
            <h3>🎯 Find the Right Fit</h3>
            <p>
              Discover opportunities that align with your skills and career
              aspirations.
            </p>
          </div>

          <div className="cb-about-card">
            <h3>🚀 Grow Your Career</h3>
            <p>
              Take the next step toward building a successful professional
              career.
            </p>
          </div>
        </div>
      </section>
      <section className="cb-about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe that finding a job should not be complicated. Career
          Bridge aims to create a simple and user-friendly platform where
          candidates can explore opportunities and companies can connect with
          talented professionals.
        </p>
      </section>

      <section className="cb-about-cta">
        <h2>Ready to Take the Next Step?</h2>
        <p>
          Explore opportunities and start building your career with Career
          Bridge.
        </p>
        <Link to={'/all'}>
        <button className="cb-about-btn">Explore Jobs</button>
        </Link>
        
      </section>
    </div>
     </>
  );
};

export default About;