import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../../Jobs/job'

const JobSingle = () => {

  const { id } = useParams()

  const job = jobs.find((data) => data.id === Number(id))

  if (!job) {
    return <h2>Job not found</h2>
  }

  return (
    <div style={{padding:"40px"}}>

      <img
        src={job.logo}
        alt={job.company}
        width="100"
      />

      <h1>{job.title}</h1>

      <h3>{job.company}</h3>

      <p><strong>Location:</strong> {job.location}</p>

      <p><strong>Salary:</strong> {job.salary}</p>

      <p><strong>Experience:</strong> {job.experience}</p>

      <p><strong>Type:</strong> {job.type}</p>

      <p><strong>Status:</strong> {job.status}</p>

      <p><strong>Posted On:</strong> {job.postedOn}</p>

      <h3>Skills</h3>

      <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>

        {
          job.skills.map((skill,index) => (
            <span
              key={index}
              style={{
                padding:"8px 15px",
                background:"#eee",
                borderRadius:"20px"
              }}
            >
              {skill}
            </span>
          ))
        }

      </div>

    </div>
  )
}

export default JobSingle