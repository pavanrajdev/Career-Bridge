
import React from 'react'

const Hero = () => {
  return (
    <>

    <div className='hero-section'>
        <div className='left'>
          <div className='disc'>
             <p style={{fontWeight:"bold",fontSize:"50px",color:"rgb(45, 45, 45)"}}>Find Your </p>
                
  <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
    <span style={{color:"blue",fontSize:"50px",fontWeight:"bold"}}>Dream </span>
    <p style={{fontWeight:"bold",fontSize:"50px",color:"rgb(45, 45, 45)"}}>Job Faster</p>
  </div>
              <p className=' text-gray-600 text-lg pt-4 mt-4' style={{color:"grey",fontSize:"large",marginTop:"10px"}}>  Connect with top companies, discover exciting opportunities, and take the next step in your career</p>
          </div>
          <div className='search-section'>
            <div><input type="text" placeholder='job title,skill, or company'/></div>
            <div><input type="text" placeholder='location'/></div>
            <button>Search jobs</button>
          </div>
           <div className='icons-section'>
            <div className='icons'>  <i class="fa-solid fa-briefcase"></i><div><p className='highlight'>10,000+</p><p>Jobs Available</p></div></div>
            <div className='icons'><i class="fa-regular fa-building"></i><div><p className='highlight'>500+</p><p>Companies</p></div></div>
          <div className='icons'><i class="fa-solid fa-users"></i><div><p className='highlight'>25,000+</p><p>Candidates</p></div></div>
          <div className='icons'> <i class="fa-regular fa-heart"></i><div><p className='highlight'>95%</p><p>Success Rate</p></div></div>
         
        </div>
        </div>
        <div className='img-section'><img src="assets/hero.png" alt="hero" /></div>
       
    </div>
    
    </>
    
  )
}

export default Hero