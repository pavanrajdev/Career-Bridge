
import React from 'react'
import companies from '../Jobs/companies'

const Companies = () => {
  let data=companies;
  return (
    <>
     <div >
        <p style={{marginTop:"30px",textAlign:"center",fontSize:"large",fontWeight:"bold"}}>Trusted By Top Companies</p>
        <div className='company'>
          {
            companies.map((data,idx)=>{
             return  <div className='img-box'><img src={data.logo} alt="" /></div>
            })
          }
        </div>
        </div>
    </>
   
  )
}

export default Companies