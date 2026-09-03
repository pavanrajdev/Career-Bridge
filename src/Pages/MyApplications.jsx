import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../MyApplications.css'
import { ApplicationContext } from '../Context/ApplicationProvider'
import Navbar from '../Components/Navbar'

const MyApplications = () => {

    const { appliedJobs } = useContext(ApplicationContext)

    return (
        <>
        <Navbar />
        <div className="applications-page">

            <div className="applications-header">
                <h1>My Applications</h1>
                <p>Jobs you have applied for</p>
            </div>

            {appliedJobs.length === 0 ? (

                <div className="no-applications">
                    <h2>No Applications Yet</h2>
                    <p>
                        You haven't applied for any jobs yet.
                    </p>

                    <Link to="/all" className="browse-jobs-btn">
                        Browse Jobs
                    </Link>
                </div>

            ) : (

                <div className="applications-container">

                    {appliedJobs.map((job) => (

                        <div className="application-card" key={job.id}>

                            <div className="application-card-header">

                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="application-logo"
                                />

                                <div className="application-title">
                                    <h2>{job.title}</h2>
                                    <p>{job.company}</p>
                                </div>

                                <span className="applied-badge">
                                    Applied ✓
                                </span>

                            </div>

                            <div className="application-info">

                                <div>
                                    <span>Location</span>
                                    <strong>{job.location}</strong>
                                </div>

                                <div>
                                    <span>Salary</span>
                                    <strong>{job.salary}</strong>
                                </div>

                                <div>
                                    <span>Experience</span>
                                    <strong>{job.experience}</strong>
                                </div>

                                <div>
                                    <span>Job Type</span>
                                    <strong>{job.type}</strong>
                                </div>

                            </div>

                            <div className="application-footer">

                                <span>
                                    Posted on: {job.postedOn}
                                </span>

                                <Link
                                    to={`/job/${job.id}`}
                                    className="view-job-btn"
                                >
                                    View Job
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
            </>
    )
}

export default MyApplications

