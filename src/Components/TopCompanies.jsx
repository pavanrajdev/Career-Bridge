import React from 'react'

import jobs from '../Jobs/job';
import { Link } from "react-router-dom";

const TopCompanies = () => {

  return (

    <>

<div style={{display:"flex",justifyContent:"space-between",marginTop:"50px", marginBottom:"20px", marginRight:"100px",marginLeft:"80px"}}>
 <h3 >TopCompanies </h3>
 <Link to={"/topcompany"}>
   <p style={{color:"blue",marginTop:"30px"}} >    View All Top Company Jobs <i class="fa-solid fa-arrow-right"></i></p>
 </Link>
   
</div>
     <div className='feature-section'>

        {

            jobs.filter((data) => data.topCompany === true).slice(0,4).map((data,idx)=>{

                return <Link to={`job/${data.id}`}  style={{ textDecoration: "none", color: "inherit" }}><div className='feature-card'>

                    <img src={data.logo} alt="" />

                    <div style={{display:"flex", flexDirection:"column", gap:"5px", padding:"0px 12px"}}>

                         <p style={{fontWeight:"bold",fontSize:"medium"}}>{data.title}</p>

                    <p>{data.company}</p>

                    <p><i class="fa-solid fa-location-dot" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.location}</p>

                    <div style={{display:"flex",justifyContent:"space-between", fontWeight:"bold",padding:"4px"}}>

                        <p><i class="fa-solid fa-money-bill-trend-up" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.salary}</p>

                        <p><i class="fa-regular fa-clock" style={{marginRight:"5px",color:"rgb(128, 128, 128)"}}></i>{data.type}</p>

                    </div>

                        <div style={{
                            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            maxHeight: "50px",
            overflow: "hidden",
            marginBottom: "8px"
                            }}>

                            {

                             data.skills.map((i,idx)=>{

                            return <button style={{minHeight:"15px",marginBottom:"0px",padding:"2px", border: "1px solid black",borderRadius: "15px",backgroundColor:'white',fontSize:'11px'}}>{i}</button>

                        })

                    }

                        </div>

                      
                    </div>
                      <button className='apply'>Apply Now</button>

             </div>
</Link>
            })

        }

    </div>

    

    

    </>
  )
}

export default TopCompanies