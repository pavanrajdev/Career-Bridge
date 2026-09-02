
import React from 'react'
import jobs from '../Jobs/job'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const All = () => {
  return (
    <>
    <Navbar />
     <div className='feature-section'>

        {

            jobs.map((data)=>{


                return <Link  to={`/job/${data.id}`} style={{ textDecoration: "none", color: "inherit" }}><div className='feature-card'>

                    <img src={data.logo} alt="" />

                    <div style={{display:"flex", flexDirection:"column", gap:"5px", padding:"0px 12px"}}>

                         <p style={{fontWeight:"bold",fontSize:"medium"}}>{data.title}</p>

                    <p>{data.company}</p>

                    <p><i class="fa-solid fa-location-dot" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.location}</p>

                    <div style={{display:"flex",justifyContent:"space-between", fontWeight:"bold",padding:"4px"}}>

                        <p><i class="fa-solid fa-money-bill-trend-up" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.salary}</p>

                        <p><i class="fa-regular fa-clock" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.type}</p>

                    </div>

                        <div>
    {/* Skills */}
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            height: "35px",
            overflow: "hidden",
            marginBottom: "10px"
        }}
    >
        {data.skills.map((i, idx) => (
            <button
                key={idx}
                style={{
                    minHeight: "15px",
                    marginBottom: "0px",
                    padding: "0px"
                    
                }}
            >
                {i}
            </button>
        ))}
    </div>

    {/* Apply button */}

        <button className='apply'>Apply Now</button>
</div>

                    </div>
                    
             </div>
             
                </Link>

            })

        }

    </div>

    </>
  )
}

export default All