import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jobs from '../Jobs/job';
import { ApplicationContext } from '../Context/ApplicationProvider';

const Hero = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?title=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <div className='hero-section'>
        <div className='left'>
          <div className='disc'>
            <p style={{ fontWeight: "bold", fontSize: "50px", color: "rgb(45, 45, 45)" }}>
              Find Your{' '}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "blue", fontSize: "50px", fontWeight: "bold" }}>
                Dream{' '}
              </span>
              <p style={{ fontWeight: "bold", fontSize: "50px", color: "rgb(45, 45, 45)" }}>
                Job Faster
              </p>
            </div>

            <p
              className=' text-gray-600 text-lg pt-4 mt-4'
              style={{ color: "grey", fontSize: "large", marginTop: "10px" }}
            >
              Connect with top companies, discover exciting opportunities, and take the next step in your career
            </p>
          </div>

          <div className='search-section'>
            <div>
              <input
                type="text"
                placeholder='job title,skill, or company'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button onClick={handleSearch}>Search jobs</button>
          </div>

          <div className='icons-section'>
            <div className='icons'>
              <i className="fa-solid fa-briefcase"></i>
              <div>
                <p className='highlight'>10,000+</p>
                <p>Jobs Available</p>
              </div>
            </div>

            <div className='icons'>
              <i className="fa-regular fa-building"></i>
              <div>
                <p className='highlight'>500+</p>
                <p>Companies</p>
              </div>
            </div>

            <div className='icons'>
              <i className="fa-solid fa-users"></i>
              <div>
                <p className='highlight'>25,000+</p>
                <p>Candidates</p>
              </div>
            </div>

            <div className='icons'>
              <i className="fa-regular fa-heart"></i>
              <div>
                <p className='highlight'>95%</p>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className='img-section'>
          <img src="assets/hero.png" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;