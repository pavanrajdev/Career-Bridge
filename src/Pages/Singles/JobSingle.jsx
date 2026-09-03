
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../Jobs/job'
import '../../JobSingle.css'
import { ApplicationContext } from '../../Context/ApplicationProvider'
import Navbar from '../../Components/Navbar'


const JobSingle = () => {
  const { id } = useParams()

  const job = jobs.find((data) => data.id === Number(id))

  const { appliedJobs, applyForJob } = useContext(ApplicationContext)

  if (!job) {
    return <h2 className="not-found">Job not found</h2>
  }

  // Checking  if  job is already applied
  const isApplied = appliedJobs.some((item) => item.id === job.id)

  const handleApply = () => {
    if (!isApplied) {
      applyForJob(job)
      alert(`Applied for ${job.title} at ${job.company}!`)
    }
  }

  return (
    <>
    <Navbar />

    <div className="job-details-container">

      <div className="job-header">

        <div className="job-header-left">
          <img
            src={job.logo}
            alt={job.company}
            className="job-logo"
          />

          <div>
            <h1 className="job-title">{job.title}</h1>
            <h3 className="job-company">{job.company}</h3>
          </div>
        </div>

        {isApplied ? (
          <button className="apply-btn" disabled>
            Applied ✓
          </button>
        ) : (
          <button className="apply-btn" onClick={handleApply}>
            Apply Now
          </button>
        )}

      </div>

      <div className="job-info-grid">

        <div className="info-item">
          <span className="info-label">Location</span>
          <span className="info-value">{job.location}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Salary</span>
          <span className="info-value">{job.salary}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Experience</span>
          <span className="info-value">{job.experience}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Job Type</span>
          <span className="info-value">{job.type}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Status</span>
          <span className="info-value">{job.status}</span>
        </div>

        <div className="info-item">
          <span className="info-label">Posted On</span>
          <span className="info-value">{job.postedOn}</span>
        </div>

      </div>

      <div className="skills-section">

        <h3 className="skills-title">Required Skills</h3>

        <div className="skills-list">
          {job.skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

      </div>

    </div>
        </>
  )
}

export default JobSingle

