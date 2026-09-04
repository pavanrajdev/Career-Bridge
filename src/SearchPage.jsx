import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import jobs from './Jobs/job';
import { ApplicationContext } from './Context/ApplicationProvider';
import Navbar from './Components/Navbar';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { appliedJobs, applyForJob } = useContext(ApplicationContext);
  const [showAlert, setShowAlert] = useState(false);

  const initialTitle = searchParams.get('title') || '';
  const initialLocation = searchParams.get('location') || '';

  const [title, setTitle] = useState(initialTitle);
  const [location, setLocation] = useState(initialLocation);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const currentTitle = searchParams.get('title') || '';
    const currentLocation = searchParams.get('location') || '';

    setTitle(currentTitle);
    setLocation(currentLocation);

    const results = jobs.filter((job) => {
      const matchesTitle =
        job.title?.toLowerCase().includes(currentTitle.toLowerCase()) ||
        job.company?.toLowerCase().includes(currentTitle.toLowerCase()) ||
        job.skills?.some((skill) => skill.toLowerCase().includes(currentTitle.toLowerCase()));

      const matchesLocation = job.location?.toLowerCase().includes(currentLocation.toLowerCase());

      return matchesTitle && matchesLocation;
    });

    setFilteredJobs(results);
  }, [searchParams]);

  const handleReSearch = () => {
    setSearchParams({ title, location });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleReSearch();
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-page">
        <div className="search-section">
          <div>
            <input
              type="text"
              placeholder="job title, skill, or company"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button onClick={handleReSearch}>Search jobs</button>
        </div>

        <div className="job-results">
          <h2 style={{ marginLeft: '80px', marginBottom: '15px' }}>
            Search Results ({filteredJobs.length})
          </h2>
          <div className="feature-section">
            {filteredJobs.length > 0 ? (
              filteredJobs
                .filter((data) => !appliedJobs.some((job) => job.id === data.id))
                .map((data) => (
                  <React.Fragment key={data.id}>
                    <Link
                      to={`/job/${data.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div className="feature-card">
                        <img src={data.logo} alt={data.company} />

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            padding: '0px 12px',
                          }}
                        >
                          <p style={{ fontWeight: 'bold', fontSize: 'medium' }}>
                            {data.title}
                          </p>
                          <p>{data.company}</p>
                          <p>
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ marginRight: '5px', color: 'rgb(128, 128, 128)' }}
                            ></i>
                            {data.location}
                          </p>

                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontWeight: 'bold',
                              padding: '4px',
                            }}
                          >
                            <p>
                              <i
                                className="fa-solid fa-money-bill-trend-up"
                                style={{ marginRight: '5px', color: 'rgb(128, 128, 128)' }}
                              ></i>
                              {data.salary}
                            </p>
                            <p>
                              <i
                                className="fa-regular fa-clock"
                                style={{ marginRight: '5px', color: 'rgb(128, 128, 128)' }}
                              ></i>
                              {data.type}
                            </p>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '5px',
                              maxHeight: '50px',
                              overflow: 'hidden',
                              marginBottom: '8px',
                            }}
                          >
                            {data.skills?.map((skill, index) => (
                              <button key={index} type="button">
                                {skill}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          className="apply"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            applyForJob(data);
                            setShowAlert(true);
                            setTimeout(() => {
                              setShowAlert(false);
                            }, 1000);
                          }}
                        >
                          Apply Now
                        </button>
                      </div>
                    </Link>
                  </React.Fragment>
                ))
            ) : (
              <p>No jobs found matching your criteria.</p>
            )}
          </div>
        </div>

        {showAlert && (
          <div
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              backgroundColor: 'green',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '5px',
              zIndex: 1000,
            }}
          >
            Applied successfully!
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;